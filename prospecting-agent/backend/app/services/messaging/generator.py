"""Generate personalised outreach drafts using LLM."""
from __future__ import annotations

import json
from typing import Optional
from loguru import logger

from app.models.lead import Lead, LeadEnrichment
from app.services.enrichment.llm_client import call_llm
from app.services.messaging.templates import (
    SYSTEM_PROMPT_FR, SYSTEM_PROMPT_EN,
    EMAIL_USER_TEMPLATE_FR, EMAIL_USER_TEMPLATE_EN,
    LINKEDIN_USER_TEMPLATE_FR, LINKEDIN_USER_TEMPLATE_EN,
)


async def generate_outreach_draft(
    lead: Lead,
    enrichment: Optional[LeadEnrichment],
    channel: str = "email",
    language: str = "fr",
    custom_context: str = "",
) -> tuple[str, str, str]:
    """
    Generate a draft outreach message.
    Returns (body_text, channel, language).

    COMPLIANCE: This function generates text only. No message is dispatched.
    The caller (API layer) stores the draft for human review.
    """
    # Normalise inputs
    lang = language.lower()[:2] if language else "fr"
    ch = channel.lower() if channel else "email"
    if ch not in ("email", "linkedin"):
        ch = "email"

    # Pull enrichment data
    summary = ""
    cyber_signals = ""
    pain_points = ""
    recommended_angle = ""

    if enrichment:
        summary = enrichment.summary or ""
        try:
            cyber_signals = ", ".join(json.loads(enrichment.cyber_maturity_signals or "[]"))
        except (json.JSONDecodeError, TypeError):
            cyber_signals = enrichment.cyber_maturity_signals or ""
        try:
            pain_points = ", ".join(json.loads(enrichment.potential_pain_points or "[]"))
        except (json.JSONDecodeError, TypeError):
            pain_points = enrichment.potential_pain_points or ""
        recommended_angle = enrichment.recommended_angle or ""

    # Select templates
    if lang == "fr":
        system = SYSTEM_PROMPT_FR
        if ch == "email":
            user_tmpl = EMAIL_USER_TEMPLATE_FR
        else:
            user_tmpl = LINKEDIN_USER_TEMPLATE_FR
    else:
        system = SYSTEM_PROMPT_EN
        if ch == "email":
            user_tmpl = EMAIL_USER_TEMPLATE_EN
        else:
            user_tmpl = LINKEDIN_USER_TEMPLATE_EN

    user_prompt = user_tmpl.format(
        full_name=lead.full_name or "",
        company_name=lead.company_name or "",
        job_title=lead.job_title or "",
        country=lead.country or "",
        summary=summary,
        cyber_signals=cyber_signals,
        pain_points=pain_points,
        recommended_angle=recommended_angle,
        custom_context=custom_context or "",
    )

    draft_text = await call_llm(
        system_prompt=system,
        user_prompt=user_prompt,
        max_tokens=600,
        temperature=0.4,
    )

    logger.info(f"Generated {ch}/{lang} draft for lead {lead.id}")
    return draft_text, ch, lang
