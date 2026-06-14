# Xone Software Development — Lead Generation Website

Static marketing website for **Xone Software Development**, built to attract prospective clients and capture leads. The site showcases services, team, process, and contact pathways.

> **Note:** The legacy file `Technical Documentation` is a read-only reference from the previous project phase. It describes APIs and database schemas that are **not implemented** in the current codebase. Use this README and `PROJECT_OVERVIEW.md` as the source of truth.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7, TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router DOM v7 |
| UI | shadcn/ui, Swiper, React Icons, Lucide |
| Backend | Express 5 (lead capture API) |
| Database | None (static site v1) |

## Project Structure

```text
xone-website/
├── FrontEnd/                 # Vite + React SPA
│   ├── public/               # Static assets (images, favicon)
│   ├── src/
│   │   ├── components/       # Shared UI (Navbar, Footer, etc.)
│   │   ├── features/         # Feature modules (services, about, process, contact)
│   │   ├── views/            # Homepage and legacy page-level components
│   │   ├── App.tsx           # Router setup
│   │   └── Main.tsx          # React entry point
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── BackEnd/                  # Express API (lead capture)
│   ├── src/                  # Routes, schemas, services, middleware
│   ├── server.js             # Entry point (starts Express app)
│   └── .env.example          # PORT, CORS_ORIGIN, RATE_LIMIT_*
├── package.json              # Root scripts: dev, build, test, start
├── AGENTS.md                 # Engineering rules (required reading)
├── PROJECT_OVERVIEW.md       # PM executive summary
├── TEAM_INSTRUCTIONS.md      # Role-based workflows
├── BACKLOGS_v1.md            # Prioritized backlog
├── SPRINT_PLAN_v1.md         # Preparation phase sprint plan
└── SPRINT_PLAN_v2.md         # Sprint 2 plan (lead capture + deploy)
```

The frontend follows a **feature-based architecture** documented in `AGENTS.md`. Marketing routes live under `src/features/`; the homepage orchestrates section components from `features/home/components/`.

## Prerequisites

- **Node.js** 20 LTS or later (recommended)
- **npm** 10+

## Setup and Installation

### 1. Clone the repository

```sh
git clone https://github.com/branding/xone-website.git
cd xone-website
```

### 2. Install dependencies (recommended — from repo root)

```sh
npm install
npm run install:all
```

This installs root orchestration tools plus `FrontEnd/` and `BackEnd/` packages.

**Alternative:** install each package separately with `npm install` inside `FrontEnd/` and `BackEnd/`.

### 3. Configure environment variables

**Frontend** (`FrontEnd/.env`):

```sh
cd FrontEnd
cp .env.example .env
```

**Backend** (`BackEnd/.env`):

```sh
cd BackEnd
cp .env.example .env
```

Edit `.env` files with local values. Only `VITE_*` variables are exposed to the browser.

| Variable | Package | Required | Description |
|----------|---------|----------|-------------|
| `VITE_API_BASE_URL` | FrontEnd | No | API origin for production. Leave empty in local dev to use Vite proxy (`/api` → `localhost:5000`) |
| `PORT` | BackEnd | No (default 5000) | Express listen port |
| `CORS_ORIGIN` | BackEnd | No (default `http://localhost:3000`) | Comma-separated allowed browser origins |
| `RATE_LIMIT_WINDOW_MS` | BackEnd | No (default 900000) | Rate limit window in ms (15 min) |
| `RATE_LIMIT_MAX` | BackEnd | No (default 10) | Max requests per IP per window on lead endpoints |
| `CONTACT_WEBHOOK_URL` | BackEnd | No | Optional webhook for lead delivery (Week 4) |

**Never commit `.env` files.** Secrets must not use the `VITE_` prefix.

## Root `package.json` scripts (local development only)

