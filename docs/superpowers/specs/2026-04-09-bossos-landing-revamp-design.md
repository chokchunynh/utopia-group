# BossOS Landing Page Revamp — Design Spec

**Date:** 2026-04-09
**Author:** CY + Claude
**Status:** Draft — awaiting CY review

---

## 1. Goal

Turn the BossOS landing page (`/boss-os`) into a scroll-driven "moving brochure" that converts Malaysian SME bosses (Towkays) into WhatsApp leads. Also add a high-conversion CTA on the Utopia Group homepage pointing to BossOS.

**Success metric:** A Towkay receives the link on WhatsApp, scrolls through in 60 seconds, self-qualifies via the quiz, and sends a pre-filled WhatsApp message.

---

## 2. Scope

### In scope
- Utopia Group homepage: new results-driven CTA section → `/boss-os`
- `/boss-os` page: full redesign (7 sections)
- Navbar fix: always visible, not just on scroll
- Font consistency: Inter 700 for all headings sitewide (drop Instrument Serif from BossOS)
- New warm color palette for `/boss-os`
- Hero image generation (boss room + Command Radar TV)
- DKING + Scaffolding animated case study showcases
- 3-tier pricing (data-readiness based)
- Self-qualifying quiz → pre-filled WhatsApp
- EN + CN language toggle (existing system)

### Out of scope
- Other pages (about, career, contact, how-we-charge)
- Backend/API changes
- Supabase lead storage (future)
- Blog section

---

## 3. Architecture

### Funnel flow
```
utopiagroup.com.my (homepage)
  → Results CTA strip (after hero, above ProofBar)
     → /boss-os (the moving brochure)
        → Scroll story: Hero → Proof → Your First Week → Live Showcase → Pricing → Quiz → Final CTA
           → Self-qualify quiz (3 questions)
              → Recommended tier + pre-filled WhatsApp message
```

### Page section order (`/boss-os`)
1. **Hero** — headline + boss room image + CTAs
2. **Proof Strip** — 3 rotating result stats
3. **Your First Week** — scroll-animated timeline (Days 1–7)
4. **Live Showcase** — DKING + Scaffolding animated demos + TV wall
5. **3 Tiers** — pricing cards anchored to monthly cost
6. **Self-Qualify Quiz** — 3 questions → recommended tier
7. **Final CTA** — WhatsApp pre-filled from quiz

---

## 4. Site-Wide Changes

### 4.1 Navbar — Always Visible
**Current:** Transparent on top, white on scroll. Text invisible on light backgrounds.
**New:** Always has a warm white background (`#fdfbf8`) with subtle bottom border (`#e8e2d9`). No transparency mode. Logo and links always visible.

**Files to change:** `src/components/layout/Navbar.tsx`

**What changes:**
- Remove `scrolled` state and scroll listener for background toggle
- Set permanent bg: `bg-[#fdfbf8] border-b border-[#e8e2d9]`
- All link text uses dark color permanently (no white/transparent mode)
- Keep mobile fullscreen menu behavior as-is (dark overlay)

### 4.2 Font Consistency
**Current:** Homepage H1 = Inter bold. BossOS H1 = Instrument Serif (via `heading-display` class).
**New:** All headings use Inter 700 sitewide. The `heading-display` class switches from `font-display` (Instrument Serif) to `font-sans` (Inter) with weight 700.

**Files to change:** `src/app/globals.css`

**What changes:**
```css
/* Before */
.heading-display {
  font-family: var(--font-display);
  font-weight: 400;
}

/* After */
.heading-display {
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
}
```

Note: Instrument Serif font import in `layout.tsx` can stay (might be used elsewhere), but `heading-display` no longer uses it.

---

## 5. Utopia Group Homepage — Results CTA Strip

**Position:** After HeroSection, before ProofBar.
**New component:** `src/components/sections/BossResultsCTA.tsx`

### Layout (mobile: stacked, desktop: horizontal)
```
┌─────────────────────────────────────────────────────┐
│  bg: #faf7f2 + grain texture                        │
│                                                     │
│  "Companies using Boss OS right now"  (eyebrow)     │
│                                                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │ D King   │  │ Scaffold │  │ Fleet   │            │
│  │ Waste    │  │ On-time  │  │ Admin   │            │
│  │ 12%→3%   │  │ 71%→94%  │  │ 4hr→30m │            │
│  │ -RM14K/mo│  │+RM22K/mo │  │-RM8.4K  │            │
│  └─────────┘  └─────────┘  └─────────┘            │
│                                                     │
│  "Want results like this?"                          │
│  [ See How It Works → ]                             │
│  "From RM2,800/mo"                                  │
└─────────────────────────────────────────────────────┘
```

