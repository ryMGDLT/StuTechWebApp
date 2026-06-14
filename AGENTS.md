# AGENTS.md

This file defines the non-negotiable engineering rules for this project. It is intentionally strict and optimized for a **static lead-generation website** built with **Vite + React + TypeScript**, with an optional **Express** backend for future form handling and integrations.

## Core Stack

- **Frontend framework:** React 19 with Vite 7 (SPA, not Next.js)
- **Language:** TypeScript with `strict: true`
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`; Xone palette tokens in `FrontEnd/src/index.css` and `src/lib/brand.ts`
- **Typography:** Geist Sans (`@fontsource-variable/geist`) — do not add Poppins/Inter for new UI
- **UI components:** shadcn/ui (`src/components/ui/`) — add via `npx shadcn@latest add <component>`
- **Routing:** React Router DOM v7
- **Architecture:** Feature-based foldering within `FrontEnd/src/`
- **Backend (optional):** Express 5 in `BackEnd/` for future API endpoints (contact forms, webhooks)
- **Database:** None required for v1 static site; when added, use server-only access through a single connection module
- **Auth:** Not required for public marketing pages; deny-by-default if admin or protected areas are introduced later
- **Validation:** Schema-first validation (e.g. Zod) for all external input at API boundaries

## Non-Negotiable Rules

- Never weaken TypeScript strictness to make code compile.
- Never expose secrets, `.env` values, tokens, or database credentials to the browser.
- Only variables explicitly intended for the browser may use the `VITE_` prefix; treat all other env vars as secret.
- Never trust form input, query params, headers, or cookies without validation.
- Never build SQL strings from user input.
- Never bypass authentication or authorization checks for convenience when protected routes exist.
- Never place business logic inside presentational UI components; keep logic in hooks, services, or utilities.
- Never mix DTOs, persistence models, and API response models without explicit mapping.
- Never commit `.env`, `.env.local`, or secret export files.

## Required Project Structure

Use feature-based organization inside the frontend. Shared utilities must stay minimal and genuinely reusable.

```text
xone-website/
  FrontEnd/
    public/              # Static assets (images, favicon, robots.txt)
    src/
      components/        # Shared UI (Navbar, Footer, marketing wrappers)
        ui/              # shadcn/ui primitives (Button, Input, Card, …)
        marketing/       # Brand-styled wrappers built on ui/
      views/             # Route-level pages (migrate to features/ over time)
      features/          # Feature modules (contact, services, about, etc.)
        contact/
          components/
          schemas/       # Zod validators for form input
          services/      # API client calls
          types/
      lib/               # Shared utilities (env, validation helpers)
      hooks/
      styles/
    index.html
    vite.config.ts
    tsconfig.json
  BackEnd/               # Optional Express API (future)
    src/
      lib/               # env validation, shared helpers
      schemas/           # Zod input DTOs
      services/          # Business logic (lead submission)
      routes/            # Thin route handlers
      middleware/        # Error handling, rate limiting
    server.js            # Entry point (migrate to TypeScript over time)
  AGENTS.md
  README.md
  PROJECT_OVERVIEW.md
  TEAM_INSTRUCTIONS.md
  BACKLOGS_v1.md
  SPRINT_PLAN_v1.md
