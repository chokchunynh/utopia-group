# Boss OS — Sales & Delivery Playbook

**For:** Utopia sales team (CY + anyone selling Boss OS)
**Updated:** 2026-04-05

---

## The 5-Step Cycle

```
QUALIFY → DEMO → COLLECT → BUILD → DELIVER
  (15 min)  (30 min)  (1 week)  (1-2 weeks)  (1 hour)
```

Every Boss OS client goes through these 5 steps. No shortcuts. No skipping QUALIFY.

---

## Step 1: QUALIFY (15 minutes)

**Goal:** Figure out if this boss is a real client or a tyre-kicker. Don't waste time building for someone who won't pay.

### The 6 Questions (ask all of them)

Ask these in conversation — not like a form. WhatsApp, coffee, phone call. Natural.

| # | Question | Why You're Asking | Red Flag |
|---|----------|-------------------|----------|
| 1 | **"What does your business do?"** | Understand the industry. Car rental? Cleaning? Trading? F&B? | "We're still figuring it out" — no business = no data = no Boss OS |
| 2 | **"How many staff do you have?"** | Size the deal. 1-10 = Lite. 10-50 = Pro. 50+ = Full. | Less than 3 staff — too small, they don't need a system |
| 3 | **"How do you track your sales right now?"** | Find out if they have ANY data. Excel? POS? Paper? | "I don't track" — they have zero data. Possible but hard sell. |
| 4 | **"What accounting software do you use?"** | Key integration point. SQL, AutoCount, UBS, Xero, or none. | "My wife handles it in her head" — no accounting = no cash flow view |
| 5 | **"What's the one thing that frustrates you most about running the business?"** | Find the PAIN. This becomes the selling angle. | "Nothing, everything is fine" — no pain = no sale |
| 6 | **"Do you use WhatsApp for customer inquiries?"** | If yes, WhatsApp AI is the hook. If no, different approach. | They don't talk to customers directly — might be B2B or wholesale, adjust pitch |

### Scoring