### Content
| Card | Industry | Metric | Before | After | Impact |
|------|----------|--------|--------|-------|--------|
| D King | Durian | Stock waste | 12% | 3% | Save RM14,000/mo |
| Scaffolding.my | Scaffolding | On-time delivery | 71% | 94% | +RM22,000/mo |
| RevGo | Fleet | Daily admin | 4 hrs | 30 min | Save RM8,400/mo |

### Behavior
- Numbers animate (count up) when section scrolls into view
- Cards clickable → navigate to `/boss-os` (scroll to relevant case study)
- Mobile: single column, cards stack vertically
- Desktop: 3 cards in a row

---

## 6. BossOS Page — Section Details

### 6.0 Visual Identity (applies to all sections)

**Palette:**
| Element | Value | Notes |
|---------|-------|-------|
| Hero bg | `#faf7f2` + grain SVG at 3% opacity | Warm paper feel |
| Alt sections | `#ffffff` / `#f7f4ef` + grain | Visual rhythm |
| Gold thread | `#b8860b` at 40% | Timeline line, result accents |
| Result numbers | `#b8860b` full | Before/after, savings |
| CTA primary | `#116dff` | Brand blue, buttons |
| CTA WhatsApp | `#25D366` | WhatsApp buttons |
| Quiz section bg | `#1a1612` | Warm dark (not cold navy) |
| Ambient orbs | warm sand/gold tones | Replace blue/cyan orbs |
| Card shadows | `rgba(120, 80, 30, 0.06)` | Warm, not cold gray |
| Body text | `#3d3832` | Warm dark |

**Design signatures (what makes this NOT generic):**
1. **Film grain texture** — noise SVG at 3% opacity over warm bg. Feels physical, printed.
2. **Gold thread line** — continuous thin vertical gold line connecting sections. Timeline hangs off it.
3. **Parallax depth** — static warm bg, mid-ground warm orbs shift on scroll, foreground cards.
4. **Section blending** — gradient transitions between sections, no hard cuts.
5. **Before→After wipe** — case study cards: left half muted, right vibrant, divider animates on scroll.

**Existing patterns we keep:**
- `ScrollReveal` component (directional: left, right, up, blur)
- `AnimatedCounter` for number count-ups
- Gradient shimmer text (warm-toned: gold → amber → gold)
- Pill badges
- Card hover lift

### 6.1 Hero

**Headline (Inter 700, 64px desktop / 40px mobile):**
> "Your whole business. One screen. Every morning."

**Subhead (16px, `#3d3832`):**
> Sales, staff, cash, customers — all connected. AI tells you what to fix before you sit down.

**Hero image:** Photo composite — Malaysian boss at a clean desk, wall-mounted TV showing Command Radar, warm morning light, local touches (kopitiam cup). Generated via `/image-gen`. Focus on the room/screens, not the person's face.

**CTAs:**
- Primary: `See How It Works` → scrolls to "Your First Week"
- Secondary: `WhatsApp Us` → opens WhatsApp

**Trust line (13px, muted):**
> 35+ companies · 400+ staff · First system live in 5 days

**Background:** Warm cream `#faf7f2` + grain + 2 warm ambient orbs (sand/gold).

### 6.2 Proof Strip

Three stats, auto-rotating every 8 seconds. Gold accent on numbers.

```
RM14,000  saved per month  — D King Durian
94%       on-time delivery — Scaffolding.my
30 min    daily admin      — down from 4 hours
```

**Implementation:** Horizontal scrolling ticker on mobile, fade-swap on desktop. Uses existing `AnimatedCounter`.

### 6.3 Your First Week (Scroll Timeline)

**Background:** `#f7f4ef` + grain. Gold thread vertical line as timeline spine.

