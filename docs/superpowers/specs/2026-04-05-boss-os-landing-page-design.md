# Boss OS Landing Page — Design Spec

**Date:** 2026-04-05
**Project:** utopiagroup.com.my
**Approach:** "See It Working" (interactive hero) + "Many Doors" (industry sub-pages)

---

## Buyer Profile

**The Towkay** — Chinese-Malaysian SME boss, RM1-10M revenue, 5-30 staff. Runs 1-3 businesses. Data lives in spreadsheets, WhatsApp groups, and accounting software (SQL, AutoCount, UBS). Doesn't know what "AI" really means but knows competitors are getting ahead. Decision = gut + price. Speaks English + Chinese.

**Traffic source:** Primarily word-of-mouth / WhatsApp referral (70%+). The Towkay arrives because someone they trust said "check this out." They're already warm — they need proof it's legit and a price.

**Language:** English with Chinese language toggle. Code and labels always EN.

---

## Product: Boss OS

A customized business command center — not a read-only dashboard, but a full **command center** where the Towkay runs their business. Approve orders, assign staff, reply to customers through AI, trigger campaigns.

**Positioning rules:**
- Never say "ERP", "CRM", "platform", or "AI-powered solution"
- Always say "command center", "your business on one screen", "Boss OS"
- Outcomes before features, ringgit before percentages

**5 Core Features (every Boss OS includes):**

| # | Feature | Towkay Language | What It Replaces |
|---|---------|----------------|-----------------|
| 1 | Sales Command | "Know your revenue before 9am" | Checking 3 apps + calling manager |
| 2 | WhatsApp AI | "Auto-reply customers 24/7 in BM/EN/CN" | Hiring a customer service person |
| 3 | AI Insights & Alerts | "AI watches your business while you sleep" | Nobody — this didn't exist for SMEs |
| 4 | Cash Flow View | "Money in, money out, who owes you" | Opening AutoCount + Excel + bank app |
| 5 | Staff & Ops Tracker | "Who's working, what's overdue" | The WhatsApp group you chase staff in |

**Bonus features (upgrade/add-on):**
- Inventory & Stock Intelligence
- Marketing Autopilot
- Customer Database & CRM

---

## Pricing Strategy

**Psychology:** ROI-first. "You'll save more than you spend." Anchor the waste cost BEFORE showing the price.

**Two tiers (new structure):**

| | Starter | Full Boss OS |
|---|---------|-------------|
| **Target** | 1-10 staff, single location | 10-50 staff, growing business |
| **Setup** | RM5,000 (one-time) | RM12,000 (one-time) |
| **Monthly** | RM1,500/month | RM3,000/month |
| **Includes** | Sales Command, WhatsApp AI (1 number), Cash Flow View, Monthly AI report | All 5 core features, WhatsApp AI (3 numbers), Weekly AI insights, Dedicated support |
| **Savings** | ~RM4,000/month | ~RM8,000-15,000/month |

**Trust badges on pricing:**
- "Eligible for MDEC / SME Corp Digitalization Grant (RM5,000-RM100,000)"
- "Cheaper than one admin staff"
- "Cancel anytime — no lock-in"

---

## Homepage Structure — 9 Sections

### Section 1: Hero — "Your Entire Business. One Screen."

**Layout:** Left copy + right 3-phone mockup
**Headline:** "Your entire business. One screen. Every morning."
**Subhead:** "Sales, cash flow, staff, customers — all in one command center built for YOUR industry. No IT team needed. Works on your phone."
**ROI proof (above fold):** "Most clients save RM8,000-15,000/month within 90 days."
**CTAs:**
- Primary: WhatsApp (green pill button) — "WhatsApp Us — Free Consultation"
- Secondary: "See It Working ↓" (scroll anchor)
**Trust bar:** "35+ companies | 400+ staff managed | Setup from RM5K"

