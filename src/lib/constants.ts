export const WHATSAPP_NUMBER = "60123456789";
export const WHATSAPP_MESSAGE = "Hi Utopia! I'm interested in learning more about your AI solutions for my business.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const COMPANY_STATS = {
  companies: "30+",
  hoursSaved: "10,000+",
  accuracy: "99.9%",
  tools: "6+",
};

export const ROTATING_USPS = [
  {
    text: "Cut Costs & Reduce Expenses",
    color: "#06B6D4",
    iconPath: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    text: "Increase Speed & Efficiency",
    color: "#8B5CF6",
    iconPath: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
  },
  {
    text: "Reduce Errors & Mistakes",
    color: "#10B981",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
];

export const PAIN_POINTS = [
  {
    title: "Drowning in Manual Work",
    description: "Your staff spends hours on tasks that AI completes in seconds. Every manual hour is money wasted.",
    icon: "clock",
    color: "#EF4444",
  },
  {
    title: "Costly Human Errors",
    description: "Mistakes in reconciliation, invoicing, and data entry are silently costing you thousands every month.",
    icon: "alert",
    color: "#F97316",
  },
  {
    title: "Losing to Faster Competitors",
    description: "Your competitors respond to customers instantly with AI. You're still taking days. They win.",
    icon: "trending-down",
    color: "#EF4444",
  },
  {
    title: "No Idea Where to Start",
    description: "AI sounds great, but you're overwhelmed by options and scared of complexity. We get it.",
    icon: "help",
    color: "#F97316",
  },
];

export const APPROACH_STEPS = [
  {
    step: 1,
    title: "Audit",
    description: "We analyse your operations to find exactly where AI saves the most money.",
    icon: "search",
  },
  {
    step: 2,
    title: "Plan",
    description: "Custom AI roadmap built for your business — not a generic template.",
    icon: "map",
  },
  {
    step: 3,
    title: "Implement",
    description: "We deploy, configure, and integrate everything. You don't need to be technical.",
    icon: "code",
  },
  {
    step: 4,
    title: "Optimise",
    description: "Monthly reviews to ensure your ROI keeps growing quarter after quarter.",
    icon: "chart",
  },
];

export type AppCategory = "make-money" | "save-money";
export type AppStatus = "live" | "coming-soon";

export interface AIApp {
  name: string;
  description: string;
  category: AppCategory;
  status: AppStatus;
  price?: string;
  url?: string;
  icon: string;
  color: string;
}

export const AI_APPS: AIApp[] = [
  {
    name: "BankMatch",
    description: "Bank reconciliation in seconds, not hours. Match thousands of transactions automatically.",
    category: "save-money",
    status: "live",
    price: "RM49/mo",
    url: "https://recon-x-eight.vercel.app",
    icon: "bank",
    color: "#06B6D4",
  },
  {
    name: "AutoViral",
    description: "AI-powered social media content that drives engagement and brings customers to your door.",
    category: "make-money",
    status: "live",
    price: "RM599/mo",
    url: "https://autopost-web-amber.vercel.app",
    icon: "megaphone",
    color: "#8B5CF6",
  },
  {
    name: "AI Invoice Matcher",
    description: "Automatically match invoices to purchase orders. Eliminate manual data entry forever.",
    category: "save-money",
    status: "coming-soon",
    icon: "receipt",
    color: "#10B981",
  },
  {
    name: "AI Sales Forecaster",
    description: "Predict your revenue with AI accuracy. Know what's coming before it happens.",
    category: "make-money",
    status: "coming-soon",
    icon: "chart-up",
    color: "#F59E0B",
  },
  {
    name: "AI Customer Bot",
    description: "24/7 WhatsApp customer support that sounds human. Never miss a lead again.",
    category: "make-money",
    status: "coming-soon",
    icon: "bot",
    color: "#3B82F6",
  },
  {
    name: "AI HR Assistant",
    description: "Automate leave applications, payroll calculations, and compliance. HR on autopilot.",
    category: "save-money",
    status: "coming-soon",
    icon: "users",
    color: "#D946EF",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "RM0",
    period: "forever",
    description: "Try any tool free with limited usage",
    highlighted: false,
    features: [
      "Access to all live AI tools",
      "Limited monthly usage",
      "Email support",
      "Basic analytics dashboard",
      "Community access",
    ],
    cta: "Start Free",
    ctaStyle: "outline" as const,
  },
  {
    name: "Pro",
    price: "RM499",
    originalPrice: "RM999",
    period: "/month",
    description: "Full access to all tools with priority support",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited usage on all tools",
      "Priority WhatsApp support",
      "Advanced analytics & reporting",
      "API access",
      "Custom integrations",
      "Monthly AI audit call",
    ],
    cta: "Get Pro",
    ctaStyle: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "White-label solutions with dedicated support",
    highlighted: false,
    features: [
      "Everything in Pro",
      "White-label branding",
      "Dedicated account manager",
      "Custom AI tool development",
      "On-site implementation",
      "SLA guarantee",
    ],
    cta: "Talk to Us",
    ctaStyle: "outline" as const,
  },
];

