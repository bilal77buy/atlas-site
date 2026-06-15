"""LLM-powered lead profiler."""
from __future__ import annotations

import json
from loguru import logger

from app.models.lead import Lead, LeadEnrichment
from app.services.enrichment.llm_client import call_llm

_SYSTEM = """Tu es un assistant expert en qualification de leads B2B en cybersecurite.
Rolle: analyser les informations publiques d'un prospect et en extraire des insights.

REGLES ABSOLUES:
1. N'invente aucun fait. Utilise uniquement les informations fournies.
2. Si une information est incertaine, marque-la [INFERRED].
3. Cite la source (source_url) pour chaque fait important.
4. Respecte la vie privee: ne speculons pas sur la vie personnelle.
5. Retourne UNIQUEMENT un JSON valide, sans explication supplementaire.
"""

_USER_TEMPLATE = """Analyse ce prospect et retourne un JSON avec les cles suivantes:
- summary (string, 2-3 phrases en francais sur son profil professionnel public)
- inferred_company_size (int ou null)
- cyber_maturity_signals (list[string], max 5 signaux observes dans les donnees)
- potential_pain_points (list[string], max 3 points de douleur probables)
- recommended_angle (string, angle d'approche suggere)
- corrected_title (string ou null, titre corrige si evident)
- corrected_company (string ou null, entreprise corrigee si evident)
- confidence_score (int, 0-100, confiance dans l'analyse)
- sources_used (list[string], URLs ou sources)

DONNEES PROSPECT:
Nom: {full_name}
Entreprise: {company_name}
Titre: {job_title}
Pays: {country}
Ville: {city}
Site web: {website}
Email public: {public_email}
Extrait de recherche: {search_snippet}
URL source: {source_url}
Notes: {notes}
"""


async def enrich_lead(lead: Lead) -> LeadEnrichment:
    user_prompt = _USER_TEMPLATE.format(
        full_name=lead.full_name or "",
        company_name=lead.company_name or "",
        job_title=lead.job_title or "",
        country=lead.country or "",
        city=lead.city or "",
        website=lead.website or "",
        public_email=lead.public_email or "",
        search_snippet=lead.search_snippet or "",
        source_url=lead.source_url or "",
        notes=lead.notes or "",
    )

    raw = await call_llm(
        system_prompt=_SYSTEM,
        user_prompt=user_prompt,
        max_tokens=800,
        temperature=0.2,
    )

    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        logger.warning(f"LLM returned non-JSON for lead {lead.id}: {raw[:200]}")
        data = {}

    return LeadEnrichment(
        lead_id=str(lead.id) if lead.id else None,
        summary=data.get("summary", ""),
        inferred_company_size=data.get("inferred_company_size"),
        cyber_maturity_signals=json.dumps(data.get("cyber_maturity_signals", [])),
        potential_pain_points=json.dumps(data.get("potential_pain_points", [])),
        recommended_angle=data.get("recommended_angle", ""),
        corrected_title=data.get("corrected_title"),
        corrected_company=data.get("corrected_company"),
        confidence_score=data.get("confidence_score", 0),
        sources_used=json.dumps(data.get("sources_used", [])),
        raw_llm_response=raw[:4000],
    )