**3-Phone Mockup (interactive):**
Each phone shows Boss OS for a different industry with real-looking metrics:
- Phone 1 (left, tilted -5deg): Car Rental — RM47.2K revenue, 12 cars rented, 3 returns overdue, AI insight
- Phone 2 (center, larger): Cleaning Co — RM18.9K revenue, 8 jobs done, 2 staff MC, cash flow
- Phone 3 (right, tilted +5deg): Fresh Produce — RM92.6K revenue, low stock alert, 15 deliveries, AI reorder suggestion

**Interaction:** Towkay can tap/click to cycle through more industries (motorcycle, F&B, healthcare). Each tap swaps the data in all 3 phones.

**Icons:** All icons use Lucide React (consistent modern line icons). No emoji anywhere in the UI.

**Images:** All hero images, phone mockup backgrounds, and decorative elements generated via `/image-gen` skill with proper density (2x for retina).

### Section 2: ROI Calculator — "How Much Are You Losing?"

**Purpose:** Anchor the pain in ringgit BEFORE showing features.

**Headline:** "How much is manual work costing you?"
**Subhead:** "Slide to match your business. See what you could save."

**Interactive sliders:**
- Staff count (range: 1-50, default: 12)
- Hours/day on admin work (range: 1-8, default: 3.5)
- Pre-filled hourly cost: RM15 (hidden, used in calculation)

**Formula:** `staff × hours × hourly_rate × 22 working_days = monthly_waste`
**Output:** "You're losing approximately **RM X,XXX/month** to manual admin work"
**Anchor line:** "Boss OS costs RM1,500-3,000/month. You save RM X,XXX."

**Design:** Sliders with brand blue track. Output in amber/warning card (feels like a bill). Savings line in green.

### Section 3: 5 Core Features — "What Boss OS Does From Day 1"

**Headline:** "5 things Boss OS handles from Day 1"
**Subhead:** "Every feature below is live in your system within 2 weeks."

**Layout:** 5-card grid (3+2 on desktop, stacked on mobile). Each card:
- Lucide icon (consistent line weight, brand-colored background)
- Feature name (bold)
- One-sentence outcome description (not a spec)
- Each card has a distinct soft background color (blue, green, yellow, pink, purple)

**Feature copy (outcome-first, no jargon):**
1. Sales Command — "Today's revenue, trends, top products — one screen. Know your numbers before 9am."
2. WhatsApp AI — "Auto-reply customers 24/7. Takes bookings, sends quotes, answers pricing. In BM, EN, or Chinese."
3. AI Insights — "'Sales dropped 23% on Tuesdays.' 'Customer X hasn't ordered in 30 days.' AI watches so you don't have to."
4. Cash Flow View — "Money in, money out, who owes you. Pulls from your accounting software. No more guessing."
5. Staff & Ops — "Who's working, what's assigned, what's overdue. Replaces the WhatsApp group you use to chase staff."

### Section 4: Data Readiness — "You Only Need 30% of Your Data"

**Purpose:** Remove the #1 objection: "But I don't have proper data / my data is messy."

**Headline:** "You don't need perfect data. You need 30%."
**Subhead:** "If you have ANY of these, we can build your Boss OS:"

**3 data cards (clickable/expandable):**
1. **Sales Records** — "Excel, POS system, receipts, invoices — even handwritten"
   - Expanded: examples of what counts (monthly sales Excel, POS export, receipt photos)
2. **HR / Payroll** — "Staff list, salary, attendance — even in a WhatsApp group"
   - Expanded: examples (payroll Excel, attendance app, salary slips)
3. **Accounting Software** — "SQL, AutoCount, UBS, Xero — we connect to all of them"
   - Expanded: list of supported software with logos

**Bottom line:** "Have at least one? That's enough. We handle the rest during setup."

**Design:** Each card uses a Lucide icon (Receipt, Briefcase, BookOpen). White cards with subtle border, expandable on click/tap. No emoji.

### Section 5: Industry Grid — "Businesses Like Yours"

