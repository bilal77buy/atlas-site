"""CSV export utilities."""
from __future__ import annotations

import csv
import io
import json
from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.models.lead import Lead, LeadScore, LeadEnrichment, OutreachDraft, ReviewRecord

_LEAD_FIELDS = [
    "id", "full_name", "company_name", "job_title", "country", "city",
    "website", "public_email", "phone", "linkedin_url",
    "employee_size_estimate", "data_source", "source_url",
    "total_score", "disqualified", "review_status",
]

_DRAFT_FIELDS = [
    "lead_id", "full_name", "company_name", "email", "channel",
    "language", "subject", "body",
]


async def export_leads_csv(leads: list[Lead], db: AsyncSession) -> str:
    output = io.StringIO()
    writer = csv.DictWriter(output, fieldnames=_LEAD_FIELDS, extrasaction="ignore")
    writer.writeheader()

    for lead in leads:
        # Fetch related score and review
        score_res = await db.execute(select(LeadScore).where(LeadScore.lead_id == str(lead.id)))
        score = score_res.scalar_one_or_none()

        review_res = await db.execute(select(ReviewRecord).where(ReviewRecord.lead_id == str(lead.id)))
        review = review_res.scalar_one_or_none()

        writer.writerow({
            "id": str(lead.id),
            "full_name": lead.full_name or "",
            "company_name": lead.company_name or "",
            "job_title": lead.job_title or "",
            "country": lead.country or "",
            "city": lead.city or "",
            "website": lead.website or "",
            "public_email": lead.public_email or "",
            "phone": lead.phone or "",
            "linkedin_url": lead.linkedin_url or "",
            "employee_size_estimate": lead.employee_size_estimate or "",
            "data_source": lead.data_source or "",
            "source_url": lead.source_url or "",
            "total_score": score.total_score if score else "",
            "disqualified": score.disqualified if score else "",
            "review_status": review.status if review else "pending",
        })

    return output.getvalue()


async def export_approved_drafts_csv(drafts: list[OutreachDraft], db: AsyncSession) -> str:
    """
    Export approved outreach drafts for manual copy-paste.
    COMPLIANCE: This CSV is never connected to any sending mechanism.
    """
    output = io.StringIO()
    writer = csv.DictWriter(output, fieldnames=_DRAFT_FIELDS, extrasaction="ignore")
    writer.writeheader()

    for draft in drafts:
        lead_res = await db.execute(select(Lead).where(Lead.id == draft.lead_id))
        lead = lead_res.scalar_one_or_none()

        writer.writerow({
            "lead_id": str(draft.lead_id),
            "full_name": lead.full_name if lead else "",
            "company_name": lead.company_name if lead else "",
            "email": lead.public_email if lead else "",
            "channel": draft.channel or "",
            "language": draft.language or "",
            "subject": draft.subject or "",
            "body": draft.body or "",
        })

    return output.getvalue()
