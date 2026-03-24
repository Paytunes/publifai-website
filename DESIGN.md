# Design System — Kam.ai

## Product Context
- **What this is:** Landing site for Kam.ai — a WhatsApp-powered bilingual website creation service for Indian SMBs
- **Who it's for:** SMB owners (primary), agency resellers, investors/partners
- **Space/industry:** Indian SMB/fintech, website builders, conversational AI
- **Project type:** Marketing site (2-page: vision + pilot offer)
- **Reference:** wati.io — bright, approachable, WhatsApp-native, Indian SMB-friendly

## Aesthetic Direction
- **Direction:** Clean, bright, product-forward — inspired by wati.io
- **Decoration level:** Intentional — green accents, card-based layout, WhatsApp chat motifs
- **Mood:** Approachable, energetic, trustworthy. Feels like a product that gets you customers, not a tech manifesto. Social proof and clear value props up front.

## Typography
- **Display/Hero:** DM Sans 700 — bold, geometric, clean. Professional but not cold.
- **Body:** DM Sans (400, 500, 600, 700) — geometric sans, warmer than Inter, excellent readability
- **UI/Labels:** DM Sans 600
- **Data/Tables:** DM Sans (tabular-nums)
- **Loading:** Google Fonts CDN
  ```html
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
  ```
- **Scale:**
  - Display XL: 48px / 1.15 line-height, 700 weight (hero headlines)
  - Display: 36px / 1.2, 700 weight (section titles)
  - Heading: 24px / 1.3, 600 weight (subsections)
  - Subheading: 20px / 1.4, 600 weight (card titles)
  - Body: 16px / 1.6 (paragraphs)
  - Body SM: 14px / 1.5 (supporting text)
  - Label: 13px / 1.4, 600 weight, slight tracking (badges, tags)
  - Caption: 12px / 1.4 (metadata)

## Color
- **Approach:** Bright and clean — white base, green energy, high contrast
- **Primary:** `#1a6b4a` — deep forest green for text accents, nav, headings
- **Primary Light:** `#2d9d6a` — lighter green for badges, secondary elements
- **Accent / CTA:** `#25D366` — WhatsApp green, primary CTA buttons
- **Accent Hover:** `#1fb855` — darker green for hover states
- **Surface:** `#FFFFFF` — clean white
- **Surface Alt:** `#F0FDF4` — light green tint for alternating sections, highlights
- **Surface Gray:** `#F9FAFB` — very light gray for alternating sections
- **Text:** `#111827` — near-black (gray-900)
- **Text Secondary:** `#4B5563` — dark gray (gray-600)
- **Muted:** `#9CA3AF` — medium gray (gray-400)
- **Border:** `#E5E7EB` — light gray (gray-200)
- **Semantic:** success `#16a34a`, warning `#d97706`, error `#dc2626`, info `#2563eb`

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous but not wasteful
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(80) 5xl(96)
- **Section padding:** 64-96px vertical between major sections

## Layout
- **Approach:** Card-based, scannable — feature cards, stat boxes, step-by-step flows
- **Grid:** CSS grid, responsive columns (1 col mobile → 2-3 col desktop)
- **Max content width:** 1120px (container), 720px (prose), 480px (forms)
- **Border radius:** sm:6px, md:10px, lg:16px, xl:20px, full:9999px
- **Cards:** White with subtle border or shadow, generous padding (24-32px)

## Motion
- **Approach:** Minimal-functional — smooth scroll, subtle fade-in on scroll
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms)

## Component Patterns
- **CTA buttons:** #25D366 bg, white text, rounded (10px), 600 weight, generous padding
- **Secondary buttons:** outlined with #1a6b4a border and text
- **Stat cards:** large number (DM Sans 700, #1a6b4a), small label below
- **Feature cards:** icon/emoji + heading + short description, white bg, border
- **Steps:** numbered circles (green) + title + description, horizontal on desktop
- **Social proof:** trust badges, stat callouts, testimonial quotes
- **Chat motifs:** chat bubble shapes for testimonials or "how it works" illustrations

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-24 | Initial design system created | Competitive research across Razorpay, Khatabook, Vyapar, OkCredit, Zoho, wati.io |
| 2026-03-24 | Pivoted from editorial/serif to clean/sans-serif | User feedback: Instrument Serif + warm neutrals felt "SF tech vibe", not Indian SMB-approachable. wati.io reference. |
| 2026-03-24 | DM Sans for all typography | Clean geometric sans, warmer than Inter, professional but approachable for dual audience (SMBs + investors) |
| 2026-03-24 | White backgrounds + bright green accents | Following wati.io pattern — energy, clarity, WhatsApp-native feel. Not muted/editorial. |
| 2026-03-24 | Card-based scannable layout | SMB owners scan, don't read long-form. Feature cards, stat boxes, step flows > editorial prose. |
