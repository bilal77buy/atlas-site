"""Unit tests for the deterministic scoring engine."""
import pytest
from dataclasses import dataclass
from typing import Optional

from app.services.scoring.scorer import score_lead, ScoreBreakdown


@dataclass
class FakeLead:
    full_name: str = ""
    company_name: str = ""
    job_title: str = ""
    country: str = ""
    city: str = ""
    website: str = ""
    public_email: str = ""
    phone: str = ""
    employee_size_estimate: Optional[int] = None
    primary_language: str = ""
    search_snippet: str = ""
    notes: str = ""


# ---------------------------------------------------------------------------
# Independent status scoring
# ---------------------------------------------------------------------------

class TestIndependentStatus:
    def test_vciso_scores_high(self):
        lead = FakeLead(job_title="vCISO freelance independant")
        b = score_lead(lead)
        # One strong keyword (vciso) -> 16; two distinct strong keywords -> 20
        assert b.independent_status_score >= 16

    def test_rssi_externalise_scores_high(self):
        lead = FakeLead(job_title="RSSI Externalise", search_snippet="consultant independant cybersecurite")
        b = score_lead(lead)
        assert b.independent_status_score >= 8

    def test_employee_does_not_score_independent(self):
        lead = FakeLead(job_title="Employe standard")
        b = score_lead(lead)
        assert b.independent_status_score == 0

    def test_moderate_keyword_scores(self):
        lead = FakeLead(job_title="Consultant independant")
        b = score_lead(lead)
        assert b.independent_status_score >= 8

    def test_two_strong_keywords_scores_max(self):
        lead = FakeLead(
            job_title="vCISO freelance",
            search_snippet="rssi externalise en mission independante"
        )
        b = score_lead(lead)
        assert b.independent_status_score == 20


# ---------------------------------------------------------------------------
# Company size scoring
# ---------------------------------------------------------------------------

class TestCompanySize:
    def test_solo_scores_max(self):
        lead = FakeLead(employee_size_estimate=1)
        b = score_lead(lead)
        assert b.company_size_score == 15

    def test_small_team_scores_well(self):
        lead = FakeLead(employee_size_estimate=3)
        b = score_lead(lead)
        assert b.company_size_score == 12

    def test_ten_employees_scores_moderate(self):
        lead = FakeLead(employee_size_estimate=10)
        b = score_lead(lead)
        assert b.company_size_score == 7

    def test_no_size_data_gives_moderate_score(self):
        lead = FakeLead()
        b = score_lead(lead)
        assert b.company_size_score == 5

    def test_large_company_disqualified(self):
        lead = FakeLead(employee_size_estimate=51)
        b = score_lead(lead)
        assert b.disqualified is True


# ---------------------------------------------------------------------------
# Region scoring
# ---------------------------------------------------------------------------

class TestRegionMatch:
    def test_france_scores_max(self):
        lead = FakeLead(country="France")
        b = score_lead(lead)
        assert b.region_match_score == 10

    def test_switzerland_scores_max(self):
        lead = FakeLead(country="Suisse")
        b = score_lead(lead)
        assert b.region_match_score == 10

    def test_belgium_scores_max(self):
        lead = FakeLead(country="Belgique")
        b = score_lead(lead)
        assert b.region_match_score == 10

    def test_morocco_scores_max(self):
        lead = FakeLead(country="Maroc")
        b = score_lead(lead)
        assert b.region_match_score == 10

    def test_fr_domain_scores_partial(self):
        lead = FakeLead(website="https://example.fr")
        b = score_lead(lead)
        assert b.region_match_score == 8

    def test_out_of_region_scores_zero(self):
        lead = FakeLead(country="Germany")
        b = score_lead(lead)
        assert b.region_match_score == 0


# ---------------------------------------------------------------------------
# Cyber need scoring
# ---------------------------------------------------------------------------

