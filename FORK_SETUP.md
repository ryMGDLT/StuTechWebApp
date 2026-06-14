# Fork setup — `branding/xone-website`

Guide for owning this project under your GitHub account or the **branding** organization as **`xone-website`**.

---

## GitHub repository description (copy-paste)

Use this in **GitHub → Repository → Settings → General → Description**:

```
Official marketing website for Xone Software Development — React/Vite SPA with Express lead-capture API, shadcn/ui, and Xone brand kit.
```

**Optional topics (tags):** `react`, `vite`, `typescript`, `tailwindcss`, `express`, `lead-generation`, `shadcn-ui`, `xone`

**Website field (after deploy):** your Vercel production URL

---

## Fork and rename on GitHub

### Option A — Fork to your user, then transfer to `branding` org

1. On the **source repo**, click **Fork** → your GitHub user.
2. Open the fork → **Settings → General → Repository name** → rename to `xone-website`.
3. If you have access to the **branding** org: **Settings → Danger Zone → Transfer ownership** → select `branding`.
4. Final URL: `https://github.com/branding/xone-website`

### Option B — Fork directly into `branding` org (if GitHub allows)

1. **Fork** → choose **branding** as the destination (requires org permission).
2. Rename to `xone-website` if GitHub did not use that name automatically.

### Option D — GitHub Fork (copies branches automatically)

If you used **Fork** on GitHub, your fork already has the same branches as the source (including the branch you were working on).

1. Rename the fork to `xone-website` if needed (**Settings → General**).
2. Locally, point `origin` at **your fork** (not the original repo):

```sh
git remote -v
git remote set-url origin https://github.com/branding/xone-website.git
# Or, to keep the original for pulls:
# git remote rename origin upstream
# git remote add origin https://github.com/branding/xone-website.git
```

3. Fetch and set upstream tracking on your working branch:

```sh
git fetch origin
git branch --show-current          # e.g. main or your team branch
git push -u origin HEAD            # first push to fork (if fork is behind/ahead)
```

You do **not** need a blank repo or a new branch — the fork already mirrored the branch history. Just aim `origin` at the fork URL and push/pull there going forward.

---

### Option C — New empty repo under `branding` (cleanest branding)

1. Create **`branding/xone-website`** (empty, no README).
2. Locally, point your clone at the new remote and push:

```sh
git remote rename origin upstream   # keep old remote if you want to pull updates
git remote add origin https://github.com/branding/xone-website.git
git push -u origin main
```

---

## New directory + next agent session

If you prefer a **fresh clone** (recommended over reusing `StuTechWebApp`):

1. Push your working branch to the fork (`git push -u origin HEAD`).
2. Clone into `xone-website` (see **After fork — local clone** below).
3. Open that folder in Cursor and start a **new agent chat**.
4. Give the agent **`AGENT_HANDOVER.md`** — priorities, deploy checklist, and copy-paste opener are there.

---

## After fork — local clone

```sh
git clone https://github.com/branding/xone-website.git
cd xone-website
npm install
npm run install:all
npm run dev
```

- FrontEnd: http://localhost:3000  
- BackEnd: http://localhost:5000  

---

## Deploy your fork (Vercel + Railway)

| Service | Root | Branch | Key env |
|---------|------|--------|---------|
| **Vercel** (new project) | `FrontEnd` | `main` | `VITE_API_BASE_URL` = Railway URL |
| **Railway** (new service) | `BackEnd` | `main` | `CORS_ORIGIN` = your Vercel URL |

Do **not** reuse a teammate’s Vercel project unless you intentionally share production.

See `README.md` → Build and Deploy for Vercel root directory rules.

---

## Syncing with the original repo (optional)

If you kept the source as `upstream`:

```sh
git fetch upstream
git merge upstream/main   # or rebase, per team preference
```

Resolve conflicts, then push to `origin` (`branding/xone-website`).

---

## What was renamed in this codebase

| Before | After |
|--------|--------|
| Folder name `StuTechWebApp` (docs) | `xone-website` |
| Root `package.json` name `xone-leadgen-webapp` | `xone-website` |

Product brand in the UI remains **Xone Software Development** (not the repo name).

---

## Checklist after fork

- [ ] Repo lives at `github.com/branding/xone-website`
- [ ] Description and topics set on GitHub
- [ ] `npm run install:all` && `npm run test` && `npm run build` pass locally
- [ ] Vercel project connected to **your** fork, Root Directory = `FrontEnd`
- [ ] Railway service connected to **your** fork, root = `BackEnd`
- [ ] `VITE_API_BASE_URL` and `CORS_ORIGIN` set for production
- [ ] Secrets (`.env`) only in host dashboards — never committed
