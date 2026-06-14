# SPRINT_PLAN_v1.md

Sprint plan for the **Preparation phase** of the Xone Software Development lead-generation website.

**Sprint duration suggestion:** 2 weeks  
**Team assumption:** 1 PM, 1 Tech Lead, 1 Frontend Dev, 1 Fullstack Dev (part-time Backend), 1 QA (part-time)

---

## Sprint Goal

Establish a stable, rebranded, document-aligned foundation so the team can build and ship marketing pages with confidence in Sprint 2.

**Exit criteria**

- Project builds and runs locally without errors
- Homepage displays Xone branding with working static assets
- All five stub routes render meaningful placeholder or full content
- `.env` handling is secure and documented
- Backlog items FND-01 through FND-03 and BRD-01, BRD-02, SEC-01 are complete

---

## Sprint 1 — Week 1: Stabilize and Rebrand

### Theme

Fix broken foundations, secure repo hygiene, apply Xone brand to existing UI.

| Task | Role | Backlog | Est. | Dependencies |
|------|------|---------|------|--------------|
| Audit repo; confirm local dev steps in README | Fullstack | FND-05 | 2h | — |
| Add `.gitignore` rules for `.env`, `node_modules` | Fullstack | FND-01 | 1h | — |
| Create `.env.example` files | Fullstack | FND-02 | 1h | FND-01 |
| Fix CSS entry (`index.css` / Tailwind bootstrap) | Frontend | FND-03 | 2h | — |
| Verify `npm run dev` and `npm run build` | QA | QA-01 | 2h | FND-03 |
| Rebrand Navbar, footer, homepage copy to Xone | Frontend | BRD-01 | 4h | — |
| Update HTML title and meta description | Frontend | BRD-02 | 1h | BRD-01 |
| Collect and add logo + hero assets to `public/assets/` | PM + Frontend | BRD-04 | 4h | — |
| Remove `BackEnd/node_modules` from git | Fullstack | FND-04 | 2h | — |
| PR review and merge foundation PRs | Tech Lead | — | 4h | All above |

### Week 1 Acceptance Criteria

- [x] `cd FrontEnd && npm install && npm run build` succeeds
- [x] No `.env` file tracked in git (gitignored; use `git rm --cached` if locally tracked)
- [x] User-visible strings say "Xone Software Development" (or approved short name "Xone")
- [x] Logo and brand assets load without 404 (`public/assets/XONE/xone_brand_kit/`)
- [x] Browser tab title reflects Xone brand

**Week 1 stretch (completed early):** Services, About, Process, and Contact pages implemented; shared Footer extracted; team carousel uses initials avatars.

---

## Sprint 1 — Week 2: Pages and Structure

### Theme

Replace route stubs, begin homepage decomposition, mobile polish.

| Task | Role | Backlog | Est. | Dependencies |
|------|------|---------|------|--------------|
| Implement Services page (content from PM) | Frontend | PG-01 | 6h | BRD-01 |
| Implement About page | Frontend | PG-02 | 4h | BRD-01 |
| Implement Process page | Frontend | PG-03 | 4h | BRD-01 |
| Implement Contact page (UI only, no API yet) | Frontend | PG-04 | 6h | BRD-01 |
| Implement Get Started page | Frontend | PG-05 | 4h | BRD-01 |
| Extract Footer component | Frontend | PG-06 | 3h | PG-01–05 |
| Mobile nav (hamburger menu) | Frontend | PG-07 | 6h | PG-01–05 |
| Begin splitting Homepage into section components | Frontend | ARCH-01 | 8h | BRD-04 |
| Responsive typography pass on hero | Frontend | PERF-01 | 4h | BRD-04 |
| Cross-browser smoke test all routes | QA | QA-01 | 4h | PG-01–05, PG-07 |
| Sprint review with PM; groom Sprint 2 backlog | PM + Tech Lead | — | 2h | QA sign-off |

### Week 2 Acceptance Criteria

- [x] `/services`, `/about`, `/process`, `/contact`, `/get-started` show real content (not single-line stubs)
- [x] Mobile navigation works at 375px width
- [x] No horizontal scroll on homepage at mobile breakpoints
- [x] Homepage split into at least 3 section components (hero, team, services or equivalent)
- [ ] QA test matrix completed with no P0 defects open

---

## Role Task Summary

| Role | Week 1 focus | Week 2 focus |
|------|--------------|--------------|
| **PM** | Asset coordination, copy approval, sprint ceremonies | Accept pages, prioritize Sprint 2 (API) |
| **Tech Lead** | Review foundation PRs, env security | Review architecture split, mobile PRs |
| **Frontend Dev** | Rebrand, CSS fix, assets | All pages, Footer, mobile nav, homepage split |
| **Fullstack Dev** | Gitignore, env examples, dev docs | Prepare contact API design doc for Sprint 2 |
| **Backend Dev** | Optional: health route sketch | Design `POST /api/contact` schema (no impl required) |
| **QA** | Build verification | Full route smoke + mobile regression |

---

## Dependencies Graph

```text
FND-01 (.gitignore)
  └── FND-02 (.env.example)
  └── SEC-01 (no committed secrets)

FND-03 (CSS fix)
  └── Build passes
      └── QA Week 1 sign-off

BRD-01 (rebrand)
  └── BRD-02 (meta)
  └── PG-01 … PG-05 (all pages)

BRD-04 (assets)
  └── PERF-01 (responsive hero)
  └── ARCH-01 (homepage split)

PG-01 … PG-05 (pages)
  └── PG-06 (Footer)
  └── PG-07 (mobile nav)
  └── QA Week 2 sign-off
```

---

## Sprint 2 Preview (Not in Scope for This Plan)

Prepare backlog for immediate follow-up:

1. **API-01 / API-02** — Contact endpoint with validation and rate limiting
2. **API-04** — Wire contact forms to API
3. **ARCH-02** — Full `features/` migration
4. **DEP-01** — Production static deploy
5. **BRD-06** — Privacy Policy and Terms pages

---

## Timeline Overview

| Week | Milestone |
|------|-----------|
| Week 1 | Dev environment stable, Xone brand applied, core pages (Services/About/Process/Contact), Footer extracted |
| Week 2 | Get Started page, mobile nav, homepage section extraction, lazy-loaded routes — **complete** |
| Week 3+ (Sprint 2) | Lead capture API, deployment, legal pages |

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Brand assets delayed | Use temporary Xone text-only brand; swap assets in fast-follow PR |
| Copy not approved | PM delivers approved copy by end of Week 1 Day 2 |
| Homepage refactor too large | Split into 3 PRs: hero, team, services/CTA |
| Backend resource unavailable | Contact page ships with `mailto:` fallback until Sprint 2 |

---

## Reporting

- Daily standup: blockers, PRs ready for review
- Mid-sprint check (Day 5): Week 1 acceptance criteria status
- Sprint review (Day 10): demo all routes on mobile + desktop
- Retrospective: document lessons in team wiki; update BACKLOGS_v1.md priorities
