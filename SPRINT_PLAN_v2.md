# SPRINT_PLAN_v2.md

Sprint plan for **Sprint 2** of the Xone Software Development lead-generation website.

**Sprint duration:** 2 weeks  
**Team assumption:** 1 PM, 1 Tech Lead, 1 Frontend Dev, 1 Fullstack Dev (part-time Backend), 1 QA (part-time)

**Prerequisite:** Preparation phase (Sprint 1) complete — stable build, Xone branding, five marketing routes, mobile nav, homepage decomposition.

---

## Sprint 2 Goal

Deliver working lead capture end-to-end: validated Express API, rate limiting, CORS, and frontend form wiring via Vite proxy.

**Exit criteria**

- `POST /api/contact` and `POST /api/get-started` accept validated submissions
- `GET /api/health` available for deploy monitoring
- Contact and Get Started forms submit to API with accessible success/error feedback
- Server-side Zod validation is source of truth
- Integration tests pass in CI

---

## Week 3 — Lead Capture API + Form Wiring

### Theme

Backend API layer, security baseline, frontend integration.

| Task | Role | Backlog | Est. | Status |
|------|------|---------|------|--------|
| `POST /api/contact` with Zod validation | Backend | API-01, SEC-02, SEC-03 | 4h | **Done** |
| `POST /api/get-started` with Zod validation | Backend | API-01 | 3h | **Done** |
| Rate limiting on public lead endpoints | Backend | API-02 | 2h | **Done** |
| `GET /api/health` | Backend | API-06 | 1h | **Done** |
| CORS allowlist via `BackEnd/.env` | Fullstack | SEC-05 | 2h | **Done** |
| `src/lib/env.ts` for `VITE_API_BASE_URL` | Fullstack | ARCH-05 | 1h | **Done** |
| Wire Contact + Get Started forms to API | Fullstack | API-04 | 4h | **Done** |
| Homepage CTA email → Get Started flow | Frontend | API-04 | 2h | **Done** |
| API integration tests (Node test runner) | Backend / QA | QA-03 | 4h | **Done** |
| Frontend API client + service tests | Fullstack | QA-02 | 2h | **Done** |
| Update README, PROJECT_OVERVIEW, backlog | PM / Fullstack | — | 2h | **Done** |

### Week 3 Acceptance Criteria

- [x] `npm run test` passes at repo root (FrontEnd Vitest + BackEnd Node test runner)
- [x] `npm run lint` and `npm run build` pass in FrontEnd
- [x] `POST /api/contact` returns 201 for valid payload, 400 for invalid
- [x] `POST /api/get-started` returns 201 for valid payload, 400 for invalid
- [x] Rate limit returns 429 after threshold (10 req / 15 min default)
- [x] `GET /api/health` returns `{ success: true, status: "ok" }`
- [x] Contact form shows inline success/error (no `alert()`)
- [x] Get Started form shows loading state and API errors
- [x] Homepage CTA passes email to Get Started via router state
- [x] Vite proxy `/api` → `localhost:5000` without path rewrite
- [x] `BackEnd/.env.example` documents PORT, CORS_ORIGIN, RATE_LIMIT settings
- [x] No secrets in FrontEnd bundle (`VITE_*` only)

---

## Week 4 Preview — Deploy, Legal, Polish

### Theme

Production deploy, legal pages, QA sign-off, optional integrations.

| Task | Role | Backlog | Est. | Dependencies |
|------|------|---------|------|--------------|
| Static deploy pipeline verification | Fullstack | DEP-01 | 4h | Week 3 API |
| Backend deploy (Railway/Render) | Fullstack | DEP-02 | 4h | Week 3 API |
| Privacy Policy + Terms pages | Frontend / PM | BRD-06 | 6h | PM copy |
| Email/webhook integration | Backend | API-03 | 6h | Deployed API |
| ~~`git rm --cached BackEnd/node_modules`~~ | Fullstack | FND-04 | — | **Done** (pre–Week 3) |
| QA test matrix sign-off | QA | QA-01 | 4h | Week 3 forms |
| Playwright smoke: nav + contact flow | QA | QA-04 | 6h | Week 3 forms |
| Security headers on production host | Tech Lead | SEC-04 | 2h | DEP-01 |
| Open Graph + favicon polish | Frontend | BRD-07 | 3h | — |
| Full `features/` migration cleanup | Frontend | ARCH-02, ARCH-04 | 4h | — |

### Week 4 Acceptance Criteria (planned)

- [ ] FrontEnd deploys to GitHub Pages (or chosen host) with working client routes
- [ ] BackEnd API deployed with env vars set in host dashboard
- [ ] Privacy Policy and Terms linked from Footer (not `#`)
- [ ] Cross-browser smoke test matrix completed
- [ ] Optional: contact webhook delivers test lead
- [x] FND-04: `BackEnd/node_modules` untracked in git index

---

## Role Task Summary

| Role | Week 3 focus | Week 4 focus |
|------|--------------|--------------|
| **PM** | Accept Week 3 API criteria; groom Week 4 legal copy | Legal page copy, sprint review |
| **Tech Lead** | Review API security, CORS, validation | Security headers, deploy sign-off |
| **Frontend Dev** | CTA flow, form UX polish | Legal pages, OG meta |
| **Fullstack Dev** | API wiring, env, proxy, docs | Deploy pipeline, backend host |
| **Backend Dev** | Routes, validation, rate limit, tests | Webhook integration |
| **QA** | API integration test review | Full regression matrix |

---

## Dependencies Graph

```text
API-01 (contact + get-started endpoints)
  └── SEC-02 / SEC-03 (server-side validation)
  └── API-02 (rate limiting)
  └── SEC-05 (CORS)
  └── API-04 (form wiring)
      └── ARCH-05 (env.ts)
      └── QA-03 (integration tests)

API-06 (health)
  └── DEP-02 (backend deploy monitoring)

Week 3 complete
  └── DEP-01 / DEP-02 (deploy)
  └── BRD-06 (legal pages)
  └── API-03 (webhook — optional)
```

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| GitHub Pages static-only (no API proxy) | Deploy BackEnd separately; set `VITE_API_BASE_URL` in FrontEnd production env |
| Rate limit too aggressive for shared IPs | Tune `RATE_LIMIT_MAX` via env; document in README |
| Webhook provider delays | Week 4 optional; v1 stores success response without persistence |
| ~~`BackEnd/node_modules` still indexed~~ | Resolved — FND-04 complete |

---

## Reporting

- Daily standup: API wiring status, test failures
- Mid-sprint check (Week 3 Day 3): form submission demo on local dev
- Sprint review (Week 4 Day 5): demo deploy + legal pages
- Retrospective: update BACKLOGS_v1.md and PROJECT_OVERVIEW.md
