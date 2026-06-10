# TEAM_INSTRUCTIONS.md

Role-based instructions for the Xone Software Development lead-generation website turnover project.

All team members must read and follow `AGENTS.md`. This document defines **who does what**, not **how to code** (that lives in AGENTS.md and README.md).

---

## Senior Roles

### Project Manager (PM)

**Responsibilities**

- Own the product backlog in `BACKLOGS_v1.md` and sprint plan in `SPRINT_PLAN_v1.md`
- Facilitate sprint ceremonies (planning, standup, review, retro)
- Track blockers, dependencies, and stakeholder sign-off on brand/copy
- Ensure scope stays aligned with static lead-gen goals (avoid scope creep into full app features)
- Communicate phase status using `PROJECT_OVERVIEW.md` as the source of truth

**Workflow**

1. Review backlog weekly with Tech Lead
2. Prioritize by business value: brand → core pages → lead capture → polish
3. Accept work only when acceptance criteria in the sprint plan are met
4. Escalate security or architecture concerns to Tech Lead immediately

### Tech Lead

**Responsibilities**

- Enforce `AGENTS.md` in code review
- Approve structural changes (feature folders, API design, env strategy)
- Resolve cross-role technical blockers
- Define migration path from legacy StuTech patterns to Xone standards
- Review security posture before any public deployment

**Workflow**

1. Review all PRs for security, TypeScript strictness, and folder conventions
2. Pair with Backend Developer on contact API design before implementation
3. Maintain architecture decision log in PR descriptions or team wiki
4. Sign off on Preparation phase exit criteria in `PROJECT_OVERVIEW.md`

---

## Fullstack Developer

**Responsibilities**

- Cross-cutting setup: monorepo scripts, env examples, Vite proxy, CI skeleton
- Integrate frontend contact forms with backend API when ready
- Own `README.md` accuracy and local dev ergonomics
- Bridge frontend feature modules with backend routes and DTOs

**Workflow**

1. Clone repo; run `FrontEnd` and `BackEnd` per README
2. Create `FrontEnd/.env.example` and `BackEnd/.env.example` (never commit real `.env`)
3. When wiring contact form: frontend Zod schema + backend Zod schema + shared field limits
4. Use Vite dev proxy (`/api` → `localhost:5000`) for local API calls
5. Add **unit tests** on both sides for any cross-cutting feature (shared validation rules, API client, DTO mappers)
6. Run `npm run lint` and `npm run test` in both `FrontEnd/` and `BackEnd/` before every commit
7. Submit PRs with both client and server changes when a feature spans both

**Coding standards:** `AGENTS.md` — validation at API boundary, no secrets in `VITE_*` misuse, feature-based folders.

---

## Backend Developer

**Responsibilities**

- Build and maintain `BackEnd/` Express API for lead capture (future sprints)
- Input validation (Zod), rate limiting, safe error responses
- Optional integrations: email service, CRM webhook, logging
- Migrate `server.js` to TypeScript when backlog item is scheduled

**Current state:** Only a health-check route exists. No database, no user CRUD.

**Workflow**

1. Do not implement APIs described in legacy `Technical Documentation` unless PM adds them to backlog
2. For contact endpoint: `POST /api/contact` with validated DTO, rate limit, generic success/error
3. Never return stack traces or internal errors to clients
4. Keep all secrets in `BackEnd/.env` only (no `VITE_` prefix)
5. Add **unit tests** (Vitest or Jest) for validators, services, and route handlers for each feature you add
6. Run `npm run lint` (when configured) and `npm run test` in `BackEnd/` before every commit
7. Add integration tests for new routes before merge

**Out of scope for v1:** User authentication, JWT, PostgreSQL user tables (legacy docs are aspirational).

---

## Frontend Developer

**Responsibilities**

- Implement and polish all marketing pages under `FrontEnd/src/`
- Rebrand UI from StuTech to **Xone Software Development**
- Mobile-first responsive layouts
- Organize code into `features/` modules; reduce `Homepage.tsx` monolith
- Place static assets in `FrontEnd/public/assets/`

**Workflow**

1. One feature or page per PR when possible
2. Extract reusable components (Button, Section, Card, Footer) to `src/components/`
3. Route pages live in `src/views/` initially; migrate to `src/features/<name>/` per AGENTS.md
4. Fix broken imports (`index.css` vs `App.css`) early in Preparation sprint
5. Replace `alert()` and placeholder `#` links with real navigation or form handling
6. Add or update **unit tests** (Vitest or Jest) for each feature, component, or utility you introduce
7. Run `npm run lint`, `npm run test` (or `npm run test:unit`), and `npm run build` in `FrontEnd/` before every commit

**UI checklist per page**

- Works at 375px and 1280px widths
- Hover/press states on buttons
- Semantic HTML and alt text on images
- No hardcoded StuTech branding

---

## QA Engineer

**Responsibilities**

- Define and execute test plans per sprint acceptance criteria
- Cross-browser smoke tests (Chrome, Firefox, Safari, Edge)
- Mobile device or emulator testing
- Regression on navigation, forms, and external links
- Log defects with repro steps, severity, and screenshots

