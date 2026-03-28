"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whatsappUrl } from "@/lib/constants";
import {
  Sparkles,
  Building2,
  TrendingUp,
  BookOpen,
  Clock,
  Cpu,
  GraduationCap,
  HeartPulse,
  PartyPopper,
  Rocket,
  MapPin,
  Briefcase,
  ChevronDown,
  Mail,
  Users,
} from "lucide-react";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────────── */

const WHY_CARDS = [
  {
    icon: Sparkles,
    title: "AI-First Culture",
    description:
      "Every team uses AI daily. We don't talk about AI — we ship it. You'll work with cutting-edge models, not PowerPoints.",
  },
  {
    icon: Building2,
    title: "35+ Real Businesses",
    description:
      "Our AI runs across 35+ companies with 400+ staff. You'll see your work impact real operations, not just demos.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunity",
    description:
      "We're scaling fast across Southeast Asia. Early joiners get outsized responsibility and career trajectory.",
  },
  {
    icon: BookOpen,
    title: "Learning Environment",
    description:
      "Dedicated learning budget, internal AI workshops, and direct access to the latest tools and research.",
  },
] as const;

const POSITIONS = [
  {
    title: "AI Engineer",
    department: "Engineering",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Build and deploy AI models, LLM pipelines, and intelligent automation across our portfolio of 35+ businesses. You'll work with GPT-4, Claude, and custom fine-tuned models.",
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Ship production web apps using Next.js, TypeScript, and Supabase. You'll build dashboards, SaaS products, and AI-powered tools used by real businesses daily.",
  },
  {
    title: "AI Sales Specialist",
    department: "Sales",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Help Malaysian businesses understand and adopt AI. You'll demo our tools, run consultations, and close deals. No cold-calling — leads come to us.",
  },
  {
    title: "Content Strategist",
    department: "Marketing",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Create AI-focused content for our brands — blogs, social media, video scripts, and SEO pages. Bilingual (BM/EN) is a strong plus.",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Coordinate AI implementation across our 35+ companies. You'll manage timelines, client onboarding, and cross-team delivery.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Design beautiful, functional interfaces for AI-powered products. Figma proficiency required. You'll own the design system across multiple products.",
  },
] as const;

const BENEFITS = [
  { icon: Clock, title: "Flexible Hours", description: "Results matter, not clock-in time" },
  { icon: Cpu, title: "AI Tools Provided", description: "Full access to GPT-4, Claude & more" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses & conferences" },
  { icon: HeartPulse, title: "Health Insurance", description: "Medical & dental coverage for you" },
  { icon: PartyPopper, title: "Team Events", description: "Monthly team activities & retreats" },
  { icon: Rocket, title: "Career Growth", description: "Fast-track promotion for high performers" },
] as const;

const CAREERS_WA = whatsappUrl("Hi! I'm interested in joining Utopia Group's AI team.");

/* ── Components ───────────────────────────────────────────────── */

function PositionCard({
  position,
}: {
  position: (typeof POSITIONS)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <h3 className="heading-md text-lg mb-1">{position.title}</h3>
          <div className="flex flex-wrap gap-2 text-[13px]">
            <span className="pill">
              <Briefcase className="w-3.5 h-3.5" />
              {position.department}
            </span>
            <span className="pill">
              <MapPin className="w-3.5 h-3.5" />
              {position.location}
            </span>
            <span className="pill">{position.type}</span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 mt-1 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
          <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-4">
            {position.description}
          </p>
          <a
            href={whatsappUrl(
              `Hi! I'm interested in the ${position.title} position at Utopia Group.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Apply via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function CareerPage() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-image-hero" style={{ backgroundImage: "url('/images/photos/team-working.webp')" }} />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/35" />
        <div className="relative z-10 section-padding !pt-32 md:!pt-44 !pb-16 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/15 text-white/90 border border-white/10 mb-6">
                <Users className="w-3.5 h-3.5" />
                We&apos;re Hiring
              </span>
              <h1 className="text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.1] text-white mb-5 max-w-3xl mx-auto">
                Build the Future of{" "}
                <span className="gradient-text-hero font-extrabold">AI in Malaysia</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Join 400+ people across 35+ companies building AI products that
                real businesses use every day. We&apos;re not a lab — we&apos;re
                operators, and we ship.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── About Us Banner ─────────────────────────────────── */}
      <section className="section-padding !py-8 md:!py-10 bg-[var(--color-bg-muted)]">
        <div className="section-inner text-center">
          <p className="text-[14px] text-[var(--color-text-muted)]">
            35+ companies · 173 business units · 400+ staff · RM130M+ revenue ·{" "}
            <Link href="/about" className="text-[var(--color-brand)] font-semibold hover:underline">
              Learn more about us →
            </Link>
          </p>
        </div>
      </section>

      {/* ─── Open Positions ───────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-inner max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-lg text-[26px] md:text-[38px] mb-3">
                Open Positions
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-base">
                All roles are based in Kuala Lumpur with flexible arrangements.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {POSITIONS.map((pos, i) => (
              <ScrollReveal key={pos.title} delay={i * 80}>
                <PositionCard position={pos} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-lg text-[26px] md:text-[38px] mb-3">
                Perks &amp; Benefits
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {BENEFITS.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div className="card-flat text-center py-6 px-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-3">
                    <b.icon className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)] mb-1">
                    {b.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Apply CTA ────────────────────────────────────────── */}
      <section className="gradient-cta-band">
        <div className="section-padding !py-20 md:!py-28">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-display text-[28px] md:text-[44px] mb-4">
                Ready to join?
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto text-base">
                Send us a message on WhatsApp or email your resume. We respond
                within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <a
                  href={CAREERS_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="mailto:careers@utopiagroup.com.my"
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  careers@utopiagroup.com.my
                </a>
              </div>
              <Link
                href="/about#team"
                className="text-[var(--color-brand)] text-sm font-semibold hover:underline"
              >
                Meet the team →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
