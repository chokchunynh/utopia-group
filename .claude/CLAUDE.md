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
- Last Active: 2026-03-05

## Overview
Utopia Group flagship landing page. Positioning as Malaysia's leading AI implementation partner.
Stack: Next.js 16 + Tailwind 4 + TypeScript. Deployed on Vercel.

## Design System
- Theme: "AI Nebula" — dark base with blue/violet/cyan accents
- Base: #06060F, Surface: #0C0C1D, Elevated: #14142B
- Accents: Blue #3B82F6, Cyan #06B6D4, Violet #8B5CF6, Emerald #10B981, Amber #F59E0B
- CTA: Fuchsia #D946EF, WhatsApp: #25D366
- Fonts: Rubik (headings 700-900) + Outfit (body 400-700)
- Glass cards, scroll-reveal animations, grain texture overlay

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
- [ ] Custom domain: utopiagroup.com.my → Vercel
- [ ] Add Google Analytics / Plausible
- [ ] Blog section for AI content marketing

## Changelog
- 2026-03-05: Initial build — 13-section landing page with all components, deployed to Vercel
