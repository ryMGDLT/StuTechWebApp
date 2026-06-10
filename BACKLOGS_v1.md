# BACKLOGS_v1.md

Version 1 backlog for the Xone Software Development lead-generation website.

**Phase:** Preparation  
**Last updated:** Preparation turnover

Priority key: **P0** critical · **P1** high · **P2** medium · **P3** low

---

## Epic: Project Foundation

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| FND-01 | P0 | Add root and FrontEnd `.gitignore` entries for `.env`, `node_modules`, `dist` | `FrontEnd/.env` currently not ignored |
| FND-02 | P0 | Create `FrontEnd/.env.example` with safe placeholders | Document `VITE_API_BASE_URL` only |
| FND-03 | P0 | Fix `Main.tsx` CSS import (`index.css` missing) | Done — `index.css` is Tailwind entry |
| FND-04 | P1 | Remove `BackEnd/node_modules` from git tracking | Add `BackEnd/.gitignore` |
| FND-05 | P1 | Add root-level dev scripts or document two-terminal workflow | See README |
| FND-06 | P2 | Add CI workflow: lint + build on PR | Done — `.github/workflows/ci.yml` + `cd.yml` |
| FND-07 | P2 | Configure ESLint for TypeScript files | Done — `typescript-eslint` for `*.{ts,tsx}` |
| FND-08 | P1 | Add Vitest to FrontEnd; `npm run test` in CI | Done — Navbar smoke test |

---

## Epic: Brand and Content (Xone)

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| BRD-01 | P0 | Rebrand all user-facing copy: StuTech → Xone Software Development | Navbar, footer, homepage, titles |
| BRD-02 | P0 | Update `index.html` title and meta description | Currently "Vite + React" |
| BRD-03 | P1 | Replace placeholder team members with real or approved stock profiles | Paths like `/path-to-john-smith-image.jpg` are broken |
| BRD-04 | P1 | Deliver logo and brand assets to `FrontEnd/public/assets/` | Logo.png, shapes, team images referenced in code |
| BRD-05 | P2 | Define color tokens in Tailwind config | Reduce hardcoded hex in components |
| BRD-06 | P2 | Legal pages: Privacy Policy, Terms of Service | Footer links currently `#` |
| BRD-07 | P3 | Favicon and Open Graph meta tags | Social sharing for lead gen |

---

## Epic: Page Completion

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| PG-01 | P0 | Implement Services page | Replace stub in `App.tsx` |
| PG-02 | P0 | Implement About page | Company story for Xone |
| PG-03 | P0 | Implement Process page | Expand homepage "How We Work" content |
| PG-04 | P0 | Implement Contact page | Form + contact details |
| PG-05 | P1 | Implement Get Started page | Lead qualification CTA |
| PG-06 | P1 | Extract shared Footer component | Duplicated patterns in Homepage |
| PG-07 | P2 | Add mobile hamburger navigation | Navbar hidden links on small screens |
| PG-08 | P2 | Lazy-load non-home routes | Reduce initial bundle |

---

## Epic: Frontend Architecture

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| ARCH-01 | P1 | Split `Homepage.tsx` into feature sections | ~830 lines — mission, team, services, CTA |
| ARCH-02 | P1 | Introduce `src/features/` structure per AGENTS.md | contact, services, home |
| ARCH-03 | P2 | Shared UI primitives: Button, SectionHeading, Card | Consistent hover/press states |
| ARCH-04 | P2 | Centralize route definitions | `src/routes.tsx` |
| ARCH-05 | P3 | Add `src/lib/env.ts` for `import.meta.env` access | Single validated entry point |

---

## Epic: Lead Capture and Backend

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| API-01 | P1 | `POST /api/contact` with Zod validation | name, email, message fields |
| API-02 | P1 | Rate limiting on contact endpoint | Prevent abuse |
| API-03 | P2 | Email notification or webhook integration | SendGrid, Resend, or CRM |
| API-04 | P2 | Wire homepage email CTA and contact form to API | Remove non-functional inputs |
| API-05 | P3 | Migrate `BackEnd/server.js` to TypeScript | `src/` layout per AGENTS.md |
| API-06 | P3 | Health check route `GET /api/health` | Deployment monitoring |

**Note:** Legacy `Technical Documentation` user CRUD APIs are **not** in v1 scope unless product direction changes.

---

## Epic: Security (Known Issues)

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| SEC-01 | P0 | Ensure `.env` is not committed | Contains `VITE_BACKEND_URL` with LAN IP |
| SEC-02 | P1 | Server-side validation for all form fields | Client-only validation is insufficient |
| SEC-03 | P1 | Sanitize/validate email input on contact forms | Homepage has uncontrolled email input |
| SEC-04 | P2 | Add security headers on production host | CSP, X-Frame-Options via hosting config |
| SEC-05 | P2 | CORS allowlist for API | When backend is public |
| SEC-06 | P3 | Dependency audit (`npm audit`) in CI | FrontEnd and BackEnd |

---

## Epic: Performance (Known Issues)

| ID | Priority | Item | Notes |
|----|----------|------|-------|
| PERF-01 | P1 | Responsive typography — replace `text-8xl` on mobile | Hero overflows small screens |
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
| QA-02 | P2 | Add Vitest for Zod schemas and utilities | FrontEnd |
| QA-03 | P2 | Add API integration tests | BackEnd when routes exist |
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
