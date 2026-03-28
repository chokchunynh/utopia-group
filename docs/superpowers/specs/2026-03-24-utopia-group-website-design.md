# Utopia Group Website — Design Spec
**Date:** 2026-03-24
**Status:** Approved by CY
**Pipeline Mode:** LITE (landing/brochure site, no user accounts)
**Spec Review:** Issues resolved 2026-03-24 (see Appendix A)
**Project Dir:** ~/utopia-group/
**Domain:** utopiagroup.com.my
**Vercel Project:** utopia-group

---

## 1. Overview

Complete rebuild of Utopia Group's company website. Positioning: Malaysia's only AI implementation partner that actually operates 30+ businesses. Approach: "Operator-First" — lead with operational proof, not consulting jargon.

**One-liner:** "We Run AI Across 30 Companies. Now We'll Run It For Yours."

**Target audience:** Malaysian SME owners and business decision-makers looking to implement AI. English-language. B2B.

---

## 2. Competitive Positioning

### The Gap
Every Malaysian AI company is either enterprise-only with opaque pricing (Agmo, Entermind, YCP) or generic consultancy with no operational proof. Nobody leads with real business operations.

### Utopia's Moat
- Operates 30+ real businesses (co-living, healthcare, transport, construction, home services, etc.)
- 300+ staff across all companies
- 8 live AI SaaS products already built and in use
- 70% earnings improvement from internal AI implementation
- The ONLY Malaysian AI company with transparent public pricing
- Physical Mac Mini deployment in client offices — tangible, not abstract

---

## 3. Site Architecture

### Pages

| Route | Purpose | Priority |
|-------|---------|----------|
| `/` | Homepage — full conversion story | P0 |
| `/automate` | "What Can You Automate?" — tabbed department view | P0 |
| `/automate/accounting` | Accounting & Finance tools deep-dive | P1 |
| `/automate/hr` | HR & People tools deep-dive | P1 |
| `/automate/marketing` | Marketing & Content tools deep-dive | P1 |
| `/automate/sales` | Sales & Customer Service tools deep-dive | P1 |
| `/automate/operations` | Operations & Logistics tools deep-dive | P1 |
| `/results` | Case studies with real business numbers | P1 |
| `/about` | Founder story, team, 30+ companies, timeline | P1 |
| `/contact` | WhatsApp CTA, office address, contact form | P1 |

### Navigation
- **Desktop:** Logo | What Can You Automate | Results | About | Pricing | [WhatsApp Us] (green button)
- **Mobile:** Hamburger menu + sticky bottom CTA bar (WhatsApp + "Try Free")
- WhatsApp FAB always visible on scroll

---

## 4. Homepage — Section Flow

### 4.1 Navbar
Fixed top. Logo left, nav links center, WhatsApp CTA right (green pill button).

### 4.2 Hero
- **Eyebrow:** "Malaysia's Only AI Partner That Actually Operates Businesses"
- **H1:** "We Run AI Across 30 Companies. Now We'll Run It For Yours."
- **Subtitle:** "We don't just consult. We set up a machine in your office, build your AI dashboard, and automate your operations. From day one."
- **CTAs:** "Try Our Tools Free" (white/outline) | "WhatsApp Us" (green)
- **Visual:** Placeholder slot for CY photo / team photo / Mac Mini setup photo
- **Background:** Clean white, subtle dot pattern or gradient accent

### 4.3 Stats Bar
Horizontal strip, animated counters on scroll:
- 30+ Companies Run
- 300+ Staff
- 8 AI Tools Built
- 70% Earnings Improved

### 4.4 The Problem
"Most AI companies have never run a real business."
- They sell PowerPoint decks. We sell results.
- They hide pricing behind "contact us." We show you upfront.
- They send consultants. We send a machine.
Three columns with icon + pain point + Utopia's answer.

### 4.5 Mac Mini Section (ONLY dark section)
Background: #0f172a → #1e293b gradient. This creates visual contrast.
- **H2:** "We Don't Just Send Software. We Set Up a Machine."
- **Body:** Physical Mac Mini in your office. Custom AI dashboard on screen. Operations automated.
- **Timeline:** Day 1 (machine installed) → Week 1 (5+ processes automated) → Month 1 (full AI operations running)
- Visual: placeholder for Mac Mini product shot with glowing dashboard

