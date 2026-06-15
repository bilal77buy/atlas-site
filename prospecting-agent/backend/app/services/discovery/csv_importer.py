"""Import leads from a user-supplied CSV file."""
from __future__ import annotations

import csv
import io
from typing import Optional
from loguru import logger

from app.models.lead import Lead

# Accepted column name aliases (normalised)
_COL_MAP = {
    # name
    "name": "full_name", "full_name": "full_name", "nom": "full_name",
    "prénom nom": "full_name", "prenom nom": "full_name",
    # company
    "company": "company_name", "company_name": "company_name",
    "entreprise": "company_name", "société": "company_name",
    "societe": "company_name", "organisation": "company_name",
    # title
    "title": "job_title", "job_title": "job_title", "poste": "job_title",
    "fonction": "job_title", "titre": "job_title",
    # country
    "country": "country", "pays": "country",
    # city
    "city": "city", "ville": "city",
    # website
    "website": "website", "site": "website", "site_web": "website",
    "url": "website",
    # email
    "email": "public_email", "public_email": "public_email",
    "e-mail": "public_email", "mail": "public_email",
    # phone
    "phone": "phone", "tél": "phone", "telephone": "phone",
    "téléphone": "phone",
    # employees
    "employees": "employee_size_estimate", "employee_size_estimate": "employee_size_estimate",
    "effectif": "employee_size_estimate", "taille": "employee_size_estimate",
    # notes
    "notes": "notes", "remarques": "notes", "commentaires": "notes",
    # linkedin
    "linkedin": "linkedin_url", "linkedin_url": "linkedin_url",
}


def _norm_header(h: str) -> str:
    return h.strip().lower().replace("-", " ").replace("_", " ")


def import_csv(text: str) -> tuple[list[Lead], list[str]]:
    """
    Parse CSV text (user-provided) and return (leads, errors).
    Accepts semicolon or comma delimiters, UTF-8 or latin-1.
    """
    leads: list[Lead] = []
    errors: list[str] = []

    # Detect delimiter
    sample = text[:2000]
    delimiter = ";" if sample.count(";") > sample.count(",") else ","

    reader = csv.DictReader(io.StringIO(text), delimiter=delimiter)
    if not reader.fieldnames:
        return [], ["CSV has no headers"]

    col_map: dict[str, str] = {}
    for raw_header in reader.fieldnames:
        norm = _norm_header(raw_header)
        if norm in _COL_MAP:
            col_map[raw_header] = _COL_MAP[norm]

    for i, row in enumerate(reader, start=2):
        try:
            mapped: dict = {}
            for raw_col, field_name in col_map.items():
                val = row.get(raw_col, "").strip()
                if val:
                    mapped[field_name] = val

            if not mapped.get("full_name") and not mapped.get("company_name"):
                errors.append(f"Row {i}: missing name and company — skipped")
                continue

            # Coerce employee size
            if "employee_size_estimate" in mapped:
                try:
                    mapped["employee_size_estimate"] = int(mapped["employee_size_estimate"])
                except ValueError:
                    del mapped["employee_size_estimate"]

            mapped.setdefault("data_source", "csv_import")
            leads.append(Lead(**mapped))
        except Exception as exc:
            errors.append(f"Row {i}: {exc}")
            logger.warning(f"CSV import row {i} error: {exc}")

    logger.info(f"CSV parsed: {len(leads)} leads, {len(errors)} errors")
    return leads, errors
