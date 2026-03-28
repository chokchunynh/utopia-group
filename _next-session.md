# Next Session Spec
## Context: Added AI video hero (Kling 3) + Ken Burns mobile animation
## Task: Push Ken Burns CSS change, then resume Priority 1

## Immediate (1 min — Ken Burns not yet pushed):
```bash
cd ~/utopia-group && git add src/app/globals.css && git commit -m "Add Ken Burns zoom on mobile hero" && git push
```

## Priority 1: Custom Domain + GA4 (15 min, makes the site "real")
- Connect utopiagroup.com.my to Vercel (currently on Wix)
- Update metadataBase, OG URLs, sitemap to utopiagroup.com.my
- Set up www → non-www redirect
- Add GA4: get measurement ID from CY, set NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel env vars

## Priority 2: LinkedIn MCP Team Photos
- Fresh session reconnects MCP — test get_company_profile for utopiagroupmy
- Pull team member photos, wire into About and Career pages
- DO NOT list individual names — just "Meet the full team on LinkedIn"

## Priority 3: Lead Funnel (Supabase + Resend)
- Connect Supabase for lead storage (API route at /api/leads exists)
- Connect Resend for ebook email delivery
- Create actual AI ebook PDF (lead magnet content)
- Wire the "Try Our Tools Free" CTA to capture emails

## Priority 4: Content
- Real testimonial quotes from CY (current ones are AI placeholders)
- Real office/team/warehouse photos to replace AI-generated ones
- Case study pages for top 3 companies (Encik Beku, Ibnu Sina, Scaffolding)

## Priority 5: Blog + Thought Leadership
- Blog section for AI content marketing
- 3-5 seed articles (AI implementation guides, ROI stories, Malaysian SME AI adoption)
- SEO-optimized, bilingual if CY wants BM versions

## Decisions already made:
- Hero video: Kling 3 generated, 730KB compressed, desktop only
- Ken Burns: 20s scale(1)→scale(1.08) alternate, mobile only (.bg-image-hero)
- Font: Inter (CY chose A)
- Accent: Cyan #06B6D4 (CY chose B)
- ROI: always visible, grayed out until selection
- CTAs: consolidated to single final CTA
- Demo: Encik Beku Aircond, ends with customer reply
- All tool icons: real favicons + colored letter-marks
- All company logos: 192x192 PNGs from live Wix sites
- MDEC badge: removed (CY said remove)

## Open questions for CY:
- GA4 measurement ID for utopiagroup.com.my
- Domain cutover timing (when to switch DNS from Wix)
- Real testimonial quotes
- Real photos (office, team, warehouse)
- Ebook content topic (AI implementation guide? ROI calculator breakdown?)
