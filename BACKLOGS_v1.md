# BACKLOGS_v1.md

Version 1 backlog for the Xone Software Development lead-generation website.

**Phase:** Sprint 2 (Week 3 complete; Week 4 next)  
**Last updated:** Sprint 2 Week 3 (June 2026)

Priority key: **P0** critical · **P1** high · **P2** medium · **P3** low

---

## Epic: Project Foundation

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| FND-01 | P0 | Add root and FrontEnd `.gitignore` entries for `.env`, `node_modules`, `dist` | Done — `.env` gitignored; run `git rm --cached FrontEnd/.env` if previously tracked |
| FND-02 | P0 | Create `FrontEnd/.env.example` with safe placeholders | Done — `VITE_API_BASE_URL` documented |
| FND-03 | P0 | Fix `Main.tsx` CSS import (`index.css` missing) | Done — `index.css` is Tailwind entry |
| FND-04 | P1 | Remove `BackEnd/node_modules` from git tracking | Done — `git rm -r --cached` applied |
| FND-05 | P1 | Add root-level dev scripts or document two-terminal workflow | See README |
| FND-06 | P2 | Add CI workflow: lint + build on PR | Done — `.github/workflows/ci.yml` + `cd.yml` |
| FND-07 | P2 | Configure ESLint for TypeScript files | Done — `typescript-eslint` for `*.{ts,tsx}` |
| FND-08 | P1 | Add Vitest to FrontEnd; `npm run test` in CI | Done — Navbar smoke test |

---

## Epic: Brand and Content (Xone)

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| BRD-01 | P0 | Rebrand all user-facing copy: StuTech → Xone Software Development | Done — Xone palette, Geist Sans, copy updated; Poppins/Inter removed from Tailwind config |
| BRD-02 | P0 | Update `index.html` title and meta description | Done — Xone title, description, icon |
| BRD-03 | P1 | Replace placeholder team members with real or approved stock profiles | Done — initials avatars in team carousel (no 404 images) |
| BRD-04 | P1 | Deliver logo and brand assets to `FrontEnd/public/assets/` | Done — `public/assets/XONE/xone_brand_kit/` |
| BRD-05 | P2 | Define color tokens in Tailwind config | Done — Xone palette in `index.css` + `brand.ts` |
| BRD-06 | P2 | Legal pages: Privacy Policy, Terms of Service | Footer links currently `#` |
| BRD-07 | P3 | Favicon and Open Graph meta tags | Social sharing for lead gen |

---

## Epic: Page Completion

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| PG-01 | P0 | Implement Services page | Done — `features/services/` |
| PG-02 | P0 | Implement About page | Done — `features/about/` |
| PG-03 | P0 | Implement Process page | Done — `features/process/` |
| PG-04 | P0 | Implement Contact page | Done — `features/contact/` with Zod schema + API wiring |
| PG-05 | P1 | Implement Get Started page | Done — `features/get-started/` with lead qualification form |
| PG-06 | P1 | Extract shared Footer component | Done — `components/Footer.tsx` used on Homepage + pages |
| PG-07 | P2 | Add mobile hamburger navigation | Done — shadcn Sheet mobile menu at `<md` |
| PG-08 | P2 | Lazy-load non-home routes | Done — `React.lazy` + `Suspense` in `App.tsx` |

---

## Epic: Frontend Architecture

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| ARCH-01 | P1 | Split `Homepage.tsx` into feature sections | Done — 6 sections under `features/home/components/` |
| ARCH-02 | P1 | Introduce `src/features/` structure per AGENTS.md | In progress — services, about, process, contact modules added |
| ARCH-03 | P2 | Shared UI primitives: Button, SectionHeading, Card | Done — shadcn/ui Button, Input, Card, Badge |
| ARCH-06 | P1 | Migrate interactive UI to shadcn/ui | Done — init + Navbar, Homepage CTAs, route placeholders |
| ARCH-04 | P2 | Centralize route definitions | `src/routes.tsx` |
| ARCH-05 | P3 | Add `src/lib/env.ts` for `import.meta.env` access | Done — `getApiBaseUrl()`, `buildApiUrl()` |

