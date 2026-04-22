# Utopia Group — AI Company Website

## Purpose
Sell Boss OS (customized business command center) to Malaysian SME Towkays via word-of-mouth referrals. The landing page is the conversion tool — when a friend sends the link, the Towkay must be convinced in 30 seconds.

**Buyer:** Chinese-Malaysian SME boss ("Towkay"), RM1-10M revenue, 5-30 staff. Gut + price decision-maker.
**Product:** Boss OS — a command center (not dashboard, not ERP) with 5 core features: Sales Command, WhatsApp AI, AI Insights, Cash Flow View, Staff & Ops.
**Traffic:** 70% word-of-mouth/WhatsApp referral, 30% ads.
**Language:** EN + Chinese toggle.

## Stack
Next.js 16 + Tailwind 4 + TypeScript

## Lifecycle
- **Status:** Active
- **Last Active:** 2026-04-22
- **Client:** Utopia Group (corporate site)
- **End User:** Malaysian SME owners (Towkays), potential hires, partners
- **Language:** EN + CN toggle
- **Domain:** utopiagroup.com.my
- **Live:** https://utopiagroup.com.my

## Commands
```bash
npm install          # setup
npm run dev          # dev server → http://localhost:3000
npm run build        # MUST pass before declaring done
```

## Architecture
- `src/app/` — App Router pages (home, about, career, automate, etc.)
- `src/app/boss-os/page.tsx` — BossOS "moving brochure" (7 sections)
- `src/components/sections/Boss*.tsx` — BossOS section components
- `src/lib/boss-os.ts` — All BossOS data (pricing, showcase, quiz, timeline, proof stats)
- `src/lib/translations.ts` — EN + CN translations (~180 keys)
- `src/lib/constants.ts` — Site identity, nav, footer links
- `public/images/boss-os/` — Dashboard mockups, logos, hero images

## Code Conventions
- MUST use key numbers from data, not hardcoded: 35+ companies, 400+ staff, 173 units, 27 partners
- MUST use `.card` or `.card-warm` class for cards
- Custom CSS classes: NEVER prefix with `bg-` (Tailwind 4 purges them). Use `premium-grid`, `grain-overlay`, `card-warm`, `gradient-text-warm`, `ambient-orb-warm`
- Background patterns: use `premium-grid` class at `opacity-[0.5]`+ (cross-hatch grid)
- All headings: `heading-display` (Inter 700) — NOT Instrument Serif

## Brand Assets
- **Color:** #116dff (brand), Cyan #06B6D4, Violet #8B5CF6, Emerald #10B981, Amber #F59E0B
- **Warm palette (BossOS):** #faf7f2 (cream bg), #b8860b (gold), #1a1612 (warm dark), #e8e2d9 (warm border)
- **CTA:** WhatsApp #25D366
- **Font:** Inter (headings 700 + body 400) — single font family sitewide
- **Key Numbers:** 35+ companies, 400+ staff, 173 business units, 27 partners, Founded 2014

## BossOS Page Structure (revamped 2026-04-09)
1. BossHero — warm cream bg, hero image, "Your whole business. One screen."
2. BossProofStrip — 3 auto-rotating result stats (DKing, Scaffolding, RevMove)
3. BossTimeline — "Your First Week" (Day 1 → Week 2+)
4. BossShowcase — 4 case studies (DKing, Scaffolding, Kak Kenduri, Ibnu Sina) + TV Wall
5. BossPricing — 3 tiers (Starter RM1,800/mo, Command Center RM2,800/mo, Ultra Mode custom)
6. BossQuiz — 3-question self-qualify → recommended tier → pre-filled WhatsApp
7. BossFinalCTA — simplified warm gradient CTA

## Boss OS Pricing (3-tier)
- Starter: From RM8,000 setup + RM1,800/mo (< 20% digital)
- Command Center: From RM18,000 setup + RM2,800/mo (20-50% digital) — HIGHLIGHTED
- Ultra Mode: Custom (50%+ digital, AI decisions)

## Roadmap
- [x] Homepage + all pages live
- [x] Brand story redesign (3-chapter narrative)
- [x] 24 staff photo galleries
- [x] BossOS scroll-driven brochure revamp (7 sections)
- [x] 3-tier pricing with self-qualify quiz
- [x] 4 showcase case studies with real logos
- [x] Homepage results CTA strip
- [x] Always-visible navbar
- [x] Premium cross-hatch background pattern
- [ ] Supabase for lead storage (quiz results + WhatsApp clicks)
- [ ] GA4 / Plausible setup
- [ ] SEO + schema markup on BossOS page
- [ ] Blog section
- [ ] More showcase examples (RevGo, etc.)

## Gotchas
- **Tailwind 4 class purging** — custom CSS classes starting with `bg-` get purged. Use plain names like `premium-grid`, NOT `bg-dotted-warm`.
- **Background pattern visibility** — dots need 1px+ radius and 0.5+ opacity to be visible. Cross-hatch grid lines at 0.5px work at 0.5 opacity.
- **Staff photo rotation** — use PIL exif_transpose() when converting.
- **DNS** — A record 76.76.21.21, www CNAME cname.vercel-dns.com (Exabytes DNS)

## Verification
- `npm run build` MUST pass
- Mobile-first: test at 375px
- All 5 showcase logos load (DKing, Scaffolding, Kak Kenduri/Sewa Kerusi Meja, RevMove/Sewa Motor, Ibnu Sina)
- Quiz flow: 3 questions → result → WhatsApp pre-filled
- Language toggle: EN/CN on all sections
- Deploy and output live URL
