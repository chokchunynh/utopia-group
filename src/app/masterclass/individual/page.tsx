"use client";

import { whatsappUrl, INDIVIDUAL_PRICING } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DashedGrid from "@/components/ui/DashedGrid";
import {
  Terminal,
  MessageSquare,
  Search,
  Code,
  Image,
  Workflow,
  Check,
  GraduationCap,
  Briefcase,
  Rocket,
  Sparkles,
  CalendarDays,
  ArrowRight,
  Users,
  Award,
  Clock,
  Laptop,
  Brain,
  CreditCard,
  Download,
  Monitor,
} from "lucide-react";

const INDIVIDUAL_WA = whatsappUrl(
  `Hi! I want to join the individual AI Masterclass. RM${INDIVIDUAL_PRICING.pricePerSession}/session x ${INDIVIDUAL_PRICING.sessions} sessions.`
);
const SCHEDULE_WA = whatsappUrl(
  "Hi! I'd like to check the schedule for the individual AI Masterclass."
);

/* ─── Section 2: What You'll Master ──────────────────────── */
const MASTER_CARDS = [
  {
    icon: Terminal,
    title: "Claude Code",
    body: "Write code with AI. Build full apps with prompts. Deploy to production.",
  },
  {
    icon: MessageSquare,
    title: "ChatGPT / GPT",
    body: "Automate daily tasks. Draft emails, reports, analysis in seconds.",
  },
  {
    icon: Search,
    title: "Google Gemini",
    body: "Research, summarize docs, analyze data. Google's most capable AI.",
  },
  {
    icon: Code,
    title: "GitHub Copilot / Cursor",
    body: "AI-assisted coding. Autocomplete, refactor, debug instantly.",
  },
  {
    icon: Image,
    title: "Image AI (Midjourney, DALL-E)",
    body: "Generate marketing images, product photos, social media visuals.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Connect your tools. Automate repetitive work. Save 4-6x time.",
  },
] as const;

/* ─── Section 3: The Promise ─────────────────────────────── */
const PROMISE_STATS = [
  {
    number: "4-6x",
    label: "Productivity Improvement",
    detail: "Do in 1 hour what used to take 6",
  },
  {
    number: "90%",
    label: "Fewer Errors",
    detail: "AI catches mistakes humans miss",
  },
  {
    number: `RM4,000-5,000`,
    label: "Salary Value Added",
    detail: "Skills that make you worth more",
  },
] as const;

/* ─── Section 4: How It Works ────────────────────────────── */
const STEPS = [
  {
    icon: CreditCard,
    title: "Purchase 8-Session Pack",
    body: `RM${INDIVIDUAL_PRICING.totalPrice.toLocaleString()} total (RM${INDIVIDUAL_PRICING.pricePerSession} x ${INDIVIDUAL_PRICING.sessions}). One payment, all sessions included.`,
  },
  {
    icon: Download,
    title: "Complete Prerequisites",
    body: "Set up GitHub, Vercel, Supabase accounts. Install VS Code + Claude Code.",
  },
  {
    icon: Users,
    title: "Join Weekly Sessions",
    body: "2 hours each week with our AI team. Hands-on, not lectures.",
  },
  {
    icon: Award,
    title: "Build & Level Up",
    body: "Deploy real projects. Build your portfolio. Get certified.",
  },
] as const;

/* ─── Section 5: Prerequisites ───────────────────────────── */
const PREREQ_GROUPS = [
  {
    category: "Accounts",
    items: [
      "GitHub Free",
      "Vercel Free (via GitHub)",
      "Supabase Free (via GitHub)",
    ],
  },
  {
    category: "Subscription",
    items: ["Claude Pro ($20/month minimum)"],
  },
  {
    category: "Software",
    items: [
      "VS Code",
      "Claude Code VS Code Extension",
      "Wispr Flow (free voice-to-text)",
    ],
  },
  {
    category: "Hardware",
    items: ["Laptop (Mac preferred, Windows/Linux OK)", "Charger"],
  },
  {
    category: "Mindset",
    items: ["No coding experience needed. Come ready to build."],
  },
] as const;

/* ─── Section 6: Pricing Details ─────────────────────────── */
const PRICING_FEATURES = [
  "2 hours per session",
  "Weekly schedule",
  "Hands-on with real projects",
  "Small group (max 10)",
  "Certificate on completion",
] as const;

/* ─── Section 7: Who This Is For ─────────────────────────── */
const AUDIENCE_CARDS = [
  {
    icon: GraduationCap,
    title: "Fresh Graduates",
    body: "Stand out from every other applicant. Show employers you can build with AI.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    body: "Get the raise you deserve. Do what your senior does — faster and better.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    body: "Build your product without hiring a dev team. Launch in weeks, not months.",
  },
] as const;

