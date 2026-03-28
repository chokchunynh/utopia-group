# Next Session Spec
## Context: Massive Utopia Group website redesign — 8 pages built, LinkedIn MCP installed
## Task: Test LinkedIn MCP + pull team photos + remaining polish

## Priority 1: LinkedIn MCP
- MCP is in settings.json, session authenticated at ~/.linkedin-mcp/profile
- Test `get_company_profile`, `search_people`, `get_person_profile` tools
- Pull team member photos from LinkedIn company page (utopiagroupmy)
- Download photos and spread across relevant pages (About, Career)
- DO NOT list individual team member names publicly — just "Meet the full team on LinkedIn"
- Future: Build auto LinkedIn posting tool

## Priority 2: Remaining Polish
- Layout variety — break center-aligned monotony (alternating left/right sections, bento grids from Linear/Stripe/Clerk inspiration)
- "We don't just sell AI" section — CY said it's dull, needs redesign
- Illustration image pack — generate consistent illustrations using image-director (golden-cloud color palette)
- Real testimonial quotes — CY to provide actual quotes (current ones are placeholders)

## Priority 3: SEO & Meta
- Schema markup for all pages
- OG images (1200x630) for each page
- Sitemap for new pages
- Google Analytics wiring

## Files to touch:
- src/app/about/page.tsx — add LinkedIn photos to team section
- src/components/sections/* — layout variety updates
- src/components/sections/WeUseItSection.tsx — redesign (currently dull)
- public/images/team/ — downloaded LinkedIn photos go here

## Decisions already made:
- 35+ companies, 400+ staff, 173 business units, RM130M+ revenue (source of truth)
- Inter font only (Mintlify-style)
- 5 cloud hero backgrounds (one per page)
- Team section: NO individual names listed, just LinkedIn CTA
- Pricing moved to /how-we-charge (not on homepage)
- Nav: What We Automate | Results | About | Career | More (dropdown: How We Charge, AI Masterclass → nested: Companies/Individuals)
- Offices: HQ at Sunway Putra Tower, Sales at Jalan Putra, 8 warehouses (Shah Alam ×3, Penang ×2, Johor, Melaka, Ipoh)
- AI Masterclass: Company (on-site, RM5K-25K) + Individual (RM299×8 sessions)

## Open questions:
- CY needs to provide real testimonial quotes to replace placeholders
- CY needs to provide office photos for About page
- LinkedIn auto-posting tool design (read vs write access)

## Live pages:
- / (homepage)
- /about (company story, portfolio, team, offices)
- /career (positions, benefits, apply)
- /how-we-charge (pricing + FAQ)
- /masterclass (company training)
- /masterclass/individual (individual training)
- /team (redirects to /about#team)
