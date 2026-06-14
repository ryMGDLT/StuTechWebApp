# PROJECT_OVERVIEW.md

## Brand

**Xone Software Development**

This project is being continued under the Xone Software Development brand. Legacy references to "StuTech" in read-only `Technical Documentation` are historical; active UI and marketing copy use Xone branding.

## Project Purpose

A **static lead-generation and advertising website** that showcases Xone Software Development's services, team, and process to prospective clients. The site is designed to convert visitors into qualified leads through clear messaging, service pages, and contact capture.

There is no authenticated user area, product dashboard, or database in the current v1 scope.

## Current State

| Area | Status |
|------|--------|
| Homepage | Built — decomposed into `features/home/components/` (Hero, Mission/Team, Services, ValueProps, Process, CTA) + shared Footer |
| Services page | **Done** — feature module with shadcn Cards |
| About page | **Done** — company story and values |
| Process page | **Done** — expanded 5-step process |
| Contact page | **Done** — form UI with Zod validation + `POST /api/contact` wiring |
| Get Started page | **Done** — lead qualification form with Zod validation + `POST /api/get-started` wiring |
| Mobile navigation | **Done** — hamburger Sheet menu below `md` breakpoint |
| Route lazy-loading | **Done** — non-home routes via `React.lazy` |
| Backend API | **Done (Week 3)** — `POST /api/contact`, `POST /api/get-started`, `GET /api/health`; rate limiting + CORS |
| Database | None |
| Brand rebrand | **Done** — Xone palette, Geist Sans, logo assets, user-facing copy |
| Static assets | Brand kit under `public/assets/XONE/`; decorative homepage images referenced |
| Documentation | AGENTS.md, README, team docs, backlog, sprint plan (v1 + v2) |
| CI/CD | GitHub Actions — lint, test, build on push/PR; Pages deploy on `main` |
| Root `package.json` | Orchestration scripts: `dev`, `build`, `test`, `install:all` |
| Testing | Vitest — pages, schemas, API client; BackEnd — supertest integration tests |

**Phase:** Sprint 2 Week 3 complete; Week 4 (deploy, legal, polish) next

The codebase has a stable dev/build pipeline, Xone branding on all primary surfaces, five marketing routes with real content, working lead capture API, and form submission end-to-end in local dev. Remaining work: production deploy, legal pages, webhook integration, QA sign-off, `BackEnd/node_modules` git untrack.

## Tech Summary

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7, TypeScript (strict), Tailwind CSS v4 |
| Typography | Geist Sans (`@fontsource-variable/geist`) |
| Routing | React Router DOM v7 |
| UI libraries | shadcn/ui, Swiper, React Icons, Lucide |
| Validation | Zod (client + server at API boundary) |
| Backend | Express 5 — lead capture API (`BackEnd/src/`) |
| Database | None (appropriate for static lead-gen v1) |
| Tooling | ESLint 9, Vitest, PostCSS, Autoprefixer |

The repository uses a **FrontEnd / BackEnd split** rather than a unified Next.js App Router structure. The original `Technical Documentation` file describes aspirational APIs and database schemas that do not exist in the current codebase.

## Key Stakeholders and Roles

| Role | Responsibility |
|------|----------------|
| **Project Manager** | Scope, sprint planning, stakeholder communication, backlog prioritization |
| **Tech Lead** | Architecture decisions, code review, security standards, AGENTS.md enforcement |
| **Frontend Developer** | Pages, components, responsive UI, brand implementation, accessibility |
| **Backend Developer** | Contact API, validation, rate limiting, optional integrations (email/CRM webhook) |
| **Fullstack Developer** | Cross-cutting features, Vite proxy config, env setup, deployment pipeline |
| **QA Engineer** | Test plans, cross-browser/mobile testing, regression on lead flows |
| **Design / Brand** | Logo, color system, imagery, copy for Xone Software Development |

Role-specific workflows are defined in `TEAM_INSTRUCTIONS.md`.

## Known Risks

1. **Documentation drift** — Original `Technical Documentation` describes a fullstack app with user APIs and PostgreSQL; actual code is a Vite SPA with no DB.
2. **Decorative homepage images** — Paths like `/assets/images/shape1.png` may 404 until assets are added or paths updated.
3. **Monolithic homepage** — Resolved (ARCH-01): sections live under `features/home/components/`.
4. **Contact form** — Resolved (API-04): server-side Zod validation + form wiring.
5. **Mobile navigation** — Resolved (PG-07): Sheet hamburger menu below `md`.
6. **BackEnd/node_modules in git index** — `.gitignore` in place; run `git rm -r --cached BackEnd/node_modules` to untrack.
7. **`.env` hygiene** — `.env` is gitignored; if previously tracked, run `git rm --cached FrontEnd/.env` locally.

## Success Criteria for Preparation Phase

- Brand consistently applied across all user-facing surfaces
- All navigation routes render real content (not stubs)
- Static assets organized under `FrontEnd/public/`
- Development and build workflows documented and verified
- Backlog and sprint plan approved by Tech Lead and PM
- Security baseline: env files gitignored, no secrets in client bundle
- Mobile-responsive layout validated on primary breakpoints

## Related Documentation

- `README.md` — Setup, development, and deployment
- `AGENTS.md` — Engineering rules and review checklist
- `TEAM_INSTRUCTIONS.md` — Role-based responsibilities
- `BACKLOGS_v1.md` — Prioritized backlog
- `SPRINT_PLAN_v1.md` — Preparation phase sprint plan
- `SPRINT_PLAN_v2.md` — Sprint 2 plan (lead capture + deploy)
- `Technical Documentation` — Read-only legacy reference (do not modify)
