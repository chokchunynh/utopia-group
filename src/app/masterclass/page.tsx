"use client";

import { whatsappUrl, OPERATOR_RESULTS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DashedGrid from "@/components/ui/DashedGrid";
import {
  MessageSquare,
  Code2,
  TrendingUp,
  Calculator,
  Video,
  Workflow,
  Clock,
  Users,
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
    icon: MessageSquare,
    title: "Claude AI for Business Communication",
    body: "Draft emails, proposals, and SOPs in seconds. Turn vague instructions into clear business documents.",
  },
  {
    icon: Code2,
    title: "Claude Code for Development Teams",
    body: "Ship features 5x faster with Claude Code, Copilot, and Cursor. Automated testing, code reviews, and AI pair programming.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Sales & WhatsApp Automation",
    body: "Auto-reply leads, qualify prospects, and close deals 24/7 — the same system our own businesses use.",
  },
  {
    icon: Calculator,
    title: "AI for Finance & Accounting",
    body: "Bank reconciliation, invoice matching, bill extraction. Tools like SlipMatch and GetBill in action.",
  },
  {
    icon: Video,
    title: "AI Content & Marketing",
    body: "Generate a month of social content in one sitting. AI video ads, copywriting, and SEO at scale with AutoViral.",
  },
  {
    icon: Workflow,
    title: "All Major AI Tools — Claude, Gemini, ChatGPT, Grok & More",
    body: "We teach every major AI tool: Claude, Gemini, ChatGPT, Grok, Copilot, Cursor, Midjourney. Your team masters the full ecosystem.",
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
                AI Training Program
              </span>
              <h1 className="text-[32px] md:text-[56px] font-bold tracking-tight leading-[1.1] text-white mb-4">
                Utopia AI{" "}
                <span className="gradient-text-hero font-extrabold">
                  Masterclass
                </span>
              </h1>
              <p className="text-[18px] md:text-[22px] font-semibold text-white/90 mb-4 max-w-2xl mx-auto leading-snug">
                AI Training From A Company That Uses It Daily
              </p>
              <p className="text-[#94a3b8] max-w-xl mx-auto text-[16px] leading-relaxed mb-10">
                We saved RM3M+ with AI across our own 35+ companies. Now we
                teach your team to do the same.
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
              <span className="pill mb-4">Formats</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Choose Your Format
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Whether you need a quick introduction or a full transformation,
                we have you covered.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Crash Course */}
            <ScrollReveal>
              <div className="card h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-[var(--color-brand)]">
                      Half-day
                    </span>
                    <span className="text-[13px] text-[var(--color-text-soft)] ml-2">
                      4 hours
                    </span>
                  </div>
                </div>
                <h3 className="heading-md text-[22px] mb-2">Crash Course</h3>
                <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed mb-6 flex-1">
                  Quick intro to AI tools, hands-on exercises with Claude and
                  Claude Code, and immediate productivity gains your team can
                  apply the same afternoon.
                </p>
                <div className="mt-auto">
                  <div className="text-[24px] font-bold text-[var(--color-text-primary)] mb-1">
                    From RM5,000
                  </div>
                  <p className="text-[13px] text-[var(--color-text-soft)] mb-4">
                    per session
                  </p>
                  <a
                    href={whatsappUrl(
                      "Hi! I'm interested in the AI Masterclass Crash Course (half-day, RM5,000). My team has about [X] people."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-[15px]"
                  >
                    Book Crash Course
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Full Program */}
            <ScrollReveal delay={120}>
              <div className="card h-full flex flex-col border-[var(--color-brand)] border-2 relative">
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[var(--color-brand)] text-white">
                  Recommended
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-[var(--color-brand)]">
                      2 Weeks
                    </span>
                    <span className="text-[13px] text-[var(--color-text-soft)] ml-2">
                      On-site
                    </span>
                  </div>
                </div>
                <h3 className="heading-md text-[22px] mb-2">Full Program</h3>
                <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed mb-6 flex-1">
                  Deep implementation across your organization.
                  Department-by-department rollout, custom AI tools built for
                  your workflows, and hands-on training until every team member
                  is confident.
                </p>
                <div className="mt-auto">
                  <div className="text-[24px] font-bold text-[var(--color-text-primary)] mb-1">
                    From RM25,000
                  </div>
                  <p className="text-[13px] text-[var(--color-text-soft)] mb-4">
                    full program
                  </p>
                  <a
                    href={whatsappUrl(
                      "Hi! I'm interested in the Full AI Masterclass Program (2 weeks, RM25,000). My company is in [industry] with about [X] staff."
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
                  Proven Results
                </span>
                <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight leading-tight text-white mb-4">
                  Results from companies{" "}
                  <span className="text-[var(--color-brand-light)]">
                    we operate
                  </span>
                </h2>
                <p className="text-[#94a3b8] max-w-lg mx-auto text-[16px] leading-relaxed">
                  These aren&apos;t client testimonials. These are results from
                  our own businesses — the same AI systems we teach in the
                  masterclass.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                {OPERATOR_RESULTS.map((result) => (
                  <div
                    key={result.industry}
                    className="text-center p-6 rounded-3xl border border-white/10 bg-white/[0.05]"
                  >
                    <div className="font-bold text-3xl text-[var(--color-brand-light)] mb-2 tracking-tight">
                      {result.stat}
                    </div>
                    <div className="font-semibold text-white text-[15px] mb-1">
                      {result.industry}
                    </div>
                    <p className="text-[#b0bec5] text-[14px] leading-relaxed">
                      {result.description}
                    </p>
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