**Workflow**

1. Read sprint acceptance criteria in `SPRINT_PLAN_v1.md` before testing
2. Verify build artifact (`npm run build` + `npm run preview`) not only dev server
3. Test failure paths: empty form, invalid email, network error on submit
4. Confirm no console errors on primary routes
5. Block release if secrets appear in built JS bundle or `.env` is committed

**Test priorities (Preparation phase)**

| Priority | Area |
|----------|------|
| P0 | App builds and starts without errors |
| P0 | All nav links resolve to real pages |
| P1 | Homepage renders on mobile without horizontal scroll |
| P1 | Images load from `public/assets/` |
| P2 | Contact form validation (when implemented) |
| P2 | Lighthouse performance/accessibility baseline |

---

## Shared Workflows

### Git and PRs

- **Do not create new branches.** Work only on the branch that is currently active in the repo (check with `git branch --show-current` before you start).
- **Commit directly to that active branch** — do not open personal or feature branches unless the Tech Lead or PM explicitly instructs otherwise.
- Pull latest changes before you commit (`git pull`) to reduce merge conflicts with teammates on the same branch.
- PR description (when used): what, why, screenshots for UI, test notes
- At least one approval from Tech Lead for architecture-impacting changes
- Do not commit `.env`, `node_modules`, or build output

### Commits (manual, per teammate)

Each teammate commits their own work to the **shared active branch** — not to a separate branch they created. Use **brief, role-scoped messages** in imperative mood (`add`, `fix`, `update`, `docs`). One logical change per commit when practical.

| Role | When to commit | Example commit messages |
|------|----------------|-------------------------|
| **PM** | Backlog, sprint plan, or overview updates | `docs: update sprint acceptance criteria for contact form` · `docs: reprioritize P1 items in backlog` |
| **Tech Lead** | AGENTS.md, architecture, security, or review-driven fixes | `docs: clarify Vite env rules in AGENTS.md` · `fix: enforce rate limit on contact route` |
| **Fullstack** | Cross-cutting setup, README, env examples, API + UI wiring | `chore: add Vite proxy for local API` · `feat: wire contact form to POST /api/contact` |
| **Backend** | `BackEnd/` routes, validation, integrations | `feat: add Zod-validated contact endpoint` · `fix: return generic error on mail failure` |
| **Frontend** | Pages, components, rebrand, assets | `feat: add Xone-branded services page` · `fix: mobile hero overflow on homepage` |
| **QA** | Test docs, fixtures, or automation only | `test: add contact form validation cases` · `docs: record mobile regression results` |

**Format:** `<type>: <short summary>` — types: `feat`, `fix`, `docs`, `chore`, `test`, `refactor`.

**Before every commit:**

1. `git branch --show-current` — confirm you are on the team’s active branch (do not switch away or create a new one)
2. `git pull` — sync with teammates’ latest commits on that branch
3. `git status` — confirm no `.env` or `node_modules` are staged
4. **`npm run lint`** — in every package you changed (`FrontEnd/`, `BackEnd/`, or both). Fix all lint errors before committing.
5. **`npm run test`** — run unit tests (Vitest or Jest) for **each feature you added or modified**. Do not commit without passing tests for your changes. If you add a feature, you add tests for it in the same commit (or the commit immediately before it).
6. **`npm run build`** — in `FrontEnd/` when UI or frontend config changed; confirm the build succeeds.
7. Commit and push only when steps 4–6 pass.

**Test expectations by change type**

| Change | Required tests |
|--------|----------------|
| New page or feature module | Component or integration unit tests covering main render paths and key interactions |
| Form or validation logic | Unit tests for valid input, invalid input, and edge cases |
| API route or service | Unit tests for validator, service, and handler; mock external services |
| Utility or mapper | Pure function unit tests |
| Docs-only (`docs:` commits) | Lint if markdown tooling applies; tests not required unless docs accompany code |

> **Note:** Vitest is the preferred runner for `FrontEnd/` (Vite-native). Jest is acceptable for `BackEnd/` if already configured. Tech Lead will align on a single standard if both packages adopt the same runner.

### Definition of Done

- [ ] Matches acceptance criteria in current sprint
- [ ] `AGENTS.md` review checklist satisfied
- [ ] TypeScript strict — no new `any`
- [ ] `npm run lint` passes in affected package(s)
- [ ] Unit tests added/updated for the feature; `npm run test` passes
- [ ] Mobile layout checked
- [ ] No secrets in client bundle
- [ ] README or team docs updated if setup changed

### Communication

- Blockers posted within 4 business hours
- Scope changes go through PM for backlog update
- Security issues: notify Tech Lead immediately, do not deploy

### Document Map

| Question | Document |
|----------|----------|
| How do I run the project? | `README.md` |
| What are the coding rules? | `AGENTS.md` |
| What should I work on next? | `BACKLOGS_v1.md`, `SPRINT_PLAN_v1.md` |
| What is the project status? | `PROJECT_OVERVIEW.md` |
| What did the original authors document? | `Technical Documentation` (read-only) |
