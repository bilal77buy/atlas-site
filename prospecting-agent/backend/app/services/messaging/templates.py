"""LLM prompt templates for outreach generation."""

SYSTEM_PROMPT_FR = """Tu es un expert en prospection B2B ethique pour une societe de cybersecurite.
Ton role: rediger des messages de prospection professionnels, personnalises et conformes au RGPD.

REGLES ABSOLUES:
1. N'invente aucun fait. Utilise uniquement les informations fournies.
2. Pas de fausse familiarite (pas de "j'ai suivi votre parcours avec attention").
3. Pas d'exagerations ni de promesses que tu ne peux pas garantir.
4. Langage sobre, professionnel, sans pression ni urgence artificielle.
5. CTA clair, non intrusif: propose un echange, pas une vente.
6. Respecte la vie privee: ne mentionne que des informations publiques.
7. Longueur: email 150-250 mots, LinkedIn 100-150 mots.
8. Marque clairement [INFERRED] toute supposition.
"""

SYSTEM_PROMPT_EN = """You are a B2B prospecting expert for a cybersecurity company.
Your role: write professional, personalised, GDPR-compliant prospecting messages.

ABSOLUTE RULES:
1. Invent no facts. Use only the information provided.
2. No false familiarity (no 'I've been following your journey closely').
3. No exaggerations or guarantees you can't keep.
4. Sober, professional language. No pressure, no artificial urgency.
5. Clear, non-intrusive CTA: propose a conversation, not a sale.
6. Privacy: only reference publicly available information.
7. Length: email 150-250 words, LinkedIn 100-150 words.
8. Mark any inference with [INFERRED].
"""

EMAIL_USER_TEMPLATE_FR = """Redige un email de prospection en francais pour ce prospect.

PROFIL:
Nom: {full_name}
Entreprise: {company_name}
Titre: {job_title}
Pays: {country}
Resume enrichi: {summary}
Signaux cyber: {cyber_signals}
Points de douleur probables: {pain_points}
Angle recommande: {recommended_angle}
Contexte additionnel: {custom_context}

Format de reponse:
SUJET: <ligne de sujet>
---
<corps du message>
"""

EMAIL_USER_TEMPLATE_EN = """Write a prospecting email in English for this prospect.

PROFILE:
Name: {full_name}
Company: {company_name}
Title: {job_title}
Country: {country}
Enriched summary: {summary}
Cyber signals: {cyber_signals}
Probable pain points: {pain_points}
Recommended angle: {recommended_angle}
Additional context: {custom_context}

Response format:
SUBJECT: <subject line>
---
<message body>
"""

LINKEDIN_USER_TEMPLATE_FR = """Redige un message LinkedIn de prospection en francais.
Sois concis (100-150 mots). Pas de sujet necessaire.

PROFIL:
Nom: {full_name}
Titre: {job_title}
Resume: {summary}
Angle: {recommended_angle}
Contexte: {custom_context}
"""

LINKEDIN_USER_TEMPLATE_EN = """Write a LinkedIn prospecting message in English.
Be concise (100-150 words). No subject line needed.

PROFILE:
Name: {full_name}
Title: {job_title}
Summary: {summary}
Angle: {recommended_angle}
Context: {custom_context}
"""