/* ─── WhatsApp SVG Icon ──────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function IndividualMasterclassPage() {
  return (
    <main>
      {/* ══════════════ 1. HERO ══════════════ */}
      <section className="bg-[#0f1729] relative overflow-hidden">
        <div
          className="bg-image-hero"
          style={{ backgroundImage: "url('/hero/bg-individual.png')" }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/40" />
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(17,109,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 section-padding !pt-28 !pb-16 md:!pt-36 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/10 text-white/90 border border-white/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Individual AI Training
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-display text-[28px] md:text-[52px] text-white mb-5 max-w-3xl mx-auto">
                Learn AI From The People Who{" "}
                <span className="gradient-text-hero">
                  Actually Use It Daily
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-[17px] md:text-[20px] text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed mb-10">
                Sit with our coders. Watch how we build. Leave with skills that
                add RM4,000-5,000 to your salary.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href={INDIVIDUAL_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Join Next Session
                </a>
                <a
                  href="#schedule"
                  className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!bg-white/10 text-base px-8 py-4"
                >
                  <CalendarDays className="w-5 h-5" />
                  View Schedule
                </a>
              </div>
              <p className="text-[14px] text-[#94a3b8]">
                RM{INDIVIDUAL_PRICING.pricePerSession}/session x{" "}
                {INDIVIDUAL_PRICING.sessions} sessions | {INDIVIDUAL_PRICING.sessionDuration} each | {INDIVIDUAL_PRICING.frequency}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 2. WHAT YOU'LL MASTER ══════════════ */}
      <section className="section-padding bg-white bg-dotted">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Curriculum</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                What You&apos;ll{" "}
                <span className="gradient-text">Master</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                6 core AI skills across 8 hands-on sessions. Every tool the
                industry is hiring for.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {MASTER_CARDS.map((card, i) => {
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

      {/* ══════════════ 3. THE PROMISE ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">The Promise</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                What AI Skills{" "}
                <span className="gradient-text">Actually Get You</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PROMISE_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <div className="text-center">
                  <div className="gradient-text text-[48px] md:text-[56px] font-extrabold tracking-tight leading-none mb-3">
                    {stat.number}
                  </div>
                  <h3 className="heading-md text-[18px] mb-2">{stat.label}</h3>
                  <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 4. HOW IT WORKS ══════════════ */}
      <section
        id="schedule"
        className="section-padding bg-white bg-dotted"
      >
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Process</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                How It Works
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                From sign-up to certification in 8 weeks.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-0">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 100}>
                  <div className="flex gap-5 relative">
                    {/* Timeline */}
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

      {/* ══════════════ 5. PREREQUISITES ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Before You Start</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Prerequisites
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Everything you need ready before your first session.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card max-w-2xl mx-auto !p-8">
              {PREREQ_GROUPS.map((group, gi) => (
                <div
                  key={group.category}
                  className={gi > 0 ? "mt-6 pt-6 border-t border-[var(--color-border)]" : ""}
                >
                  <h3 className="heading-md text-[16px] mb-3 flex items-center gap-2">
                    {group.category === "Accounts" && (
                      <Monitor className="w-4 h-4 text-[var(--color-brand)]" />
                    )}
                    {group.category === "Subscription" && (
                      <CreditCard className="w-4 h-4 text-[var(--color-brand)]" />
                    )}
                    {group.category === "Software" && (
                      <Download className="w-4 h-4 text-[var(--color-brand)]" />
                    )}
                    {group.category === "Hardware" && (
                      <Laptop className="w-4 h-4 text-[var(--color-brand)]" />
                    )}
                    {group.category === "Mindset" && (
                      <Brain className="w-4 h-4 text-[var(--color-brand)]" />
                    )}
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] text-[var(--color-text-body)] leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 6. PRICING CARD ══════════════ */}
      <section className="section-padding bg-white bg-dotted">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Investment</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Simple{" "}
                <span className="gradient-text">Pricing</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card max-w-md mx-auto !p-8 border-2 border-[var(--color-brand)] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full text-[12px] font-semibold bg-[var(--color-brand)] text-white whitespace-nowrap">
                8-Session Pack
              </span>

              <div className="text-center mb-6 pt-2">
                <h3 className="heading-md text-[20px] mb-4">
                  8-Session AI Masterclass
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[48px] md:text-[56px] font-extrabold tracking-tight text-[var(--color-text-primary)] leading-none">
                    RM{INDIVIDUAL_PRICING.pricePerSession}
                  </span>
                  <span className="text-[16px] text-[var(--color-text-muted)]">
                    /session
                  </span>
                </div>
                <p className="text-[15px] text-[var(--color-text-body)] mt-2">
                  RM{INDIVIDUAL_PRICING.totalPrice.toLocaleString()} total for{" "}
                  {INDIVIDUAL_PRICING.sessions} sessions
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {PRICING_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[15px] text-[var(--color-text-body)]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[var(--color-brand)]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={INDIVIDUAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-[15px] py-4"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Reserve Your Spot
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-center text-[14px] text-[var(--color-text-soft)] mt-6">
              Next session starts soon. Limited spots.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ 7. WHO THIS IS FOR ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">For You</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Who This Is{" "}
                <span className="gradient-text">For</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {AUDIENCE_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={i * 100}>
                  <div className="card h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[var(--color-brand)]" />
                    </div>
                    <h3 className="heading-md text-[18px] mb-2">
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

      {/* ══════════════ 8. CTA FOOTER ══════════════ */}
      <section className="relative gradient-cta-band overflow-hidden">
        <DashedGrid />
        <div className="relative z-10 section-padding !py-20 md:!py-28">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-display text-[28px] md:text-[44px] mb-4">
                Ready to{" "}
                <span className="gradient-text">Level Up?</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto text-[16px] leading-relaxed">
                Your competitors are already learning AI. Don&apos;t get left
                behind.
              </p>
              <a
                href={INDIVIDUAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-10 py-4"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Join the Next Session
              </a>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[13px] text-[var(--color-text-soft)]">
                <span>
                  RM{INDIVIDUAL_PRICING.pricePerSession}/session x{" "}
                  {INDIVIDUAL_PRICING.sessions}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-text-soft)] hidden sm:block" />
                <span>Small groups</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-text-soft)] hidden sm:block" />
                <span>Hands-on</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
