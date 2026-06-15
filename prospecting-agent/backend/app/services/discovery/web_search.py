"""Public web search via DuckDuckGo (no API key, no login)."""
from __future__ import annotations

import asyncio
from typing import Optional
from loguru import logger

try:
    from duckduckgo_search import DDGS
except ImportError:
    DDGS = None  # type: ignore

from app.models.lead import Lead
from app.services.discovery.page_fetcher import fetch_page_leads

_REGION_MAP = {
    "France": "fr-fr",
    "Suisse": "ch-fr",
    "Switzerland": "ch-de",
    "Belgique": "be-fr",
    "Belgium": "be-fr",
    "Maroc": "ar-ma",
    "Morocco": "en-us",
}

_DEFAULT_QUERIES = [
    'vCISO freelance site:.fr OR site:.be OR site:.ch',
    'RSSI externalisé consultant indépendant France',
    'DSI temps partagé PME France Suisse Belgique',
    'fractional CISO consultant cybersecurity France',
    'consultant cybersécurité indépendant Maroc',
]


async def run_web_search(
    query: Optional[str] = None,
    regions: Optional[list[str]] = None,
    max_results: int = 20,
) -> list[Lead]:
    """
    Search DuckDuckGo for lead candidates and return a list of Lead objects.
    Only public search result snippets are used — no login, no scraping of
    protected pages.
    """
    if DDGS is None:
        logger.warning("duckduckgo-search not installed; returning empty results")
        return []

    queries = [query] if query else _DEFAULT_QUERIES
    all_leads: list[Lead] = []

    for q in queries:
        try:
            loop = asyncio.get_event_loop()
            results = await loop.run_in_executor(
                None,
                lambda _q=q: list(DDGS().text(_q, max_results=max_results)),
            )
            for r in results:
                lead = _result_to_lead(r)
                if lead:
                    all_leads.append(lead)
        except Exception as exc:
            logger.warning(f"DuckDuckGo search failed for '{q}': {exc}")

    logger.info(f"Web search produced {len(all_leads)} raw candidates")
    return all_leads


def _result_to_lead(result: dict) -> Optional[Lead]:
    title = result.get("title", "")
    body = result.get("body", "")
    href = result.get("href", "")

    if not title:
        return None

    # Best-effort extraction: treat the result title as the person/company name.
    # Real enrichment happens in the LLM profiler step.
    lead = Lead(
        full_name=title[:200],
        company_name="",
        job_title="",
        search_snippet=body[:1000] if body else "",
        source_url=href[:500] if href else "",
        data_source="duckduckgo",
    )
    return lead
