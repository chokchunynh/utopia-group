"use client";

import { whatsappUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DashedGrid from "@/components/ui/DashedGrid";
import {
  Code2,
  TrendingUp,
  Workflow,
  Clock,
  Phone,
  ClipboardCheck,
  BookOpen,
  Headphones,
  Sparkles,
  Building2,
  BadgeCheck,
  Wrench,
  ArrowRight,
  CalendarDays,
  Laptop,
  Mic,
  CreditCard,
  Target,
  Zap,
  BarChart3,
  FileText,
  Settings,
  CheckCircle2,
  GraduationCap,
  Calendar,
} from "lucide-react";

const MASTERCLASS_WA = whatsappUrl(
  "Hi! I'm interested in the Utopia AI Masterclass for my team."
);
const CALENDAR_WA = whatsappUrl(
  "Hi! I'd like to check available dates for the AI Masterclass."
);

/* ─── Section 2: What You'll Learn ────────────────────────── */
const LEARN_CARDS = [
  {
    icon: Code2,
    title: "Claude Code for Internal Processes",
    body: "Design, automate, and optimize your company's internal workflows using Claude Code — from SOPs to approval chains to reporting dashboards.",
  },
  {
    icon: Settings,
    title: "Improve Company Processes",
    body: "Identify bottlenecks, eliminate manual work, and redesign how your team operates. AI doesn't just speed things up — it removes entire steps.",
  },
  {
    icon: FileText,
    title: "Create Landing Pages & Business Tools",
    body: "Build professional landing pages, internal tools, and customer-facing apps — without a developer. Ship in hours, not weeks.",
  },
  {
    icon: Zap,
    title: "Increase Company Efficiency",
    body: "Automate repetitive tasks across departments. Accounting, HR, sales, operations — every team leaves with tools that save 20+ hours/week.",
  },
  {
    icon: Target,
    title: "Identify & Fix Weak Points",
    body: "Pinpoint exactly where your company is leaking time and money. AI-powered analysis finds the gaps your team doesn't see.",
  },
  {
    icon: Workflow,
    title: "Master the Full AI Ecosystem",
    body: "Claude, Claude Code, ChatGPT, Gemini, Grok, Copilot, Cursor, Midjourney — your team masters every major AI tool and knows when to use each one.",
  },
] as const;

/* ─── Section 4: Why Train With Us ────────────────────────── */
const WHY_US = [
  {
    icon: Building2,
    title: "We're operators, not trainers",
    body: "We run 35+ real businesses on AI every day. This isn't theory from a textbook — it's battle-tested on real P&Ls.",
  },
  {
    icon: BadgeCheck,
    title: "70% earnings improvement",
    body: "That's our own number. Measured across our companies. We teach the exact systems that got us there.",
  },
  {
    icon: Wrench,
    title: "Tools you'll actually use",
    body: "Claude, Claude Code, WhatsApp automation, SlipMatch — real tools with real ROI. No theoretical frameworks.",
  },
] as const;

/* ─── Section 5: How It Works ─────────────────────────────── */
const STEPS = [
  {
    icon: Phone,
    title: "Book a free consultation call",
    body: "15-minute call to understand your business and goals.",
  },
  {
    icon: ClipboardCheck,
    title: "We assess your team's AI readiness",
    body: "Identify quick wins and the biggest impact areas for your industry.",
  },
  {
    icon: BookOpen,
    title: "Customized curriculum delivered on-site",
    body: "Hands-on training at your office, tailored to your team's actual workflows.",
  },
  {
    icon: Headphones,
    title: "Post-training support + tool access",
    body: "30 days of support after training. Access to our AI tools so your team keeps improving.",
  },
] as const;

export default function MasterclassPage() {
  const { t } = useLanguage();
  return (
    <main>
      {/* ══════════════ 1. HERO ══════════════ */}
      <section className="relative overflow-hidden">
        {/* Cloud hero background */}
        <div className="bg-image-hero" style={{ backgroundImage: "url('/hero/bg-masterclass.png')" }} />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/50" />
        <div className="relative z-10 section-padding !pt-28 !pb-16 md:!pt-36 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/10 text-white/90 border border-white/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                {t("mc.hero.pill")}
              </span>
              <h1 className="text-[32px] md:text-[56px] font-bold tracking-tight leading-[1.1] text-white mb-4">
                {t("mc.hero.title")}{" "}
                <span className="gradient-text-hero font-extrabold">
                  {t("mc.hero.title2")}
                </span>
              </h1>
              <p className="text-[18px] md:text-[22px] font-semibold text-white/90 mb-4 max-w-2xl mx-auto leading-snug">
                On-Site AI Training For Your Company
              </p>
              <p className="text-[#94a3b8] max-w-xl mx-auto text-[16px] leading-relaxed mb-10">
                We come to your office, train your team, and build AI tools for your actual workflows. Up to 8 participants per session.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={MASTERCLASS_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book a Session
                </a>
                <a
                  href={CALENDAR_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!bg-white/10 text-base px-8 py-4"
                >
                  <CalendarDays className="w-5 h-5" />
                  View Calendar
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 2. WHAT YOU'LL LEARN ══════════════ */}
      <section className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Curriculum</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                What You&apos;ll Learn
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Practical AI skills your team can use from day one. No fluff, no
                theory-only slides.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {LEARN_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={i * 80}>
                  <div className="card h-full">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--color-brand)]" />
                    </div>
                    <h3 className="heading-md text-[17px] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ 2B. DEPARTMENT OUTCOMES ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">By Department</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                What Each Team{" "}
                <span className="gradient-text font-extrabold">Gets Out Of It</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px]">
                Specific, measurable outcomes for every department in your company.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                dept: "Finance & Accounting",
                color: "#116dff",
                outcomes: [
                  "Auto-reconcile bank statements in 3 minutes",
                  "Generate invoices by a push of a button",
                  "Reduce data entry errors by 90%",
                  "Extract utility bills automatically (TNB, SYABAS)",
                ],
                result: "Save 20+ hours/week",
              },
              {
                dept: "Sales & WhatsApp",
                color: "#25D366",
                outcomes: [
                  "AI replies to leads 24/7 in under 5 seconds",
                  "Auto-qualify and score every lead",
                  "Upsell and cross-sell without human intervention",
                  "Conversation audit — find where deals go cold",
                ],
                result: "Close 3x more deals",
              },
              {
                dept: "Content & Marketing",
                color: "#8B5CF6",
                outcomes: [
                  "Auto-generate social media images and posts",
                  "AI video ads and scripts in minutes",
                  "SEO content at scale — 30 articles/month",
                  "Auto-generate ideas from trending topics",
                ],
                result: "1 month of content in 1 day",
              },
              {
                dept: "HR & People",
                color: "#F59E0B",
                outcomes: [
                  "Auto payroll with GPS attendance",
                  "AI scheduling — zero manual coordination",
                  "Internal knowledge base (Ask Toppie)",
                  "Leave management on autopilot",
                ],
                result: "HR on autopilot",
              },
              {
                dept: "Operations & Logistics",
                color: "#06B6D4",
                outcomes: [
                  "AI trip assignment and GPS tracking",
                  "Inventory prediction — never overstock",
                  "Tenant management automation (U-Stay)",
                  "Auto-generate purchase orders",
                ],
                result: "Zero manual coordination",
              },
              {
                dept: "Leadership & Strategy",
                color: "#EC4899",
                outcomes: [
                  "AI-powered business insights and dashboards",
                  "Competitor analysis in seconds",
                  "Meeting notes and action items auto-generated",
                  "Strategic planning with AI as thought partner",
                ],
                result: "Decide 10x faster",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.dept} delay={i * 80}>
                <div className="card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)]">
                      {item.dept}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {item.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="text-[var(--color-success)] mt-1 shrink-0">✓</span>
                        <span className="text-[14px] text-[var(--color-text-body)]">{o}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="text-[13px] font-bold px-3 py-1.5 rounded-full inline-block"
                    style={{ backgroundColor: `${item.color}12`, color: item.color }}
                  >
                    Result: {item.result}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 3. COURSE FORMATS ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Programs</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Choose Your{" "}
                <span className="gradient-text font-extrabold">Program</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Intensive one-day sprint or a 4-week transformation — both deliver measurable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Intensive Day */}
            <ScrollReveal>
              <div className="card h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-[var(--color-brand)]">
                      Full-Day
                    </span>
                    <span className="text-[13px] text-[var(--color-text-soft)] ml-2">
                      8 hours
                    </span>
                  </div>
                </div>
                <h3 className="heading-md text-[22px] mb-2">Intensive Day</h3>
                <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed mb-5">
                  One full day of hands-on AI immersion. Your team walks out with real tools, real workflows, and immediate productivity gains they can apply the next morning.
                </p>

                {/* What's included */}
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Up to 8 participants per company",
                    "8 hours of hands-on training",
                    "Claude Code setup and configuration",
                    "Build your first internal process with AI",
                    "Create a live landing page before end of day",
                    "Take-home templates and prompt library",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-[var(--color-text-body)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-[28px] font-bold text-[var(--color-text-primary)] mb-1">
                    RM12,000
                  </div>
                  <p className="text-[13px] text-[var(--color-text-soft)] mb-4">
                    per session &middot; up to 8 people
                  </p>
                  <a
                    href={whatsappUrl(
                      "Hi! I'm interested in the AI Masterclass Intensive Day (8 hours, RM12,000). My team has about [X] people."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-[15px]"
                  >
                    Book Intensive Day
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* 4-Week Program */}
            <ScrollReveal delay={120}>
              <div className="card h-full flex flex-col border-[var(--color-brand)] border-2 relative">
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[var(--color-brand)] text-white">
                  Recommended
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-[var(--color-brand)]">
                      4 Weeks
                    </span>
                    <span className="text-[13px] text-[var(--color-text-soft)] ml-2">
                      4 Sessions
                    </span>
                  </div>
                </div>
                <h3 className="heading-md text-[22px] mb-2">Full Transformation</h3>
                <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed mb-5">
                  Four weekly sessions over a month. Each week we train, you implement, we review what you built and set the gold standard. Your company comes out the other side with stronger staff and better processes — guaranteed.
                </p>

                {/* What's included */}
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Up to 8 participants per company",
                    "4 full-day sessions (32 hours total)",
                    "Flexible scheduling — arrange sessions to suit your team",
                    "Weekly check-ins on what your team produced",
                    "Gold standard benchmarking for each process",
                    "Guaranteed efficiency improvement",
                    "Department-by-department AI rollout",
                    "Post-program support and tool access",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-[var(--color-text-body)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-[28px] font-bold text-[var(--color-text-primary)] mb-1">
                    RM32,000
                  </div>
                  <p className="text-[13px] text-[var(--color-text-soft)] mb-4">
                    full 4-week program &middot; up to 8 people
                  </p>
                  <a
                    href={whatsappUrl(
                      "Hi! I'm interested in the Full 4-Week AI Transformation Program (RM32,000). My company is in [industry] with about [X] staff."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-[15px]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book Full Program
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 3B. SYLLABUS ══════════════ */}
      <section className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                Syllabus
              </span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                What You&apos;ll{" "}
                <span className="gradient-text font-extrabold">Take Home</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Every session is designed to produce tangible output — not just knowledge, but working tools and processes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                week: "Session 1",
                title: "AI Foundations & Claude Code Setup",
                color: "#116dff",
                topics: [
                  "How LLMs work — understanding the technology behind AI",
                  "Setting up Claude Code on every participant's machine",
                  "Your first AI-powered internal process (live build)",
                  "Prompt engineering for business — getting consistent, reliable output",
                ],
                takeHome: "A working AI-automated process for your company",
              },
              {
                week: "Session 2",
                title: "Process Optimization & Efficiency",
                color: "#25D366",
                topics: [
                  "Audit your company's workflows — identify the biggest time leaks",
                  "AI-powered document generation (proposals, reports, SOPs)",
                  "Automate repetitive tasks across departments",
                  "Build internal tools that replace manual spreadsheet work",
                ],
                takeHome: "3-5 automated workflows running in your company",
              },
              {
                week: "Session 3",
                title: "Landing Pages & Customer-Facing Tools",
                color: "#8B5CF6",
                topics: [
                  "Build a professional landing page from scratch with AI",
                  "Create customer-facing forms, calculators, and tools",
                  "AI content generation — social posts, ads, email campaigns",
                  "SEO fundamentals — make your pages rank on Google",
                ],
                takeHome: "A deployed landing page + marketing content pipeline",
              },
              {
                week: "Session 4",
                title: "Advanced AI & Company Transformation",
                color: "#EC4899",
                topics: [
                  "Multi-tool mastery — Claude, ChatGPT, Gemini, Copilot, Cursor",
                  "AI for leadership — dashboards, competitor analysis, strategic planning",
                  "WhatsApp automation and lead management",
                  "Building your company's AI roadmap for the next 6 months",
                ],
                takeHome: "A complete AI implementation roadmap + all tools configured",
              },
            ].map((session, i) => (
              <ScrollReveal key={session.week} delay={i * 100}>
                <div className="card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[14px] font-bold"
                      style={{ backgroundColor: session.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: session.color }}>
                        {session.week}
                      </span>
                      <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)] leading-tight">
                        {session.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {session.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="text-[var(--color-brand)] mt-1 shrink-0 text-[12px]">&#9679;</span>
                        <span className="text-[14px] text-[var(--color-text-body)]">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[var(--color-border)] pt-3 mt-auto">
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: session.color }} />
                      <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">
                        Take-home: {session.takeHome}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="text-center text-[14px] text-[var(--color-text-muted)] mt-8 max-w-2xl mx-auto">
              <strong>Intensive Day</strong> covers Sessions 1-2 in a single 8-hour sprint. <strong>Full Transformation</strong> covers all 4 sessions over 4 weeks with implementation reviews between each session.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 3C. REQUIREMENTS ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="pill mb-4">Requirements</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                What to Bring
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Come prepared and you&apos;ll leave with working tools on day one.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="card text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-6 h-6 text-[var(--color-brand)]" />
                </div>
                <h3 className="heading-md text-[17px] mb-2">Your Own Laptop</h3>
                <p className="text-[var(--color-text-body)] text-[14px] leading-relaxed">
                  Bring your own laptop with minimum 8GB RAM. Windows, Mac, or Linux — all work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-[var(--color-brand)]" />
                </div>
                <h3 className="heading-md text-[17px] mb-2">Claude Subscription</h3>
                <p className="text-[var(--color-text-body)] text-[14px] leading-relaxed">
                  An active Claude Pro or Team subscription. We&apos;ll help you set up if you don&apos;t have one yet.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-6 h-6 text-[var(--color-brand)]" />
                </div>
                <h3 className="heading-md text-[17px] mb-2">Microphone</h3>
                <p className="text-[var(--color-text-body)] text-[14px] leading-relaxed">
                  A working microphone (built-in or external) for voice-to-AI workflows and interactive sessions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 4. WHY TRAIN WITH US ══════════════ */}
      <section className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Why Us</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Why Train With{" "}
                <span className="gradient-text">Utopia</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                We don&apos;t teach AI from slides. We teach it from running
                real businesses.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[var(--color-brand)]" />
                    </div>
                    <h3 className="heading-md text-[17px] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ 5. HOW IT WORKS ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)] bg-dotted">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Process</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                How It Works
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                From first call to full AI adoption in four simple steps.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-0">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 100}>
                  <div className="flex gap-5 relative">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-[var(--color-brand)] flex items-center justify-center shrink-0 relative z-10">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="w-[2px] flex-1 bg-[var(--color-border)] my-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-10">
                      <span className="text-[12px] font-semibold text-[var(--color-brand)] uppercase tracking-wider">
                        Step {i + 1}
                      </span>
                      <h3 className="heading-md text-[17px] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ 6. RESULTS ══════════════ */}
      <section className="bg-[#0f1729]">
        <div className="section-padding">
          <div className="section-inner">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/10 text-white/90 border border-white/10 mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  Real Results
                </span>
                <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight leading-tight text-white mb-4">
                  What companies achieved{" "}
                  <span className="text-[var(--color-brand-light)]">
                    after training
                  </span>
                </h2>
                <p className="text-[#94a3b8] max-w-lg mx-auto text-[16px] leading-relaxed">
                  Measured results from our own businesses and companies we&apos;ve trained — the same AI systems taught in the masterclass.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                {[
                  { stat: "73%", label: "Reduction in manual work", desc: "Across finance, HR, and operations departments" },
                  { stat: "4.2x", label: "Faster document output", desc: "Proposals, SOPs, and reports generated with AI" },
                  { stat: "RM3M+", label: "Cost savings generated", desc: "Across 35+ companies using AI daily" },
                  { stat: "28 hrs", label: "Saved per team per week", desc: "Average across trained companies after 30 days" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center p-5 rounded-2xl border border-white/10 bg-white/[0.05]"
                  >
                    <div className="font-bold text-[32px] md:text-[36px] text-[var(--color-brand-light)] mb-1 tracking-tight">
                      {item.stat}
                    </div>
                    <div className="font-semibold text-white text-[14px] mb-1">
                      {item.label}
                    </div>
                    <p className="text-[#b0bec5] text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { company: "Property Management Co.", before: "Manual tenant records in Excel", after: "AI-powered portal — 785 units managed by 3 staff", weeks: "4 weeks" },
                  { company: "Fleet & Logistics", before: "Paper trip sheets, manual dispatch", after: "AI trip assignment + GPS tracking for 407 vehicles", weeks: "3 weeks" },
                  { company: "Accounting Firm", before: "2 days per bank reconciliation", after: "3-minute auto-reconciliation with 99.2% accuracy", weeks: "1 week" },
                ].map((item) => (
                  <div
                    key={item.company}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.05]"
                  >
                    <div className="text-[13px] font-semibold text-[var(--color-brand-light)] mb-3">{item.company}</div>
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-red-400 text-[12px] mt-0.5 shrink-0 font-bold">BEFORE</span>
                      <span className="text-[#94a3b8] text-[13px]">{item.before}</span>
                    </div>
                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-emerald-400 text-[12px] mt-0.5 shrink-0 font-bold">AFTER</span>
                      <span className="text-white text-[13px]">{item.after}</span>
                    </div>
                    <div className="text-[12px] text-[#64748b]">Achieved in {item.weeks}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 7. CTA FOOTER ══════════════ */}
      <section className="relative gradient-cta-band overflow-hidden">
        <DashedGrid />
        <div className="relative z-10 section-padding !py-20 md:!py-28">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-display text-[28px] md:text-[44px] mb-4">
                Ready to Transform{" "}
                <span className="gradient-text">Your Team?</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto text-[16px] leading-relaxed">
                One WhatsApp message to start. We&apos;ll assess your
                team&apos;s AI readiness and recommend the right program — no
                commitment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={MASTERCLASS_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-10 py-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us — Book a Session
                </a>
                <a
                  href={CALENDAR_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base px-8 py-4"
                >
                  <CalendarDays className="w-5 h-5" />
                  Ask About Our Calendar
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[13px] text-[var(--color-text-soft)]">
                <span>On-site at your office</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-text-soft)] hidden sm:block" />
                <span>Hands-on, not theory</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-text-soft)] hidden sm:block" />
                <span>Post-training support included</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
