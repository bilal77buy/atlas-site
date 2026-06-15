from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Optional

# ---------------------------------------------------------------------------
# Keyword lists (normalised lowercase)
# ---------------------------------------------------------------------------

_STRONG_INDEPENDENT_KEYWORDS = {
    "vciso", "vrssi", "rssi externalis", "ciso externalis", "freelance ciso",
    "fractional ciso", "fractional rssi", "dsi freelance", "cio freelance",
    "consultant cybersecurite independant", "independent security consultant",
    "security consultant freelance",
}

_MODERATE_INDEPENDENT_KEYWORDS = {
    "independent", "independant", "indépendant", "freelance", "consultant",
    "self-employed", "autoentrepreneur", "auto-entrepreneur", "portage salarial",
    "gérant", "associé gérant",
}

_DISQUALIFY_KEYWORDS = {
    "recrutement", "recruitment", "hiring", "recruiter", "chasseur de tête",
    "head hunter", "head-hunter", "talent acquisition", "rh ", " rh",
    "ressources humaines", "human resources",
}

_LARGE_COMPANY_SIGNALS = {
    "cac 40", "cac40", "fortune 500", "multinational", "groupe ", "holding",
    "banque", "assurance", "telecom", "energie", "defence", "defense",
}

_TARGET_REGIONS = {
    "france", "fr", "suisse", "switzerland", "ch", "belgique", "belgium", "be",
    "maroc", "morocco", "ma",
}

_CYBER_NEED_KEYWORDS = {
    "iso 27001", "iso27001", "soc 2", "soc2", "dora", "nis2", "nis 2",
    "gdpr", "rgpd", "pentest", "pen test", "audit sécurité", "security audit",
    "cyber", "sécurité informatique", "information security", "infosec",
    "risk management", "gestion des risques", "vulnérabilité", "vulnerability",
    "siem", "edr", "xdr", "soc", "ransomware", "zero trust",
}

_SERVICE_COMPLEMENTARITY_KEYWORDS = {
    "strategie", "stratégie", "strategy", "gouvernance", "governance",
    "conformité", "compliance", "politique sécurité", "security policy",
    "formation", "training", "sensibilisation", "awareness",
    "conseil", "advisory", "consulting",
}


# ---------------------------------------------------------------------------

def _norm(text: Optional[str]) -> str:
    if not text:
        return ""
    return re.sub(r"[^a-z0-9 ]", " ", text.lower().replace("-", " "))


def _count(text: str, keywords: set[str]) -> int:
    """Count distinct keyword matches in text."""
    matched = set()
    for kw in keywords:
        if kw in text:
            matched.add(kw)
    return len(matched)


def _any(text: str, keywords: set[str]) -> bool:
    return _count(text, keywords) > 0


@dataclass
class ScoreBreakdown:
    independent_status_score: int = 0    # /20
    company_size_score: int = 0          # /15
    region_match_score: int = 0          # /10
    budget_fit_score: int = 0            # /15
    cyber_need_score: int = 0            # /15
    service_complementarity_score: int = 0  # /10
    contactability_score: int = 0        # /10
    language_fit_score: int = 0          # /5
    llm_score_adjustment: int = 0        # -10..+10
    disqualified: bool = False
    disqualification_reason: Optional[str] = None

    @property
    def total_score(self) -> int:
        raw = (
            self.independent_status_score
            + self.company_size_score
            + self.region_match_score
            + self.budget_fit_score
            + self.cyber_need_score
            + self.service_complementarity_score
            + self.contactability_score
            + self.language_fit_score
            + self.llm_score_adjustment
        )
        return max(0, min(100, raw))


