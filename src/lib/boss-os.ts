import { whatsappUrl } from "./constants";

// ─── Boss OS Product Data ───────────────────────────────────────

export const BOSS_OS = {
  name: "Boss OS",
  tagline: "Your entire business. One screen. Every morning.",
  subtitle:
    "Sales, cash flow, staff, customers — all in one command center built for YOUR industry. No IT team needed. Works on your phone.",
  roiProof: "Most clients save RM8,000–15,000/month within 90 days.",
  trustStats: [
    { label: "companies", value: "35+" },
    { label: "staff managed", value: "400+" },
    { label: "setup from", value: "RM5K" },
  ],
} as const;

// ─── 5 Core Features ────────────────────────────────────────────

export const CORE_FEATURES = [
  {
    id: "sales-command",
    name: "Sales Command",
    description:
      "Today's revenue, trends, top products — one screen. Know your numbers before 9am.",
    icon: "BarChart3" as const,
    color: "#116dff",
    bg: "#f0f4ff",
  },
  {
    id: "whatsapp-ai",
    name: "WhatsApp AI",
    description:
      "Auto-reply customers 24/7. Takes bookings, sends quotes, answers pricing. In BM, EN, or Chinese.",
    icon: "MessageCircle" as const,
    color: "#25D366",
    bg: "#f0fdf4",
  },
  {
    id: "ai-insights",
    name: "AI Insights",
    description:
      '"Sales dropped 23% on Tuesdays." "Customer X hasn\'t ordered in 30 days." AI watches so you don\'t have to.',
    icon: "Brain" as const,
    color: "#f59e0b",
    bg: "#fefce8",
  },
  {
    id: "cashflow",
    name: "Cash Flow View",
    description:
      "Money in, money out, who owes you. Pulls from your accounting software. No more guessing.",
    icon: "Wallet" as const,
    color: "#ec4899",
    bg: "#fdf2f8",
  },
  {
    id: "staff-ops",
    name: "Staff & Ops",
    description:
      "Who's working, what's assigned, what's overdue. Replaces the WhatsApp group you use to chase staff.",
    icon: "Users" as const,
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
] as const;

// ─── Industry Phone Mockups ─────────────────────────────────────

export interface PhoneMockup {
  id: string;
  industry: string;
  icon: string;
  color: string;
  revenue: string;
  trend: string;
  trendUp: boolean;
  metrics: { label: string; bg: string }[];
  aiInsight: string;
}

export const PHONE_MOCKUPS: PhoneMockup[] = [
  {
    id: "car-rental",
    industry: "Car Rental",
    icon: "Car",
    color: "#116dff",
    revenue: "RM47.2K",
    trend: "↑ 23% vs last month",
    trendUp: true,
    metrics: [
      { label: "12 cars rented today", bg: "#f0fdf4" },
      { label: "3 returns overdue", bg: "#fefce8" },
    ],
    aiInsight: 'AI: "Book 2 more Myvi for weekend peak"',
  },
  {
    id: "cleaning",
    industry: "Cleaning Co",
    icon: "Sparkles",
    color: "#059669",
    revenue: "RM18.9K",
    trend: "↑ 11% vs last month",
    trendUp: true,
    metrics: [
      { label: "8 jobs completed today", bg: "#f0fdf4" },
      { label: "2 staff on MC", bg: "#fefce8" },
    ],
    aiInsight: 'AI: "Customer Lim hasn\'t booked in 45 days"',
  },
  {
    id: "fresh-produce",
    industry: "Fresh Produce",
    icon: "Leaf",
    color: "#f59e0b",
    revenue: "RM92.6K",
    trend: "↓ 5% vs last month",
    trendUp: false,
    metrics: [
      { label: "Low stock: Tomato (2 days)", bg: "#fefce8" },
      { label: "15 deliveries today", bg: "#f0fdf4" },
    ],
    aiInsight: 'AI: "Reorder tomato — supplier best price Tue"',
  },
  {
    id: "motorcycle",
    industry: "Motorcycle",
    icon: "Bike",
    color: "#8b5cf6",
    revenue: "RM31.4K",
    trend: "↑ 8% vs last month",
    trendUp: true,
    metrics: [
      { label: "6 units sold this week", bg: "#f0fdf4" },
      { label: "4 service bookings pending", bg: "#fefce8" },
    ],
    aiInsight: 'AI: "Honda EX5 demand up 40% — restock"',
  },
  {
    id: "fnb",
    industry: "F&B",
    icon: "UtensilsCrossed",
    color: "#ec4899",
    revenue: "RM24.8K",
    trend: "↑ 15% vs last month",
    trendUp: true,
    metrics: [
      { label: "142 covers today", bg: "#f0fdf4" },
      { label: "Staff: 8/10 on shift", bg: "#f0f4ff" },
    ],
    aiInsight: 'AI: "Friday dinner peak — prep 30% more nasi lemak"',
  },
];

// ─── Data Readiness ─────────────────────────────────────────────

export const DATA_SOURCES = [
  {
    id: "sales",
    name: "Sales Records",
    description: "Excel, POS system, receipts, invoices — even handwritten",
    icon: "Receipt" as const,
    examples: [
      "Monthly sales Excel spreadsheet",
      "POS system export (any brand)",
      "Invoice records or receipt photos",
      "WhatsApp order messages",
    ],
  },
  {
    id: "hr",
    name: "HR / Payroll",
    description: "Staff list, salary, attendance — even in a WhatsApp group",
    icon: "Briefcase" as const,
    examples: [
      "Payroll Excel or PDF",
      "Attendance app data",
      "Staff contact list",
      "Salary slip records",
    ],
  },
  {
    id: "accounting",
    name: "Accounting Software",
    description: "SQL, AutoCount, UBS, Xero — we connect to all of them",
    icon: "BookOpen" as const,
    examples: [
      "SQL Accounting",
      "AutoCount",
      "UBS",
      "Xero / QuickBooks",
    ],
  },
] as const;

// ─── Industries ─────────────────────────────────────────────────

export const INDUSTRIES = [
  { id: "car-rental", name: "Car Rental", icon: "Car" as const, slug: "car-rental" },
  { id: "cleaning", name: "Cleaning", icon: "Sparkles" as const, slug: "cleaning" },
  { id: "scaffolding", name: "Scaffolding", icon: "Building2" as const, slug: "scaffolding" },
  { id: "fresh-produce", name: "Fresh Produce", icon: "Leaf" as const, slug: "fresh-produce" },
  { id: "healthcare", name: "Healthcare", icon: "Heart" as const, slug: "healthcare" },
  { id: "co-living", name: "Co-Living", icon: "Home" as const, slug: "co-living" },
  { id: "motorcycle", name: "Motorcycle", icon: "Bike" as const, slug: "motorcycle" },
  { id: "fnb", name: "F&B", icon: "UtensilsCrossed" as const, slug: "fnb" },
] as const;

// ─── Pricing (3 Tiers — Data Readiness Based) ──────────────────

export const BOSS_OS_PRICING = [
  {
    id: "starter",
    name: "Starter",
    who: "< 20% digital. Excel, paper, WhatsApp.",
    setup: "From RM8,000",
    monthly: "RM1,800",
    resultPromise: "Stop flying blind",
    badge: null,
    features: [
      "Sales Command dashboard",
      "WhatsApp AI (1 number)",
      "Cash Flow View",
      "Monthly AI report",
    ],
    cta: "WhatsApp Us",
    ctaUrl: whatsappUrl(
      "Hi! I'm interested in the Boss OS Starter plan (RM1,800/month). My company has about [X] staff in [industry]."
    ),
    highlighted: false,
  },
  {
    id: "command-center",
    name: "Command Center",
    who: "20–50% digital. Has POS or accounting.",
    setup: "From RM18,000",
    monthly: "RM2,800",
    resultPromise: "40% margin improvement in 90 days",
    badge: "MOST BUSINESSES START HERE",
    features: [
      "All 5 core features",
      "WhatsApp AI (3 numbers)",
      "Weekly AI insights",
      "Staff & Ops tracker",
      "All system integrations",
      "Dedicated support",
    ],
    cta: "WhatsApp Us",
    ctaUrl: whatsappUrl(
      "Hi! I'm interested in the Boss OS Command Center plan (RM2,800/month). My company has about [X] staff in [industry]."
    ),
    highlighted: true,
  },
  {
    id: "ultra",
    name: "Ultra Mode",
    who: "50%+ digital or graduating from Command Center.",
    setup: "Let's talk",
    monthly: "Custom",
    resultPromise: "AI runs alongside you",
    badge: null,
    features: [
      "Everything in Command Center",
      "AI decision module",
      "Anomaly detection alerts",
      '"What you\'re missing" insights',
      "Predictive analytics",
      "Priority support + quarterly review",
    ],
    cta: "Let's Talk",
    ctaUrl: whatsappUrl(
      "Hi! I'm interested in Boss OS Ultra Mode. My company has about [X] staff in [industry] and we already have digital systems in place."
    ),
    highlighted: false,
  },
] as const;

// ─── Proof Strip Stats ─────────────────────────────────────────

export const BOSS_PROOF_STATS = [
  { value: "RM14,000", label: "saved per month", source: "DKing Durian" },
  { value: "94%", label: "on-time delivery", source: "Scaffolding.my" },
  { value: "30 min", label: "daily admin — down from 4 hours", source: "RevMove Fleet" },
] as const;

// ─── Your First Week Timeline ──────────────────────────────────

export const BOSS_TIMELINE_STEPS = [
  {
    day: "Day 1",
    icon: "Search" as const,
    titleKey: "boss.timeline.day1.title" as const,
    copyKey: "boss.timeline.day1.copy" as const,
  },
  {
    day: "Day 2",
    icon: "Target" as const,
    titleKey: "boss.timeline.day2.title" as const,
    copyKey: "boss.timeline.day2.copy" as const,
  },
  {
    day: "Day 3–4",
    icon: "Wrench" as const,
    titleKey: "boss.timeline.day3.title" as const,
    copyKey: "boss.timeline.day3.copy" as const,
  },
  {
    day: "Day 5",
    icon: "Rocket" as const,
    titleKey: "boss.timeline.day5.title" as const,
    copyKey: "boss.timeline.day5.copy" as const,
  },
  {
    day: "Week 2+",
    icon: "Sparkles" as const,
    titleKey: "boss.timeline.week2.title" as const,
    copyKey: "boss.timeline.week2.copy" as const,
  },
] as const;

// ─── Live Showcase Cases ───────────────────────────────────────

export const BOSS_SHOWCASE_CASES = [
  {
    id: "dking",
    name: "DKing Durian",
    industry: "Durian",
    logo: "/images/boss-os/logo-dking.png",
    image: "/images/boss-os/dking-dashboard.webp",
    copyKey: "boss.showcase.dking.copy" as const,
    before: { metric: "Stock waste", value: "12%", detail: "RM14,000 lost/month" },
    after: { metric: "Stock waste", value: "3%", detail: "RM2,100 lost/month" },
    saved: "RM11,900/month",
  },
  {
    id: "scaffolding",
    name: "Scaffolding.my",
    industry: "Scaffolding",
    logo: "/images/boss-os/logo-scaffolding.png",
    image: "/images/boss-os/scaffolding-heatmap.webp",
    copyKey: "boss.showcase.scaffolding.copy" as const,
    before: { metric: "On-time delivery", value: "71%", detail: "3 untracked drivers" },
    after: { metric: "On-time delivery", value: "94%", detail: "0 untracked" },
    saved: "+RM22,000/month",
  },
  {
    id: "kak-kenduri",
    name: "Kak Kenduri",
    industry: "Event Rental & Catering",
    logo: "/images/boss-os/logo-kakkenduri.png",
    image: "/images/boss-os/kak-kenduri-dashboard.webp",
    copyKey: "boss.showcase.kakkenduri.copy" as const,
    before: { metric: "Booking conflicts", value: "8/month", detail: "Double-booked events" },
    after: { metric: "Booking conflicts", value: "0", detail: "Zero overlap" },
    saved: "RM9,500/month",
  },
  {
    id: "ibnu-sina",
    name: "Ibnu Sina Care",
    industry: "Healthcare",
    logo: "/images/boss-os/logo-ibnusina.png",
    image: "/images/boss-os/ibnu-sina-dashboard.webp",
    copyKey: "boss.showcase.ibnusina.copy" as const,
    before: { metric: "Patient wait time", value: "45 min", detail: "Manual scheduling" },
    after: { metric: "Patient wait time", value: "12 min", detail: "AI-optimized slots" },
    saved: "+35% patient throughput",
  },
] as const;

// ─── Quiz Questions ────────────────────────────────────────────

export interface QuizQuestion {
  titleKey: string;
  answers: { textKey: string; tierSignal: 1 | 2 | 3 }[];
}

export const BOSS_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    titleKey: "boss.quiz.q1.title",
    answers: [
      { textKey: "boss.quiz.q1.a", tierSignal: 1 },
      { textKey: "boss.quiz.q1.b", tierSignal: 2 },
      { textKey: "boss.quiz.q1.c", tierSignal: 3 },
    ],
  },
  {
    titleKey: "boss.quiz.q2.title",
    answers: [
      { textKey: "boss.quiz.q2.a", tierSignal: 1 },
      { textKey: "boss.quiz.q2.b", tierSignal: 2 },
      { textKey: "boss.quiz.q2.c", tierSignal: 3 },
    ],
  },
  {
    titleKey: "boss.quiz.q3.title",
    answers: [
      { textKey: "boss.quiz.q3.a", tierSignal: 1 },
      { textKey: "boss.quiz.q3.b", tierSignal: 2 },
      { textKey: "boss.quiz.q3.c", tierSignal: 3 },
    ],
  },
];

