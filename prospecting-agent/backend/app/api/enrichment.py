from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.lead import Lead, LeadEnrichment, LeadScore
from app.schemas.lead import EnrichmentOut, EnrichBatchRequest, EnrichBatchResult
from app.services.enrichment.profiler import enrich_lead
from app.services.scoring.scorer import score_lead
from loguru import logger

router = APIRouter()


@router.post("/{lead_id}", response_model=EnrichmentOut)
async def enrich_single(
    lead_id: str,
    db: AsyncSession = Depends(get_db),
):
    """Run LLM enrichment for one lead and update its score."""
    lead = await db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    enrichment = await enrich_lead(lead)
    enrichment.lead_id = lead_id
    db.add(enrichment)

    lead.enriched = True
    if enrichment.corrected_title:
        lead.job_title = enrichment.corrected_title
    if enrichment.corrected_company:
        lead.company_name = enrichment.corrected_company

    await db.flush()

    result = await db.execute(select(LeadScore).where(LeadScore.lead_id == lead_id))
    score_row = result.scalar_one_or_none()
    breakdown = score_lead(lead)
    if score_row:
        score_row.total_score = breakdown.total_score
        score_row.llm_score_adjustment = breakdown.llm_score_adjustment
    else:
        score_row = LeadScore(
            lead_id=lead_id,
            total_score=breakdown.total_score,
            llm_score_adjustment=breakdown.llm_score_adjustment,
        )
        db.add(score_row)

    await db.commit()
    await db.refresh(enrichment)
    logger.info(f"Enriched lead {lead_id}")
    return EnrichmentOut.model_validate(enrichment)


async def _enrich_batch_task(lead_ids: list[str], db: AsyncSession) -> None:
    for lead_id in lead_ids:
        try:
            lead = await db.get(Lead, lead_id)
            if not lead or lead.enriched:
                continue
            enrichment = await enrich_lead(lead)
            enrichment.lead_id = lead_id
            db.add(enrichment)
            lead.enriched = True
            await db.flush()

            result = await db.execute(select(LeadScore).where(LeadScore.lead_id == lead_id))
            score_row = result.scalar_one_or_none()
            breakdown = score_lead(lead)
            if score_row:
                score_row.total_score = breakdown.total_score
                score_row.llm_score_adjustment = breakdown.llm_score_adjustment
            await db.commit()
        except Exception as exc:
            logger.error(f"Batch enrich failed for {lead_id}: {exc}")
            await db.rollback()


@router.post("/batch", response_model=EnrichBatchResult)
async def enrich_batch(
    payload: EnrichBatchRequest,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
):
    """Schedule batch LLM enrichment for multiple leads."""
    lead_ids = payload.lead_ids
    if not lead_ids:
        result = await db.execute(select(Lead.id).where(Lead.enriched == False).limit(payload.max_leads))
        lead_ids = [row[0] for row in result.all()]

    background_tasks.add_task(_enrich_batch_task, lead_ids, db)
    return EnrichBatchResult(queued=len(lead_ids), lead_ids=lead_ids)
