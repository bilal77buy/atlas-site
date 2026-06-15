# CyberProspect Agent

A production-ready, autonomous-but-human-reviewed prospecting workflow for outsourced cybersecurity leadership services.

Targets independent CISOs, vCISOs, fractional DSI/IT directors, and small businesses likely to outsource security leadership — in **France, Switzerland, Belgium, and Morocco**.

> **No messages are sent automatically. Every outreach draft requires explicit human approval.**

---

## Quick Start

### 1. Clone and configure

```bash
cd prospecting-agent/backend
cp .env.example .env
# Edit .env — add your ANTHROPIC_API_KEY at minimum
```

### 2. Install dependencies

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Run the server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Open **http://localhost:8000** for the dashboard.  
Open **http://localhost:8000/docs** for the interactive API.

### 4. Docker (recommended for production)

```bash
cp backend/.env.example backend/.env
# Edit backend/.env

docker-compose up --build
```

---

## Workflow

### Step 1 — Ingest leads

**Option A: Web search** (dashboard → "Search public web")  
Runs 15+ keyword queries against DuckDuckGo. Polite delay between requests.

**Option B: Import CSV** (dashboard → Import)  
Upload a CSV with columns: name, company, title, country, city, email, website, phone.  
Column names are normalised automatically (French and English supported).

**Option C: Import URLs** (dashboard → Import)  
Paste public website URLs to fetch and parse.

**Seed data** (for testing):
```bash
curl -X POST http://localhost:8000/api/v1/discovery/csv \
  -F "file=@data/seed/sample_leads.csv" \
  -F "country_hint=" \
  -F "import_source=seed"
```

### Step 2 — Score leads

```bash
curl -X POST http://localhost:8000/api/v1/enrich/score \
  -H "Content-Type: application/json" \
  -d '{"use_llm": false}'
```

Scoring is deterministic and reproducible. Leads are rated 0–100 across 8 dimensions.  
Disqualified leads (large companies, recruitment posts, wrong geography) are automatically filtered.

### Step 3 — Enrich profiles (requires LLM API key)

```bash
curl -X POST http://localhost:8000/api/v1/enrich/profiles \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Step 4 — Generate outreach drafts (requires LLM API key)

```bash
curl -X POST http://localhost:8000/api/v1/messaging/generate \
  -H "Content-Type: application/json" \
  -d '{}'
```

Generates per lead: subject line, 3 draft variants (short/standard/premium), LinkedIn note, 2 follow-ups.

### Step 5 — Human review

Open **http://localhost:8000/review** to approve, reject, or mark leads as do-not-contact.

### Step 6 — Export approved drafts

```bash
curl http://localhost:8000/api/v1/export/outreach_drafts.csv -o outreach_drafts.csv
```

Available exports:
- `/api/v1/export/leads.csv` — all leads
- `/api/v1/export/qualified_leads.csv` — leads with scores
- `/api/v1/export/outreach_drafts.csv` — approved drafts only
- `/api/v1/export/review_status.csv` — full review status

---

## API Reference

Full interactive docs at **http://localhost:8000/docs**

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/leads/` | List leads (filterable) |
| GET | `/api/v1/leads/stats` | Dashboard statistics |
| GET | `/api/v1/leads/{lead_id}` | Lead detail |
| POST | `/api/v1/leads/` | Create lead manually |
| POST | `/api/v1/discovery/search` | Run web keyword search |
| POST | `/api/v1/discovery/csv` | Import CSV file |
| POST | `/api/v1/discovery/urls` | Import public URLs |
| POST | `/api/v1/enrich/score` | Score leads |
| POST | `/api/v1/enrich/profiles` | Enrich profiles |
| POST | `/api/v1/messaging/generate` | Generate outreach drafts |
| GET | `/api/v1/review/queue` | Review queue |
| PATCH | `/api/v1/review/{lead_id}` | Update review status |
| GET | `/api/v1/export/outreach_drafts.csv` | Export approved drafts |

---

## Running Tests

```bash
cd backend
pytest tests/ -v
```

Tests cover: scoring engine (8 dimensions + disqualification), deduplication, CSV parsing.

---

## Configuration Reference

See `.env.example` for all options. Key variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `ANTHROPIC_API_KEY` | — | **Required** for enrichment and messaging |
| `LLM_MODEL` | `claude-sonnet-4-6` | LLM model to use |
| `SEARCH_PROVIDER` | `duckduckgo` | `duckduckgo` or `serpapi` |
| `SCORE_THRESHOLD_HIGH` | `70` | Min score for "High" priority |
| `SCORE_THRESHOLD_MEDIUM` | `45` | Min score for "Medium" priority |
| `DATABASE_URL` | SQLite | DB connection string |

---

## Limitations

- Web search results are heuristic — verify before outreach
- Enrichment depends on website quality — leads without a website will have limited enrichment
- DuckDuckGo rate limits apply — use SerpAPI for volume
- LLM outputs marked `[INFERRED]` — do not treat as verified facts
- No LinkedIn automation — notes are for manual copy-paste only
- Scoring uses keyword heuristics — human judgment always required

See `compliance.md` for GDPR and ethical usage guidance.
