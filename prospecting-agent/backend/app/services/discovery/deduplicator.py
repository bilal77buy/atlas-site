"""Fuzzy entity deduplication for lead objects."""
from __future__ import annotations

import re
from typing import Optional
from dataclasses import dataclass

from app.models.lead import Lead

_STRONG_THRESHOLD = 0.80
_POSSIBLE_THRESHOLD = 0.60


def _norm(text: Optional[str]) -> str:
    if not text:
        return ""
    return re.sub(r"[^a-z0-9]", "", text.lower())


def _tokens(text: Optional[str]) -> set[str]:
    if not text:
        return set()
    return {t for t in re.split(r"[^a-z0-9]+", text.lower()) if len(t) > 1}


def _token_overlap(a: Optional[str], b: Optional[str]) -> float:
    ta, tb = _tokens(a), _tokens(b)
    if not ta or not tb:
        return 0.0
    intersection = ta & tb
    union = ta | tb
    return len(intersection) / len(union)  # Jaccard


def _email_match(a: Optional[str], b: Optional[str]) -> bool:
    if not a or not b:
        return False
    return a.strip().lower() == b.strip().lower()


def _domain(url: Optional[str]) -> Optional[str]:
    if not url:
        return None
    m = re.search(r"(?:https?://)?(?:www\.)?([^/]+)", url.lower())
    return m.group(1) if m else None


def _domain_match(a: Optional[str], b: Optional[str]) -> bool:
    da, db = _domain(a), _domain(b)
    if not da or not db:
        return False
    return da == db


def _profile_url_match(a: Optional[str], b: Optional[str]) -> bool:
    if not a or not b:
        return False
    return _norm(a) == _norm(b)


def compute_similarity(a: Lead, b: Lead) -> float:
    score = 0.0

    if _email_match(a.public_email, b.public_email):
        score += 0.5

    if _profile_url_match(a.linkedin_url, b.linkedin_url) and a.linkedin_url:
        score += 0.5

    if _domain_match(a.website, b.website):
        score += 0.2

    score += _token_overlap(a.full_name, b.full_name) * 0.3
    score += _token_overlap(a.company_name, b.company_name) * 0.1

    return min(score, 1.0)


def deduplicate_leads(
    new_leads: list[Lead],
    existing_leads: list[Lead],
) -> tuple[list[Lead], list[Lead]]:
    """
    Returns (unique_leads, duplicate_leads).
    A new lead is a duplicate if similarity >= _STRONG_THRESHOLD against any existing.
    """
    unique: list[Lead] = []
    duplicates: list[Lead] = []

    all_pool = list(existing_leads)

    for candidate in new_leads:
        is_dup = False
        for existing in all_pool:
            sim = compute_similarity(candidate, existing)
            if sim >= _STRONG_THRESHOLD:
                is_dup = True
                break
        if is_dup:
            duplicates.append(candidate)
        else:
            unique.append(candidate)
            all_pool.append(candidate)  # avoid intra-batch duplicates

    return unique, duplicates
