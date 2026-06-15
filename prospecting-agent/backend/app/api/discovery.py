from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.lead import Lead, LeadScore
from app.schemas.lead import (
    DiscoveryRequest, DiscoveryResult, CSVImportResult, LeadOut, URLFetchRequest
)
from app.services.discovery.web_search import run_web_search
from app.services.discovery.csv_importer import import_csv
from app.services.discovery.page_fetcher import fetch_page_leads
from app.services.discovery.deduplicator import deduplicate_leads
from app.services.scoring.scorer import score_lead
from loguru import logger

router = APIRouter()


async def _score_and_save(leads: list[Lead], db: AsyncSession) -> list[Lead]:
    saved = []
    for lead in leads:
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
        saved.append(lead)
    await db.commit()
    return saved


@router.post("/search", response_model=DiscoveryResult)
async def search_leads(
    payload: DiscoveryRequest,
    db: AsyncSession = Depends(get_db),
):
    """Run a public web search and persist discovered leads."""
    existing_result = await db.execute(select(Lead))
    existing = list(existing_result.scalars().all())

    raw_leads = await run_web_search(
        query=payload.query,
        regions=payload.regions,
        max_results=payload.max_results,
    )

    unique, duplicates = deduplicate_leads(raw_leads, existing)
    saved = await _score_and_save(unique, db)

    logger.info(
        f"Discovery search: found={len(raw_leads)} unique={len(unique)} dupes={len(duplicates)}"
    )
    return DiscoveryResult(
        discovered=len(raw_leads),
        new_leads=len(saved),
        duplicates_skipped=len(duplicates),
        leads=[LeadOut.model_validate(l) for l in saved],
    )


@router.post("/fetch-url", response_model=DiscoveryResult)
async def fetch_from_url(
    payload: URLFetchRequest,
    db: AsyncSession = Depends(get_db),
):
    """Fetch a single public URL and extract lead candidates."""
    existing_result = await db.execute(select(Lead))
    existing = list(existing_result.scalars().all())

    raw_leads = await fetch_page_leads(str(payload.url))
    unique, duplicates = deduplicate_leads(raw_leads, existing)
    saved = await _score_and_save(unique, db)

    return DiscoveryResult(
        discovered=len(raw_leads),
        new_leads=len(saved),
        duplicates_skipped=len(duplicates),
        leads=[LeadOut.model_validate(l) for l in saved],
    )


@router.post("/import-csv", response_model=CSVImportResult)
async def import_csv_leads(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
):
    """Import leads from an uploaded CSV file."""
    if not file.filename or not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only .csv files are accepted")

    content = await file.read()
    try:
        text = content.decode("utf-8")
    except UnicodeDecodeError:
        text = content.decode("latin-1")

    existing_result = await db.execute(select(Lead))
    existing = list(existing_result.scalars().all())

    raw_leads, parse_errors = import_csv(text)
    unique, duplicates = deduplicate_leads(raw_leads, existing)
    saved = await _score_and_save(unique, db)

    logger.info(
        f"CSV import: parsed={len(raw_leads)} unique={len(unique)} errors={parse_errors}"
    )
    return CSVImportResult(
        rows_parsed=len(raw_leads),
        new_leads=len(saved),
        duplicates_skipped=len(duplicates),
        parse_errors=parse_errors,
        leads=[LeadOut.model_validate(l) for l in saved],
    )
