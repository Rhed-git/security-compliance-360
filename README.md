
# security-compliance-360

A beginner-friendly, **live cybersecurity & compliance dashboard** that aggregates headlines, advisories, and updates from trusted sources (CISA, NIST, PCI SSC, ISO, etc.). This repo starts simple (pure HTML/CSS/JS) so you can learn-by-doing and scale later (Cloudflare Workers, server-side caching, search, and charts).

---

## 🎯 Goals
- Centralize **cybersecurity news, threat advisories, and compliance updates**.
- Keep the stack simple at first (no build tools required).
- Grow into a production-ready dashboard with **Cloudflare Pages/Workers** for API fetching & caching.

## 📁 Project Structure
```
security-compliance-360/
├─ index.html
├─ style.css
├─ script.js
├─ feeds.config.json           # (optional) list of starter feeds
├─ LICENSE                     # MIT
├─ .gitignore
└─ README.md
```

## 🚀 Quick Start
1. **Create the GitHub repo** named `security-compliance-360` (public is fine).
2. **Clone it locally** (or open Codespaces):
   ```bash
   git clone https://github.com/<your-username>/security-compliance-360.git
   cd security-compliance-360
   ```
3. **Copy these starter files** into the folder (or unzip the starter zip I provided).
4. **Open `index.html` in your browser** to view the dashboard locally.

> No build step is required. Edit files and refresh!

## 🌐 Deploy (pick one)
### Option A: GitHub Pages (easiest)
1. Commit & push:
   ```bash
   git add .
   git commit -m "Initial commit: security-compliance-360 starter"
   git branch -M main
   git push -u origin main
   ```
2. In GitHub: **Settings → Pages → Build and deployment → Source: `Deploy from a branch`**.  
   Select `main` and `/ (root)`. Save. Wait ~1–2 minutes for it to go live.

### Option B: Cloudflare Pages (fast + great with Workers later)
1. In Cloudflare Pages, click **Create a project** → **Connect to Git** → choose this repo.
2. **Build settings**: Framework preset = **None**, Build command = **(empty)**, Build output directory = `/`.
3. Deploy. You’ll get a `*.pages.dev` URL. Later we’ll add a Worker to fetch & cache feeds server-side.

## 📰 Data Sources (initial ideas)
We'll start with RSS/Atom and JSON endpoints (exact URLs may change; we'll add them into a Worker later to avoid CORS issues):
- CISA advisories/alerts
- CISA Known Exploited Vulnerabilities (KEV)
- NIST news / NVD notices
- PCI SSC blog / updates
- BleepingComputer, SecurityWeek, Dark Reading (RSS)
- Official framework updates (ISO 27001, 27017, SOC 2 guidance, HITRUST, IRAP, FedRAMP)

> **Note:** Many sources block direct browser requests (CORS). That’s why we’ll soon use **Cloudflare Workers** as a tiny backend to fetch and normalize feeds.

## 🧭 Roadmap (learn-by-building)
- **Milestone 1 (You are here):** Static dashboard scaffold (HTML/CSS/JS).
- **Milestone 2:** Live headlines from 1–2 feeds using a Worker proxy.
- **Milestone 3:** Filters (e.g., “FedRAMP”, “ISO 27001”, “PCI DSS 4.0”) + search.
- **Milestone 4:** Trend charts (by source/topic/severity) with client-side rendering.
- **Milestone 5:** Export (CSV/JSON) and simple saved views.
- **Milestone 6:** Nightly cache refresh + uptime checks.

## 🛡️ License
MIT — see `LICENSE` for details.

---

Built to help you learn and deliver real value fast.
