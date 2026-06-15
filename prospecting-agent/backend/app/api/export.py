from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import Optional
import io

from app.core.database import get_db
from app.models.lead import Lead, LeadScore, LeadEnrichment, OutreachDraft, ReviewRecord
from app.services.export.exporter import export_leads_csv, export_approved_drafts_csv
from loguru import logger

router = APIRouter()


@router.get("/leads.csv")
async def export_leads(
    min_score: Optional[int] = Query(None, ge=0, le=100),
    approved_only: bool = Query(False),
    db: AsyncSession = Depends(get_db),
):
    """Export leads to CSV. Human review gate: approved_only=true restricts to approved leads."""
    stmt = select(Lead).outerjoin(LeadScore)

    if min_score is not None:
        stmt = stmt.where(LeadScore.total_score >= min_score)

    if approved_only:
        stmt = stmt.join(ReviewRecord).where(ReviewRecord.status == "approved")

    result = await db.execute(stmt)
    leads = result.scalars().unique().all()

    csv_content = await export_leads_csv(leads, db)
    logger.info(f"Exported {len(leads)} leads to CSV")

    return StreamingResponse(
        io.StringIO(csv_content),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=leads_export.csv"},
    )


@router.get("/drafts.csv")
async def export_drafts(
    approved_only: bool = Query(True),
    db: AsyncSession = Depends(get_db),
):
    """
    Export outreach drafts to CSV.

    COMPLIANCE: By default only exports human-reviewed drafts.
    This file is for manual copy-paste — no automation is connected to it.
    """
    stmt = select(OutreachDraft)
    if approved_only:
        stmt = stmt.where(OutreachDraft.human_reviewed == True)

    result = await db.execute(stmt)
    drafts = result.scalars().all()

    csv_content = await export_approved_drafts_csv(drafts, db)
    logger.info(f"Exported {len(drafts)} drafts to CSV")

    return StreamingResponse(
        io.StringIO(csv_content),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=drafts_export.csv"},
    )
