# Next Session Spec
## Context: 4 sessions of design polish — nav, mobile menu, dropdown, images, animations all done. Site live at utopia-group.vercel.app.
## Task: GA4 setup + custom domain cutover (utopiagroup.com.my → Vercel)

## Immediate: GA4
- CY creating GA4 property — needs G-XXXXXXXXXX measurement ID
- Component already built (src/components/layout/GoogleAnalytics.tsx) — just needs env var + redeploy

## Priority 1: Custom Domain (utopiagroup.com.my → Vercel)
- Currently on Wix. DNS cutover timing needs CY approval.
- Update metadataBase, OG URLs, sitemap
- Set up www → non-www redirect

## Priority 2: Lead Funnel (Supabase + Resend)
## Priority 3: Content (real testimonials, case studies, ebook)
## Priority 4: Blog + Thought Leadership

## Decisions already made:
- Nav: Home / What We Automate / About / Career + More dropdown
- Mobile More: flat links (AI Tools, How We Charge, AI Masterclass — Companies/Individuals)
- Email: devteam.utopia@gmail.com | MDEC badge removed
- 44 Wix images extracted, logos + photos populated across all pages

## Open questions for CY:
- GA4 measurement ID
- Domain cutover timing
- Real testimonial quotes + ebook topic