def score_lead(lead) -> ScoreBreakdown:
    """
    Deterministic 100-point scoring engine.
    Lead can be any object with the expected attributes.
    """
    b = ScoreBreakdown()

    title_norm = _norm(getattr(lead, "job_title", None))
    company_norm = _norm(getattr(lead, "company_name", None))
    snippet_norm = _norm(getattr(lead, "search_snippet", None))
    country_norm = _norm(getattr(lead, "country", None))
    city_norm = _norm(getattr(lead, "city", None))
    website = getattr(lead, "website", None) or ""
    public_email = getattr(lead, "public_email", None) or ""
    phone = getattr(lead, "phone", None) or ""
    employee_size = getattr(lead, "employee_size_estimate", None)
    language = _norm(getattr(lead, "primary_language", None))
    notes_norm = _norm(getattr(lead, "notes", None))

    combined = f"{title_norm} {snippet_norm} {notes_norm}"

    # -- Disqualification checks --
    if _any(combined, _DISQUALIFY_KEYWORDS):
        b.disqualified = True
        b.disqualification_reason = "Contains recruitment / HR signals"
        return b

    if _any(combined, _LARGE_COMPANY_SIGNALS):
        b.disqualified = True
        b.disqualification_reason = "Large company signal detected"
        return b

    if employee_size and employee_size > 50:
        b.disqualified = True
        b.disqualification_reason = f"Company size too large ({employee_size} employees)"
        return b

    # -- 1. Independent status /20 --
    strong_hits = _count(title_norm, _STRONG_INDEPENDENT_KEYWORDS) + \
                  _count(snippet_norm, _STRONG_INDEPENDENT_KEYWORDS)
    moderate_hits = _count(title_norm, _MODERATE_INDEPENDENT_KEYWORDS) + \
                    _count(snippet_norm, _MODERATE_INDEPENDENT_KEYWORDS)

    if strong_hits >= 2:
        b.independent_status_score = 20
    elif strong_hits == 1:
        b.independent_status_score = 16
    elif moderate_hits >= 2:
        b.independent_status_score = 12
    elif moderate_hits == 1:
        b.independent_status_score = 8

    # -- 2. Company size /15 --
    if employee_size is not None:
        if employee_size == 1:
            b.company_size_score = 15
        elif employee_size <= 3:
            b.company_size_score = 12
        elif employee_size <= 5:
            b.company_size_score = 10
        elif employee_size <= 10:
            b.company_size_score = 7
        elif employee_size <= 25:
            b.company_size_score = 3
    else:
        # No data — moderate signal
        b.company_size_score = 5

    # -- 3. Region match /10 --
    location_combined = f"{country_norm} {city_norm}"
    if _any(location_combined, _TARGET_REGIONS):
        b.region_match_score = 10
    elif website.endswith((".fr", ".ch", ".be", ".ma")):
        b.region_match_score = 8

    # -- 4. Budget fit /15 --
    if b.independent_status_score >= 16 and (employee_size is None or employee_size <= 5):
        b.budget_fit_score = 15
    elif b.independent_status_score >= 8:
        b.budget_fit_score = 10
    elif employee_size and employee_size <= 10:
        b.budget_fit_score = 8

    # -- 5. Cyber need /15 --
    cyber_hits = _count(combined, _CYBER_NEED_KEYWORDS)
    if cyber_hits >= 4:
        b.cyber_need_score = 15
    elif cyber_hits == 3:
        b.cyber_need_score = 12
    elif cyber_hits == 2:
        b.cyber_need_score = 9
    elif cyber_hits == 1:
        b.cyber_need_score = 6

    # -- 6. Service complementarity /10 --
    comp_hits = _count(combined, _SERVICE_COMPLEMENTARITY_KEYWORDS)
    if comp_hits >= 3:
        b.service_complementarity_score = 10
    elif comp_hits == 2:
        b.service_complementarity_score = 7
    elif comp_hits == 1:
        b.service_complementarity_score = 4

    # -- 7. Contactability /10 --
    contact_score = 0
    if public_email:
        contact_score += 7
    if phone:
        contact_score += 2
    if website:
        contact_score += 1
    b.contactability_score = min(10, contact_score)

    # -- 8. Language fit /5 --
    if "fr" in language or "french" in language:
        b.language_fit_score = 5
    elif "en" in language or "english" in language:
        b.language_fit_score = 3
    else:
        # Infer from country
        if _any(country_norm, {"france", "belgique", "maroc", "suisse"}):
            b.language_fit_score = 5
        elif _any(country_norm, {"switzerland"}):
            b.language_fit_score = 4

    return b