### 4.6 TrueAI Feature
Branded feature section with trademark symbol.
- **H2:** "TrueAI — Malaysia's First 100% Autonomous AI System"
- **3 cards:** Instant WhatsApp Link | Self-Building Knowledge | Toggle On/Off after 6 months
- **Cost comparison:** Building yourself = RM300+/mo minimum (database, hosting, API). With Utopia = included. We run at scale.

### 4.7 What Can You Automate? (Department Preview)
Tabbed horizontal selector: Accounting | HR | Marketing | Sales | Operations
- Each tab shows 2-3 tool cards with name, description, Live/Coming Soon badge, "Try Free" link
- "See All [Department] Tools" CTA links to /automate/[dept]
- This section is a preview of the /automate page

### 4.8 AI Results
Table/cards showing real business transformations:

| Business | AI Implementation | Result |
|----------|------------------|--------|
| Transport (Rev Move) | Automated trip assignment + GPS AI | Auto-assigned in seconds, 40% fuel savings |
| Co-Living (Utopia) | AI tenant matching + auto-collections | RM450K+/mo, +800% growth |
| Healthcare (Ibnu Sina) | AI lead scoring + WhatsApp automation | RM1.3M in 6 months |
| Construction (Scaffolding) | Inventory AI + demand forecasting | RM450K/mo from zero |
| Home Services (Encik Beku) | AI scheduling + KPI management | 42,000+ WhatsApp enquiries |
| All Companies | Driver efficiency + operations AI | 70% earnings improvement |

"See All Case Studies" CTA links to /results.

### 4.9 Pricing
Three columns, transparent:

**Free — Try Our Tools**
- Access SlipMatch, AutoViral, RecurPay
- No credit card required
- See AI in action first

**AI Starter — RM12,000 setup + RM3,000/month** (Featured)
- Mac Mini installed in your office
- Custom AI dashboard
- 5+ areas of improvement
- WhatsApp AI sales agent (TrueAI)
- Monthly optimization

**Full Transformation — RM68,000 / 6 months** (All-In)
- Everything in Starter
- 15+ areas of improvement
- 3 critical areas (sales, inventory, purchasing)
- Dedicated AI team on-site
- Custom AI tools built for you

**ROI callout:** "We help SMEs save RM180,000/year. Large companies save RM3M+."

### 4.10 Why Utopia
3 columns:
- "We Use It First" — every tool was built for our own 30+ companies before we sold it
- "Built for Malaysia" — SSM, EPF, SOCSO, PDPA, Malaysian banks. Not a Western tool localized.
- "We Implement. You Relax." — not SaaS-and-goodbye. We show up, set up, and maintain.

### 4.11 FAQ
8-10 questions. Key ones:
- How is this different from ChatGPT?
- What if I'm not tech-savvy?
- How long until I see results?
- Can I cancel anytime?
- What's included in the monthly fee?
- Do you work with my industry?

### 4.12 Final CTA
- "Ready to Automate Your Business?"
- WhatsApp button (primary) + "Try Free Tools" (secondary)
- Repeat the stats bar

### 4.13 Footer
Logo | Navigation links | Products links | Contact info | Social links | "Utopia Group Sdn Bhd" | Address

---

## 5. /automate Page — "What Can You Automate?"

### Layout
Full-page tabbed view. 5 department tabs at top (sticky on scroll). Each department shows:
- Department icon + name + description
- Grid of tool cards (2-3 columns)
- Each card: tool name, 1-line description, Live/Coming Soon badge, screenshot placeholder, "Try Free" or "Learn More" link

### Department → Tools Mapping

**Accounting & Finance**
- SlipMatch (Live) — AI bank reconciliation, 8 Malaysian banks
- RecurPay (Live) — PayEx collection tracker, mandate sync
- GetBill (Live) — TNB/SYABAS bill extraction
- AI Invoice Matching (Coming Soon)