**Headline:** "Boss OS works across industries"
**Subhead:** "Click your industry to see exactly what we built."

**8 industry cards in a responsive grid (4x2 desktop, 2x4 mobile):**
Each card has:
- Lucide icon (not emoji) — e.g., Car for car rental, Sparkles for cleaning, Building2 for scaffolding
- Industry name
- Hover: subtle lift + border color change
- Click: navigates to `/boss-os/[industry]` sub-page

**Industries:**
1. Car Rental (Car icon)
2. Cleaning (Sparkles icon)
3. Scaffolding (Building2 icon)
4. Fresh Produce (Leaf icon)
5. Healthcare (Heart icon)
6. Co-Living (Home icon)
7. Motorcycle (Bike icon)
8. F&B (UtensilsCrossed icon)

**Note:** Each links to an industry sub-page (see Sub-Pages section below).

### Section 6: Pricing — ROI-Anchored

**Headline:** "Cheaper than one admin staff."
**Subhead:** "Boss OS works 24/7, never takes MC, manages 5 departments at once."

**Two pricing cards side-by-side:**
- Starter (white border, standard)
- Full Boss OS (brand blue border, "MOST POPULAR" badge)

Each card shows:
- Tier name + target ("Best for: 1-10 staff, single location")
- Setup cost (large, bold)
- Monthly cost
- Savings line (green, anchored to calculator above)
- Feature list with Lucide Check icons
- WhatsApp CTA button

**Below cards:**
- MDEC grant badge: "Eligible for MDEC / SME Corp Digitalization Grant (RM5,000-RM100,000)"
- "No lock-in. Cancel anytime."

### Section 7: Case Studies — "Real Results From Real Bosses"

**Layout:** 3 horizontal cards, each showing:
- Lucide industry icon + name (e.g., "Encik Ali — Car Rental")
- Before/after comparison (two mini-cards: red BEFORE, green AFTER)
- Key metric (e.g., "4 hrs/day → 30 min" or "67% → 98% reply rate")
- Savings line in green

**3 case studies:**
1. Car Rental — admin time: 4hrs → 30min, saves RM8,400/month
2. Cleaning Co — WhatsApp reply rate: 67% → 98%, AI handles 80% of inquiries
3. Fresh Produce — stock waste: 12% → 3%, AI predicts reorder timing

**Note:** Use real client data when available. These are placeholder examples — replace with actual numbers from Utopia's 35+ companies.

### Section 8: Data Privacy — "Your Data, Your Control"

**Headline:** "Your data stays yours. Always."
**Body:** "We access your data to build Boss OS, but it's protected under PDPA. Our team signs NDAs. You can revoke access anytime. We don't sell or share your data — ever."

**3 trust badges (Lucide icons):**
- Lock icon — "PDPA Compliant"
- FileText icon — "NDA Signed"
- LogOut icon — "Revoke Anytime"

**Design:** Centered, compact section. No overselling — just facts.

### Section 9: Final CTA — "Your Competitor Already Started"

**Headline:** "Your competitor already started."
**Subhead:** "35+ companies run on Boss OS. One WhatsApp message to join them."
**CTA:** Large green WhatsApp button — "WhatsApp Us — Free Consultation"
**Sub-CTA:** "No commitment. No hard sell. Just a 15-minute chat about your business."

**Background:** Soft gradient (brand blue → pink, subtle).

---

## Industry Sub-Pages (Approach B)

**Route:** `/boss-os/[industry]` (e.g., `/boss-os/car-rental`)

Each sub-page is a template with industry-specific content:

### Template Structure:
1. **Hero** — "Boss OS untuk [Industry Name]" + industry-specific phone mockup screenshot
2. **Pain points** — 3 specific problems this industry faces (e.g., car rental: "Cars out but you don't know where. Returns overdue. Cash tied up in deposits.")
3. **Boss OS solution** — Same 5 features, but described with industry-specific examples
4. **Before/After** — Industry-specific case study with real numbers
5. **ROI math** — Calculator pre-filled with industry-typical numbers
6. **Pricing** — Same 2 tiers, but savings anchored to this industry
7. **WhatsApp CTA** — Pre-filled message: "Hi, I run a [industry] business and I'm interested in Boss OS"