After the 6 questions, score internally (don't tell the boss):

| Score | Criteria | Action |
|-------|----------|--------|
| **HOT** (sell now) | Has data + has pain + uses WhatsApp + 5+ staff | Book demo within 3 days |
| **WARM** (nurture) | Has some data + interested but cautious | Send them the landing page + follow up in 1 week |
| **COLD** (pass) | No data + no pain + <3 staff | Politely pass. "Maybe when you grow a bit more." |

### What to say if they ask about price early

> "Boss OS starts from RM3,000 setup and RM800/month — cheaper than one part-time admin. But the exact package depends on your business. Let me show you what it looks like for [their industry] first."

Don't negotiate price before they see the demo. The demo sells, not the number.

---

## Step 2: DEMO (30 minutes)

**Goal:** Show the boss what Boss OS looks like for THEIR business. Not a generic demo — their industry, their kind of numbers, their pain point.

### Before the Demo

1. **Pick the closest industry template** from the existing demos:
   - Car Rental → `/boss-os/car-rental`
   - Cleaning → `/boss-os/cleaning`
   - Fresh Produce / Trading → `/boss-os/fresh-produce`
   - Equipment Rental / Scaffolding → `/boss-os/equipment-rental`
   - If no match → use the homepage 3-phone mockup

2. **Customize the demo data** (5 minutes of prep):
   - Change the revenue numbers to be realistic for their business size
   - Change the staff count to match what they told you
   - Use their industry terminology (e.g., "units rented" for car rental, "jobs completed" for cleaning)

3. **Prepare the pain slide**: Based on Question #5, prepare ONE sentence:
   > "You told me [their frustration]. Here's how Boss OS fixes that."

### During the Demo (30-minute script)

**Minutes 1-5: Their pain, not your product**

> "You mentioned [frustration from Q5]. Let me show you how [similar boss in similar industry] was dealing with the same thing, and what changed."

Show the before/after case study from the industry sub-page.

**Minutes 5-15: The dashboard walkthrough**

Open the demo dashboard (or screenshot). Walk through:
1. **Sales view** — "This is your sales for today. Yesterday. This month vs last month. You see this on your phone every morning before 9am."
2. **Cash flow** — "Money in, money out. Who owes you. This pulls from your [their accounting software] automatically."
3. **AI insight** — "See this? The AI noticed your [day] sales dropped [X]%. It tells you why and what to do about it."

**Key rule:** DON'T explain features. Show outcomes. Not "this is the sales command module" but "you open your phone, this is what you see."

**Minutes 15-20: WhatsApp AI demo**

This is the hook. Show a real WhatsApp conversation:
1. Customer asks about pricing → AI replies in 3 seconds
2. Customer wants to book → AI confirms and schedules
3. Customer asks in Chinese → AI replies in Chinese

> "This is running right now for [real client]. Their customers get answers at 11pm. The boss sleeps. Orders come in."

**Minutes 20-25: ROI math**

Pull up the ROI calculator (on the landing page or a phone):
> "You said you have [X] staff spending about [Y] hours a day on admin. That's RM[Z] per month in wasted time. Boss OS costs RM800-2,000. The math is simple."

**Minutes 25-30: Close or next step**

Two possible endings:

**If they're ready:**
> "Here's what happens next. You give us access to your sales data and accounting software. We build your Boss OS in 2 weeks. You'll have a working system on your phone. Setup is RM[X], monthly is RM[Y]. Want to start?"

**If they need to think:**
> "No pressure. I'll send you the link to our page — share it with your partner if you need to. WhatsApp me when you're ready. But just so you know, the first 3 clients in [their industry] get priority setup."

---

## Step 3: COLLECT (1 week)

**Goal:** Get the minimum data needed to build their Boss OS. This is the "30% data" promise.

### The Data Collection Checklist

Send this to the client via WhatsApp (simplified version):

> **To build your Boss OS, we need these 3 things:**
>
> 1. **Sales data** — Export from your POS or accounting software (last 3-6 months). Excel/CSV is fine. Even photos of receipts work.
>
> 2. **Accounting access** — Your accounting software login OR an export of your P&L for the last 3 months. We'll set up read-only access.
>
> 3. **WhatsApp Business number** — The number your customers message. We'll connect our AI to it (you keep full control).
>
> **Optional (makes Boss OS smarter):**
> - Staff list (names, roles, salary range)
> - Customer list (if you have one)
> - Inventory list (if applicable)
>
> **We sign an NDA before you share anything. Your data is protected under PDPA.**

### Internal Data Processing Checklist

Once you receive the data:

- [ ] NDA signed (use template in `~/utopia-brain/templates/nda-template.pdf`)
- [ ] Sales data received — what format? (Excel / CSV / POS export / photos)
- [ ] Sales data cleaned and imported to staging database
- [ ] Accounting software access confirmed (SQL / AutoCount / UBS / Xero / manual)
- [ ] Financial data pulled — revenue, expenses, receivables
- [ ] WhatsApp Business number provided
- [ ] WhatsApp AI connected to staging (TrueAI setup)
- [ ] Industry template selected
- [ ] Custom metrics identified (what's unique about THIS business?)

### What Makes Each Boss OS Unique

This is the key to the "customized but repeatable" model:

**What's the SAME for every client (the template):**
- Dashboard layout and navigation
- Sales Command module
- Cash Flow module
- WhatsApp AI engine (TrueAI)
- AI Insights engine
- Mobile-first PWA shell
- Authentication and access control

**What's DIFFERENT for each client (the customization):**

| Layer | What Changes | Example |
|-------|-------------|---------|
| **Data source** | Which accounting software, which POS, data format | SQL Accounting vs AutoCount vs Excel |
| **Metrics** | What KPIs matter for this industry | Cars rented (car rental) vs Jobs completed (cleaning) vs Kg sold (produce) |
| **Terminology** | Labels in the dashboard | "Units" vs "Jobs" vs "Orders" vs "Bookings" |
| **AI rules** | What the WhatsApp AI knows and can do | Car rental: check availability, send car photos. Cleaning: quote by sqft, schedule cleaner. |
| **Insights** | What patterns the AI looks for | Car rental: idle cars. Cleaning: customer churn. Produce: spoilage patterns. |
| **Alerts** | What triggers notifications to the boss | Overdue returns vs Missed appointments vs Low stock |
| **Branding** | Logo, colors, company name | Client's brand in the PWA |

**Time to customize:** ~2-3 hours of configuration per client, NOT rebuilding from scratch.

---

## Step 4: BUILD (1-2 weeks)

**Goal:** Deploy a working Boss OS for the client.

### Build Checklist

**Week 1: Data & Backend**
- [ ] Create client project in Supabase (or Utopia Internal DB, depending on data isolation needs)
- [ ] Import and normalize sales data
- [ ] Connect accounting software (API or scheduled export)
- [ ] Set up WhatsApp AI with client's business knowledge base
  - Business name, services, pricing
  - FAQ answers
  - Booking/scheduling rules
  - Language preferences (BM / EN / CN)
- [ ] Configure AI insights rules for their industry
- [ ] Test WhatsApp AI with 10 sample conversations

**Week 2: Dashboard & Polish**
- [ ] Deploy Boss OS PWA from template
- [ ] Customize metrics, labels, and KPIs for their industry
- [ ] Add client branding (logo, company name)
- [ ] Connect live data feeds
- [ ] Test on mobile (375px — the boss uses their phone)
- [ ] Set up alert notifications (WhatsApp alerts to the boss)
- [ ] Internal QA: full walkthrough as if you're the boss

### Quality Gate (before handover)

Every Boss OS must pass this before client sees it:

- [ ] Sales data showing correctly (today, yesterday, this month, last month)
- [ ] Cash flow data accurate (matches their accounting software)
- [ ] WhatsApp AI replies correctly in all configured languages
- [ ] WhatsApp AI handles: pricing inquiry, booking request, FAQ, off-hours message
- [ ] At least 3 AI insights generated from their real data
- [ ] PWA installs correctly on iPhone and Android
- [ ] Boss receives test alert on their personal WhatsApp
- [ ] All numbers are REAL (no dummy data, no placeholder text)

---

## Step 5: DELIVER (1 hour)

**Goal:** Hand over Boss OS to the client and make sure they use it.

### Handover Session (1 hour, in person or video call)

**First 20 minutes: "Look at this"**

Don't explain. Just show.

> "Open your phone. Go to [URL]. Add to Home Screen. Done — that's Boss OS."

Show them THEIR data:
> "See this? RM[X] — that's your sales from this morning. This RM[Y] — that's what [Customer Z] owes you. And this — the AI noticed [real insight about their business]."

Let them react. The data sells itself.

**Next 20 minutes: WhatsApp AI in action**

> "Let's test it. Send a WhatsApp to your business number right now. Ask about pricing."

Watch the AI reply. Let the boss see it happen in real time.

Then show the conversation log in Boss OS:
> "Every conversation is logged here. You can see what the AI said, what customers asked, and jump in if you need to."

**Last 20 minutes: What happens next**

1. **Daily habit:** "Every morning, open Boss OS. 30 seconds. You'll know everything."
2. **Weekly insight:** "Every Monday, you'll get a WhatsApp from the AI with your weekly summary."
3. **Support:** "WhatsApp us anytime. We respond within 2 hours during business hours."
4. **Billing:** "RM[X]/month starts from today. We'll send an invoice on the 1st."

### Post-Delivery Follow-Up Schedule

| Day | Action |
|-----|--------|
| Day 1 | WhatsApp: "How does it look? Any questions?" |
| Day 3 | WhatsApp: "Did you check Boss OS this morning? Here's your [metric]." |
| Day 7 | Call: 10-minute check-in. Any data issues? AI replying correctly? |
| Day 14 | WhatsApp: Send them their first weekly AI summary manually if auto isn't set up |
| Day 30 | Call: "You've been using Boss OS for a month. Here's what changed: [before/after numbers]." This is also the UPSELL moment. |

### The Day 30 Upsell

At the 30-day call, show them:

> "In the last 30 days, Boss OS handled [X] WhatsApp conversations, showed you [Y] insights, and tracked RM[Z] in sales. You're on Boss Lite. Here's what you're missing in Boss Pro..."

Show them the greyed-out features:
- "3 customers are at risk of leaving — Boss Pro shows you who and why"
- "Your staff attendance data could save you RM[X]/month — Boss Pro tracks it"
- "Boss Pro sends you predictive alerts BEFORE problems happen, not after"

---

## Templates & Scripts

### WhatsApp First Contact Script

```
Hi [Boss Name]! This is [Your Name] from Utopia Group.

[Mutual friend] mentioned you might be interested in how AI 
can help with your [industry] business.

We built something called Boss OS — it shows you your entire 
business on one screen (sales, cash flow, staff) and has an AI 
that replies to your WhatsApp customers 24/7.

Cheaper than hiring one admin staff. Most bosses save RM4,000-8,000/month.

Want me to show you what it looks like for [industry]? 
15 minutes, no commitment.
```

### WhatsApp After Demo Script

```
Hi [Boss Name]! Thanks for your time today.

Here's the Utopia page with more details: 
https://utopiagroup.com.my/boss-os/[industry]

Quick recap:
- Boss OS Lite: RM3,000 setup + RM800/month
- Includes: Sales dashboard, cash flow, WhatsApp AI, AI insights
- We need: your sales data + accounting access + WhatsApp number
- Timeline: 2 weeks from data received to live

The ROI calculator: https://utopiagroup.com.my/#roi-calculator

WhatsApp me when you're ready, or if you have any questions!
```

### WhatsApp Data Collection Script

```
Hi [Boss Name]! Great to have you on board.

To build your Boss OS, I need 3 things:

1. Sales data — last 3-6 months, any format 
   (Excel, POS export, even photos of receipts)

2. Accounting software — which do you use? 
   (SQL / AutoCount / UBS / Xero / other)
   We'll need read-only access or an export.

3. WhatsApp Business number — the one your customers message.

Before anything, we'll sign an NDA. Your data is 100% protected.

Can you start with #1? Just forward me whatever you have.
```

### NDA One-Liner (for WhatsApp)

```
Before we access any data, we sign a mutual NDA. 
Your data is protected under Malaysia's PDPA. 
We never sell or share it. You can revoke access anytime.
```

---

## Pricing Quick Reference

| Plan | Setup | Monthly | Best For | Includes |
|------|-------|---------|----------|----------|
| **Boss Lite** | RM3,000 | RM800 | 1-10 staff, single location | Sales dashboard, Cash flow, WhatsApp AI (1 number), Mini AI insights |
| **Boss Pro** | RM8,000 | RM2,000 | 10-30 staff, growing business | Everything in Lite + Deep insights, 3 WhatsApp numbers, Customer re-engagement, Predictive alerts |
| **Boss Full** | RM15,000 | RM4,000 | 30+ staff, multi-department | Everything in Pro + Staff & Ops, Inventory, Marketing Autopilot, Custom actions |

**Discount rules:**
- Referral: Boss who refers another boss gets 1 month free
- Annual: Pay 10 months, get 12 (save 2 months)
- Bundle: 2+ businesses same owner → 20% off monthly on 2nd+ business

**Never discount setup fees.** Setup is cost — discounting it means losing money on delivery.

---

## FAQ (What Bosses Ask)

**"Can the AI make mistakes?"**
> "The AI learns from your business data, so it gives accurate answers. But for the first 2 weeks, we monitor every conversation and fine-tune it. After that, accuracy is typically 95%+. You can always jump in and take over any conversation."

**"What if I don't have good data?"**
> "If you have 3 months of sales records — even in Excel — that's enough. We clean and organize the data for you. That's part of the setup."

**"Can my competitors see my data?"**
> "No. Your data is completely isolated. We sign an NDA. It's protected under PDPA. And you can revoke our access anytime."

**"What if I want to stop?"**
> "No lock-in. You can cancel anytime. But honestly, once your customers expect instant WhatsApp replies at 11pm, you won't want to turn it off."

**"Is this like Salesforce / ERP?"**
> "No. Those are built for big companies with IT teams. Boss OS is built for bosses like you — open your phone, see everything, done in 30 seconds. No training needed."

**"Why is it so cheap compared to ERP?"**
> "Because we're not building from scratch for each client. We have a proven system that we customize for your industry. The AI engine, the dashboard, the WhatsApp integration — it's all ready. We just plug in YOUR data."

---

## Revenue Targets

**Phase 1 (Month 1-3): Prove it works**
- Close 5 Boss Lite clients → RM15,000 setup + RM4,000/month recurring
- Focus on industries where you have templates: car rental, cleaning, produce, equipment

**Phase 2 (Month 4-6): Scale the template**
- Close 10 more clients (mix of Lite and Pro) → RM50,000+ setup + RM15,000/month recurring
- Build 2 more industry templates from client demand
- First upsells from Lite → Pro

**Phase 3 (Month 7-12): The referral engine**
- Target: 30 active clients → RM40,000-60,000/month recurring
- Each happy client refers 1-2 more (word of mouth is your GTM)
- Hire 1 dedicated Boss OS sales/support person

**Break-even math:**
- Your cost per client: ~10 hours build time + hosting (~RM50/month)
- Revenue per Lite client: RM3,000 + RM800/month = RM12,600/year
- Revenue per Pro client: RM8,000 + RM2,000/month = RM32,000/year
- **5 Pro clients = RM160,000/year = enough to hire a full-time person**
