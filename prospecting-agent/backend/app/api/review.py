from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.lead import Lead, ReviewRecord, OutreachDraft
from app.schemas.lead import ReviewRecordOut, ReviewUpdate, ReviewListResponse
from loguru import logger

router = APIRouter()


@router.get("/", response_model=ReviewListResponse)
async def list_pending_reviews(
    db: AsyncSession = Depends(get_db),
    status: str = "pending",
):
    stmt = select(ReviewRecord)
    if status != "all":
        stmt = stmt.where(ReviewRecord.status == status)
    result = await db.execute(stmt)
    records = result.scalars().all()
    return ReviewListResponse(items=[ReviewRecordOut.model_validate(r) for r in records], total=len(records))


@router.get("/{lead_id}", response_model=ReviewRecordOut)
async def get_review(
    lead_id: str,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(ReviewRecord).where(ReviewRecord.lead_id == lead_id)
    )
    record = result.scalar_one_or_none()
    if not record:
        raise HTTPException(status_code=404, detail="No review record for this lead")
    return ReviewRecordOut.model_validate(record)


@router.patch("/{lead_id}", response_model=ReviewRecordOut)
async def update_review(
    lead_id: str,
    update: ReviewUpdate,
    db: AsyncSession = Depends(get_db),
):
    """
    COMPLIANCE: 'approved' only means draft is approved for MANUAL sending.
    The system NEVER sends messages automatically.
    """
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    result = await db.execute(
        select(ReviewRecord).where(ReviewRecord.lead_id == lead_id)
    )
    record = result.scalar_one_or_none()

    if not record:
        record = ReviewRecord(
            lead_id=lead_id,
            status=update.status,
            reviewer_notes=update.reviewer_notes,
        )
        db.add(record)
    else:
        record.status = update.status
        if update.reviewer_notes is not None:
            record.reviewer_notes = update.reviewer_notes

    if update.status == "approved":
        draft_result = await db.execute(
            select(OutreachDraft).where(OutreachDraft.lead_id == lead_id)
        )
        drafts = draft_result.scalars().all()
        for draft in drafts:
            draft.human_reviewed = True

    await db.commit()
    await db.refresh(record)
    logger.info(f"Review updated: lead={lead_id} status={update.status}")
    return ReviewRecordOut.model_validate(record)


@router.post("/{lead_id}/create", response_model=ReviewRecordOut, status_code=201)
async def create_review(
    lead_id: str,
    db: AsyncSession = Depends(get_db),
):
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    existing = await db.execute(
        select(ReviewRecord).where(ReviewRecord.lead_id == lead_id)
    )
    if existing.scalar_one_or_none():
        raise HTTPException(status_code=409, detail="Review record already exists")

    record = ReviewRecord(lead_id=lead_id, status="pending")
    db.add(record)
    await db.commit()
    await db.refresh(record)
    return ReviewRecordOut.model_validate(record)