### Initial sub-pages to build (Phase 1):
1. `/boss-os/car-rental`
2. `/boss-os/cleaning`
3. `/boss-os/fresh-produce`
4. `/boss-os/equipment-rental`

### SEO benefit:
Each page ranks independently for "[industry] software Malaysia", "[industry] AI Malaysia". Long-tail keywords the main homepage can't capture.

---

## Design Rules

### Icons
- **All icons:** Lucide React (`lucide-react` already installed)
- **No emoji** anywhere in the UI — not in headings, cards, lists, or badges
- **Icon style:** Consistent line weight, 24px default, colored via CSS to match section theme
- **Icon backgrounds:** Soft colored circles or rounded squares matching section palette

### Images
- **All images generated via `/image-gen` skill** — no placeholders, no stock photos
- **Image density:** 2x for retina displays
- **Phone mockups:** Generated or built as React components with real-looking data
- **Industry cards:** Custom icons, not generic stock imagery
- **Case study photos:** Generated portraits or use actual client photos if available

### Color Palette (existing)
- Brand: `#116dff` (Utopia Blue)
- Success/savings: `#059669` (green)
- Warning/cost: `#dc2626` (red) for "before", `#f59e0b` (amber) for waste
- Backgrounds: White `#FFFFFF`, Soft gray `#f8fafc`, Blue tint `#f0f4ff`
- Text: Primary `#0a0a0a`, Body `#4b5563`, Muted `#6b7280`

### Typography (existing)
- Inter font family
- Display: 700 weight, tight letter-spacing
- Body: 400-600 weight, 16px minimum on mobile

### Mobile-First
- Design at 375px first
- Single-column stacked layout below 768px
- 3-phone mockup becomes horizontal scroll or stacked on mobile
- Touch targets 44px minimum
- Sticky WhatsApp FAB (existing)

### Language Toggle
- EN/CN toggle in navbar (flag or text button)
- All copy has Chinese translation
- Code/labels remain English
- Toggle persists via localStorage

---

## What This Replaces on the Current Site

The current homepage has 12 sections. This redesign replaces them with 9 focused sections:

| Current Section | New Section | Change |
|----------------|------------|--------|
| HeroSection | Section 1: Hero | New headline, 3-phone mockup, interactive |
| ProofBar | Merged into Hero trust bar | Compressed |
| TrueAISection | Removed | Replaced by ROI Calculator + Features |
| WeUseItSection | Removed | "We practice what we preach" moved to About page |
| DepartmentReveal | Section 3: 5 Core Features | Simplified from 6 departments to 5 features |
| HowWeWork | Removed | Process details moved to sub-pages |
| ROICalculator | Section 2: ROI Calculator | Moved UP (before features, not after) |
| TestimonialScroll | Section 7: Case Studies | Changed from quotes to before/after numbers |
| TeamCulture | Removed from homepage | Lives on About/Career pages |
| OperatorCredibility | Merged into Case Studies | Combined |
| FinalCTASection | Section 9: Final CTA | New copy: "Your competitor already started" |
| *(new)* | Section 4: Data Readiness | New — "You only need 30%" objection killer |
| *(new)* | Section 5: Industry Grid | New — links to sub-pages |
| *(new)* | Section 6: Pricing | Moved from separate page to homepage |
| *(new)* | Section 8: Data Privacy | New — PDPA/NDA trust section |

---

## Out of Scope (for this spec)

- Blog section
- Supabase lead storage (separate task)
- Email/ebook delivery
- GA4/Plausible analytics setup
- Legal pages (privacy, terms)
- Gemini voice widget (keep as-is or remove — separate decision)
