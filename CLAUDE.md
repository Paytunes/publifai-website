# CLAUDE.md

## Project

**kamai.company** — Landing page / 1-pager for Kam+AI, a conversational operating system for India's small businesses. Will be deployed at kamai.company.

## Tech Stack

- **HTML5** with semantic elements
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`) — no local install
- **DM Sans** from Google Fonts (400, 500, 600, 700)
- **No build step** — edit HTML files directly, open in browser to preview
- Vanilla JS only where needed (no frameworks)

## Structure

```
index.html                ← Vision / company landing page (kamai.company)
pilot.html                ← Pilot offer page (₹4,999 setup + ₹499/mo) — linked from index
pilot-1pager.html         ← Old pilot 1-pager (reference, superseded by pilot.html)
internal-product-doc.html ← Internal product doc (noindex, not linked — team-only via direct URL)
home.jsx                  ← Original React component (reference only, not used)
Kamai.md                  ← Full vision document and product spec (source of truth)
kam_ai_compressed.docx.pdf ← Master launch document (strategy + GTM playbook)
DESIGN.md                 ← Design system (source of truth for all visual decisions)
```

## Key Product Details

- **Target market:** ~63M Indian SMBs (chai stalls, tutors, clinics, freelancers, local shops)
- **Core thesis:** Every small business operation that requires a separate app can be a conversation
- **First product:** Website Agent — build & maintain a professional website entirely through WhatsApp/Telegram chat
- **Pricing:** Free tier (subdomain, 3 pages) → Starter ₹199/mo → Pro ₹499/mo → Business ₹999/mo
- **Pilot pricing (inaugural):** ₹4,999 one-time setup + ₹499/mo (normally ₹12K + ₹1,200/mo)
- **Tech stack:** Node.js + grammY, Claude API, Cloudflare Pages, Supabase, Razorpay UPI
- **Pilot:** 20-50 businesses in Karnal/NCR

## Team

- **Shashank Singla** — Founder (Product/Strategy/Engineering), runs HCode Technologies
- **Gaurav Tiwari** — Co-founder, CEO of PayTunes (digital advertising platform)
- **Swastik Sharma** — Developer (Full-time), IIT Roorkee, AI pipeline experience
- **Aditi Sharma** — Developer, manages Paytunes websites (the manual version of what Kam+AI automates)

## Conventions

- All styling via Tailwind utility classes or inline `<style>` blocks
- Mobile-first responsive design
- Green brand palette (#1a6b4a primary, #2d9d6a accent, #25D366 WhatsApp CTA)
- Content sourced from `Kamai.md` and `kam_ai_compressed.docx.pdf` (sources of truth)

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## gstack

Use the `/browse` skill from gstack for all web browsing — **never use `mcp__claude-in-chrome__*` tools**.

Available skills:
- `/office-hours` — YC-style brainstorming and idea validation
- `/plan-ceo-review` — CEO/founder-mode plan review
- `/plan-eng-review` — Engineering manager plan review
- `/plan-design-review` — Designer's eye plan review
- `/design-consultation` — Design system creation (DESIGN.md)
- `/review` — Pre-landing PR code review
- `/ship` — Ship workflow (test, review, PR, push)
- `/land-and-deploy` — Merge PR + deploy + verify
- `/canary` — Post-deploy canary monitoring
- `/benchmark` — Performance regression detection
- `/browse` — Headless browser for QA and dogfooding
- `/qa` — Systematic QA testing + fix loop
- `/qa-only` — QA report without fixes
- `/design-review` — Visual QA audit + fix loop
- `/setup-browser-cookies` — Import real browser cookies
- `/setup-deploy` — Configure deployment settings
- `/retro` — Weekly engineering retrospective
- `/investigate` — Systematic debugging with root cause analysis
- `/document-release` — Post-ship documentation update
- `/codex` — OpenAI Codex second opinion (review/challenge/consult)
- `/cso` — Chief Security Officer audit
- `/autoplan` — Auto-review pipeline (CEO + design + eng)
- `/careful` — Safety guardrails for destructive commands
- `/freeze` — Restrict edits to a specific directory
- `/guard` — Full safety mode (careful + freeze)
- `/unfreeze` — Clear freeze boundary
- `/gstack-upgrade` — Upgrade gstack to latest version
