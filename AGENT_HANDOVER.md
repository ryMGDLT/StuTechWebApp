# Agent Handover — Xone Website (Fork)

**Purpose:** Onboard the next Cursor agent session working from a **fresh clone** of the forked repo, not the original StuTech workspace.

**Copy this file into the new clone** (or ensure it exists on the fork branch before cloning).

---

## 1. Context in one paragraph

This is the **Xone Software Development** lead-generation website: React 19 + Vite 7 + TypeScript (FrontEnd) and Express 5 (BackEnd) for contact/get-started lead capture. **Sprint 1 (Preparation)** and **Sprint 2 Week 3 (API + form wiring)** are complete. **Sprint 2 Week 4 (deploy, legal, QA)** is the active phase. The user forked the original team repo to **`github.com/branding/xone-website`** and prefers a **new local directory** (`xone-website`), not the old `StuTechWebApp` folder.

---

## 2. Workspace setup (do this first)

### Clone into a new directory

```powershell
cd C:\Users\shiro\dev-project-systems
git clone https://github.com/branding/xone-website.git
cd xone-website
```

### Verify remotes

```powershell
git remote -v
# origin → https://github.com/branding/xone-website.git
```

Optional: keep original team repo as `upstream` only if the user still wants to pull team changes.

### Install and smoke-check

```powershell
npm install
npm run install:all
npm run lint
npm run test
npm run build
npm run dev
```

- FrontEnd: http://localhost:3000  
- BackEnd: http://localhost:5000  
- Vite proxies `/api` → `localhost:5000` (no path rewrite)

### Open in Cursor

- **File → Open Folder** → `xone-website`  
- Start a **new agent chat** and paste the opener in §8 below.

---

## 3. What is already done (do not redo)

| Area | Status |
|------|--------|
| Xone branding, logo, palette, Geist Sans | Done |
| Routes: Services, About, Process, Contact, Get Started | Done |
| Homepage split into 6 sections; lazy routes; mobile nav (shadcn Sheet) | Done |
| `POST /api/contact`, `POST /api/get-started`, `GET /api/health` | Done |
| Zod validation, rate limiting, CORS (`CORS_ORIGIN`) | Done |
| FrontEnd forms wired via `src/lib/api.ts` + `src/lib/env.ts` | Done |
| Tests: ~35 passing (Vitest + BackEnd Node test runner) | Done |
| CI: `.github/workflows/ci.yml`, `cd.yml` | Done |
| `BackEnd/node_modules` removed from git index (FND-04) | Done |
| shadcn/ui migration (Button, Input, Card, etc.) | Done |
| npm audit: 0 vulnerabilities (last known) | Done |

**Out of scope for v1:** auth, database, legacy `Technical Documentation` CRUD APIs (read-only reference only — never modify that file).

---

## 4. Priority work (ordered)

### P0 — Must do for production v1

| ID | Task | Owner hint | Notes |
|----|------|------------|-------|
| **DEP-01** | Deploy FrontEnd to **Vercel** (new project on fork) | Fullstack | Root Directory = **`FrontEnd`** (not repo root). Connect to `branding/xone-website`. |
| **DEP-02** | Deploy BackEnd to **Railway** (or Render) | Fullstack | Service root = **`BackEnd`**. Set env from `BackEnd/.env.example`. |
| **DEP wiring** | Cross-link production URLs | Fullstack | Vercel: `VITE_API_BASE_URL` = Railway public URL. Railway: `CORS_ORIGIN` = Vercel URL (comma-separated if preview + prod). |
| **QA-01** | Manual test matrix sign-off | QA | Browsers × breakpoints; contact + get-started happy/error paths against **production** API. |

### P1 — High value before calling v1 “shipped”

| ID | Task | Notes |
|----|------|-------|
| **BRD-06** | Privacy Policy + Terms of Service pages | Footer links are currently `#`. PM may supply copy; agent can scaffold routes + placeholder sections. |
| **SEC-04** | Security headers on production | CSP, X-Frame-Options — Vercel headers or middleware. |
| **API-03** | Webhook/email for leads (optional but planned) | `CONTACT_WEBHOOK_URL` in BackEnd if implemented; test with deployed API. |

### P2 — Polish (same sprint or immediately after)

| ID | Task | Notes |
|----|------|-------|
| **QA-04** | Playwright smoke: nav + contact flow | E2E against staging or prod. |
| **BRD-07** | Open Graph + favicon polish | Social sharing for lead gen. |
| **ARCH-02 / ARCH-04** | Finish `features/` cleanup; centralize routes in `src/routes.tsx` | In progress per backlog. |
| **PERF-04 / PERF-05** | Remove homepage inline `<style>`; audit Swiper imports | Bundle/perf hygiene. |
| **DEP-04** | `robots.txt`, `sitemap.xml` | SEO for lead gen. |
| **DEP-03** | Custom domain + HTTPS | After initial deploy works. |

### P3 — Post-v1 / defer unless asked

