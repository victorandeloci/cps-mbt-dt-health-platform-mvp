# SR — Saúde Preventiva Digital

## Overview

**SR** — *Cuidar antes é viver melhor.* — helps busy professionals manage preventive care through:

- **Online consultations** (scheduling and video preview)
- **Exam analysis** with AI **support only** (never diagnosis)
- **Simple home** focused on end-user tasks — no complex dashboards

**Persona:** Judite Costa, 34 — Marketing analyst.

## Tech stack

React · Vite · TypeScript · Tailwind CSS v4 · React Router · Framer Motion · Lucide React

## Getting started

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

```bash
# .env.production
VITE_BASE_PATH=/cps-mbt-dt-health-platform-mvp/

npm run deploy
```

See [docs/DEPLOY.md](docs/DEPLOY.md).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing |
| `/dashboard` | Quick start — exams, consultations |
| `/exames` | Upload & AI-supported exam review |
| `/consultas` | Book and preview teleconsultation |
| `/privacidade` | Security & LGPD |