**HR & People**
- Utopia Payroll (Live) — GPS+QR+WiFi attendance, auto payroll, EPF/SOCSO/EIS
- Ask Toppie (Live) — RAG AI assistant for staff queries
- KPI Dashboard AI (Coming Soon)
- AI Leave & Scheduling (Coming Soon)

**Marketing & Content**
- AutoViral (Live) — AI social media content generator
- Kreativ (Live) — AI graphic design platform
- AutoRank (Coming Soon) — SEO content engine
- AI Website Builder (Coming Soon)
- AI Ad Manager (Coming Soon)

**Sales & Customer Service**
- TrueAI WhatsApp Agent (Live) — autonomous sales closing AI
- AI Lead Scoring (Coming Soon)
- AI CRM (Coming Soon)
- Customer Support Bot (Coming Soon)

**Operations & Logistics**
- U-Stay (Live) — property & tenant management
- AI Trip Assignment (Coming Soon)
- GPS Journey Optimizer (Coming Soon)
- AI Inventory Management (Coming Soon)
- Smart Scheduling (Coming Soon)

### Sub-pages (/automate/[dept])
Each department gets its own page with:
- Department hero with icon and description
- Detailed tool cards with larger screenshots
- Before/after metrics specific to that department
- "Get Started" CTA

---

## 6. /results Page

Case studies organized by industry. Each case study:
- Industry + company name
- The challenge (before AI)
- What was implemented
- Results (with real numbers)
- Photo placeholder

Industries to cover: Transport, Co-Living, Healthcare, Construction, Home Services, Equipment Rental.

---

## 7. /about Page

- Founder section: CY photo placeholder, bio (UCLA, Bank Negara, founded 2014, 30+ companies)
- Company timeline: 2014 → first co-living → grew to 30+ businesses → built AI tools → now selling AI
- Team section: photo grid placeholder
- Office locations: Jalan Putra KL (HQ) + Penang, Shah Alam, Sentul, Sepang, Bukit Bintang
- Numbers: 30+ companies, 300+ staff, 10+ years, 8 AI tools

---

## 8. /contact Page

- WhatsApp CTA (primary, large green button)
- Contact form (name, company, email, message)
- Office address: S-U1-02, Jalan 1/64D off Jalan Putra, KL 50350
- Google Maps embed
- Phone number
- Email

---

## 9. Design System