| Step | Title | Copy | Visual |
|------|-------|------|--------|
| Day 1 | We Map Your Business | 2-hour sit-down. We review every touchpoint — sales, WhatsApp, invoices, staff. Most bosses find 3–5 blind spots they didn't know existed. | Icon: magnifying glass |
| Day 2 | You Tell Us Your Goal | Increase sales? Cut waste? Replace manual work? We pick one first win. | Icon: target |
| Day 3–4 | We Build | Your command center takes shape. Connected to your real data — POS, WhatsApp, Excel, accounting. | Icon: wrench |
| Day 5 | First Drop | Your first working system. Real numbers. Your business on one screen. | Icon: rocket |
| Week 2+ | Ultra Mode | AI starts doing more. Decision alerts. Anomaly detection. Insights you never thought to ask for. | Icon: brain with sparkle |

**Animation:** Timeline items slide in from the right as user scrolls. Each day appears one by one. The gold thread line "grows" downward as you scroll.

**Conversion subtext after timeline:**
> "Most competitors quote 3–6 months. We deliver working software in 5 days."

### 6.4 Live Showcase — DKING + Scaffolding + TV Wall

Three sub-sections, alternating left-right layout.

#### D King — Durian Intelligence
- **Left:** Blurred screenshot mockup of waste/throughput dashboard (stylized, not raw screenshot)
- **Right:** Copy + result card
- **Copy:** *"510 durian varieties. 139 suppliers. AI tells you which ones cost money before you know it."*
- **Result card (before→after wipe):**
  - Before (muted): 12% stock waste · RM14K lost/month
  - After (vibrant): 3% stock waste · RM2.1K lost/month
  - **Saved: RM11,900/month**

#### Scaffolding.my — Operations Command
- **Left:** Copy + result card
- **Right:** Blurred screenshot of driver heatmap + trip tracker
- **Copy:** *"Drivers skipping trips? Late deliveries? Boss OS flags it. On-time jumped 23 points in 6 weeks."*
- **Result card:**
  - Before: 71% on-time · 3 untracked drivers
  - After: 94% on-time · 0 untracked
  - **Extra revenue: RM22,000/month**

#### TV Wall — Command Radar
- **Full-bleed section** with a warm radial gold glow behind the image
- **Image:** Real office setting, Command Radar on a wall-mounted TV, warm lighting
- **Copy overlay (white text on image):**
  > "Every Boss OS client gets this. A live wall display for your office. Your operation, running 24/7."
- **Sub-copy:** "Works on any TV. Auto-refreshes. Even works offline."

### 6.5 Three Tiers — Pricing

**Background:** White + grain. Monthly price prominent, setup fee small.

| | Starter | Command Center | Ultra Mode |
|---|---|---|---|
| **Who** | < 20% digital. Excel, paper, WhatsApp. | 20–50% digital. Has POS or accounting. | 50%+ or graduating from Command Center. |
| **Monthly** | **RM1,800/mo** | **RM2,800/mo** | Custom |
| **Setup** | From RM8,000 | From RM18,000 | Let's talk |
| **What** | Sales command + WhatsApp AI + cash view | All 5 features + staff ops + weekly AI + integrations | AI decisions + anomaly detection + "what you're missing" |
| **Result promise** | Stop flying blind | 40% margin improvement in 90 days | AI runs alongside you |
| **CTA** | WhatsApp Us | WhatsApp Us | Let's Talk |

**Highlighted tier:** Command Center. Badge: "Most businesses start here."
**De-risk line below:** "Setup pays for itself in month 3. No lock-in, cancel anytime."
**Grant badge:** MDEC grant eligible (keep existing).

**Note on pricing copy:** Lead with the monthly RM2,800. The setup fee (RM18–25K) appears smaller, below. The value framing: "RM2,800/mo to see a 40% margin improvement" — not "RM18K to get software."

### 6.6 Self-Qualify Quiz

**Background:** Dark warm `#1a1612` + subtle dot pattern. Gold accents.
**Component:** `src/components/sections/BossQuiz.tsx`

**Header:**
> "Which Boss OS is right for your business?"
> "3 questions. 30 seconds. No signup."

**Questions (one at a time, animated card transition):**

**Q1: "How does your business track sales today?"**
- A) Paper, WhatsApp, or memory → Tier 1 signal
- B) Excel or basic POS → Tier 2 signal
- C) Accounting software + POS integrated → Tier 3 signal

**Q2: "What do you want AI to do first?"**
- A) "Show me my numbers — I'm flying blind" → Tier 1
- B) "Connect my systems and give me weekly insights" → Tier 2
- C) "Tell me what I'm missing and help me decide" → Tier 3

**Q3: "How many staff?"**
- A) 1–10
- B) 10–50
- C) 50+

**Scoring:** Simple majority — whichever tier gets the most signals wins. Tie → recommend Tier 2.

