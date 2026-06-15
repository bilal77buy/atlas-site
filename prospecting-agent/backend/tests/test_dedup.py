"""Unit tests for the deduplication engine."""
import pytest
from dataclasses import dataclass
from typing import Optional

from app.services.discovery.deduplicator import compute_similarity, deduplicate_leads


@dataclass
class FakeLead:
    full_name: str = ""
    company_name: str = ""
    public_email: Optional[str] = None
    linkedin_url: Optional[str] = None
    website: Optional[str] = None
    id: Optional[str] = None


class TestComputeSimilarity:
    def test_exact_email_match_is_strong(self):
        a = FakeLead(public_email="jean@example.com", full_name="Jean Dupont")
        b = FakeLead(public_email="jean@example.com", full_name="Jean Dupont")
        assert compute_similarity(a, b) >= 0.8

    def test_different_emails_no_email_boost(self):
        a = FakeLead(public_email="a@a.com", full_name="Jean Dupont")
        b = FakeLead(public_email="b@b.com", full_name="Jean Dupont")
        sim = compute_similarity(a, b)
        # Names match but emails differ — should not be a strong duplicate
        assert sim < 0.8

    def test_same_linkedin_url_is_strong(self):
        url = "https://linkedin.com/in/jean-dupont"
        a = FakeLead(linkedin_url=url, full_name="Jean Dupont")
        b = FakeLead(linkedin_url=url, full_name="Jean Dupont")
        assert compute_similarity(a, b) >= 0.8

    def test_same_website_domain_adds_signal(self):
        a = FakeLead(website="https://jdsecurity.fr", full_name="Jean")
        b = FakeLead(website="https://jdsecurity.fr", full_name="Jean")
        sim = compute_similarity(a, b)
        assert sim > 0.2

    def test_completely_different_leads_low_similarity(self):
        a = FakeLead(full_name="Alice Martin", company_name="AlphaSec", public_email="alice@alpha.fr")
        b = FakeLead(full_name="Bob Durand", company_name="BetaCyber", public_email="bob@beta.fr")
        assert compute_similarity(a, b) < 0.3

    def test_empty_leads_similarity_zero(self):
        a = FakeLead()
        b = FakeLead()
        assert compute_similarity(a, b) == 0.0

    def test_name_token_overlap_contributes(self):
        a = FakeLead(full_name="Jean Dupont")
        b = FakeLead(full_name="Jean Dupont")
        sim = compute_similarity(a, b)
        assert sim > 0.0


class TestDeduplicateLeads:
    def test_exact_duplicate_removed(self):
        existing = [FakeLead(public_email="a@a.com", full_name="Alice")]
        new = [FakeLead(public_email="a@a.com", full_name="Alice")]
        unique, dupes = deduplicate_leads(new, existing)
        assert len(unique) == 0
        assert len(dupes) == 1

    def test_different_lead_kept(self):
        existing = [FakeLead(public_email="a@a.com", full_name="Alice")]
        new = [FakeLead(public_email="b@b.com", full_name="Bob")]
        unique, dupes = deduplicate_leads(new, existing)
        assert len(unique) == 1
        assert len(dupes) == 0

    def test_intra_batch_deduplication(self):
        existing = []
        new = [
            FakeLead(public_email="x@x.com", full_name="Xavier"),
            FakeLead(public_email="x@x.com", full_name="Xavier"),
        ]
        unique, dupes = deduplicate_leads(new, existing)
        assert len(unique) == 1
        assert len(dupes) == 1

    def test_empty_new_leads(self):
        existing = [FakeLead(full_name="Alice")]
        unique, dupes = deduplicate_leads([], existing)
        assert unique == []
        assert dupes == []

    def test_empty_existing_keeps_all(self):
        new = [FakeLead(full_name="Alice"), FakeLead(full_name="Bob")]
        unique, dupes = deduplicate_leads(new, [])
        assert len(unique) == 2
        assert len(dupes) == 0

    def test_linkedin_url_deduplication(self):
        url = "https://linkedin.com/in/test-user"
        existing = [FakeLead(linkedin_url=url, full_name="Test User")]
        new = [FakeLead(linkedin_url=url, full_name="Test User")]
        unique, dupes = deduplicate_leads(new, existing)
        assert len(unique) == 0

    def test_multiple_new_partial_overlap(self):
        existing = [FakeLead(public_email="known@known.com", full_name="Known User")]
        new = [
            FakeLead(public_email="known@known.com", full_name="Known User"),  # dup
            FakeLead(public_email="new@new.com", full_name="New User"),          # unique
        ]
        unique, dupes = deduplicate_leads(new, existing)
        assert len(unique) == 1
        assert len(dupes) == 1
