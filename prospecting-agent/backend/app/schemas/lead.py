"""Pydantic v2 schemas for API request/response validation."""

from __future__ import annotations

import json
from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel, ConfigDict, Field, field_validator


def _parse_json_list(v: Any) -> list[str]:
    if v is None:
        return []
    if isinstance(v, list):
        return v
    try:
        return json.loads(v)
    except (ValueError, TypeError):
        return [str(v)]


def _parse_json_dict(v: Any) -> dict[str, str]:
    if v is None:
        return {}
    if isinstance(v, dict):
        return v
    try:
        return json.loads(v)
    except (ValueError, TypeError):
        return {}


class LeadCreate(BaseModel):
    full_name: Optional[str] = None
    company_name: Optional[str] = None
    role: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    website: Optional[str] = None
    public_profile_url: Optional[str] = None
    public_email: Optional[str] = None
    contact_form_url: Optional[str] = None
    phone: Optional[str] = None
    employee_size_estimate: Optional[int] = None
    employee_size_inferred: bool = True
    independence_evidence: Optional[str] = None
    independence_confidence: Optional[float] = Field(None, ge=0.0, le=1.0)
    cybersecurity_relevance: Optional[str] = None
    source_urls: list[str] = Field(default_factory=list)
    raw_search_snippet: Optional[str] = None
    notes: Optional[str] = None
    import_source: Optional[str] = "manual"


class LeadUpdate(BaseModel):
    full_name: Optional[str] = None
    company_name: Optional[str] = None
    role: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    website: Optional[str] = None
    public_profile_url: Optional[str] = None
    public_email: Optional[str] = None
    contact_form_url: Optional[str] = None
    phone: Optional[str] = None
    employee_size_estimate: Optional[int] = None
    independence_evidence: Optional[str] = None
    cybersecurity_relevance: Optional[str] = None
    notes: Optional[str] = None
    status: Optional[str] = None


class LeadScoreOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    lead_id: str
    independent_status_score: int
    company_size_score: int
    region_match_score: int
    budget_fit_score: int
    cyber_need_score: int
    service_complementarity_score: int
    contactability_score: int
    language_fit_score: int
    total_score: int
    llm_evaluation: Optional[str]
    priority_bucket: str
    disqualified: bool
    disqualification_reason: Optional[str]
    scored_at: datetime


class LeadEnrichmentOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    lead_id: str
    service_summary: Optional[str]
    likely_service_offering: Optional[str]
    pain_points: Optional[str]
    why_fits_summary: Optional[str]
    personalization_hooks: list[str] = Field(default_factory=list)
    source_citations: dict[str, str] = Field(default_factory=dict)
    enriched_at: datetime
    enrichment_model: Optional[str]

    @field_validator("personalization_hooks", mode="before")
    @classmethod
    def parse_hooks(cls, v: Any) -> list[str]:
        return _parse_json_list(v)

    @field_validator("source_citations", mode="before")
    @classmethod
    def parse_citations(cls, v: Any) -> dict[str, str]:
        return _parse_json_dict(v)


class OutreachDraftOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    lead_id: str
    language: str
    subject_line: Optional[str]
    draft_short: Optional[str]
    draft_standard: Optional[str]
    draft_premium: Optional[str]
    linkedin_note: Optional[str]
    followup_1: Optional[str]
    followup_2: Optional[str]
    generated_at: datetime
    generation_model: Optional[str]


class ReviewRecordOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    lead_id: str
    draft_id: Optional[str]
    reviewer_status: str
    reviewer_notes: Optional[str]
    edited_draft: Optional[str]
    edited_subject: Optional[str]
    reviewed_at: Optional[datetime]
    reviewed_by: Optional[str]
    created_at: datetime


class ReviewUpdate(BaseModel):
    reviewer_status: str = Field(
        ..., pattern="^(pending|approved|rejected|edited|do_not_contact)$",
    )
    reviewer_notes: Optional[str] = None
    edited_draft: Optional[str] = None
    edited_subject: Optional[str] = None
    reviewed_by: Optional[str] = None


class LeadOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    lead_id: str
    full_name: Optional[str]
    company_name: Optional[str]
    role: Optional[str]
    country: Optional[str]
    city: Optional[str]
    website: Optional[str]
    public_profile_url: Optional[str]
    public_email: Optional[str]
    contact_form_url: Optional[str]
    phone: Optional[str]
    employee_size_estimate: Optional[int]
    employee_size_inferred: bool
    independence_evidence: Optional[str]
    independence_confidence: Optional[float]
    cybersecurity_relevance: Optional[str]
    source_urls: list[str] = Field(default_factory=list)
    notes: Optional[str]
    import_source: Optional[str]
    status: str
    created_at: datetime
    updated_at: datetime
    score: Optional[LeadScoreOut] = None
    enrichment: Optional[LeadEnrichmentOut] = None
    drafts: list[OutreachDraftOut] = Field(default_factory=list)
    review: Optional[ReviewRecordOut] = None

    @field_validator("source_urls", mode="before")
    @classmethod
    def parse_sources(cls, v: Any) -> list[str]:
        return _parse_json_list(v)


class LeadListItem(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    lead_id: str
    full_name: Optional[str]
    company_name: Optional[str]
    role: Optional[str]
    country: Optional[str]
    city: Optional[str]
    website: Optional[str]
    status: str
    total_score: Optional[int] = None
    priority_bucket: Optional[str] = None
    reviewer_status: Optional[str] = None
    created_at: datetime


class SearchRequest(BaseModel):
    keywords: list[str] = Field(default_factory=list)
    countries: list[str] = Field(default=["FR", "CH", "BE", "MA"])
    max_results_per_query: int = Field(default=10, ge=1, le=50)
    use_llm_filter: bool = False


class URLImportRequest(BaseModel):
    urls: list[str] = Field(...)
    country_hint: Optional[str] = None
    notes: Optional[str] = None


class CSVImportResult(BaseModel):
    imported: int
    skipped: int
    errors: list[str]


class EnrichRequest(BaseModel):
    lead_ids: Optional[list[str]] = None
    force: bool = False


class ScoreRequest(BaseModel):
    lead_ids: Optional[list[str]] = None
    use_llm: bool = False


class GenerateDraftsRequest(BaseModel):
    lead_ids: Optional[list[str]] = None
    force: bool = False


class DashboardStats(BaseModel):
    total_leads: int
    discovered: int
    enriched: int
    scored: int
    messaged: int
    pending_review: int
    approved: int
    rejected: int
    do_not_contact: int
    high_priority: int
    medium_priority: int
    low_priority: int
    by_country: dict[str, int]