The repo root has a **convenience** `package.json` that delegates to `FrontEnd/` and `BackEnd/`. It does **not** replace those packages and is **not** used by Vercel when each project’s Root Directory is set correctly (see [Build and Deploy](#build-and-deploy)).

Run all commands below from the **repository root** (`xone-website/`).

### Install

```sh
npm install              # root tools (concurrently)
npm run install:all      # npm install in FrontEnd + BackEnd
```

### Dev

```sh
npm run dev              # FrontEnd + BackEnd together
npm run dev:frontend     # Vite only → http://localhost:3000
npm run dev:backend      # nodemon server.js → http://localhost:5000
```

| Script | Runs |
|--------|------|
| `dev` | `concurrently` → `npm run dev --prefix FrontEnd` + `npm run dev --prefix BackEnd` |
| `dev:frontend` | `npm run dev --prefix FrontEnd` → `vite` |
| `dev:backend` | `npm run dev --prefix BackEnd` → `nodemon server.js` |

### Build and preview

```sh
npm run build            # vite build → FrontEnd/dist/
npm run preview          # preview production build locally
```

| Script | Runs |
|--------|------|
| `build` | `npm run build --prefix FrontEnd` → `vite build` |
| `preview` | `npm run preview --prefix FrontEnd` → `vite preview` |

### Start (backend production)

```sh
npm run start            # node server.js on port 5000
```

| Script | Runs |
|--------|------|
| `start` | `npm run start --prefix BackEnd` → `node server.js` |

### Lint

```sh
npm run lint             # ESLint on FrontEnd
```

| Script | Runs |
|--------|------|
| `lint` | `npm run lint --prefix FrontEnd` → `eslint .` |

### Test

```sh
npm run test             # FrontEnd + BackEnd
npm run test:frontend    # Vitest only
npm run test:backend     # Node test runner only
```

| Script | Runs |
|--------|------|
| `test` | `npm run test --prefix FrontEnd` → `vitest run`, then `npm run test --prefix BackEnd` → `node --test tests/smoke.test.js` |
| `test:frontend` | `npm run test --prefix FrontEnd` → `vitest run` |
| `test:backend` | `npm run test --prefix BackEnd` → `node --test tests/smoke.test.js` |

The Vite config proxies `/api` requests to `http://localhost:5000` (no path rewrite — backend routes use `/api/*` prefix).

**Local dev (recommended):** from repo root, run both servers together:

```sh
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Forms POST to `/api/contact` and `/api/get-started` via the Vite proxy

**Alternative:** two terminals — `npm run dev:frontend` and `npm run dev:backend`.

### Per-package (when you only changed one side)

| Command | Location | Description |
|---------|----------|-------------|
| `npm run dev` | FrontEnd | Vite dev server |
| `npm run dev` | BackEnd | `nodemon server.js` (JS — no tsx) |
| `npm run start` | BackEnd | `node server.js` |
| `npm run build` | FrontEnd | Production build to `dist/` |
| `npm run preview` | FrontEnd | Preview production build locally |
| `npx shadcn@latest add <name>` | FrontEnd | Add a shadcn/ui component |
| `npm run lint` | FrontEnd | ESLint (TypeScript + React) |
| `npm run test` | FrontEnd | Vitest |
| `npm run test` | BackEnd | Node built-in test runner |

## Environment Variables

### Frontend (`FrontEnd/.env`)

Client-safe variables only:

```env
# Leave empty for Vite dev proxy; set full origin in production
VITE_API_BASE_URL=
```

Access via `src/lib/env.ts`:

```ts
import { buildApiUrl } from "@/lib/env";
// buildApiUrl("/api/contact") → "/api/contact" (dev) or "https://api.example.com/api/contact" (prod)
```

### Backend (`BackEnd/.env`)

Server-only secrets (no `VITE_` prefix):

```env
PORT=5000
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=10
# CONTACT_WEBHOOK_URL=https://example.com/webhook
```

## API Endpoints

Base URL: `http://localhost:5000` (local) or your deployed API origin.

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/health` | Health check for deploy monitoring |
| `POST` | `/api/contact` | Contact form submission (name, email, message, optional company) |
| `POST` | `/api/get-started` | Get Started form (name, email, projectType, timeline, description) |

**Success response (201):**

```json
{
  "success": true,
  "message": "Thanks for reaching out...",
  "data": { "id": "contact-...", "receivedAt": "2026-06-14T00:00:00.000Z" }
}
```

**Validation error (400):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": { "email": "Enter a valid email address" }
}
```

**Rate limit (429):**

```json
{
  "success": false,
  "message": "Too many requests. Please try again later."
}
```

Lead endpoints are rate-limited (default: 10 requests per 15 minutes per IP). All input is validated server-side with Zod before processing.

## Build and Deploy

FrontEnd and BackEnd are **separate deployable units**. Production hosts must point at each package folder — not the monorepo root.

### Vercel (production — do not change lightly)

Use **two Vercel projects** (or one for the static site only) with these settings:

| Vercel project | Root Directory | Install Command | Build Command | Output Directory |
|----------------|----------------|-----------------|---------------|------------------|
| **Frontend (site)** | `FrontEnd` | `npm install` (default) | `npm run build` | `dist` |
| **Backend (API)** | `BackEnd` | `npm install` (default) | none or host-specific | n/a |

> **Important:** Keep **Root Directory** set to `FrontEnd` for the marketing site.  
> Do **not** set the Vercel root to the repository root (`/`) unless you intentionally reconfigure install/build — the root `package.json` is for **local dev only** and a misconfigured root can break production builds.

Configure SPA fallback so client-side routes (`/services`, `/about`, etc.) resolve to `index.html`.

### Frontend (static hosting)

From `FrontEnd/` (how Vercel runs it):

```sh
cd FrontEnd
npm install
npm run build
```

Or from repo root (local convenience only):

```sh
npm run build
```

Deploy the `FrontEnd/dist/` directory to any static host:

- Vercel, Netlify, Cloudflare Pages, AWS S3 + CloudFront, etc.

### GitHub Actions (CI/CD)

| Workflow | File | Purpose |
|----------|------|---------|
| CI | `.github/workflows/ci.yml` | Lint, test, and build on every push/PR |
| CD | `.github/workflows/cd.yml` | Deploy `FrontEnd/dist/` to GitHub Pages on `main` |

**Enable GitHub Pages:** Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If the site is served from a subpath (e.g. `https://user.github.io/repo-name/`), set repository variable `VITE_BASE_PATH` to `/repo-name/` (with trailing slash).

### Backend (API)

Deploy `BackEnd/` to a Node-compatible host (Railway, Render, Fly.io). Set environment variables in the host dashboard, not in the repository.

- Health check: `GET /api/health`
- Set `CORS_ORIGIN` to your production FrontEnd origin(s)
- Set `VITE_API_BASE_URL` on the FrontEnd host to the deployed API origin

## Routes

| Path | Status |
|------|--------|
| `/home` | Homepage — section components in `features/home/` |
| `/services` | Services page — `features/services/` |
| `/about` | About page — `features/about/` |
| `/process` | Process page — `features/process/` |
| `/contact` | Contact page — `features/contact/` (form → `POST /api/contact`) |
| `/get-started` | Get Started page — `features/get-started/` (form → `POST /api/get-started`) |
| `*` | Falls back to homepage |

Non-home routes are lazy-loaded via `React.lazy` in `App.tsx`.

## Contributing

1. Read `AGENTS.md` and `TEAM_INSTRUCTIONS.md` before writing code.
2. Pick work from `BACKLOGS_v1.md` aligned with the current sprint in `SPRINT_PLAN_v2.md`.
3. Work on the **shared active branch** only — do not create personal branches unless instructed.
4. Before every commit: `git pull`, then from repo root — `npm run lint`, `npm run test`, and `npm run build` (or run the equivalent scripts inside the package you changed).
5. Keep commits focused; include screenshots for UI changes when reviewing with the team.
6. Ensure no `.env` files or secrets are included in commits.
7. Confirm GitHub Actions CI is green after you push.

### Code standards summary

- TypeScript `strict: true` — no weakening
- Mobile-first responsive design
- Validate all external input at API boundaries (when backend exists)
- No secrets in the client bundle
- Feature-based folders for new code

## Documentation Index

| Document | Audience | Purpose |
|----------|----------|---------|
| [FORK_SETUP.md](./FORK_SETUP.md) | Developers | Fork to `branding/xone-website`, deploy your own stack |
| [README.md](./README.md) | All developers | Setup, workflow, deploy |
| [AGENTS.md](./AGENTS.md) | All developers | Security and coding rules |
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | PM, stakeholders | Status and scope |
| [TEAM_INSTRUCTIONS.md](./TEAM_INSTRUCTIONS.md) | Team by role | Responsibilities |
| [BACKLOGS_v1.md](./BACKLOGS_v1.md) | PM, Tech Lead | Prioritized work |
| [SPRINT_PLAN_v2.md](./SPRINT_PLAN_v2.md) | Whole team | Sprint 2 tasks and criteria |
| [SPRINT_PLAN_v1.md](./SPRINT_PLAN_v1.md) | Whole team | Preparation phase sprint plan |
| Technical Documentation | Reference only | Legacy StuTech docs (do not modify) |

## Known Issues

See `BACKLOGS_v1.md` for the full list. Highlights:

- Brand assets live in `FrontEnd/public/assets/XONE/` (commit to git)
- Legacy decorative images under `/assets/images/` may still 404 until replaced
- Five marketing routes with real content; homepage decomposed into section components

## License

ISC (per `BackEnd/package.json`). Confirm license with project owner before external distribution.
