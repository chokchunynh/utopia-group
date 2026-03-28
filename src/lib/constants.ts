// ─── Site Identity ───────────────────────────────────────────────
export const SITE_NAME = "UTOPIA GROUP";
export const TAGLINE = "#1 AI Implementation Partner in Malaysia";
export const WHATSAPP_NUMBER = "+60146869468";

export function whatsappUrl(message: string) {
  return `https://wa.me/60146869468?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl(
  "Hi! I'm interested in AI implementation for my business."
);
export const WHATSAPP_FAB_URL = whatsappUrl(
  "Hi! I visited utopiagroup.com.my and I'd like to learn more."
);

// ─── Navigation ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "What We Automate", href: "/automate" },
  { label: "Results", href: "#results" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career", newTab: true },
] as const;

export const MORE_DROPDOWN = {
  label: "More",
  items: [
    { label: "AI Tools", href: "/automate", description: "8+ live AI products — SlipMatch, TrueAI, GetBill & more" },
    { label: "How We Charge", href: "/how-we-charge", description: "Transparent pricing — start free" },
    {
      label: "AI Masterclass",
      href: "/masterclass",
      description: "AI training programs",
      children: [
        { label: "For Companies", href: "/masterclass", description: "On-site team training" },
        { label: "For Individuals", href: "/masterclass/individual", description: "RM299/session × 8" },
      ],
    },
  ],
} as const;

export const INDIVIDUAL_PRICING = {
  pricePerSession: 299,
  sessions: 8,
  totalPrice: 2392,
  sessionDuration: "2 hours",
  frequency: "Weekly",
  currency: "RM",
} as const;

// ─── Proof Bar Stats ────────────────────────────────────────────
export const PROOF_STATS = [
  { number: "RM130M+", label: "Group revenue" },
  { number: "35+", label: "Companies under the group" },
  { number: "173", label: "Business units" },
  { number: "400+", label: "Staff across all companies" },
] as const;

// ─── TrueAI Product ─────────────────────────────────────────────
export const TRUEAI_FEATURES = [
  {
    title: "100% True AI",
    description: "Not a chatbot with scripts. Fully autonomous AI that learns your business, handles conversations, and closes deals.",
  },
  {
    title: "Toggle On. That's It.",
    description: "Link your WhatsApp. Turn on AI mode. We take over your chats. Auto-creates knowledge base from your business data.",
  },
  {
    title: "Infrastructure Included",
    description: "Database, hosting, AI compute — all included. Building this yourself costs RM400+/month minimum. We handle it at scale.",
  },
  {
    title: "Train Once, Run Forever",
    description: "After 6 months of training, toggle AI on or off anytime. Your AI keeps learning and improving.",
  },
] as const;

export const TRUEAI_DEMO_CHAT = [
  { from: "customer", type: "text" as const, text: "Hi, I saw your ad for aircon servicing. How much for 5 units?", time: "9:14 AM" },
  { from: "ai", type: "text" as const, text: "Hi! Great question. For 5 units, full servicing is RM80/unit = RM400 total. Includes gas top-up, filter cleaning, and drainage check. Our earliest slot is tomorrow at 10am — want me to book it for you?", time: "9:14 AM" },
  { from: "customer", type: "text" as const, text: "That's fast! Yes, 10am works. Can you also check one unit that's leaking?", time: "9:15 AM" },
  { from: "ai", type: "text" as const, text: "Booked! Tomorrow 10am, 5 units service + 1 leak inspection. For the leak, our technician will diagnose on-site — if it's a drainage issue, it's included free.", time: "9:15 AM" },
  { from: "ai", type: "image" as const, text: "📸 Here's your assigned technician — Ahmad from our KL team. He'll arrive between 9:45-10am.", time: "9:16 AM", imageAlt: "Technician profile card" },
  { from: "ai", type: "text" as const, text: "I've sent a confirmation SMS to your number. Anything else I can help with?", time: "9:16 AM" },
] as const;

// ─── ROI / Savings ──────────────────────────────────────────────
export const SAVINGS_TIERS = [
  { type: "SME", label: "SMEs (10-50 staff)", savings: "RM180,000", period: "/year" },
  { type: "Enterprise", label: "Large companies (50+ staff)", savings: "RM3,000,000", period: "/year" },
] as const;

// ─── We Practice What We Preach ─────────────────────────────────
export const OWN_RESULTS = {
  headline: "We don't just sell AI. We run our entire company on it.",
  subheadline: "We improved our own earnings by 70%. We're not a software company pretending to understand business — we're an actual company that built AI to solve our own problems first.",
  metrics: [
    { label: "Earnings improvement", value: "70%", detail: "across our own companies" },
    { label: "Companies we operate", value: "35+", detail: "all AI-powered" },
    { label: "Staff using AI daily", value: "400+", detail: "from sales to accounting" },
  ],
  points: [
    "We manage 35+ real businesses — co-living, healthcare, home services, scaffolding",
    "Every tool we sell you, our own teams use every single day",
    "We don't guess what works. We know — because we measured the results on ourselves first",
  ],
};

// ─── Department / Areas of AI Improvement ───────────────────────
export const DEPARTMENTS = [
  {
    id: "sales",
    name: "Sales & WhatsApp",
    icon: "message-circle",
    tools: [
      { name: "TrueAI Agent", url: "#trueai", logo: null, desc: "Fully autonomous AI that handles WhatsApp chats, qualifies leads, sends photos, and closes deals 24/7." },
      { name: "Lead Scoring", url: "#trueai", logo: null, desc: "AI ranks your leads by buying intent so your team focuses on the hottest prospects first." },
      { name: "Conversation Audit", url: "#trueai", logo: null, desc: "AI reviews every sales conversation and flags missed opportunities, slow replies, and dropped leads." },
    ],
    description: "AI takes over WhatsApp chats, replies in seconds, qualifies leads, upsells, and closes — 24/7. Our #1 tool.",
    color: "#25D366",
  },
  {
    id: "accounting",
    name: "Accounting & Finance",
    icon: "calculator",
    tools: [
      { name: "SlipMatch", url: "https://slipmatch.my", logo: "/images/client-logos/slipmatch-favicon.svg", desc: "AI bank reconciliation — match payment slips to invoices in 3 minutes, not 3 hours." },
      { name: "GetBill", url: "https://getbill.my", logo: "/images/client-logos/getbill-favicon.svg", desc: "Extract utility bills (TNB, Air Selangor) automatically. No more manual data entry." },
      { name: "RecurPay", url: "https://recurpay.my", logo: "/images/client-logos/recurpay-favicon.svg", desc: "Track recurring payments and collections. Know who owes what, when, and how much — automatically." },
    ],
    description: "Bank reconciliation in 3 minutes, automatic invoice matching, utility bill extraction. No more manual data entry.",
    color: "#116dff",
  },
  {
    id: "inventory",
    name: "Inventory & Purchasing",
    icon: "package",
    tools: [
      { name: "Stock AI", url: "#tools", logo: null, desc: "Predicts when you'll run out of stock and auto-generates purchase orders before it happens." },
      { name: "PO Automation", url: "#tools", logo: null, desc: "Converts approved purchase requests into POs with supplier matching and price comparison." },
    ],
    description: "AI predicts stock needs, auto-generates purchase orders, alerts for low stock. Never overstock or run out again.",
    color: "#06B6D4",
  },
  {
    id: "marketing",
    name: "Marketing & Content",
    icon: "megaphone",
    tools: [
      { name: "AutoViral", url: "https://autopost-web-amber.vercel.app", logo: null, desc: "AI generates and schedules social media content across all platforms. One click for a month of posts." },
      { name: "Kreativ", url: "https://kreativstudio.my", logo: "/images/client-logos/kreative-logo.webp", desc: "AI design platform — generate marketing visuals, ads, and branded content in seconds." },
    ],
    description: "AI video ads, social media automation, SEO content at scale. One click to generate a month of content.",
    color: "#8B5CF6",
  },
  {
    id: "hr",
    name: "HR & Payroll",
    icon: "users",
    tools: [
      { name: "Utopia Payroll", url: "#tools", logo: null, desc: "GPS attendance tracking, automated salary calculation, EPF/SOCSO/EIS deductions — all in one." },
      { name: "Ask Toppie", url: "#tools", logo: null, desc: "AI-powered internal knowledge base. Staff ask questions, Toppie answers from your company docs." },
    ],
    description: "GPS attendance, auto payroll calculation, AI scheduling, internal knowledge base. HR on autopilot.",
    color: "#F59E0B",
  },
  {
    id: "operations",
    name: "Operations & Logistics",
    icon: "settings",
    tools: [
      { name: "U-Stay", url: "https://u-stay.vercel.app", logo: null, desc: "Full tenant management — rooms, payments, maintenance requests, owner reports. All automated." },
      { name: "Trip AI", url: "#tools", logo: null, desc: "Smart trip assignment and GPS tracking for delivery fleets. Optimizes routes and reduces fuel costs." },
    ],
    description: "Tenant management, trip assignment, GPS tracking. AI handles the complexity so your team handles the customers.",
    color: "#EC4899",
  },
] as const;

// ─── Operator Credibility ───────────────────────────────────────
export const OPERATOR_RESULTS = [
  {
    industry: "Co-Living",
    stat: "RM450K+/mo",
    description: "+800% growth using AI operations",
  },
  {
    industry: "Healthcare",
    stat: "RM1.3M",
    description: "In 6 months with AI-driven marketing",
  },
  {
    industry: "Scaffolding",
    stat: "RM450K/mo",
    description: "From zero with AI sales automation",
  },
] as const;

// ─── Pricing ────────────────────────────────────────────────────
export const PRICING = [
  {
    name: "Start Free",
    price: "RM0",
    priceDetail: "No credit card required",
    badge: "Try First",
    description: "Access our live AI tools — no commitment. See AI work on real data before you pay a single ringgit.",
    features: [
      "SlipMatch — AI bank reconciliation",
      "AutoViral — AI social media content",
      "RecurPay — Collection tracking",
      "No time limit",
      "No credit card needed",
    ],
    sellingPoint: "Try the same tools our 35+ companies use daily. When you're ready, upgrade to get AI implemented across your entire business.",
    cta: "Try Free Tools",
    ctaStyle: "brand" as const,
    ctaUrl: "#tools",
  },
  {
    name: "AI Starter",
    price: "From RM12,000",
    priceDetail: "setup + RM3,000/month",
    badge: "Most Popular",
    description: "We find at least 5 areas where AI can improve your business. Average client gets 6.",
    features: [
      "Full business AI audit",
      "At least 5 areas of AI improvement identified",
      "TrueAI WhatsApp deployed",
      "AI reply handling for your sales team",
      "Custom knowledge base created",
      "Database & infrastructure included",
      "Monthly optimization & support",
    ],
    sellingPoint: "High setup cost, but RM3K/month is cheaper than one junior staff. AI never sleeps, never takes leave.",
    cta: "WhatsApp Us to Start",
    ctaStyle: "whatsapp" as const,
    ctaUrl: whatsappUrl(
      "Hi! I'm interested in the AI Starter plan (RM12K setup + RM3K/month). My company has about [X] staff in [industry]."
    ),
  },
  {
    name: "All-In Implementation",
    price: "From RM68,000",
    priceDetail: "6 months, fully managed",
    badge: "Maximum Impact",
    description: "We work closely with your team for 6 months. Usually finds 15 areas of improvement with 3 critical ones.",
    features: [
      "Everything in AI Starter",
      "15+ areas of AI improvement (avg.)",
      "3 critical areas deep implementation (Sales, Inventory, Purchasing)",
      "All departments covered",
      "Dedicated AI team working with your staff",
      "Custom AI tools built for your workflows",
      "Full handover with documentation & training",
    ],
    sellingPoint: "RM68K sounds expensive. But we save SMEs RM180K/year and large companies RM3M/year. ROI in under 6 months.",
    cta: "Let's Talk",
    ctaStyle: "whatsapp" as const,
    ctaUrl: whatsappUrl(
      "Hi! I'm interested in the All-In AI Implementation (RM68K). My company is in [industry] with about [X] staff."
    ),
  },
] as const;

// ─── Footer Links ───────────────────────────────────────────────
export const FOOTER_LINKS = {
  navigate: [
    { label: "TrueAI", href: "#trueai" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "/about" },
  ],
  tools: [
    { label: "SlipMatch", href: "https://slipmatch.my" },
    { label: "AutoViral", href: "https://autopost-web-amber.vercel.app" },
    { label: "U-Stay", href: "#tools" },
    { label: "Utopia Payroll", href: "#tools" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "How We Charge", href: "/how-we-charge" },
    { label: "AI Masterclass", href: "/masterclass" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