// ─── Case Studies ───────────────────────────────────────────────

export const CASE_STUDIES = [
  {
    name: "Encik Ali",
    industry: "Car Rental",
    icon: "Car" as const,
    image: "/images/boss-os/case-car-rental.webp",
    before: { value: "4 hrs/day", label: "on admin" },
    after: { value: "30 min", label: "on admin" },
    result: "Saves RM8,400/month",
  },
  {
    name: "Puan Sarah",
    industry: "Cleaning Co",
    icon: "Sparkles" as const,
    image: "/images/boss-os/case-cleaning.webp",
    before: { value: "67%", label: "reply rate" },
    after: { value: "98%", label: "reply rate" },
    result: "WhatsApp AI handles 80% of inquiries",
  },
  {
    name: "Ah Kow",
    industry: "Fresh Produce",
    icon: "Leaf" as const,
    image: "/images/boss-os/case-produce.webp",
    before: { value: "12%", label: "stock waste" },
    after: { value: "3%", label: "stock waste" },
    result: "AI predicts reorder timing",
  },
] as const;

// ─── Industry Sub-Page Data ─────────────────────────────────────

export interface IndustryPage {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  subtitle: string;
  painPoints: string[];
  features: { name: string; description: string }[];
  caseStudy: {
    name: string;
    before: { value: string; label: string };
    after: { value: string; label: string };
    result: string;
  };
  roiDefaults: { staff: number; hoursAdmin: number };
  whatsappMessage: string;
}

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "car-rental",
    name: "Car Rental",
    icon: "Car",
    headline: "Boss OS for Car Rental",
    subtitle:
      "Fleet tracking, booking automation, collection reminders — all in one screen.",
    painPoints: [
      "Cars out but you don't know where",
      "Returns overdue, deposits stuck",
      "WhatsApp bookings lost in chat history",
    ],
    features: [
      { name: "Fleet Dashboard", description: "See every car: rented, available, in service. Real-time." },
      { name: "Booking AI", description: "WhatsApp AI takes bookings, checks availability, sends confirmation — 24/7." },
      { name: "Collection Tracker", description: "Who owes what, when it's due, auto-reminder via WhatsApp." },
      { name: "Revenue Analytics", description: "Daily/weekly/monthly revenue by car model. Know which cars make money." },
      { name: "Staff Assignment", description: "Assign drivers, track handovers, manage shifts from one screen." },
    ],
    caseStudy: {
      name: "Encik Ali",
      before: { value: "4 hrs/day", label: "on admin" },
      after: { value: "30 min", label: "on admin" },
      result: "Saves RM8,400/month",
    },
    roiDefaults: { staff: 8, hoursAdmin: 3 },
    whatsappMessage:
      "Hi! I run a car rental business and I'm interested in Boss OS. How does it work for fleet management?",
  },
  {
    slug: "cleaning",
    name: "Cleaning Services",
    icon: "Sparkles",
    headline: "Boss OS for Cleaning Companies",
    subtitle:
      "Job scheduling, staff dispatch, customer follow-up — all automated.",
    painPoints: [
      "Missed customer inquiries on WhatsApp",
      "Manual scheduling on paper or Excel",
      "No visibility into job completion status",
    ],
    features: [
      { name: "Job Scheduler", description: "Drag-and-drop job assignment. Staff see their daily schedule on phone." },
      { name: "WhatsApp Auto-Reply", description: "AI answers pricing, availability, and takes bookings — in seconds." },
      { name: "Customer Re-engagement", description: "AI flags customers who haven't booked in 30+ days. Auto-sends follow-up." },
      { name: "Staff GPS Tracking", description: "Know where your teams are, when they arrived, when they finished." },
      { name: "Payment Collection", description: "Track invoices, send WhatsApp reminders, flag overdue accounts." },
    ],
    caseStudy: {
      name: "Puan Sarah",
      before: { value: "67%", label: "reply rate" },
      after: { value: "98%", label: "reply rate" },
      result: "WhatsApp AI handles 80% of inquiries",
    },
    roiDefaults: { staff: 15, hoursAdmin: 4 },
    whatsappMessage:
      "Hi! I run a cleaning company and I'm interested in Boss OS. Can you help automate my scheduling and customer replies?",
  },
  {
    slug: "fresh-produce",
    name: "Fresh Produce & Trading",
    icon: "Leaf",
    headline: "Boss OS for Fresh Produce",
    subtitle:
      "Stock predictions, supplier timing, delivery tracking — no more spoiled inventory.",
    painPoints: [
      "Stock spoils before you can sell it",
      "Reordering based on gut feel, not data",
      "Delivery tracking scattered across WhatsApp groups",
    ],
    features: [
      { name: "Stock Intelligence", description: "AI predicts when items will run out based on sales patterns. Auto-suggests reorder." },
      { name: "Supplier Optimizer", description: "Compare supplier prices, track best-price days, auto-generate POs." },
      { name: "Delivery Tracker", description: "Every delivery: who, where, when, status. GPS tracking for drivers." },
      { name: "Waste Monitor", description: "Track spoilage rates by product. AI identifies patterns to reduce waste." },
      { name: "Sales Dashboard", description: "Daily sales by product, customer, route. Know your best sellers." },
    ],
    caseStudy: {
      name: "Ah Kow",
      before: { value: "12%", label: "stock waste" },
      after: { value: "3%", label: "stock waste" },
      result: "AI predicts reorder timing, saves RM6,200/month",
    },
    roiDefaults: { staff: 20, hoursAdmin: 3.5 },
    whatsappMessage:
      "Hi! I'm in the fresh produce business and want to reduce stock waste with Boss OS. How does the stock prediction work?",
  },
  {
    slug: "equipment-rental",
    name: "Equipment Rental",
    icon: "Wrench",
    headline: "Boss OS for Equipment Rental",
    subtitle:
      "Track every asset — what's out, what's due back, what's overdue.",
    painPoints: [
      "Don't know which assets are currently rented out",
      "Returns overdue and you only find out when the next customer needs it",
      "Manual tracking with Excel or paper",
    ],
    features: [
      { name: "Asset Tracker", description: "Every item: scaffolding, canopy, table, chair — tracked in real-time." },
      { name: "Rental Calendar", description: "See availability at a glance. No double-booking." },
      { name: "Return Alerts", description: "Auto-reminder to customers when items are due. Escalates overdue to your phone." },
      { name: "WhatsApp Booking", description: "Customers ask availability and book via WhatsApp. AI confirms in 30 seconds." },
      { name: "Revenue by Asset", description: "Which items earn the most? Which are sitting idle? Data-driven fleet decisions." },
    ],
    caseStudy: {
      name: "Encik Razak",
      before: { value: "18%", label: "asset idle time" },
      after: { value: "6%", label: "asset idle time" },
      result: "12% more utilization, RM5,800/month extra revenue",
    },
    roiDefaults: { staff: 10, hoursAdmin: 3 },
    whatsappMessage:
      "Hi! I run an equipment rental business (scaffolding/canopy/event) and want to track my assets with Boss OS.",
  },
];
