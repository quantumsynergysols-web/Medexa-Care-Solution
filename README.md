# Medexa Care Solutions — website

Next.js (App Router, TypeScript) rebuild of the client's single-file HTML prototype, by Quantum Synergy Solutions.
The design, copy and interactions match the prototype; routing, SEO and lead handling are production-grade.

Requirements and architecture: [docs/Medexa_SRS_and_Architecture.pdf](docs/Medexa_SRS_and_Architecture.pdf) (draft, awaiting client approval).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

Copy `.env.example` to `.env.local` for development. Production setup on the Hostinger VPS: [DEPLOY.md](DEPLOY.md).

## Structure

| Path | What it holds |
| --- | --- |
| `src/app/**/page.tsx` | The 30 pages, one clean URL each (`/services/denial-management`, …) plus legal placeholders and 404 |
| `src/app/globals.css` | The prototype design system: tokens, light and dark themes, responsive rules |
| `src/app/api/leads/route.ts` | Lead API: validation, PHI guard, pricing tier, rate limit, storage, notification |
| `src/components/LeadForms.tsx` | The three forms (contact strip, audit / consultation, pricing quote) |
| `src/components/fx/` | Home dashboard animations, FAQ accordion + search, specialty search |
| `src/lib/` | Shared validation schema, pricing tiers, PHI patterns, lead store, site metadata |
| `src/content/pages.json` | Page id → URL, title and description (drives metadata, sitemap and old-link redirects) |

## Leads

Submissions are appended to `.data/leads.jsonl` (git-ignored). When SMTP is configured the team gets an alert
email and the lead gets an acknowledgement; if `LEAD_WEBHOOK_URL` is set the lead is also posted to that webhook. The file store suits a single Node server; `src/lib/lead-store.ts` is the one place to swap in PostgreSQL.

## Not built yet (see SRS phases 3–5)

- Database, admin panel, lead pipeline and CMS
- Bot challenge (Turnstile), analytics and cookie consent
- Final Privacy Policy and Terms text, and the client's phone, email and address
