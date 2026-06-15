"""SQLAlchemy ORM models for the prospecting agent."""

from __future__ import annotations

import uuid
from datetime import datetime
from typing import Optional

from sqlalchemy import (
    Boolean, DateTime, Float, ForeignKey, Integer, String, Text, func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


def _uuid() -> str:
    return str(uuid.uuid4())


class Lead(Base):
    """A prospective contact discovered from public sources."""

    __tablename__ = "leads"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    lead_id: Mapped[str] = mapped_column(String(20), unique=True, index=True)

    full_name: Mapped[Optional[str]] = mapped_column(String(200))
    company_name: Mapped[Optional[str]] = mapped_column(String(300))
    role: Mapped[Optional[str]] = mapped_column(String(300))

    country: Mapped[Optional[str]] = mapped_column(String(10))
    city: Mapped[Optional[str]] = mapped_column(String(200))

    website: Mapped[Optional[str]] = mapped_column(String(500))
    public_profile_url: Mapped[Optional[str]] = mapped_column(Text)
    public_email: Mapped[Optional[str]] = mapped_column(String(300))
    contact_form_url: Mapped[Optional[str]] = mapped_column(String(500))
    phone: Mapped[Optional[str]] = mapped_column(String(50))

    employee_size_estimate: Mapped[Optional[int]] = mapped_column(Integer)
    employee_size_inferred: Mapped[bool] = mapped_column(Boolean, default=True)
    independence_evidence: Mapped[Optional[str]] = mapped_column(Text)
    independence_confidence: Mapped[Optional[float]] = mapped_column(Float)
    cybersecurity_relevance: Mapped[Optional[str]] = mapped_column(Text)

    source_urls: Mapped[Optional[str]] = mapped_column(Text)  # JSON array
    raw_search_snippet: Mapped[Optional[str]] = mapped_column(Text)
    notes: Mapped[Optional[str]] = mapped_column(Text)
    import_source: Mapped[Optional[str]] = mapped_column(String(100))

    status: Mapped[str] = mapped_column(String(30), default="discovered", index=True)

    created_at: Mapped[datetime] = mapped_column(DateTime, default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=func.now(), onupdate=func.now())

    score: Mapped[Optional[LeadScore]] = relationship(
        "LeadScore", back_populates="lead", uselist=False, cascade="all, delete-orphan"
    )
    enrichment: Mapped[Optional[LeadEnrichment]] = relationship(
        "LeadEnrichment", back_populates="lead", uselist=False, cascade="all, delete-orphan",
    )
    drafts: Mapped[list[OutreachDraft]] = relationship(
        "OutreachDraft", back_populates="lead", cascade="all, delete-orphan"
    )
    review: Mapped[Optional[ReviewRecord]] = relationship(
        "ReviewRecord", back_populates="lead", uselist=False, cascade="all, delete-orphan",
    )


class LeadScore(Base):
    """Qualification scoring for a lead."""

    __tablename__ = "lead_scores"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    lead_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("leads.id", ondelete="CASCADE"), unique=True, index=True
    )

    independent_status_score: Mapped[int] = mapped_column(Integer, default=0)   # /20
    company_size_score: Mapped[int] = mapped_column(Integer, default=0)          # /15
    region_match_score: Mapped[int] = mapped_column(Integer, default=0)          # /10
    budget_fit_score: Mapped[int] = mapped_column(Integer, default=0)            # /15
    cyber_need_score: Mapped[int] = mapped_column(Integer, default=0)            # /15
    service_complementarity_score: Mapped[int] = mapped_column(Integer, default=0)  # /10
    contactability_score: Mapped[int] = mapped_column(Integer, default=0)        # /10
    language_fit_score: Mapped[int] = mapped_column(Integer, default=0)          # /5
    total_score: Mapped[int] = mapped_column(Integer, default=0, index=True)    # /100

    llm_evaluation: Mapped[Optional[str]] = mapped_column(Text)
    llm_score_adjustment: Mapped[int] = mapped_column(Integer, default=0)

    priority_bucket: Mapped[str] = mapped_column(String(10), default="Low")
    disqualified: Mapped[bool] = mapped_column(Boolean, default=False)
    disqualification_reason: Mapped[Optional[str]] = mapped_column(Text)

    scored_at: Mapped[datetime] = mapped_column(DateTime, default=func.now())

    lead: Mapped[Lead] = relationship("Lead", back_populates="score")


