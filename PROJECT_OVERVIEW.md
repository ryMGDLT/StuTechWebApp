# PROJECT_OVERVIEW.md

## Brand

**Xone Software Development**

This project is being continued under the Xone Software Development brand. Legacy references to "StuTech" in the codebase and original documentation are being phased out during the Preparation phase.

## Project Purpose

A **static lead-generation and advertising website** that showcases Xone Software Development's services, team, and process to prospective clients. The site is designed to convert visitors into qualified leads through clear messaging, service pages, and contact capture.

There is no authenticated user area, product dashboard, or database in the current v1 scope.

## Current State

| Area | Status |
|------|--------|
| Homepage | Partially built — hero, mission, team carousel, services, value props, process, email CTA, footer |
| Services page | Placeholder stub |
| About page | Placeholder stub |
| Process page | Placeholder stub |
| Contact page | Placeholder stub |
| Get Started page | Placeholder stub |
| Backend API | Minimal Express stub (`GET /` only) |
| Database | None |
| Brand rebrand | Not started — UI still shows "StuTech" |
| Static assets | Missing — `public/assets/` images referenced but not present |
| Documentation | AGENTS.md updated; README and team docs created |

**Phase:** Preparation

The codebase is in early turnover state. The frontend has a substantial homepage layout but requires asset delivery, page completion, rebranding, responsive polish, and optional backend integration for lead capture.

## Tech Summary

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7, TypeScript (strict), Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| UI libraries | Swiper, React Icons |
| Backend | Express 5 (stub only) |
| Database | None (appropriate for static lead-gen v1) |
| Tooling | ESLint 9, PostCSS, Autoprefixer |

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
2. **Missing assets** — Image paths in `Homepage.tsx` point to `/assets/images/*` but no `public/` assets folder exists.
3. **Missing `index.css`** — `Main.tsx` imports `./index.css` which does not exist; Tailwind is loaded via `App.css` instead.
4. **`.env` not gitignored** — `FrontEnd/.env` exists and is not listed in `.gitignore`.
5. **Monolithic homepage** — `Homepage.tsx` is ~830 lines; hard to maintain and test.
6. **No tests** — Zero unit, integration, or E2E tests configured.
7. **Committed `node_modules`** — `BackEnd/node_modules` appears tracked in the repository.

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
- `Technical Documentation` — Read-only legacy reference (do not modify)
