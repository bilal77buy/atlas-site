from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, or_

from app.core.database import get_db
from app.models.lead import Lead, LeadScore, LeadEnrichment, OutreachDraft, ReviewRecord
from app.schemas.lead import (
    LeadOut, LeadCreate, LeadUpdate, LeadListResponse, DashboardStats,
    ScoreOut, EnrichmentOut, OutreachDraftOut, ReviewRecordOut
)
from app.services.scoring.scorer import score_lead
from loguru import logger

router = APIRouter()


@router.get("/stats", response_model=DashboardStats)
async def get_dashboard_stats(db: AsyncSession = Depends(get_db)):
    total = await db.scalar(select(func.count()).select_from(Lead))
    high = await db.scalar(
        select(func.count()).select_from(Lead).join(LeadScore).where(LeadScore.total_score >= 70)
    )
    pending_review = await db.scalar(
        select(func.count()).select_from(Lead)
        .outerjoin(ReviewRecord)
        .where(or_(ReviewRecord.id == None, ReviewRecord.status == "pending"))
    )
    approved = await db.scalar(
        select(func.count()).select_from(ReviewRecord).where(ReviewRecord.status == "approved")
    )
    return DashboardStats(
        total_leads=total or 0,
        high_priority=high or 0,
        pending_review=pending_review or 0,
        approved_for_outreach=approved or 0,
    )


@router.get("/", response_model=LeadListResponse)
async def list_leads(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    min_score: Optional[int] = Query(None, ge=0, le=100),
    country: Optional[str] = None,
    status: Optional[str] = None,
    q: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
):
    stmt = select(Lead).outerjoin(LeadScore)

    if min_score is not None:
        stmt = stmt.where(LeadScore.total_score >= min_score)
    if country:
        stmt = stmt.where(Lead.country.ilike(f"%{country}%"))
    if status:
        stmt = stmt.join(ReviewRecord).where(ReviewRecord.status == status)
    if q:
        stmt = stmt.where(
            or_(
                Lead.full_name.ilike(f"%{q}%"),
                Lead.company_name.ilike(f"%{q}%"),
                Lead.job_title.ilike(f"%{q}%"),
            )
        )

    total_stmt = select(func.count()).select_from(stmt.subquery())
    total = await db.scalar(total_stmt) or 0

    stmt = stmt.order_by(LeadScore.total_score.desc().nullslast(), Lead.created_at.desc())
    stmt = stmt.offset(skip).limit(limit)

    result = await db.execute(stmt)
    leads = result.scalars().unique().all()

    return LeadListResponse(items=[LeadOut.model_validate(l) for l in leads], total=total)


@router.get("/{lead_id}", response_model=LeadOut)
async def get_lead(lead_id: str, db: AsyncSession = Depends(get_db)):
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    return LeadOut.model_validate(lead)


@router.post("/", response_model=LeadOut, status_code=201)
async def create_lead(payload: LeadCreate, db: AsyncSession = Depends(get_db)):
    lead = Lead(**payload.model_dump())
    db.add(lead)
    await db.flush()

    breakdown = score_lead(lead)
    score_row = LeadScore(
        lead_id=lead.id,
        total_score=breakdown.total_score,
        independent_status_score=breakdown.independent_status_score,
        company_size_score=breakdown.company_size_score,
        region_match_score=breakdown.region_match_score,
        budget_fit_score=breakdown.budget_fit_score,
        cyber_need_score=breakdown.cyber_need_score,
        service_complementarity_score=breakdown.service_complementarity_score,
        contactability_score=breakdown.contactability_score,
        language_fit_score=breakdown.language_fit_score,
        disqualified=breakdown.disqualified,
        disqualification_reason=breakdown.disqualification_reason,
        llm_score_adjustment=breakdown.llm_score_adjustment,
    )
    db.add(score_row)
    await db.commit()
    await db.refresh(lead)
    logger.info(f"Lead created: {lead.id} score={breakdown.total_score}")
    return LeadOut.model_validate(lead)


@router.patch("/{lead_id}", response_model=LeadOut)
async def update_lead(lead_id: str, payload: LeadUpdate, db: AsyncSession = Depends(get_db)):
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(lead, field, value)
    await db.commit()
    await db.refresh(lead)
    return LeadOut.model_validate(lead)


@router.delete("/{lead_id}", status_code=204)
async def delete_lead(lead_id: str, db: AsyncSession = Depends(get_db)):
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    await db.delete(lead)
    await db.commit()


@router.post("/{lead_id}/rescore", response_model=ScoreOut)
async def rescore_lead(lead_id: str, db: AsyncSession = Depends(get_db)):
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    breakdown = score_lead(lead)

    result = await db.execute(select(LeadScore).where(LeadScore.lead_id == lead_id))
    score_row = result.scalar_one_or_none()
    if score_row:
        score_row.total_score = breakdown.total_score
        score_row.independent_status_score = breakdown.independent_status_score
        score_row.company_size_score = breakdown.company_size_score
        score_row.region_match_score = breakdown.region_match_score
        score_row.budget_fit_score = breakdown.budget_fit_score
        score_row.cyber_need_score = breakdown.cyber_need_score
        score_row.service_complementarity_score = breakdown.service_complementarity_score
        score_row.contactability_score = breakdown.contactability_score
        score_row.language_fit_score = breakdown.language_fit_score
        score_row.disqualified = breakdown.disqualified
        score_row.disqualification_reason = breakdown.disqualification_reason
    else:
        score_row = LeadScore(
            lead_id=lead_id,
            total_score=breakdown.total_score,
            independent_status_score=breakdown.independent_status_score,
            company_size_score=breakdown.company_size_score,
            region_match_score=breakdown.region_match_score,
            budget_fit_score=breakdown.budget_fit_score,
            cyber_need_score=breakdown.cyber_need_score,
            service_complementarity_score=breakdown.service_complementarity_score,
            contactability_score=breakdown.contactability_score,
            language_fit_score=breakdown.language_fit_score,
            disqualified=breakdown.disqualified,
            disqualification_reason=breakdown.disqualification_reason,
        )
        db.add(score_row)

    await db.commit()
    await db.refresh(score_row)
    return ScoreOut.model_validate(score_row)