- API-05: BackEnd TypeScript migration  
- PERF-06: Lighthouse budget  
- SEC-06: `npm audit` in CI  
- Future features in `BACKLOGS_v1.md` (case studies, blog, analytics, etc.)

---

## 5. Deployment checklist (Week 4)

### Vercel (FrontEnd)

| Setting | Value |
|---------|--------|
| Repository | `branding/xone-website` |
| Root Directory | `FrontEnd` |
| Framework | Vite |
| Build command | `npm run build` (from FrontEnd context) |
| Output | `dist` |
| Env | `VITE_API_BASE_URL=https://<railway-api-host>` |

**Do not** reuse a teammate’s Vercel project from the **original** StuTech repo unless explicitly intended.

### Railway (BackEnd)

| Setting | Value |
|---------|--------|
| Root | `BackEnd` |
| Start | `npm start` (or per `BackEnd/package.json`) |
| Env | `PORT`, `CORS_ORIGIN`, `RATE_LIMIT_*`, optional `CONTACT_WEBHOOK_URL` |

Example production env:

```env
# Railway
CORS_ORIGIN=https://your-app.vercel.app,https://your-custom-domain.com
PORT=5000

# Vercel (FrontEnd)
VITE_API_BASE_URL=https://your-api.up.railway.app
```

### After deploy

- [ ] `GET /api/health` returns OK from Railway URL  
- [ ] Contact form submits from Vercel URL (not only localhost)  
- [ ] Get Started form submits from Vercel URL  
- [ ] CORS errors absent in browser console  
- [ ] GitHub repo description set (see `FORK_SETUP.md`)  
- [ ] Vercel “Website” field on GitHub repo updated  

---

## 6. Key paths and conventions

```text
FrontEnd/src/features/{home,services,about,process,contact,get-started}/
FrontEnd/src/lib/{brand.ts,env.ts,api.ts}
FrontEnd/src/components/{Navbar,Footer,PagePlaceholder}.tsx
BackEnd/server.js
BackEnd/src/{routes,services,schemas,middleware}/
BackEnd/tests/api.test.js
```

**Engineering rules:** Read `AGENTS.md` before any code change.  
**Team workflow:** `TEAM_INSTRUCTIONS.md` — shared branch, pull before commit, run lint/test/build.  
**Backlog source of truth:** `BACKLOGS_v1.md`, `SPRINT_PLAN_v2.md` (Week 4 section).  
**Fork ops:** `FORK_SETUP.md`.

**Git:** User commits manually — **do not commit unless explicitly asked.**

---

## 7. Known issues / watch-outs

1. **Decorative homepage images** under `/assets/images/` may still 404 — non-blocking for deploy.  
2. **Footer legal links** point to `#` until BRD-06 is done.  
3. **Original repo vs fork:** Teammate may have Vercel on the **source** repo; this project deploys from the **fork** only.  
4. **`Technical Documentation`** — legacy reference; do not edit or implement its DB/auth APIs.  
5. **Uncommitted local work:** If the fork is behind the old `StuTechWebApp` folder, user should push any pending commits to `origin` before cloning, or cherry-pick/push from old folder first.

---

## 8. Opener for the new agent chat (copy-paste)

```
Workspace: fresh clone of github.com/branding/xone-website (folder: xone-website).
Read AGENT_HANDOVER.md, AGENTS.md, and SPRINT_PLAN_v2.md Week 4.

Sprint 2 Week 3 is complete. Priority: deploy FrontEnd (Vercel, Root=FrontEnd) and BackEnd (Railway), wire VITE_API_BASE_URL and CORS_ORIGIN, then BRD-06 legal pages and QA sign-off.

Do not commit unless I ask. Do not modify Technical Documentation.
```

---

## 9. Recommendations for the user

1. **Push fork first** — Ensure `branding/xone-website` has the latest branch (including Week 3 API work and doc renames) before cloning.  
2. **New Cursor folder + new chat** — Avoids mixed context with StuTech remotes and old paths.  
3. **Deploy order** — Railway API first → copy URL → Vercel with `VITE_API_BASE_URL` → update Railway `CORS_ORIGIN` with Vercel URL → retest forms.  
4. **Separate Vercel project** — New project on the fork; don’t point production at the teammate’s original-repo deployment.  
5. **Legal copy** — Provide Privacy/Terms text early; agent can wire routes and layout while copy is drafted.  
6. **Webhook** — API-03 can wait until deploy works; use a test webhook (e.g. webhook.site) for first validation.  
7. **Close the old workspace** — After clone works, archive or ignore `StuTechWebApp` to prevent editing the wrong tree.

---

## 10. Success criteria for the next session

Week 4 is “done” when:

- [ ] Production FrontEnd and BackEnd are live and forms work end-to-end  
- [ ] Privacy Policy and Terms are real pages linked from Footer  
- [ ] Manual QA matrix completed on production (or staging)  
- [ ] `BACKLOGS_v1.md` / `SPRINT_PLAN_v2.md` updated to reflect Week 4 completion (when user asks)  

---

*Handover created: June 2026 — fork transition from StuTechWebApp → branding/xone-website*
