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
| Backend | Express 5 (optional stub for future APIs) |
| Database | None (static site v1) |

## Project Structure

```text
StuTechWebApp/
├── FrontEnd/                 # Vite + React SPA
│   ├── public/               # Static assets (images, favicon)
│   ├── src/
│   │   ├── components/       # Shared UI (Navbar, etc.)
│   │   ├── views/            # Page-level components
│   │   ├── App.tsx           # Router setup
│   │   └── Main.tsx          # React entry point
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── BackEnd/                  # Express API (future lead capture)
│   └── server.js             # JavaScript entry (use node / nodemon)
├── package.json              # Root scripts: dev, build, test, start
├── AGENTS.md                 # Engineering rules (required reading)
├── PROJECT_OVERVIEW.md       # PM executive summary
├── TEAM_INSTRUCTIONS.md      # Role-based workflows
├── BACKLOGS_v1.md            # Prioritized backlog
└── SPRINT_PLAN_v1.md         # Preparation phase sprint plan
```

The frontend follows a **feature-based architecture** target layout documented in `AGENTS.md`. Current code uses `views/` and `components/`; new work should migrate toward `src/features/<name>/`.

## Prerequisites

- **Node.js** 20 LTS or later (recommended)
- **npm** 10+

## Setup and Installation

### 1. Clone the repository

```sh
git clone <repository-url>
cd StuTechWebApp
```

### 2. Install dependencies (recommended — from repo root)

```sh
npm install
npm run install:all
```

This installs root orchestration tools plus `FrontEnd/` and `BackEnd/` packages.

**Alternative:** install each package separately with `npm install` inside `FrontEnd/` and `BackEnd/`.

### 3. Configure environment variables

```sh
cd FrontEnd
cp .env.example .env
```

Edit `.env` with local values. Only `VITE_*` variables are exposed to the browser.

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | No (v1) | Backend API base URL for future contact form (e.g. `http://localhost:5000`) |

**Never commit `.env` files.** Secrets must not use the `VITE_` prefix.

## Root `package.json` scripts (local development only)

The repo root has a **convenience** `package.json` that delegates to `FrontEnd/` and `BackEnd/`. It does **not** replace those packages and is **not** used by Vercel when each project’s Root Directory is set correctly (see [Build and Deploy](#build-and-deploy)).

Run all commands below from the **repository root** (`StuTechWebApp/`).

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

The Vite config proxies `/api` requests to `http://localhost:5000` for local API development.

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
VITE_API_BASE_URL=http://localhost:5000
```

Access via a centralized module (recommended: `src/lib/env.ts`):

```ts
export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "";
```

### Backend (`BackEnd/.env`) — future use

Server-only secrets (no `VITE_` prefix):

```env
PORT=5000
CONTACT_WEBHOOK_URL=
```

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

### Backend (when APIs are added)

Deploy `BackEnd/` to a Node-compatible host (Railway, Render, Fly.io). Set environment variables in the host dashboard, not in the repository.

## Routes

| Path | Status |
|------|--------|
| `/home` | Homepage (partial) |
| `/services` | Stub — Sprint 1 Week 2 |
| `/about` | Stub — Sprint 1 Week 2 |
| `/process` | Stub — Sprint 1 Week 2 |
| `/contact` | Stub — Sprint 1 Week 2 |
| `/get-started` | Stub — Sprint 1 Week 2 |
| `*` | Redirects to homepage content |

## Contributing

1. Read `AGENTS.md` and `TEAM_INSTRUCTIONS.md` before writing code.
2. Pick work from `BACKLOGS_v1.md` aligned with the current sprint in `SPRINT_PLAN_v1.md`.
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
| [README.md](./README.md) | All developers | Setup, workflow, deploy |
| [AGENTS.md](./AGENTS.md) | All developers | Security and coding rules |
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | PM, stakeholders | Status and scope |
| [TEAM_INSTRUCTIONS.md](./TEAM_INSTRUCTIONS.md) | Team by role | Responsibilities |
| [BACKLOGS_v1.md](./BACKLOGS_v1.md) | PM, Tech Lead | Prioritized work |
| [SPRINT_PLAN_v1.md](./SPRINT_PLAN_v1.md) | Whole team | Sprint tasks and criteria |
| Technical Documentation | Reference only | Legacy StuTech docs (do not modify) |

## Known Issues

See `BACKLOGS_v1.md` for the full list. Highlights:

- Static images under `/assets/images/` are not yet in `public/`
- UI still shows legacy "StuTech" branding in places
- Five routes are placeholder stubs

## License

ISC (per `BackEnd/package.json`). Confirm license with project owner before external distribution.