---

## Epic: Lead Capture and Backend

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| API-01 | P1 | `POST /api/contact` with Zod validation | Done — `BackEnd/src/routes/contact-routes.js` |
| API-02 | P1 | Rate limiting on contact endpoint | Done — `express-rate-limit`, 10 req / 15 min default |
| API-03 | P2 | Email notification or webhook integration | Optional webhook via `CONTACT_WEBHOOK_URL` (Week 4) |
| API-04 | P2 | Wire homepage email CTA and contact form to API | Done — forms POST to API via Vite proxy |
| API-05 | P3 | Migrate `BackEnd/server.js` to TypeScript | `src/` layout started in JS; TS migration pending |
| API-06 | P3 | Health check route `GET /api/health` | Done — deployment monitoring endpoint |

**Note:** Legacy `Technical Documentation` user CRUD APIs are **not** in v1 scope unless product direction changes.

---

## Epic: Security (Known Issues)

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| SEC-01 | P0 | Ensure `.env` is not committed | Done — gitignored; verify with `git ls-files` (not tracked) |
| SEC-02 | P1 | Server-side validation for all form fields | Done — Zod at API boundary (contact + get-started) |
| SEC-03 | P1 | Sanitize/validate email input on contact forms | Done — server + client Zod; homepage CTA routes to Get Started |
| SEC-04 | P2 | Add security headers on production host | CSP, X-Frame-Options via hosting config |
| SEC-05 | P2 | CORS allowlist for API | Done — `CORS_ORIGIN` in `BackEnd/.env` |
| SEC-06 | P3 | Dependency audit (`npm audit`) in CI | FrontEnd and BackEnd |

---

## Epic: Performance (Known Issues)

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| PERF-01 | P1 | Responsive typography — replace `text-8xl` on mobile | Done — mobile-first hero scale; `overflow-x-hidden`; removed `min-w-[100vw]` |
| PERF-02 | P1 | Optimize images (WebP, sizing) | When assets are added |
| PERF-03 | P2 | Self-host or subset Google Fonts | External font requests add latency |
| PERF-04 | P2 | Remove inline `<style>` blocks from Homepage | Move to CSS modules or Tailwind |
| PERF-05 | P2 | Audit Swiper bundle impact | Import only required modules |
| PERF-06 | P3 | Lighthouse performance budget | Target LCP < 2.5s on 4G |

---

## Epic: Quality and Testing

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| QA-01 | P1 | Manual test matrix: browsers × breakpoints | Document in QA wiki |
| QA-02 | P2 | Add Vitest for Zod schemas and utilities | Done — contact form schema tests |
| QA-03 | P2 | Add API integration tests | Done — `BackEnd/tests/api.test.js` (health, contact, get-started, rate limit) |
| QA-04 | P3 | Playwright smoke test: nav + contact flow | E2E |

---

## Epic: Deployment

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| DEP-01 | P1 | Static deploy pipeline for FrontEnd (`dist/`) | Vercel, Netlify, Cloudflare Pages |
| DEP-02 | P2 | Backend deploy for API | Railway, Render, or similar |
| DEP-03 | P2 | Custom domain + HTTPS | Production requirement |
| DEP-04 | P3 | `robots.txt` and `sitemap.xml` | SEO for lead gen |

---

## Future Feature Suggestions (Post-v1)

Prioritized for product discussion after Preparation phase:

| Priority | Feature | Rationale |
|----------|---------|-----------|
| P1 | Case studies / portfolio section | Social proof for conversions |
| P1 | Blog or insights section | SEO and thought leadership |
| P2 | Live chat or scheduling widget | Calendly, Crisp, Intercom |
| P2 | Analytics (privacy-conscious) | Plausible, GA4 with consent banner |
| P2 | Multi-language support | If targeting non-English markets |
| P3 | CMS integration | Contentful/Sanity for non-dev edits |
| P3 | A/B testing on CTAs | Optimize conversion rate |

---

## Out of Scope (v1)

- User registration and authentication
- PostgreSQL / user database (legacy docs only)
- Admin dashboard
- Product features described in original `Technical Documentation` API list
