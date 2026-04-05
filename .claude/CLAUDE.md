# Utopia Group Landing Page
# Project: Revamping of My Home — AI Company Positioning
# Path: ~/utopia-group/
# Live: https://utopia-group.vercel.app

## BRAIN SYNC
Read `~/utopia-brain/BRAIN.md` at session start. Apply all design/copy/technical preferences.

## SOUL SYNC
Read `~/utopia-brain/SOUL.md` at session start. Observe CY's decisions for pattern updates.

## Lifecycle
- Status: Active
- Last Active: 2026-03-29 (session 3)

## Overview
Utopia Group flagship landing page. Positioning as Malaysia's leading AI implementation partner.
Stack: Next.js 16 + Tailwind 4 + TypeScript. Deployed on Vercel.

## Design System
- Theme: Clean white — all white/gray-50 backgrounds, no dark sections
- Brand: #116dff (original Utopia blue from utopiagroup.com.my)
- Brand Light: #3d8bff, Brand Dark: #0055d4
- Accents: Cyan #06B6D4, Violet #8B5CF6, Emerald #10B981, Amber #F59E0B
- CTA: Fuchsia #D946EF, WhatsApp: #25D366
- Fonts: Bricolage Grotesque (headings, weight 700) + Plus Jakarta Sans (body)
- .card class: white bg, 16px radius, #E2E8F0 border, subtle shadow, hover lift
- Pill-shaped buttons (rounded-full), dot-pattern backgrounds, scroll-reveal animations

## Key Files
- `src/lib/constants.ts` — All site content (testimonials, FAQ, apps, pricing)
- `src/app/globals.css` — Tailwind 4 @theme + all custom animations
- `src/components/sections/Hero.tsx` — Animated rotating H1 with 3 USPs
- `src/components/ui/RotatingText.tsx` — Core text rotation animation
- `src/app/api/leads/route.ts` — Lead magnet email capture (TODO: connect Supabase + Resend)

## Roadmap
- [ ] Connect Supabase for lead storage
- [ ] Connect Resend for ebook email delivery
- [ ] Create actual AI ebook PDF
- [ ] Add real OG image (1200x630)
- [ ] Update WhatsApp number to real number
- [ ] Add MDEC badge SVG
- [ ] Add real team/office photos
- [ ] SEO optimization + schema markup
- [ ] Custom domain: utopiagroup.com.my → Vercel (NS changed 2026-03-29, awaiting propagation)
- [ ] Add Google Analytics / Plausible
- [ ] Blog section for AI content marketing

## Changelog
- 2026-03-05: Initial build — 13-section landing page with dark theme, deployed to Vercel
- 2026-03-05: Multiple redesign iterations — CY rejected dark, navy, indigo themes
- 2026-03-06: Complete white redesign — brand #116dff, Bricolage+Jakarta fonts, real photos (no Spline), BankMatch/AutoViral style. 11 sections. Deployed.
- 2026-03-06: Project paused by CY (low priority)
- 2026-03-28: 8 pages rebuilt, 30+ components, LinkedIn MCP installed, cloud hero images, company logos scraped
- 2026-03-29 (session 1): Full design audit (gstack /design-review) + inspiration research (Sierra, Stripe, Linear, Anduril, AssemblyAI). 15/15 audit items fixed: layout variety (split/bento/staggered), stats 56px, text-wrap balance, range slider, section spacing 112px, nav touch targets, testimonials fixed, dark transitions, HowWeWork 4-step section, ambient orb, scroll animation variety (reveal-left/right), cyan accent #06B6D4, 4 Malaysian AI photos, asymmetric bento About page, footer targets. WhatsApp demo rebuilt (Encik Beku, bubble animation, Ahmad headshot). All tool icons populated (favicons from live sites + colored letter-marks). ROI calculator always visible. CTAs consolidated. 25+ commits.
- 2026-03-29 (session 2): Fixed broken Johor flag (was HTML file, replaced with real PNG). Removed duplicate WhatsApp/email CTAs from About page warehouses section. Changed all emails to devteam.utopia@gmail.com. Deployed to production.
- 2026-03-29 (session 3): Fixed hamburger menu close animation — was scrolling page behind overlay instead of lightbox behavior. Delayed overflow:hidden removal + added overscroll-contain. Deployed.
- 2026-03-29 (session 4): Logo grid: cyan-50 backgrounds (match hero sky), mobile truncation (8 shown + "+12 more"), nav cleanup (Home link added, Results removed). Deployed.
- 2026-03-29 (session 5): DNS fix — utopiagroup.com.my nameservers changed from Wix back to Exabytes defaults (ns184-186.mschosting.com). A record (76.76.21.21) and www CNAME already correct in Exabytes DNS zone. Awaiting propagation.
- 2026-03-30 (session 6): Gemini Live voice widget — real-time voice chat via WebSocket. Architecture: browser mic → 16kHz PCM → Gemini 3.1 Flash Live → 24kHz audio playback. Ephemeral tokens via @google/genai SDK. Avatar: "Ms Hui Yi" (AI-generated Chinese Malaysian). Features: scroll-to-hide, suggestion pills, page nav links, 3min session cap, silence auto-end. Also: redesigned OG image (dark gradient + stats), fixed favicon (removed SVG override, proper multi-size PNG). Env: GOOGLE_AI_API_KEY on Vercel. 6 deploys.
- 2026-03-30 (session 7): Fixed Telegram notification — summarizeTranscript() model name was `gemini-2.0-flash-lite` (invalid), changed to `gemini-2.0-flash`. Fixed X button transparency (cooldown disabled:opacity-50 removed). 2 deploys.
- 2026-03-30 (session 8): HOTFIX — space.utopiagroup.com.my + asktoppie.utopiagroup.com.my both NXDOMAIN after NS migration from Wix to Exabytes. Root cause: CNAME records only existed in Wix DNS, never recreated in Exabytes. Added both CNAMEs via Playwright automation of Exabytes DNS Manager. Both verified resolving via dig @8.8.8.8.
- 2026-04-03 (session 9): Staff photos + brand story. 24 photos from ~/Desktop/staff pic/ converted to WebP (PIL exif_transpose for rotation). Added to About (14-photo gallery + 3 chapter photos), Career (hero + 8-photo gallery), Home (new TeamCulture section, 6 photos). About Us page rewritten: "About" → "About Us" everywhere (nav, breadcrumb, meta). Brand story: 3 chapters (Growth Engine 2014-2021, AI Shift 2022-Now, Partners/Frontier) with alternating text+photo layout. Stats bar: removed RM130M revenue, added 27 Partners. SEO meta updated. ~8 deploys.
