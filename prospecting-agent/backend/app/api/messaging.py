from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.lead import Lead, LeadEnrichment, OutreachDraft, ReviewRecord
from app.schemas.lead import OutreachDraftOut, GenerateMessageRequest
from app.services.messaging.generator import generate_outreach_draft
from loguru import logger

router = APIRouter()


@router.post("/{lead_id}/generate", response_model=OutreachDraftOut)
async def generate_message(
    lead_id: str,
    payload: GenerateMessageRequest,
    db: AsyncSession = Depends(get_db),
):
    """
    Generate a personalized outreach draft for a lead.

    COMPLIANCE: This endpoint ONLY creates a draft stored in the database.
    No message is sent. Sending requires manual human action after review.
    """
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    result = await db.execute(select(LeadEnrichment).where(LeadEnrichment.lead_id == lead_id))
    enrichment = result.scalar_one_or_none()

    review_result = await db.execute(
        select(ReviewRecord).where(ReviewRecord.lead_id == lead_id)
    )
    review = review_result.scalar_one_or_none()

    draft_text, channel, lang = await generate_outreach_draft(
        lead=lead,
        enrichment=enrichment,
        channel=payload.channel,
        language=payload.language,
        custom_context=payload.custom_context,
    )

    draft = OutreachDraft(
        lead_id=lead_id,
        channel=channel,
        language=lang,
        subject=f"Collaboration en cybersécurité - {lead.full_name}" if lang == "fr" else f"Cybersecurity collaboration - {lead.full_name}",
        body=draft_text,
        generated_by="llm",
        human_reviewed=False,
    )
    db.add(draft)
    await db.commit()
    await db.refresh(draft)
    logger.info(f"Generated outreach draft for lead {lead_id} via {channel}")
    return OutreachDraftOut.model_validate(draft)


@router.get("/{lead_id}/drafts", response_model=list[OutreachDraftOut])
async def list_drafts(
    lead_id: str,
    db: AsyncSession = Depends(get_db),
):
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    result = await db.execute(
        select(OutreachDraft).where(OutreachDraft.lead_id == lead_id)
    )
    drafts = result.scalars().all()
    return [OutreachDraftOut.model_validate(d) for d in drafts]


@router.patch("/drafts/{draft_id}/approve", response_model=OutreachDraftOut)
async def approve_draft(
    draft_id: str,
    db: AsyncSession = Depends(get_db),
):
    """
    Mark a draft as human-reviewed and approved for manual sending.

    COMPLIANCE: Approval here means the human reviewer has read and approved
    the content. The system still does NOT send anything automatically.
    """
    draft = await db.get(OutreachDraft, draft_id)
    if not draft:
        raise HTTPException(status_code=404, detail="Draft not found")
    draft.human_reviewed = True
    await db.commit()
    await db.refresh(draft)
    return OutreachDraftOut.model_validate(draft)