### Colors
- **Brand:** #116dff (Utopia Blue)
- **Brand Light:** #3d8bff
- **Brand Dark:** #0055d4
- **Dark Section:** #0f172a → #1e293b (Mac Mini section ONLY)
- **WhatsApp:** #25D366
- **Success:** #10B981
- **Warning:** #F59E0B
- **Background:** white (#ffffff) and gray-50 (#f8fafc)
- **Text:** #0f172a (headings), #334155 (body), #64748b (secondary)
- **Border:** #e2e8f0

### Typography
- **Headings:** Bricolage Grotesque, weight 700-800
- **Body:** Plus Jakarta Sans, weight 400-500
- **Buttons:** Plus Jakarta Sans, weight 700

### Components
- Pill-shaped buttons (rounded-full)
- Cards: white bg, 16px radius, #e2e8f0 border, subtle shadow, hover lift
- Stats counters: animated on scroll (Motion library)
- Scroll-reveal animations: subtle fade-up
- WhatsApp FAB: fixed bottom-right, always visible
- Mobile CTA bar: sticky bottom on mobile (WhatsApp + Try Free)
- Department tabs: horizontal scrollable on mobile
- Tool chips: colored by status (green = Live, amber = Coming Soon)

### Visual Rules
- Mobile-first (80-90% mobile users)
- Clean white backgrounds throughout
- ONE dark section only (Mac Mini)
- Real photos when available, designed placeholder slots
- No 3D elements, no abstract graphics, no cartoonish imagery
- Extrabold headings, bold buttons
- No thin/light fonts

---

## 10. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| Fonts | Bricolage Grotesque + Plus Jakarta Sans (Google Fonts) |
| Deployment | Vercel |
| Domain | utopiagroup.com.my |

Reusing existing ~/utopia-group project. Clean rebuild of all components with new architecture.

---

## 11. Content Strategy

### Real Data to Use
- Revenue numbers from Wix site case studies (RM450K/mo, RM1.3M, +800%, 42,000+ WhatsApp)
- CY's 70% earnings improvement claim
- 30+ companies, 300+ staff stats
- LinkedIn company data (founded 2014, Jalan Putra HQ, 201-500 employees)

### Creative Freedom Areas
- AI-specific results (trip assignment, GPS AI, driver efficiency, KPI management)
- Coming Soon product descriptions
- FAQ answers
- Section copywriting

### Photo Placeholders Needed
- CY founder photo (hero + about page)
- Team photo grid (about page)
- Office photos (about page)
- Mac Mini setup in office (Mac Mini section)
- Product screenshots for each tool card

---

## 12. SEO Targets

**Primary keywords:**
- AI consultant Malaysia
- AI implementation Malaysia
- AI for SME Malaysia

**Secondary keywords:**
- WhatsApp AI Malaysia
- AI automation Malaysia
- AI bisnes Malaysia (BM)

**Schema markup:** Organization, Product, FAQ, LocalBusiness

---

## 13. Out of Scope (for this build)

- Blog section (future)
- User authentication / login
- Supabase integration (lead form only, can use API route)
- E-commerce / payment processing
- Multi-language toggle (English only for now)
- Google Analytics (add post-launch)

---

## Appendix A — Spec Review Resolutions (2026-03-24)

### Critical Items Resolved

**1.1 Pricing model:** Old SaaS pricing (Starter/Pro/Enterprise from constants.ts) is REPLACED ENTIRELY. The new model is implementation-based (Free tools / RM12K+RM3K / RM68K). Individual tools (SlipMatch, AutoViral) retain their own free tiers accessible via /automate.

**1.2 "Pricing" nav link:** Scrolls to homepage anchor `/#pricing`. No dedicated /pricing page.

**1.3 Contact form backend:** API route at `/api/contact/route.ts`. Sends email via Resend to hello@utopiagroup.com.my. Fields: name (required), company (required), email (required, validated), phone (optional), message (required). Success state: "Thanks! We'll WhatsApp you within 1 hour." Error state: "Something went wrong. WhatsApp us directly at +60146869468." No Supabase. Rate limit: 3 submissions per IP per hour.

### Important Items Resolved

**2.1 CTA color:** Fuchsia #D946EF is DROPPED. CTAs use brand blue #116dff (primary) and WhatsApp green #25D366 (WhatsApp buttons). Outline variant for secondary CTAs.

**2.2 Body text color:** #334155 (spec value wins, slate-700).

**2.3 Secondary text color:** #64748b (spec value wins, slate-500).

**2.4 Tool count:** Corrected to "9 AI Tools Built" (SlipMatch, RecurPay, GetBill, Utopia Payroll, Ask Toppie, AutoViral, Kreativ, TrueAI, U-Stay).

**2.5 Product name:** SlipMatch is the canonical name. BankMatch was the old name — remove all references.

**2.6 Breakpoints:** Use Tailwind 4 default breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px). No custom breakpoints.

**2.7 /automate sub-pages:** DEFERRED to P2. Ship /automate as a single tabbed page first. Department sub-pages are a fast follow post-launch since they're templated.

**2.8 /results page:** Card layout. Each case study is a horizontal card with industry badge, challenge, implementation, and result. Same 6 entries as homepage but with expanded narrative.

### Scope Note
Homepage (13 sections) + /automate (tabbed) + /results + /about + /contact = 5 routes for P0/P1. Department sub-pages deferred to P2. This is within LITE scope.

### Additional Cleanup
- Remove @splinetool/react-spline and @splinetool/runtime from package.json
- Remove Spline component from src/components/ui/
- FAQ: Write 10 questions (copy doc has all 10)
- Schema markup: Organization + LocalBusiness on layout, FAQ on homepage, Product on /automate
- OG images: Placeholder for now, generate with Satori post-launch
- Google Maps on /contact: iframe embed (no API key needed)
- Testimonials: EXCLUDED from homepage. Using real case study results instead. No fake testimonials.
