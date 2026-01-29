# Deploying to Vercel

## 1. Connect your repo

1. Go to [vercel.com](https://vercel.com) and sign in (with GitHub).
2. **Add New** → **Project** and import your GitHub repository.
3. Configure the project:
   - **Root Directory:** Click **Edit** and set to `apps/website` (this app lives in a monorepo).
   - **Framework Preset:** Next.js (auto-detected).
   - **Build Command:** `cd ../.. && pnpm build --filter=website` (from repo root) or leave default if you set Root Directory to `apps/website` and use `pnpm run build` with **Install Command** `pnpm install` run from repo root.

   If the build fails, try:
   - **Root Directory:** leave as `.` (repo root).
   - **Build Command:** `pnpm build --filter=website`
   - **Output Directory:** `apps/website/.next` (or leave default if Vercel infers it).
   - **Install Command:** `pnpm install`

4. Add the environment variables below, then deploy.

---

## 2. Environment variables on Vercel

In your Vercel project: **Settings** → **Environment Variables**. Add:

| Variable         | Required | Description |
|------------------|----------|-------------|
| `AUTH_SECRET`    | **Yes**  | Secret for Auth.js (cookies/signing). Generate: `openssl rand -base64 32` |
| `AUTH_URL`       | **Yes**  | Your production URL, e.g. `https://your-app.vercel.app` (or your custom domain) |
| `GITHUB_ID`      | **Yes**  | GitHub OAuth App **Client ID** (see “GitHub OAuth” below) |
| `GITHUB_SECRET`  | **Yes**  | GitHub OAuth App **Client Secret** |

Optional (for other features):

- `RESEND_API_KEY` – if you use Resend for email
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` – if you use Umami analytics

Set them for **Production** (and optionally Preview/Development if you want auth there too).

---

## 3. GitHub OAuth (for login / “Sign in with GitHub”)

You need a GitHub OAuth App so the site can use “Sign in with GitHub” (e.g. for `/admin`).

### Create a GitHub OAuth App

1. **GitHub** → **Settings** (your profile) → **Developer settings** (left sidebar).
2. **OAuth Apps** → **New OAuth App**.
3. Fill in:
   - **Application name:** e.g. `My Portfolio` or your site name.
   - **Homepage URL:**  
     - Production: `https://your-app.vercel.app` (or your custom domain).  
     - Local: `http://localhost:6969`
   - **Authorization callback URL:**  
     - Production: `https://your-app.vercel.app/api/auth/callback/github`  
     - Local: `http://localhost:6969/api/auth/callback/github`  
     You can add multiple callback URLs later (one per environment).
4. Click **Register application**.
5. On the app page:
   - **Client ID** → copy and use as `GITHUB_ID` on Vercel.
   - Click **Generate a new client secret** → copy the secret once (it’s hidden later) and use as `GITHUB_SECRET` on Vercel.

### What to set where

- **Vercel (production):**  
  - `GITHUB_ID` = Client ID  
  - `GITHUB_SECRET` = Client secret  
  - Callback URL in GitHub OAuth App = `https://<your-vercel-domain>/api/auth/callback/github`

- **Local (`.env.local`):**  
  - Same `GITHUB_ID` and `GITHUB_SECRET`  
  - Callback URL in GitHub OAuth App = `http://localhost:6969/api/auth/callback/github`  
  - `AUTH_URL=http://localhost:6969`  
  - `AUTH_SECRET` (or use the dev fallback if you didn’t set it)

---

## 4. Summary: what you change

- **Code:** Nothing required for a basic deploy. The app is already set up for Auth.js and env-based config.
- **Vercel:** Connect repo, set root to `apps/website` (or build command as above), add env vars.
- **GitHub:** Create OAuth App, get Client ID and Client Secret, set callback URLs, add `GITHUB_ID` and `GITHUB_SECRET` on Vercel and in `.env.local` for local sign-in.

After the first deploy, open `https://your-app.vercel.app`; if you see auth errors, double-check `AUTH_SECRET`, `AUTH_URL`, and the GitHub callback URL.