class TestCyberNeed:
    def test_many_cyber_keywords_scores_max(self):
        lead = FakeLead(
            search_snippet="iso 27001 gdpr pentest siem zero trust audit securite"
        )
        b = score_lead(lead)
        assert b.cyber_need_score == 15

    def test_single_cyber_keyword_scores_six(self):
        lead = FakeLead(search_snippet="expert cyber")
        b = score_lead(lead)
        assert b.cyber_need_score == 6

    def test_no_cyber_keyword_scores_zero(self):
        lead = FakeLead(search_snippet="marketing digital agence web")
        b = score_lead(lead)
        assert b.cyber_need_score == 0


# ---------------------------------------------------------------------------
# Contactability scoring
# ---------------------------------------------------------------------------

class TestContactability:
    def test_email_gives_seven(self):
        lead = FakeLead(public_email="test@example.com")
        b = score_lead(lead)
        assert b.contactability_score == 8  # email(7) + website counts if present

    def test_no_contact_scores_zero(self):
        lead = FakeLead()
        b = score_lead(lead)
        assert b.contactability_score == 0

    def test_full_contact_scores_ten(self):
        lead = FakeLead(
            public_email="test@example.com",
            phone="0612345678",
            website="https://example.com",
        )
        b = score_lead(lead)
        assert b.contactability_score == 10


# ---------------------------------------------------------------------------
# Disqualification
# ---------------------------------------------------------------------------

class TestDisqualification:
    def test_recruitment_keyword_disqualifies(self):
        lead = FakeLead(job_title="Recrutement et talent acquisition")
        b = score_lead(lead)
        assert b.disqualified is True
        assert "recruitment" in b.disqualification_reason.lower() or "rh" in b.disqualification_reason.lower()

    def test_large_company_signal_disqualifies(self):
        lead = FakeLead(notes="Travaille pour un groupe multinational")
        b = score_lead(lead)
        assert b.disqualified is True

    def test_cac40_disqualifies(self):
        lead = FakeLead(search_snippet="DSI CAC 40 grande entreprise")
        b = score_lead(lead)
        assert b.disqualified is True

    def test_over_50_employees_disqualifies(self):
        lead = FakeLead(employee_size_estimate=100)
        b = score_lead(lead)
        assert b.disqualified is True

    def test_valid_lead_not_disqualified(self):
        lead = FakeLead(
            job_title="vCISO freelance",
            country="France",
            employee_size_estimate=1,
        )
        b = score_lead(lead)
        assert b.disqualified is False


# ---------------------------------------------------------------------------
# Total score sanity checks
# ---------------------------------------------------------------------------

class TestTotalScore:
    def test_ideal_lead_scores_high(self):
        """An ideal RSSI freelance with all signals should score >= 80."""
        lead = FakeLead(
            full_name="Jean Dupont",
            job_title="RSSI Externalise freelance",
            company_name="JD Security",
            country="France",
            city="Paris",
            website="https://jdsecurity.fr",
            public_email="jean@jdsecurity.fr",
            phone="0612345678",
            employee_size_estimate=1,
            search_snippet="iso 27001 gdpr audit securite cyber consultant independant",
        )
        b = score_lead(lead)
        assert b.total_score >= 80
        assert b.disqualified is False

    def test_score_capped_at_100(self):
        lead = FakeLead(
            job_title="vCISO freelance independant",
            search_snippet="vciso rssi externalise iso 27001 gdpr pentest siem zero trust dora nis2",
            country="France",
            employee_size_estimate=1,
            public_email="test@test.fr",
            phone="0600000000",
            website="https://test.fr",
        )
        b = score_lead(lead)
        assert b.total_score <= 100

    def test_score_not_negative(self):
        lead = FakeLead()
        b = score_lead(lead)
        assert b.total_score >= 0

    def test_disqualified_lead_scores_zero(self):
        lead = FakeLead(job_title="Recruteur senior")
        b = score_lead(lead)
        assert b.total_score == 0
