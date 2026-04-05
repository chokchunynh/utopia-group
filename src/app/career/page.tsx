"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whatsappUrl } from "@/lib/constants";
import {
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
  Zap,
} from "lucide-react";
import Link from "next/link";

/* ── Types ────────────────────────────────────────────────────── */

type Division = "Utopia Business" | "Utopia Intelligence";
type Level = "Executive" | "Non-Executive";
type FilterState = "All" | Division;

interface Position {
  title: string;
  division: Division;
  level: Level;
  company: string;
  location: string;
  type: string;
  description: string;
}

/* ── Data ─────────────────────────────────────────────────────── */

const WHY_CARDS = [
  {
    icon: Zap,
    title: "AI-First Culture",
    description:
      "Every team uses AI daily. We don't talk about AI — we ship it. You'll work with cutting-edge models, not PowerPoints.",
  },
  {
    icon: Building2,
    title: "35+ Real Businesses",
    description:
      "Our operations span 35+ companies with 400+ staff. You'll see your work impact real operations, not just demos.",
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

const POSITIONS: Position[] = [
  /* ── Utopia Intelligence ── */
  {
    title: "Software Developer",
    division: "Utopia Intelligence",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Build and maintain web applications, dashboards, and internal tools powering 35+ businesses. Work with Next.js, TypeScript, Supabase, and AI APIs in a fast-moving product environment.",
  },
  {
    title: "Company Secretary",
    division: "Utopia Intelligence",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Handle statutory compliance, board meetings, corporate filings, and regulatory submissions for entities within the Utopia Group portfolio.",
  },
  {
    title: "HR Business Partner",
    division: "Utopia Intelligence",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Partner with business units across 35+ companies on talent acquisition, performance management, and HR operations supporting 400+ staff.",
  },
  {
    title: "Senior Accountant",
    division: "Utopia Intelligence",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Manage financial reporting, accounts payable/receivable, month-end close, and compliance across multiple business entities in the group.",
  },
  /* ── Utopia Business — Executive ── */
  {
    title: "Indoor Sales",
    division: "Utopia Business",
    level: "Executive",
    company: "Utopia Group",
    location: "Georgetown, Penang & Kuala Lumpur",
    type: "Full-time",
    description:
      "Drive sales for Utopia's service businesses — aircond, medical equipment, co-living, and more. Handle inbound leads, customer consultations, and closing.",
  },
  {
    title: "Customer Service",
    division: "Utopia Business",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Support customers across Utopia's businesses — handling inquiries, complaints, and service coordination via WhatsApp, phone, and email.",
  },
  {
    title: "Operation Efficiency",
    division: "Utopia Business",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Analyse and streamline operations across business units. Identify bottlenecks, implement SOPs, and coordinate cross-team workflow improvements.",
  },
  {
    title: "Telemarketer",
    division: "Utopia Business",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Reach out to potential customers for our service businesses — aircond, renovation, and medical equipment rentals. Script-supported with warm leads provided.",
  },
  {
    title: "Quantity Surveyor",
    division: "Utopia Business",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Prepare cost estimates, BOQ, and manage procurement for renovation and construction projects across Encik Beku and Reno.my portfolios.",
  },
  {
    title: "Tender Executive",
    division: "Utopia Business",
    level: "Executive",
    company: "Utopia Group",
    location: "Kuala Lumpur",
    type: "Full-time",
    description:
      "Prepare and submit government and corporate tenders for services including medical equipment, renovation, transportation, and construction.",
  },
  /* ── Utopia Business — Non-Executive ── */
  {
    title: "Aircond Technician cum Driver",
    division: "Utopia Business",
    level: "Non-Executive",
    company: "Encik Beku Aircond Sdn Bhd",
    location: "Shah Alam · Butterworth Penang · Georgetown Penang · Johor Jaya JB",
    type: "Contract (1 year)",
    description:
      "Install, maintain, and repair air conditioning systems at customer sites. Drive to job sites, communicate with customers, maintain service records, and handle emergency repairs. May assist with related duties assigned by management.",
  },
  {
    title: "Service Crew",
    division: "Utopia Business",
    level: "Non-Executive",
    company: "Mixue",
    location: "SS19 Subang & Desa Petaling, KL",
    type: "Full-time · Contract (3 months, renewable)",
    description:
      "Prepare beverages and desserts — fruit tea, milk tea, and ice cream. Deliver fast and accurate customer service, maintain outlet cleanliness, and work closely with the team for smooth daily operations.",
  },
  {
    title: "Retail Assistant",
    division: "Utopia Business",
    level: "Non-Executive",
    company: "Rev Move Sdn Bhd",
    location: "Bukit Bintang, KL",
    type: "Full-time",
    description:
      "Promote motorcycle rental packages, handle customer inquiries, and manage social media. Maintain customer records, oversee vehicle handovers, ensure shop cleanliness, and support daily operations.",
  },
  {
    title: "Live Host (TikTok / Shopee)",
    division: "Utopia Business",
    level: "Non-Executive",
    company: "Mandiri Lagenda Sdn Bhd",
    location: "Kuala Lumpur",
    type: "Contract (3 months, renewable)",
    description:
      "Conduct engaging live streams on TikTok and Shopee to promote products, demonstrate features, and interact with viewers in real time. Drive sales through active audience engagement and monitor live session metrics to improve performance.",
  },
];

const BENEFITS = [
  { icon: Clock, title: "Flexible Hours", description: "Results matter, not clock-in time" },
  { icon: Cpu, title: "AI Tools Provided", description: "Full access to GPT-4, Claude & more" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses & conferences" },
  { icon: HeartPulse, title: "Health Insurance", description: "Medical & dental coverage for you" },
  { icon: PartyPopper, title: "Team Events", description: "Monthly team activities & retreats" },
  { icon: Rocket, title: "Career Growth", description: "Fast-track promotion for high performers" },
] as const;

const CAREERS_WA = whatsappUrl("Hi! I'm interested in joining Utopia Group.");

/* ── Division pill styles ─────────────────────────────────────── */

const DIVISION_STYLES: Record<Division, string> = {
  "Utopia Intelligence":
    "bg-violet-50 text-violet-700 border border-violet-200",
  "Utopia Business":
    "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

/* ── Components ───────────────────────────────────────────────── */

function DivisionBadge({ division }: { division: Division }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${DIVISION_STYLES[division]}`}
    >
      {division}
    </span>
  );
}

function PositionCard({ position }: { position: Position }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="heading-md text-lg">{position.title}</h3>
            <DivisionBadge division={position.division} />
          </div>
          <div className="flex flex-wrap gap-2 text-[13px]">
            {position.company !== "Utopia Group" && (
              <span className="pill">
                <Building2 className="w-3.5 h-3.5" />
                {position.company}
              </span>
            )}
            <span className="pill">
              <Briefcase className="w-3.5 h-3.5" />
              {position.level}
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
              `Hi! I'm interested in the ${position.title} position at ${position.company}.`
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
  const [filter, setFilter] = useState<FilterState>("All");

  const filtered =
    filter === "All" ? POSITIONS : POSITIONS.filter((p) => p.division === filter);

  const tabs: FilterState[] = ["All", "Utopia Business", "Utopia Intelligence"];

  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-image-hero" style={{ backgroundImage: "url('/images/team/staff/masquerade-stage-group.webp')" }} />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/50" />
        <div className="relative z-10 section-padding !pt-32 md:!pt-44 !pb-16 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/15 text-white/90 border border-white/10 mb-6">
                <Users className="w-3.5 h-3.5" />
                We&apos;re Hiring
              </span>
              <h1 className="text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.1] text-white mb-5 max-w-3xl mx-auto">
                Grow With Us Across{" "}
                <span className="gradient-text-hero font-extrabold">35+ Businesses</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                From AI engineers to aircond technicians — we&apos;re building the teams
                that power Malaysia&apos;s fastest-growing group of businesses.
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

      {/* ─── Two Divisions ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="pill mb-4 inline-block">Our Two Divisions</span>
              <h2 className="heading-lg text-[26px] md:text-[38px] mb-3">
                Find where you{" "}
                <span className="gradient-text font-extrabold">fit best</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                Utopia runs two divisions under one roof — each with its own culture, team, and career path.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="card h-full border-violet-200 bg-violet-50/30">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-bold text-[18px] text-[var(--color-text-primary)] mb-2">
                  Utopia Intelligence
                </h3>
                <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                  Our back office and tech arm. Software developers, AI engineers, accountants, HR, and company secretaries — the people who make the whole group run.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="card h-full border-emerald-200 bg-emerald-50/30">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-[18px] text-[var(--color-text-primary)] mb-2">
                  Utopia Business
                </h3>
                <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                  Our operations arm. Sales, customer service, field technicians, retail, and live hosts — the people who serve our customers every day across 35+ businesses.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Life at Utopia ─────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="pill mb-4 inline-block">Life at Utopia</span>
              <h2 className="heading-lg text-[26px] md:text-[38px] mb-3">
                More than just{" "}
                <span className="gradient-text font-extrabold">a workplace</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                Team dinners, sports nights, birthday celebrations, and building things that matter — together.
              </p>
            </div>
          </ScrollReveal>
          {/* Wide team group photo */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-4">
              <div className="team-photo aspect-[21/9] border border-[var(--color-border)] overflow-hidden">
                <Image src="/images/team/staff/group-photo-fun.webp" alt="Full Utopia Group team — fun group photo with peace signs" width={1200} height={500} className="w-full h-full object-cover" unoptimized />
              </div>
            </div>
          </ScrollReveal>

          {/* Mix of team life — real staff events */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/team/staff/masquerade-stage-costumes.webp", alt: "Utopia Masquerade Night — team in costumes" },
              { src: "/images/team/staff/team-dinner-banquet.webp", alt: "Team dinner at banquet hall" },
              { src: "/images/team/staff/team-birthday-celebration.webp", alt: "Team birthday celebration" },
              { src: "/images/team/staff/awards-ceremony.webp", alt: "Staff award ceremony on stage" },
              { src: "/images/team/staff/team-durian-outing.webp", alt: "Team durian outing" },
              { src: "/images/team/staff/team-durian-closeup.webp", alt: "Team enjoying durian together" },
              { src: "/images/team/staff/company-dinner-buffet.webp", alt: "Staff at company dinner buffet" },
              { src: "/images/team/staff/team-meeting-presentation.webp", alt: "Team meeting and presentation" },
            ].map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 60}>
                <div className="team-photo aspect-square border border-[var(--color-border)]">
                  <Image src={photo.src} alt={photo.alt} width={400} height={400} className="w-full h-full object-cover" unoptimized />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Open Positions ───────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-inner max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="heading-lg text-[26px] md:text-[38px] mb-3">
                Open Positions
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-base">
                {POSITIONS.length} roles across our two divisions. Filter to find yours.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-150 ${
                    filter === tab
                      ? "bg-[var(--color-brand)] text-white shadow-sm"
                      : "bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {tab}
                  {tab === "All" && (
                    <span className="ml-1.5 opacity-70">({POSITIONS.length})</span>
                  )}
                  {tab !== "All" && (
                    <span className="ml-1.5 opacity-70">
                      ({POSITIONS.filter((p) => p.division === tab).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {filtered.map((pos, i) => (
              <ScrollReveal key={`${pos.title}-${pos.company}`} delay={i * 60}>
                <PositionCard position={pos} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Join ─────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="pill mb-4 inline-block">Why Utopia</span>
              <h2 className="heading-lg text-[26px] md:text-[38px] mb-3">
                Built different.{" "}
                <span className="gradient-text font-extrabold">Built for growth.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {WHY_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center mb-3">
                    <card.icon className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
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
