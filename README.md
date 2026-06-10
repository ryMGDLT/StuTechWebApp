# Xone Software Development — Lead Generation Website

Static marketing website for **Xone Software Development**, built to attract prospective clients and capture leads. The site showcases services, team, process, and contact pathways.

> **Note:** The legacy file `Technical Documentation` is a read-only reference from the previous project phase. It describes APIs and database schemas that are **not implemented** in the current codebase. Use this README and `PROJECT_OVERVIEW.md` as the source of truth.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7, TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router DOM v7 |
| UI | Swiper, React Icons |
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
│   └── server.js
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

### 2. Install frontend dependencies

```sh
cd FrontEnd
npm install
```

### 3. Configure environment variables

```sh
cp .env.example .env
```

Edit `.env` with local values. Only `VITE_*` variables are exposed to the browser.

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | No (v1) | Backend API base URL for future contact form (e.g. `http://localhost:5000`) |

**Never commit `.env` files.** Secrets must not use the `VITE_` prefix.

### 4. Install backend dependencies (optional)

Only needed when working on API features:

```sh
cd ../BackEnd
npm install
```

## Development Workflow

Run frontend and backend in **separate terminals**.

### Frontend dev server

```sh
cd FrontEnd
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000) by default.

The Vite config proxies `/api` requests to `http://localhost:5000` for local API development.

### Backend dev server (optional)

```sh
cd BackEnd
node server.js
```

Runs at [http://localhost:5000](http://localhost:5000). Currently serves only a health message on `GET /`.

### Other scripts

| Command | Location | Description |
|---------|----------|-------------|
| `npm run build` | FrontEnd | Production build to `dist/` |
| `npm run preview` | FrontEnd | Preview production build locally |
| `npm run lint` | FrontEnd | Run ESLint |

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

### Frontend (static hosting)

```sh
cd FrontEnd
npm run build
```

Deploy the `FrontEnd/dist/` directory to any static host:

- Vercel, Netlify, Cloudflare Pages, AWS S3 + CloudFront, etc.

Configure SPA fallback so client-side routes (`/services`, `/about`, etc.) resolve to `index.html`.

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

1. Read `AGENTS.md` before writing code.
2. Read your role section in `TEAM_INSTRUCTIONS.md`.
3. Pick work from `BACKLOGS_v1.md` aligned with the current sprint in `SPRINT_PLAN_v1.md`.
4. Create a feature branch from `main`.
5. Keep PRs focused; include screenshots for UI changes.
6. Run `npm run lint` and `npm run build` in `FrontEnd/` before opening a PR.
7. Ensure no `.env` files or secrets are included in commits.

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

- `Main.tsx` imports missing `index.css` (Tailwind loaded via `App.css`)
- Static images under `/assets/images/` are not yet in `public/`
- UI still shows legacy "StuTech" branding in places
- Five routes are placeholder stubs
- `FrontEnd/.env` should be gitignored

## License

ISC (per `BackEnd/package.json`). Confirm license with project owner before external distribution.
