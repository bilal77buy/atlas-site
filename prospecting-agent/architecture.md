# Architecture — Atlas Cyber Prospecting Agent

## System overview

```
[User browser]
      |
      v
[FastAPI app — port 8000]
      |
      |-- GET/POST /api/*        (JSON REST API)
      |-- GET /                  (Jinja2 HTML dashboard)
      |
      |-- app/api/               Route handlers (thin: validate + call service)
      |-- app/services/          Business logic
      |   |-- discovery/         Web search, URL fetch, CSV import, dedup
      |   |-- scoring/           Deterministic 100-pt engine
      |   |-- enrichment/        LLM profiler (Anthropic Claude primary)
      |   |-- messaging/         Draft generator (LLM)
      |   |-- export/            CSV export
      |
      |-- app/models/            SQLAlchemy 2.0 async ORM models
      |-- app/schemas/           Pydantic v2 request/response schemas
      |-- app/core/              Config, DB engine, logging
      |
      v
[SQLite (aiosqlite) — WAL mode, Postgres-ready]
```

## Data flow

1. **Discovery** — Web search (DuckDuckGo) / URL fetch / CSV import  
   → Raw leads parsed and stored as `Lead` rows

2. **Deduplication** — Jaccard token overlap + email/domain exact match  
   → Duplicate candidates silently dropped before DB write

3. **Scoring** — Deterministic 100-pt engine runs synchronously on save  
   → `LeadScore` row created/updated

4. **Enrichment** — LLM (Claude → OpenAI fallback) analyses public data  
   → `LeadEnrichment` row with summary, signals, pain points, angle  
   → Score updated with `llm_score_adjustment` (-10..+10)

5. **Messaging** — LLM generates personalised draft (email or LinkedIn)  
   → `OutreachDraft` row stored with `human_reviewed=False`

6. **Human review gate** — Reviewer reads draft in UI, clicks Approve/Reject  
   → `ReviewRecord.status = 'approved'` / `OutreachDraft.human_reviewed = True`

7. **Export** — CSV download for manual copy-paste  
   → Reviewer manually sends from their own email client

## Key design decisions

| Decision | Rationale |
|---|---|
| SQLite default | Zero-ops for solo operators; WAL mode handles concurrent reads |
| No job queue | Background tasks via FastAPI `BackgroundTasks`; sufficient for low volume |
| LLM via sync executor | Claude SDK is sync; wrapped in `run_in_executor` to avoid blocking |
| Deterministic scoring first | Reproducible, auditable, no API calls required for scoring |
| Human gate at model layer | `human_reviewed` bool on `OutreachDraft` + `status` on `ReviewRecord` |
| Jinja2 + Tailwind CDN | No build step; easy to self-host and modify |

## Scalability path

- Replace SQLite with Postgres: change `DATABASE_URL` env var, no code change
- Replace `BackgroundTasks` with Celery/ARQ: extract service calls to tasks
- Add rate limiting: FastAPI middleware on `/api/discovery/*`
- Multi-user: add simple API key auth header middleware