class LeadEnrichment(Base):
    """Enriched profile information from public sources."""

    __tablename__ = "lead_enrichments"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    lead_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("leads.id", ondelete="CASCADE"), unique=True, index=True
    )

    service_summary: Mapped[Optional[str]] = mapped_column(Text)
    likely_service_offering: Mapped[Optional[str]] = mapped_column(Text)
    pain_points: Mapped[Optional[str]] = mapped_column(Text)
    why_fits_summary: Mapped[Optional[str]] = mapped_column(Text)

    personalization_hooks: Mapped[Optional[str]] = mapped_column(Text)  # JSON array
    source_citations: Mapped[Optional[str]] = mapped_column(Text)       # JSON dict
    raw_page_text: Mapped[Optional[str]] = mapped_column(Text)

    enriched_at: Mapped[datetime] = mapped_column(DateTime, default=func.now())
    enrichment_model: Mapped[Optional[str]] = mapped_column(String(100))

    lead: Mapped[Lead] = relationship("Lead", back_populates="enrichment")


class OutreachDraft(Base):
    """LLM-generated outreach drafts — all require human approval before sending."""

    __tablename__ = "outreach_drafts"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    lead_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("leads.id", ondelete="CASCADE"), index=True
    )

    language: Mapped[str] = mapped_column(String(5), default="fr")

    subject_line: Mapped[Optional[str]] = mapped_column(Text)
    draft_short: Mapped[Optional[str]] = mapped_column(Text)
    draft_standard: Mapped[Optional[str]] = mapped_column(Text)
    draft_premium: Mapped[Optional[str]] = mapped_column(Text)
    linkedin_note: Mapped[Optional[str]] = mapped_column(Text)
    followup_1: Mapped[Optional[str]] = mapped_column(Text)
    followup_2: Mapped[Optional[str]] = mapped_column(Text)

    generated_at: Mapped[datetime] = mapped_column(DateTime, default=func.now())
    generation_model: Mapped[Optional[str]] = mapped_column(String(100))

    lead: Mapped[Lead] = relationship("Lead", back_populates="drafts")
    review: Mapped[Optional[ReviewRecord]] = relationship(
        "ReviewRecord", back_populates="draft", uselist=False
    )


class ReviewRecord(Base):
    """Human review gate — no outreach permitted without 'approved' status."""

    __tablename__ = "review_records"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    lead_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("leads.id", ondelete="CASCADE"), unique=True, index=True
    )
    draft_id: Mapped[Optional[str]] = mapped_column(
        String(36), ForeignKey("outreach_drafts.id", ondelete="SET NULL")
    )

    reviewer_status: Mapped[str] = mapped_column(String(20), default="pending", index=True)
    # pending | approved | rejected | edited | do_not_contact

    reviewer_notes: Mapped[Optional[str]] = mapped_column(Text)
    edited_draft: Mapped[Optional[str]] = mapped_column(Text)
    edited_subject: Mapped[Optional[str]] = mapped_column(Text)

    reviewed_at: Mapped[Optional[datetime]] = mapped_column(DateTime)
    reviewed_by: Mapped[Optional[str]] = mapped_column(String(200))

    created_at: Mapped[datetime] = mapped_column(DateTime, default=func.now())

    lead: Mapped[Lead] = relationship("Lead", back_populates="review")
    draft: Mapped[Optional[OutreachDraft]] = relationship(
        "OutreachDraft", back_populates="review"
    )
