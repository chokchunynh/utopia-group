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
- **Last Active:** 2026-04-05
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
- `src/components/sections/` — Page sections (Hero, TeamCulture, etc.)
- `src/lib/constants.ts` — All site content (testimonials, FAQ, apps, pricing)
- `public/images/team/staff/*.webp` — 24 staff photos (PIL exif_transpose)

## Code Conventions
- MUST use key numbers from data, not hardcoded: 35+ companies, 400+ staff, 173 units, 27 partners
- MUST NOT add dark sections — clean white theme only
- MUST use `.card` class (white bg, 16px radius, #E2E8F0 border, hover lift)

## Brand Assets
- **Color:** #116dff (brand), Cyan #06B6D4, Violet #8B5CF6, Emerald #10B981, Amber #F59E0B
- **CTA:** Fuchsia #D946EF, WhatsApp #25D366
- **Font:** Bricolage Grotesque (headings 700) + Plus Jakarta Sans (body)
- **Key Numbers:** 35+ companies, 400+ staff, 173 business units, 27 partners, Founded 2014

## Roadmap
- [x] Homepage + all pages live
- [x] Brand story redesign (3-chapter narrative)
- [x] 24 staff photo galleries
- [ ] Supabase for lead storage + Resend for ebook delivery
- [ ] GA4 / Plausible setup
- [ ] SEO + schema markup
- [ ] Blog section

## Gotchas
- **Staff photo rotation** — some portrait photos display wrong in landscape grids. Always use PIL exif_transpose() when converting.
- **DNS** — A record 76.76.21.21, www CNAME cname.vercel-dns.com (Exabytes DNS, not Wix)
- **Subdomains** — space.utopiagroup.com.my + asktoppie.utopiagroup.com.my need CNAME in Exabytes

## Verification
- `npm run build` MUST pass
- Mobile-first: test at 375px
- Staff photos display correctly (no rotation issues)
- Deploy and output live URL
