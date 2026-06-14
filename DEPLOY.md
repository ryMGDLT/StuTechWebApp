# Deployment guide — Vercel (FrontEnd) + Railway (BackEnd)

Production hosting for **DEP-01** and **DEP-02** (Sprint 2 Week 4).

| Service | Host | Repo path | Config in repo |
|---------|------|-----------|----------------|
| FrontEnd (React + Vite SPA) | **Vercel** | `FrontEnd/` | `FrontEnd/vercel.json` |
| BackEnd (Express API) | **Railway** | `BackEnd/` | `BackEnd/railway.json` |

**GitHub remote:** `github.com/branding/xone-website`  
**Local workspace folder:** `xone-swe-web` (name is your choice; clone example below)

---

## Deploy order (important)

1. **Railway** — deploy BackEnd first and note the public API URL.
2. **Vercel** — deploy FrontEnd with `VITE_API_BASE_URL` pointing at Railway.
3. **CORS** — update Railway `CORS_ORIGIN` with the Vercel production URL (and preview URL if needed).
4. **Verify** — health check, contact form, get-started form from the live Vercel site.

---

## Prerequisites

- Code pushed to `branding/xone-website` (branch you connect to Vercel/Railway, usually `main`).
- [Vercel](https://vercel.com) account linked to GitHub.
- [Railway](https://railway.app) account linked to GitHub.
- Node.js 20+ locally (matches CI).

Local smoke check before deploying:

```powershell
cd C:\Users\shiro\dev-project-systems\xone-swe-web
npm run install:all
npm run lint
npm run test
npm run build
```

---

## DEP-02 — BackEnd on Railway

### Dashboard setup

1. **New Project** → **Deploy from GitHub repo** → select `branding/xone-website`.
2. Add a service and set **Root Directory** = `BackEnd`.
3. Railway uses Nixpacks (Node.js) and reads `BackEnd/railway.json` for the start command (`npm start` → `node server.js`).
4. **Settings → Networking → Generate Domain** — copy the public URL (e.g. `https://xone-api-production.up.railway.app`).

### Environment variables

Set in **Railway → Service → Variables** (from `BackEnd/.env.example`):

| Variable | Required | Example / notes |
|----------|----------|-----------------|
| `PORT` | No | Railway injects `PORT`; app defaults to `5000` if unset |
| `CORS_ORIGIN` | Yes (prod) | Comma-separated browser origins. Start with `http://localhost:3000` for local dev; after Vercel deploy add production URL |
| `RATE_LIMIT_WINDOW_MS` | No | Default `900000` (15 min) |
| `RATE_LIMIT_MAX` | No | Default `10` requests per window |
| `CONTACT_WEBHOOK_URL` | No | Optional webhook for lead submissions |

**Initial CORS (before Vercel URL is known):**

```env
CORS_ORIGIN=http://localhost:3000
```

**After Vercel deploy:**

```env
CORS_ORIGIN=https://your-app.vercel.app,https://your-custom-domain.com
```

### Verify Railway

```powershell
curl https://YOUR-RAILWAY-DOMAIN.up.railway.app/api/health
```

Expected: JSON health response (200 OK).

### Railway CLI (optional)

```powershell
npm i -g @railway/cli
cd BackEnd
railway login
railway link          # select project + BackEnd service
railway up            # deploy from local (or rely on GitHub auto-deploy)
railway variables set CORS_ORIGIN=http://localhost:3000
railway domain        # generate public URL
```

---

## DEP-01 — FrontEnd on Vercel

### Dashboard setup

1. **Add New → Project** → import `branding/xone-website`.
2. **Root Directory** = `FrontEnd` (required — do not use repo root).
3. **Framework Preset** = Vite (auto-detected).
4. **Build Command** = `npm run build`
5. **Output Directory** = `dist`
6. **Install Command** = `npm ci` (or `npm install`)

`FrontEnd/vercel.json` adds SPA rewrites so React Router client routes (e.g. `/contact`, `/get-started`) work on refresh.

### Environment variables

Set in **Vercel → Project → Settings → Environment Variables**:

| Variable | Environments | Value |
|----------|--------------|-------|
| `VITE_API_BASE_URL` | Production, Preview | `https://YOUR-RAILWAY-DOMAIN.up.railway.app` (no trailing slash) |

Use a placeholder until Railway is live, then redeploy after updating.

**Do not** set server secrets here — only `VITE_*` client-safe vars belong on Vercel.

Optional (GitHub Pages CD only; not needed for Vercel root deploy):

| Variable | Value |
|----------|-------|
| `VITE_BASE_PATH` | `/` (default) |

### Verify Vercel

1. Open production URL — homepage loads.
2. Navigate to `/contact` and refresh — no 404 (SPA rewrite).
3. Submit contact and get-started forms — no CORS errors in browser devtools.
4. Network tab shows POST to `https://YOUR-RAILWAY-DOMAIN.../api/contact`.

### Vercel CLI (optional)

```powershell
npm i -g vercel
cd FrontEnd
vercel login
vercel link              # link to new or existing project
vercel env add VITE_API_BASE_URL production
# paste Railway URL when prompted
vercel --prod
```

---

## Cross-linking checklist

After both services are live:

- [ ] Railway `CORS_ORIGIN` includes Vercel production URL (and preview URL if testing PR previews).
- [ ] Vercel `VITE_API_BASE_URL` = Railway public origin (HTTPS, no trailing slash).
- [ ] `GET /api/health` OK from Railway URL.
- [ ] Contact + get-started forms work from Vercel URL.
- [ ] GitHub repo **Website** field = Vercel production URL (see `FORK_SETUP.md`).

---

## GitHub Actions vs Vercel

- **CI** (`.github/workflows/ci.yml`) — lint, test, build on every push/PR. Keep green before deploy.
- **CD** (`.github/workflows/cd.yml`) — deploys static `FrontEnd/dist` to **GitHub Pages**. This is separate from Vercel; for production v1 use **Vercel + Railway** per DEP-01/DEP-02. Disable or ignore Pages CD if Vercel is the primary host.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| CORS error in browser | `CORS_ORIGIN` missing Vercel URL | Add exact origin (scheme + host, no path) on Railway; redeploy not always required |
| Form POST to wrong host | `VITE_API_BASE_URL` unset or stale | Set on Vercel; trigger redeploy |
| 404 on `/contact` refresh | Missing SPA rewrite | Ensure `FrontEnd/vercel.json` is deployed; Root Directory = `FrontEnd` |
| API 502 on Railway | Wrong root or start command | Root = `BackEnd`; start = `npm start` |
| Build fails on Vercel | Wrong root directory | Root Directory must be `FrontEnd`, not repo root |

---

## Security notes (AGENTS.md)

- Never commit `.env` files.
- Never put non-`VITE_` secrets in FrontEnd env.
- Validate all API input on the server (already implemented via Zod).
- Optional follow-up: **SEC-04** security headers on Vercel.

---

## Related docs

- `AGENT_HANDOVER.md` — session context and Week 4 priorities
- `AGENTS.md` — engineering rules
- `FORK_SETUP.md` — fork and GitHub repo metadata
- `SPRINT_PLAN_v2.md` — Week 4 deployment tasks
- `BackEnd/.env.example` — server env template
- `FrontEnd/.env.example` — client env template
