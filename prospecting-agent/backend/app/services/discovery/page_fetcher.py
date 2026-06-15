"""Fetch a public web page and extract lead candidates."""
from __future__ import annotations

import re
from typing import Optional
from loguru import logger

try:
    import httpx
except ImportError:
    httpx = None  # type: ignore

try:
    from bs4 import BeautifulSoup
except ImportError:
    BeautifulSoup = None  # type: ignore

from app.models.lead import Lead

_TIMEOUT = 10  # seconds
_MAX_BYTES = 500_000

_EMAIL_RE = re.compile(r"[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}")
_PHONE_RE = re.compile(r"(?:\+33|0033|0)[\s.\-]?[1-9](?:[\s.\-]?\d{2}){4}")


async def fetch_page_leads(url: str) -> list[Lead]:
    """
    Fetch a publicly accessible page and extract contact signals.
    Respects robots.txt indirectly by only fetching pages the user supplies.
    Does NOT attempt to bypass any authentication or anti-bot measures.
    """
    if not httpx or not BeautifulSoup:
        logger.warning("httpx/beautifulsoup4 not installed")
        return []

    try:
        async with httpx.AsyncClient(timeout=_TIMEOUT, follow_redirects=True) as client:
            resp = await client.get(url, headers={"User-Agent": "AtlasCyber-Prospector/1.0 (+contact.atlascyber@gmail.com)"})
            resp.raise_for_status()
    except Exception as exc:
        logger.warning(f"Failed to fetch {url}: {exc}")
        return []

    content = resp.text[:_MAX_BYTES]
    soup = BeautifulSoup(content, "lxml")

    title = soup.title.string.strip() if soup.title and soup.title.string else ""

    # Extract visible text
    for tag in soup(["script", "style", "nav", "footer"]):
        tag.decompose()
    text = soup.get_text(" ", strip=True)[:3000]

    emails = _EMAIL_RE.findall(text)
    phones = _PHONE_RE.findall(text)

    lead = Lead(
        full_name=title[:200],
        company_name="",
        job_title="",
        search_snippet=text[:500],
        source_url=url[:500],
        public_email=emails[0] if emails else None,
        phone=phones[0] if phones else None,
        website=url,
        data_source="url_fetch",
    )
    return [lead]
