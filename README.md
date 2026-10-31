# Performize Marketing Agency — Digital Experience

A creative digital marketing agency website built with React 19, TypeScript, Vite, Tailwind CSS v4, and GSAP motion design.

## Features

- **Distinctive Brand Identity:** Obsidian (`#0B0B0C`), Crimson Red (`#E60023`), and Electric Yellow (`#CCFF00`) aesthetic with custom ascending skyscraper brand emblem.
- **GSAP & Motion Choreography:** Staggered headline entrance, interactive cursor, and fluid micro-interactions.
- **Comprehensive Page Architecture:**
  - `Home`: High-impact hero, brand manifesto, selected case studies, 9-discipline capabilities matrix, operational philosophy, 4-phase agile blueprint, competitive moats, and final CTA.
  - `Work`: Portfolio archive with category filtering and deep case study inspection.
  - `Services`: Detailed breakdown of all 9 core services with deliverables and KPIs.
  - `About`: Vision, creative approach, and architectural symbolism.
  - `Contact`: Multi-service project brief intake, WhatsApp direct link, email CTA, and 2-hour SLA response guarantee.
- **Deployment Ready:** Pre-configured with `vercel.json` for zero-configuration Vite SPA deployment on Vercel.

---

## Deploy to Vercel via GitHub

### Option 1: Via Vercel Web Dashboard (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: Performize Agency website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/performize-agency.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** → **"Project"**.
4. Select your `performize-agency` GitHub repository.
5. Vercel automatically detects the Vite framework with the pre-configured settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**. Your site will be live on a `*.vercel.app` URL with automatic continuous deployments on every `git push`.

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