```

When adding a new page or capability, prefer a `features/<name>/` module over growing monolithic view files.

## Vite and React Rules

- Default to functional components with explicit TypeScript props.
- Add interactivity only where needed; keep most marketing content as static server-renderable HTML structure.
- Keep API calls and env resolution in dedicated modules under `src/lib/` or `src/features/*/services/`.
- Do not import server-only Node modules into frontend code.
- Use path aliases (`@/*`) consistently once configured in `tsconfig.json`.
- Co-locate feature-specific components, schemas, and types within their feature folder.
- Prefer lazy-loaded routes (`React.lazy`) for non-critical pages when bundle size grows.

## TypeScript Strict Rules

- `strict` must remain enabled in `FrontEnd/tsconfig.json`.
- Do not use `any`. If unavoidable, use `unknown` first and narrow safely.
- Do not silence errors with `@ts-ignore` unless a documented external bug forces it.
- Prefer exact domain types, discriminated unions, and explicit null handling.
- Every public function must have a clear input and output type.
- Avoid optional fields unless they are truly optional in the domain.

## Environment Variable Protection

Environment handling must prevent accidental client exposure.

- Frontend public config: only `VITE_*` variables, accessed via `import.meta.env` in a single module such as `FrontEnd/src/lib/env.ts`.
- Backend secrets: load only in `BackEnd/` via `process.env`, never prefixed with `VITE_`.
- Secrets must never be read directly from arbitrary files in components.
- Never spread `import.meta.env` or `process.env` into config objects, logs, or responses.
- Validate required env variables at startup and fail fast when missing or malformed.
- `.gitignore` must explicitly ignore `.env`, `.env.local`, and `.env.production`.
- Provide `.env.example` with safe placeholder values only.

Example (frontend, client-safe):

```ts
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("VITE_API_BASE_URL is not configured");
}
```

Example (backend, server-only):

```ts
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  CONTACT_WEBHOOK_URL: z.string().url().optional(),
});

export const env = envSchema.parse(process.env);
```

## Authentication Rules

Not required for the public marketing site in v1. If admin dashboards or protected content are added:

- Authentication checks must happen on the server, never only in the client.
- Authorization must be separate from authentication.
- Use deny-by-default access control.
- Never trust role or user ID values from the client without server-side verification.
- Cookies must be `HttpOnly`, `Secure` in production, and use appropriate `SameSite` settings.

## Database Connection Rules

No database is used in v1. If persistence is introduced (e.g. lead storage):

- Use a single database client factory or singleton in `BackEnd/src/lib/db`.
- Database modules must not be imported by frontend code.
- Never create ad hoc connections inside route handlers or React components.
- Do not expose raw database errors to clients.
- Wrap database operations in repository/service layers.
- Transactions are required for multi-step writes that must succeed or fail together.

## Validation Rules for Text Fields

All external text input must be validated before business logic or persistence.

- Validate at the API route boundary before calling services.
- Use schema validation libraries such as Zod.
- Trim input unless whitespace is business-significant.
- Enforce min/max length on all text fields.
- Reject control characters and invisible unsafe characters where not needed.
- Normalize text where appropriate for comparison, such as email lowercasing.
- Client-side validation improves UX but never replaces server-side validation.

Recommended baseline for standard text fields:

- `trim()`
- min length > 0 when required
- max length explicitly defined
- reject unexpected HTML if field is plain text
- reject dangerous Unicode control characters if not required

## SQL Injection Prevention Rules

Apply when a database is introduced.

- Never concatenate SQL with user input.
- Always use parameterized queries, prepared statements, or a trusted ORM/query builder.
- Dynamic sorting, filtering, table names, and column names must be chosen from server-side allowlists.

## API Route Rules (BackEnd)

When Express routes are added, keep handlers thin and defensive:

- Parse request
- Validate input DTO (Zod schema)
- Apply rate limiting for public endpoints (contact form)
- Call service
- Map result to response DTO
- Return safe response

Route handlers must not:

- contain raw SQL (when DB exists)
- contain reusable business rules (use services)
- trust unchecked input
- leak stack traces or internal error details

## DTO Rules

Apply when API endpoints are implemented.

- Every inbound request body must map to an input DTO.
- Every outbound response must map to an output DTO.
- DTOs must not contain secrets, internal flags, or raw error details.
- Mapping must be explicit in controllers or dedicated mapper functions.

## Error Handling and Logging

- Return generic client-safe error messages from APIs.
- Log enough for diagnosis without leaking secrets, tokens, or full connection strings.
- Security-relevant failures should be logged with care and rate-limited where necessary.
- Validation errors should be explicit to the client, but only for safe fields and safe messages.

## UI and Accessibility Rules

- Design mobile-first; test at 320px–768px breakpoints before desktop polish.
- Add default hover states for buttons unless a clear UX reason prevents it.
- Add subtle click or press feedback for interactive elements.
- Use semantic HTML (`nav`, `main`, `section`, `footer`, `button`, `a`).
- Provide meaningful `alt` text for images.
- Ensure sufficient color contrast for text on gradient backgrounds.
- Do not use `alert()` for production user feedback; use accessible inline messages or toasts.

## Testing Expectations

- Add unit tests for validators, form schemas, and utility functions.
- Add integration tests for API routes when the backend is implemented.
- Add visual or E2E smoke tests for critical user flows (navigation, contact form).
- Test failure paths, not only happy paths.
- Frontend uses **Vitest** (`npm run test` in `FrontEnd/`). Backend uses **Node test runner** (`npm run test` in `BackEnd/`) until a shared runner is adopted.

## CI/CD Rules

GitHub Actions enforce quality on every push and pull request. Read `TEAM_INSTRUCTIONS.md` before changing workflows.

- **CI** (`.github/workflows/ci.yml`): `FrontEnd` — lint, unit tests, production build; `BackEnd` — unit tests.
- **CD** (`.github/workflows/cd.yml`): builds and deploys `FrontEnd/dist/` to GitHub Pages on `main` (enable Pages in repo settings).
- Never store secrets, tokens, or `.env` values in workflow files or logs. Use GitHub repository secrets/variables only.
- CI must pass before merging or deploying. Do not disable checks to unblock without Tech Lead approval.
- Keep workflows minimal and fast. Add jobs only when they map to a real script in `package.json`.
- If hosting is not GitHub Pages, CD can be replaced later; CI remains the source of truth for lint/test/build.

## Review Checklist

Before merging, verify all of the following:

- No secret env usage in frontend code (no non-`VITE_` vars in `FrontEnd/`)
- `.env` files are gitignored and not committed
- All external input validated server-side when APIs exist
- No raw SQL built from string concatenation (when DB exists)
- Mobile layout reviewed for changed pages
- TypeScript strictness preserved
- Brand and copy consistent with **Xone Software Development**
- Images and assets exist under `FrontEnd/public/` with correct paths
- No `console.log` of user PII in production code
- GitHub Actions CI passes (lint, test, build)
- Workflow changes reviewed by Tech Lead or Fullstack Developer

## Agent Instruction

When modifying this project, read `AGENTS.md` and `TEAM_INSTRUCTIONS.md` first.

When modifying this project:

- preserve TypeScript strictness
- preserve feature-based boundaries
- keep secrets out of the client bundle
- validate all external input at the API boundary
- prefer splitting large view files into feature modules
- reject insecure shortcuts even if they appear faster
- provide a brief explanation when creating features or fixing errors
- when solving errors, identify the likely source of the issue and the recommended solution
- keep explanations concise and educational so a junior fullstack developer can follow the reasoning
- consider mobile view by default when creating frontend UI
- rebrand references from legacy "StuTech" to "Xone Software Development" when touching user-facing content
