"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { whatsappUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import DashedGrid from "@/components/ui/DashedGrid";
import {
  Building2,
  Users,
  TrendingUp,
  Briefcase,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const ABOUT_WA = whatsappUrl(
  "Hi! I'd like to learn more about Utopia Group and how you can help my business with AI."
);

/* CHAPTERS and STATS moved inside component to access t() */

const COMPANIES = [
  { name: "Utopia Co-Living", logo: "/images/wix/logo-utopia-coliving.png", url: "https://utopiacoliving.com", industry: "Co-Living & Property", sites: 2, color: "#116dff", dark: false },
  { name: "Encik Beku", logo: "/images/wix/logo-encik-beku.png", url: "https://aircondmalaysia.my", industry: "Home Services", sites: 27, color: "#0054a6", dark: true },
  { name: "Ibnu Sina Care", logo: "/images/wix/logo-medbed.png", url: "https://ibnusinacare.com.my", industry: "Healthcare", sites: 30, color: "#16a34a", dark: false },
  { name: "Scaffolding Malaysia", logo: "/images/wix/logo-scaffolding.png", url: "https://scaffolding.my", industry: "Construction & Equipment", sites: 25, color: "#f97316", dark: false },
  { name: "RevBike", logo: "/images/wix/logo-revbike.png", url: "https://sewamotor.my", industry: "Vehicle Rental", sites: 22, color: "#7c3aed", dark: false },
  { name: "Kak Kenduri", logo: "/images/wix/logo-kakkenduri.png", url: "https://katering.my", industry: "Events & Catering", sites: 8, color: "#ec4899", dark: false },
  { name: "Cold Truck MY", logo: "/images/wix/logo-coldtruck.png", url: "https://coldroom.my", industry: "Cold Chain", sites: 3, color: "#06b6d4", dark: false },
  { name: "YumTruck", logo: "/images/wix/logo-yumtruck.png", url: "https://foodtruck.com.my", industry: "Food Trucks & Mobile", sites: 4, color: "#f59e0b", dark: false },
  { name: "Pulse Pilates", logo: "/images/wix/logo-pulse-pilates.png", url: "https://pilatesreformer.my", industry: "Fitness & Wellness", sites: 3, color: "#a855f7", dark: false },
  { name: "Merry Elderly Care", logo: "/images/wix/logo-merry-elderly-care.png", url: "https://elderlycare.my", industry: "Elderly Care", sites: 1, color: "#ef4444", dark: false },
  { name: "Gula Melaka Kak Liah", logo: "/images/wix/logo-kak-liah-gula-melaka.png", url: "https://gulamelaka.my", industry: "Food & FMCG", sites: 1, color: "#d97706", dark: true },
  { name: "PotongPokok.my", logo: "/images/wix/logo-potong-pokok.png", url: "https://cuttree.my", industry: "Tree Services", sites: 1, color: "#065f46", dark: true },
  { name: "Butik Glam", logo: "/images/wix/logo-butik-glam.png", url: "https://sewabaju.com.my", industry: "Fashion Rental", sites: 1, color: "#db2777", dark: false },
  { name: "Motorhome MY", logo: "/images/wix/logo-motorhome-rental.png", url: "https://motorhome.my", industry: "Motorhome Rental", sites: 1, color: "#2563eb", dark: true },
  { name: "BatuRingan", logo: "/images/wix/logo-batu-ringan.png", url: "https://baturingan.my", industry: "Construction Materials", sites: 1, color: "#f97316", dark: false },
  { name: "Glass House Events", logo: "/images/wix/logo-glass-house.png", url: "https://glasshouse.my", industry: "Event Space", sites: 1, color: "#065f46", dark: false },
  { name: "Rev City Tour", logo: "/images/wix/logo-rev-city-tour.png", url: "https://revcitytour.my", industry: "Tourism", sites: 1, color: "#ea580c", dark: false },
  { name: "Lampu Jaundice", logo: "/images/wix/logo-lampu-jaundice.png", url: "https://lampujaundice.my", industry: "Medical Equipment", sites: 1, color: "#2563eb", dark: false },
];

const BUSINESS_PHOTOS = [
  { src: "/images/wix/photo-pulse-studio-3women.png", alt: "Pulse Pilates studio session" },
  { src: "/images/wix/photo-revbike-showroom-girl.png", alt: "RevBike motorcycle showroom" },
  { src: "/images/wix/photo-ibnu-sina-showroom.jpg", alt: "Ibnu Sina Care medical showroom" },
  { src: "/images/wix/photo-reno-technician-fan.png", alt: "Reno.my technician at work" },
  { src: "/images/wix/photo-coliving-girl-laptop.png", alt: "Utopia Co-Living resident" },
  { src: "/images/wix/photo-scaffolding-warehouse.jpg", alt: "Scaffolding warehouse operations" },
];

const AI_PRODUCTS = [
  { name: "SlipMatch", logo: "/images/client-logos/slipmatch-favicon.svg", url: "https://slipmatch.my", desc: "AI Bank Reconciliation" },
  { name: "RecurPay", logo: "/images/client-logos/recurpay-favicon.svg", url: "https://recurpay.my", desc: "Collection Tracking" },
  { name: "GetBill", logo: "/images/client-logos/getbill-favicon.svg", url: "https://getbill.my", desc: "Utility Bill Extraction" },
  { name: "Kreativ", logo: "/images/client-logos/kreative-logo.webp", url: "https://kreative.my", desc: "AI Design Platform" },
];

const OFFICES = [
  { type: "HQ & AI Office", name: "Sunway Putra Tower", address: "33.01 Sunway Putra Tower, 100 Jalan Putra, Chow Kit, 50350 KL", badge: "Headquarters" },
  { type: "Sales Office", name: "Jalan Putra Office", address: "S-U1-02, Jalan 1/64D off Jalan Putra, 50350 KL", badge: "Sales" },
];

const WAREHOUSES = [
  { location: "Shah Alam, Selangor", count: 3, flag: "/images/flags/selangor.png" },
  { location: "Johor Bahru", count: 1, flag: "/images/flags/johor.png" },
  { location: "Penang", count: 2, flag: "/images/flags/penang.png" },
  { location: "Melaka", count: 1, flag: "/images/flags/melaka.png" },
  { location: "Ipoh, Perak", count: 1, flag: "/images/flags/perak.png" },
];

/* STATS moved inside component to access t() */

export default function AboutPage() {
  const { t } = useLanguage();

  const STATS = [
    { value: "35+", label: t("about.stats.companies"), icon: Briefcase },
    { value: "173", label: t("about.stats.units"), icon: Building2 },
    { value: "400+", label: t("about.stats.staff"), icon: Users },
    { value: "27", label: t("about.stats.partners"), icon: TrendingUp },
  ];

  const CHAPTERS = [
    {
      era: t("about.story.era1"),
      title: t("about.story.era1.title"),
      copy: t("about.story.era1.copy"),
      photo: "/images/team/staff/team-meeting-presentation.webp",
      photoAlt: "Utopia team strategy meeting",
    },
    {
      era: t("about.story.era2"),
      title: t("about.story.era2.title"),
      copy: t("about.story.era2.copy"),
      photo: "/images/team/staff/awards-ceremony.webp",
      photoAlt: "Utopia staff award ceremony",
    },
    {
      era: t("about.story.era3"),
      title: t("about.story.era3.title"),
      copy: t("about.story.era3.copy"),
      photo: "/images/team/staff/group-photo-fun.webp",
      photoAlt: "Utopia Group team celebrating together",
    },
  ];

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div
          className="bg-image-hero"
          style={{ backgroundImage: "url('/images/team/staff/group-photo-formal.webp')" }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/55" />
        <div className="relative z-10 section-padding !pt-32 md:!pt-44 !pb-16 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/15 text-white/90 border border-white/10 mb-6">
                <Building2 className="w-3.5 h-3.5" />
                {t("about.hero.pill")}
              </span>
              <h1 className="text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.1] text-white mb-5 max-w-3xl mx-auto">
                {t("about.hero.title")}{" "}
                <span className="gradient-text-hero font-extrabold">
                  {t("about.hero.title2")}
                </span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {t("about.hero.sub")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="section-padding !py-10">
          <div className="section-inner">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={s.label} delay={i * 80}>
                    <div className="text-center">
                      <Icon className="w-5 h-5 text-[var(--color-brand)] mx-auto mb-2" />
                      <div className="font-bold text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-tight">
                        <AnimatedCounter value={s.value} />
                      </div>
                      <p className="text-[var(--color-text-muted)] text-[13px] mt-1">
                        {s.label}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="section-padding bg-white bg-dotted">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="pill mb-4 inline-block">{t("about.story.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("about.story.title")}{" "}
                <span className="gradient-text font-extrabold">
                  {t("about.story.title2")}
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-[15px] leading-relaxed">
                {t("about.story.sub")}
              </p>
            </div>
          </ScrollReveal>

          {/* Brand Story Chapters */}
          <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-20">
            {CHAPTERS.map((ch, i) => (
              <ScrollReveal key={ch.title} delay={i * 100}>
                <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}>
                  {/* Photo */}
                  <div className="w-full md:w-1/2">
                    <div className="team-photo aspect-[4/3] border border-[var(--color-border)] overflow-hidden">
                      <Image src={ch.photo} alt={ch.photoAlt} width={600} height={450} className="w-full h-full object-cover" unoptimized />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[var(--color-bg-muted)] text-[var(--color-brand)] border border-[var(--color-border)] mb-4">
                      {ch.era}
                    </span>
                    <h3 className="heading-lg text-[22px] md:text-[28px] mb-4">
                      {ch.title}
                    </h3>
                    <p className="text-[var(--color-text-body)] text-[15px] leading-[1.8]">
                      {ch.copy}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE TEAM ═══ */}
      <section id="team" className="section-padding bg-white bg-dotted">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">{t("about.team.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("about.team.title")}{" "}
                <span className="gradient-text font-extrabold">
                  {t("about.team.title2")}
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                {t("about.team.sub")}
              </p>
            </div>
          </ScrollReveal>

          {/* Full team group photo + masquerade stage */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-4 grid md:grid-cols-2 gap-3">
              <div className="team-photo aspect-[16/10] border border-[var(--color-border)] overflow-hidden">
                <Image src="/images/team/staff/group-photo-fun.webp" alt="Full Utopia Group team — 40+ staff with fun peace sign poses" width={1200} height={750} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="team-photo aspect-[16/10] border border-[var(--color-border)] overflow-hidden">
                <Image src="/images/team/staff/masquerade-stage-group.webp" alt="Utopia Masquerade Night — full team on stage in costume" width={1200} height={750} className="w-full h-full object-cover" unoptimized />
              </div>
            </div>
          </ScrollReveal>

          {/* Team photo gallery — 4x3 grid (landscape photos only) */}
          <div className="max-w-4xl mx-auto mb-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/team/staff/group-photo-formal.webp", alt: "Full Utopia Group team formal photo" },
              { src: "/images/team/staff/awards-ceremony.webp", alt: "Staff award ceremony — team holding certificates on stage" },
              { src: "/images/team/staff/team-dinner-banquet.webp", alt: "Team dinner at banquet hall" },
              { src: "/images/team/staff/team-birthday-celebration.webp", alt: "Team birthday celebration with cake" },
              { src: "/images/team/staff/team-durian-outing.webp", alt: "Team durian outing together" },
              { src: "/images/team/staff/masquerade-dinner-crowd.webp", alt: "Utopia Masquerade Night dinner — full crowd" },
              { src: "/images/team/staff/masquerade-stage-costumes.webp", alt: "Masquerade Night — staff in elaborate costumes on stage" },
              { src: "/images/team/staff/team-meeting-presentation.webp", alt: "Team meeting and presentation in conference room" },
              { src: "/images/team/staff/company-dinner-buffet.webp", alt: "Company dinner at outdoor buffet" },
              { src: "/images/team/staff/team-event-seated.webp", alt: "Team seated at company event" },
              { src: "/images/team/staff/team-outing-group.webp", alt: "Team group outing" },
              { src: "/images/team/staff/event-browsing.webp", alt: "Staff at company event" },
            ].map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 60}>
                <div className="team-photo aspect-[4/3] border border-[var(--color-border)]">
                  <Image src={photo.src} alt={photo.alt} width={400} height={300} className="w-full h-full object-cover" unoptimized />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/company/utopiagroupmy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <svg className="w-6 h-6 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div className="text-left">
                  <span className="font-semibold text-[15px] text-[var(--color-text-primary)] block">
                    {t("about.team.linkedin")}
                  </span>
                  <span className="text-[12px] text-[var(--color-text-muted)]">
                    {t("about.team.linkedinSub")}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-soft)]" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ OUR COMPANIES ═══ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">{t("about.portfolio.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("about.portfolio.title")}{" "}
                <span className="gradient-text font-extrabold">
                  {t("about.portfolio.title2")}
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                {t("about.portfolio.sub")}
              </p>
            </div>
          </ScrollReveal>

          {/* Top 3 companies — large bento cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4">
            {COMPANIES.slice(0, 3).map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 80}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-full flex items-center gap-4 hover:border-[var(--color-brand)]"
                >
                  <div className={`w-16 h-16 rounded-2xl border border-[var(--color-border-soft)] flex items-center justify-center overflow-hidden shrink-0 ${c.dark ? "bg-gray-900" : "bg-[var(--color-bg-soft)]"}`}>
                    <Image src={c.logo} alt={c.name} width={48} height={48} className="object-contain" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)]">{c.name}</h3>
                    <p className="text-[12px] text-[var(--color-text-muted)]">{c.industry}</p>
                    <span className="text-[12px] font-semibold mt-0.5 inline-block" style={{ color: c.color }}>
                      {c.sites} {t("about.portfolio.businesses")}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-soft)] shrink-0" />
                </a>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto mb-4">
            {COMPANIES.slice(3, 5).map((c, i) => (
              <ScrollReveal key={c.name} delay={(i + 3) * 80}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-full flex items-center gap-4 hover:border-[var(--color-brand)]"
                >
                  <div className={`w-16 h-16 rounded-2xl border border-[var(--color-border-soft)] flex items-center justify-center overflow-hidden shrink-0 ${c.dark ? "bg-gray-900" : "bg-[var(--color-bg-soft)]"}`}>
                    <Image src={c.logo} alt={c.name} width={48} height={48} className="object-contain" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)]">{c.name}</h3>
                    <p className="text-[12px] text-[var(--color-text-muted)]">{c.industry}</p>
                    <span className="text-[12px] font-semibold mt-0.5 inline-block" style={{ color: c.color }}>
                      {c.sites} {t("about.portfolio.businesses")}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-soft)] shrink-0" />
                </a>
              </ScrollReveal>
            ))}
          </div>
          {/* Remaining companies — compact grid with proper logos */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto mb-8">
            {COMPANIES.slice(5).map((c, i) => (
              <ScrollReveal key={c.name} delay={(i + 5) * 40}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-flat h-full flex flex-col items-center text-center gap-2 py-4 px-3 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl border border-[var(--color-border-soft)] flex items-center justify-center overflow-hidden ${c.dark ? "bg-gray-900" : "bg-[var(--color-bg-soft)]"}`}>
                    <Image src={c.logo} alt={c.name} width={36} height={36} className="object-contain" unoptimized />
                  </div>
                  <span className="font-medium text-[12px] text-[var(--color-text-primary)] leading-tight">{c.name}</span>
                  <span className="text-[10px] font-semibold" style={{ color: c.color }}>
                    {c.sites} {c.sites === 1 ? t("about.portfolio.business") : t("about.portfolio.businesses")}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Businesses in Action — real photos from operations */}
          <ScrollReveal delay={100}>
            <div className="text-center mb-6 mt-4">
              <h3 className="heading-md text-[20px]">{t("about.portfolio.inAction")}</h3>
              <p className="text-[var(--color-text-muted)] text-[14px]">
                {t("about.portfolio.inAction.sub")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {BUSINESS_PHOTOS.map((photo, i) => (
                <ScrollReveal key={photo.src} delay={i * 60}>
                  <div className="team-photo aspect-[4/3] border border-[var(--color-border)] overflow-hidden">
                    <Image src={photo.src} alt={photo.alt} width={500} height={375} className="w-full h-full object-cover" unoptimized />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* AI Products */}
          <ScrollReveal delay={200}>
            <div className="text-center mb-6 mt-12">
              <h3 className="heading-md text-[20px]">{t("about.portfolio.aiProducts")}</h3>
              <p className="text-[var(--color-text-muted)] text-[14px]">
                {t("about.portfolio.aiProducts.sub")}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
              {AI_PRODUCTS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-xl bg-[var(--color-bg-soft)] flex items-center justify-center overflow-hidden">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={20}
                      height={20}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-[14px] text-[var(--color-text-primary)]">
                      {p.name}
                    </span>
                    <span className="block text-[11px] text-[var(--color-text-muted)]">
                      {p.desc}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ OUR LOCATIONS ═══ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">{t("about.locations.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[36px] mb-4">
                {t("about.locations.offices")}{" "}
                <span className="gradient-text font-extrabold">{t("about.locations.warehouses")}</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Photo strip — real locations */}
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
              <div className="team-photo h-48 border border-[var(--color-border)]">
                <Image src="/images/team/feed-23.jpg" alt="Utopia Group KL office — dev team at work" width={600} height={340} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="team-photo h-48 border border-[var(--color-border)]">
                <Image src="/images/wix/photo-scaffolding-warehouse.jpg" alt="Scaffolding warehouse with forklift" width={600} height={340} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="team-photo h-48 border border-[var(--color-border)]">
                <Image src="/images/wix/photo-revbike-warehouse.jpg" alt="RevBike motorcycle fleet warehouse" width={600} height={340} className="w-full h-full object-cover" unoptimized />
              </div>
            </div>
          </ScrollReveal>

          {/* Offices */}
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-10">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.name} delay={i * 100}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[var(--color-brand)]" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                      {office.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[17px] text-[var(--color-text-primary)] mb-1">
                    {office.name}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Warehouses */}
          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-center font-semibold text-[16px] text-[var(--color-text-primary)] mb-4">
                {t("about.locations.warehouseCount")}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {WAREHOUSES.map((wh) => (
                  <div
                    key={wh.location}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-[var(--color-border)]"
                  >
                    <Image
                      src={wh.flag}
                      alt={wh.location}
                      width={20}
                      height={14}
                      className="rounded-sm object-cover shrink-0"
                      unoptimized
                    />
                    <span className="text-[13px] font-medium text-[var(--color-text-primary)]">
                      {wh.location}
                    </span>
                    {wh.count > 1 && (
                      <span className="text-[11px] font-semibold text-[var(--color-brand)] bg-[var(--color-bg-muted)] px-1.5 py-0.5 rounded-full">
                        ×{wh.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══ CTA FOOTER ═══ */}
      <section className="relative gradient-cta-band overflow-hidden">
        <DashedGrid />
        <div className="relative z-10 section-padding !py-20 md:!py-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-lg text-[28px] md:text-[36px] mb-4">
                {t("about.cta.title")}{" "}
                <span className="gradient-text font-extrabold">
                  {t("about.cta.title2")}
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={ABOUT_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  {t("about.cta.talkToUs")}
                </a>
                <Link href="/career" className="btn-secondary">
                  {t("about.cta.viewPositions")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