**Result screen:**
- Recommended tier card (highlighted, warm gold border)
- One-line explanation: "Based on your answers, Command Center is the best starting point."
- Pre-filled WhatsApp CTA:
  > "Hi! I did the Boss OS quiz — recommended [Tier]. I'm in [what they picked for Q1 context] with [X] staff. Interested to learn more."

### 6.7 Final CTA

**Background:** Gradient warm cream → white.
**Simple, clean:**
> "Ready to see your business on one screen?"
> [WhatsApp Us] [Book a Call]
> "First system live in 5 days. From RM2,800/mo."

---

## 7. Image Assets Needed

| Image | Description | Method |
|-------|-------------|--------|
| Boss room hero | Malaysian office, desk + wall TV showing Command Radar, warm light, local feel | `/image-gen` — photo composite style, not illustration |
| DKING dashboard | Stylized mockup of waste/throughput screen, blurred numbers | Screenshot from live app + blur + UI treatment |
| Scaffolding heatmap | Stylized mockup of driver/delivery tracker | Screenshot from live app + blur + UI treatment |
| TV wall | Command Radar on a mounted TV in an office setting | `/image-gen` — realistic office photo |
| Grain texture | Noise SVG for background overlay | CSS/SVG generation |

---

## 8. Technical Notes

### New files
- `src/components/sections/BossResultsCTA.tsx` — homepage results CTA
- `src/components/sections/BossTimeline.tsx` — "Your First Week"
- `src/components/sections/BossShowcase.tsx` — DKING + Scaffolding + TV
- `src/components/sections/BossQuiz.tsx` — self-qualify quiz

### Modified files
- `src/components/layout/Navbar.tsx` — always-visible navbar
- `src/app/globals.css` — heading-display font change, warm palette CSS vars, grain texture, gold thread
- `src/app/page.tsx` — add BossResultsCTA after HeroSection
- `src/app/boss-os/page.tsx` — new section order
- `src/components/sections/BossHero.tsx` — full rewrite (new hero)
- `src/components/sections/BossPricing.tsx` — 3 tiers, new data
- `src/components/sections/BossFinalCTA.tsx` — simplified
- `src/lib/boss-os.ts` — updated pricing data, quiz data, showcase data

### Removed sections (replaced by new ones)
- `BossROICalculator` — replaced by proof strip + quiz
- `BossDataReadiness` — concept folded into quiz
- `BossIndustryGrid` — replaced by live showcase
- `BossCaseStudies` — replaced by live showcase
- `BossDataPrivacy` — moved to a line in final CTA or dropped
- `BossCoreFeatures` — concept folded into timeline ("what you get" shown through the journey, not a feature list)

### Translations
All new copy needs EN + CN entries in `src/lib/translations.ts`. Quiz questions and answers need translation keys.

### Mobile considerations
- All sections single-column below 768px
- Quiz cards: full-width on mobile, centered card on desktop
- Timeline: vertical, each step is a full-width card
- TV wall image: 16:9 aspect, full-bleed
- Touch targets: 48px minimum on quiz answers and CTAs
- Proof strip: horizontal scroll ticker on mobile

---

## 9. Decisions Log

| Decision | Choice | Why |
|----------|--------|-----|
| Pricing tiers | 3 tiers based on data readiness | CY wants to segment by digital maturity, not company size |
| Monthly anchor | Lead with RM2,800/mo, not RM18K setup | Reduce price objection. Setup shown smaller. |
| Page story | "Your First Week" timeline | Kills "this takes forever" objection. Shows speed. |
| Self-qualify quiz | 3 questions → recommended tier | Warms the WhatsApp lead. Educates the buyer. |
| Font | Inter 700 sitewide | Matches homepage. Drops Instrument Serif inconsistency. |
| Navbar | Always visible | Current transparent mode = invisible on light sections |
| Palette | Clean Warm (cream + gold accents) | Premium without being heavy. Apple-meets-McKinsey. |
| Hero image | Photo composite (boss room + TV) | Local, aspirational, not too AI-generated |
| Case studies | DKING + Scaffolding first | Real clients, real numbers. More added later. |
| TV display | Prominent section | Unique selling point — competitors don't have this |
| Visual style | Scroll-driven storytelling (Option A) | Best for mobile, fastest to build, "show your boss" moment |
| Corporate tier | "Let's talk" not fixed price | Depends on volume, CY discusses directly |