export const TESTIMONIALS = [
  { name: "Ahmad Razif", role: "CEO", company: "TechVenture Sdn Bhd", quote: "Utopia's BankMatch saved our accounts team 3 full days every month. We used to reconcile manually — now it's done in minutes.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Siti Nurhaliza", role: "Finance Director", company: "Meridian Corp", quote: "The AI invoice matching tool caught discrepancies our team missed for months. Already saved us RM45,000 in the first quarter.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "David Tan", role: "Managing Director", company: "Apex Trading", quote: "AutoViral tripled our social media engagement. Our sales team now gets 5x more inbound leads from social channels.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Nurul Aina", role: "Operations Manager", company: "FastLogix", quote: "We were spending RM8,000/month on data entry staff. Utopia's AI tools brought that down to near zero.", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Jason Lim", role: "Founder", company: "CloudBridge Solutions", quote: "Finally, an AI company that actually implements. Not just slides and proposals — they deploy real tools that work.", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Farah Wahab", role: "HR Manager", company: "BuildRight Construction", quote: "Leave management used to be a nightmare across 5 branches. Utopia automated the entire process in 2 weeks.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
  { name: "Kelvin Wong", role: "CFO", company: "Pinnacle Group", quote: "The bank reconciliation accuracy is unbelievable. 99.9% match rate — our auditors were impressed.", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
  { name: "Aminah Rashid", role: "Business Owner", company: "Dapur Aminah F&B", quote: "I'm not tech-savvy at all, but Utopia made AI simple for my restaurant chain. Our costs dropped 30% in 2 months.", avatar: "https://randomuser.me/api/portraits/women/8.jpg" },
  { name: "Marcus Chen", role: "Sales Director", company: "GreenField Properties", quote: "AI Sales Forecaster predicted our Q1 revenue within 3% accuracy. Game-changer for resource planning.", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
  { name: "Priya Shankar", role: "COO", company: "Lotus Healthcare", quote: "Utopia understood our Malaysian regulatory requirements. Their AI tools are built for how we actually do business here.", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
  { name: "Hafiz Abdullah", role: "IT Manager", company: "Sigma Manufacturing", quote: "Deployed across 3 factories in under a month. The implementation team knows what they're doing.", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Christine Lee", role: "Partner", company: "Lee & Associates CPA", quote: "As an accounting firm, accuracy is everything. BankMatch handles our clients' reconciliation with zero errors.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Rizal Karim", role: "General Manager", company: "Heritage Hotels", quote: "Our customer response time went from 4 hours to 4 minutes with the AI chatbot. Guest satisfaction scores shot up.", avatar: "https://randomuser.me/api/portraits/men/13.jpg" },
  { name: "Mei Ling Tan", role: "Marketing Head", company: "FreshMart", quote: "AutoViral creates content in seconds that used to take our team a full day. And it performs better too.", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
  { name: "Azman Ismail", role: "Director", company: "Mutiara Logistics", quote: "ROI was visible in week one. Not month one — week one. That's how fast these AI tools pay for themselves.", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
  { name: "Sarah Abdullah", role: "Entrepreneur", company: "Bloom & Co", quote: "I run 4 businesses. Utopia's tools let me manage all of them without hiring more people. That's the real power.", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
  { name: "Raj Kumar", role: "CTO", company: "DataStream Asia", quote: "We evaluated 6 AI vendors. Utopia was the only one with tools they actually use themselves daily. That's trust.", avatar: "https://randomuser.me/api/portraits/men/17.jpg" },
  { name: "Zainab Omar", role: "Accounts Manager", company: "Al-Hijrah Trading", quote: "Bank reconciliation for 5 companies used to take our team a full week. Now it's done before lunch on Monday.", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
  { name: "Tommy Yap", role: "CEO", company: "YapTech Solutions", quote: "What impressed me most is they didn't just sell us software — they sat with our team and implemented everything.", avatar: "https://randomuser.me/api/portraits/men/19.jpg" },
  { name: "Aishah Binti Hassan", role: "Admin Head", company: "Cahaya Education", quote: "Our school admin went from 8 staff handling paperwork to 3 staff with AI. The savings fund our student programmes.", avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
];

export const FAQ_ITEMS = [
  {
    question: "Do I need technical skills to use your AI tools?",
    answer: "Not at all. We implement everything for you. Our tools are designed for business owners, not programmers. If you can use WhatsApp, you can use our AI tools.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most businesses see measurable ROI within the first 2-4 weeks. Bank reconciliation savings are immediate — literally from day one. Marketing tools typically show results within 2 weeks.",
  },
  {
    question: "Is my business data safe?",
    answer: "Absolutely. We're PDPA-compliant and process data client-side where possible. Your financial data never leaves your control. We follow bank-grade security practices.",
  },
  {
    question: "Can I try before I commit?",
    answer: "Yes! Every tool has a free tier. Start with zero cost, see the results, then upgrade when you're ready. No credit card required to start.",
  },
  {
    question: "Do you work with companies outside Malaysia?",
    answer: "We're currently focused exclusively on Malaysian businesses. This means our tools are built for Malaysian banking systems, regulations, and business practices — not generic global solutions.",
  },
  {
    question: "What if the AI makes mistakes?",
    answer: "Every tool includes human review checkpoints. AI handles the heavy lifting at 99.9% accuracy, and you maintain final approval on critical decisions. It's AI-assisted, not AI-replaced.",
  },
  {
    question: "How is this different from using ChatGPT?",
    answer: "ChatGPT is a general chatbot. Our tools are purpose-built for specific business tasks — bank reconciliation, social media marketing, invoice matching. Think of it as the difference between a Swiss Army knife and a power drill. Both useful, but one is made for the job.",
  },
  {
    question: "Can you build custom AI tools for my industry?",
    answer: "Yes — that's our consulting service. We've built custom AI solutions for construction, F&B, logistics, education, and more. WhatsApp us to discuss your specific needs.",
  },
];

export const NAV_LINKS = [
  { label: "Tools", href: "#tools" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#why-utopia" },
  { label: "FAQ", href: "#faq" },
];
