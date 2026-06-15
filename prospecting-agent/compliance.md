# Compliance & Ethics — Atlas Cyber Prospecting Agent

## Mandatory guarantees (architectural, not just policy)

| Guarantee | How it is enforced |
|---|---|
| No automatic message sending | System has no email/SMS/LinkedIn sending capability. Export is CSV only. |
| Human approval required | `OutreachDraft.human_reviewed` must be `True` and `ReviewRecord.status` must be `'approved'` before export includes a draft. |
| No LinkedIn scraping | Discovery only uses DuckDuckGo public search results and user-supplied URLs/CSV. No LinkedIn login or API calls. |
| No login-wall bypass | `page_fetcher.py` makes unauthenticated HTTP GET only; returns empty list on auth challenges. |
| No rate-limit bypass | No retry loops on 429/CAPTCHA; fails gracefully and logs warning. |
| Data minimisation | Only publicly available fields stored. No inferred personal data stored without `[INFERRED]` flag. |

## Data sources

| Source | Status | Notes |
|---|---|---|
| DuckDuckGo web search | Allowed | Public results, no login, no API key |
| Public web pages (user-supplied URLs) | Allowed | User vouches they have right to access |
| User-supplied CSV | Allowed | User owns the data; must have legitimate basis |
| LinkedIn (any automated access) | PROHIBITED | Violates LinkedIn ToS |
| Paid data brokers | Not integrated | User may import their own purchased lists via CSV |
| Private/leaked databases | PROHIBITED | Never to be used |

## GDPR considerations

- **Lawful basis**: Legitimate interest (B2B prospecting of professionals acting in their professional capacity).
- **Data minimisation**: Only professional contact details visible on public pages are stored.
- **Transparency**: Outreach messages must identify the sender and offer a way to opt out.
- **Opt-out**: Rejected leads should be flagged `do_not_contact` (future field); until then, delete via `/api/leads/{id}` DELETE.
- **Retention**: Operators should purge the database periodically. No automated purge is implemented — operator responsibility.
- **Data subject requests**: Full lead data can be exported or deleted via API.

## What reviewers must check before approving a draft

1. The message does not contain invented facts.
2. The message identifies the sender organisation.
3. The message offers a clear, easy opt-out ("reply STOP" or similar).
4. The prospect is genuinely in the target profile (independent CISO/vCISO/DSI, SMB, target geography).
5. The contact information was obtained from a public source or a legitimately held list.

## Prohibited uses

- Sending unsolicited messages to private individuals (B2C).
- Automating outreach without human review.
- Using this tool for any form of social engineering or deception.
- Scraping or storing data from platforms that prohibit it (LinkedIn, XING, etc.).
- Processing special category data (health, political opinions, etc.).
