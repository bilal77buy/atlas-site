from fastapi import APIRouter, Depends, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, or_
from typing import Optional

from app.core.database import get_db
from app.models.lead import Lead, LeadScore, ReviewRecord
from app.schemas.lead import DashboardStats

router = APIRouter()
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def dashboard(request: Request, db: AsyncSession = Depends(get_db)):
    total = await db.scalar(select(func.count()).select_from(Lead)) or 0
    high = await db.scalar(
        select(func.count()).select_from(Lead).join(LeadScore).where(LeadScore.total_score >= 70)
    ) or 0
    pending = await db.scalar(
        select(func.count()).select_from(Lead)
        .outerjoin(ReviewRecord)
        .where(or_(ReviewRecord.id == None, ReviewRecord.status == "pending"))
    ) or 0
    approved = await db.scalar(
        select(func.count()).select_from(ReviewRecord).where(ReviewRecord.status == "approved")
    ) or 0

    stats = DashboardStats(
        total_leads=total,
        high_priority=high,
        pending_review=pending,
        approved_for_outreach=approved,
    )
    return templates.TemplateResponse(
        "dashboard.html", {"request": request, "stats": stats}
    )


@router.get("/leads", response_class=HTMLResponse)
async def leads_page(
    request: Request,
    q: Optional[str] = None,
    min_score: Optional[int] = None,
    country: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
):
    stmt = select(Lead).outerjoin(LeadScore)
    if q:
        stmt = stmt.where(
            or_(
                Lead.full_name.ilike(f"%{q}%"),
                Lead.company_name.ilike(f"%{q}%"),
                Lead.job_title.ilike(f"%{q}%"),
            )
        )
    if min_score:
        stmt = stmt.where(LeadScore.total_score >= min_score)
    if country:
        stmt = stmt.where(Lead.country.ilike(f"%{country}%"))
    stmt = stmt.order_by(LeadScore.total_score.desc().nullslast())

    result = await db.execute(stmt)
    leads = result.scalars().unique().all()
    return templates.TemplateResponse(
        "leads.html",
        {"request": request, "leads": leads, "q": q, "min_score": min_score, "country": country},
    )


@router.get("/leads/{lead_id}", response_class=HTMLResponse)
async def lead_detail_page(
    lead_id: str,
    request: Request,
    db: AsyncSession = Depends(get_db),
):
    lead = await db.get(Lead, lead_id)
    if not lead:
        return HTMLResponse("Lead not found", status_code=404)
    return templates.TemplateResponse(
        "lead_detail.html", {"request": request, "lead": lead}
    )


@router.get("/review", response_class=HTMLResponse)
async def review_page(request: Request, db: AsyncSession = Depends(get_db)):
    stmt = (
        select(Lead)
        .outerjoin(ReviewRecord)
        .where(or_(ReviewRecord.id == None, ReviewRecord.status == "pending"))
        .outerjoin(LeadScore)
        .order_by(LeadScore.total_score.desc().nullslast())
    )
    result = await db.execute(stmt)
    leads = result.scalars().unique().all()
    return templates.TemplateResponse(
        "review.html", {"request": request, "leads": leads}
    )


@router.get("/ingest", response_class=HTMLResponse)
async def ingest_page(request: Request):
    return templates.TemplateResponse("ingest.html", {"request": request})
