"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/language-context";

const TESTIMONIALS = [
  {
    company: "Encik Beku Aircond",
    logo: "/images/client-logos/aircondmalaysia-my.png",
    sites: 27,
    name: "Encik Beku Team",
    title: "Home Services · 27 websites",
    quote: "AI handles 42,000+ WhatsApp enquiries across all our service lines — aircond, plumbing, electrical, renovation. We went from missing leads to converting 3x more.",
    stat: "42K+ enquiries",
    color: "#0054a6",
  },
  {
    company: "Ibnu Sina Care",
    logo: "/images/client-logos/ibnusinacare-com-my.png",
    sites: 30,
    name: "Ibnu Sina Care Team",
    title: "Healthcare · 30 websites",
    quote: "RM1.3M in 6 months with AI-driven marketing across hospital beds, oxygen, CPAP, and weight management. Every product line now has its own AI sales funnel.",
    stat: "RM1.3M in 6mo",
    color: "#16a34a",
  },
  {
    company: "Scaffolding Malaysia",
    logo: "/images/client-logos/scaffolding-my.png",
    sites: 25,
    name: "Scaffolding MY Team",
    title: "Construction · 25 websites",
    quote: "From zero to RM450K/month. AI sales automation on WhatsApp handles scaffolding, boom lifts, lorry cranes, and 20+ equipment types across Malaysia.",
    stat: "RM450K/mo",
    color: "#f97316",
  },
  {
    company: "Rev Move",
    logo: "/images/client-logos/sewamotor-my.png",
    sites: 22,
    name: "Rev Move Team",
    title: "Vehicle Rental · 22 websites",
    quote: "22 websites covering motorcycles, vans, cars across KL, Penang, Johor, Langkawi, Melaka. AI quotes and books for every location automatically.",
    stat: "22 locations",
    color: "#7c3aed",
  },
  {
    company: "Utopia Co-Living",
    logo: "/images/client-logos/utopiacoliving-com.png",
    sites: 2,
    name: "Utopia Holiday Team",
    title: "Co-Living · Group Holding",
    quote: "Revenue jumped from RM50K to RM450K/month in 18 months. AI handles tenant enquiries, maintenance scheduling, and payment collection across all properties.",
    stat: "RM450K+/mo",
    color: "#116dff",
  },
  {
    company: "Kak Kenduri",
    logo: "/images/client-logos/katering-my.png",
    sites: 8,
    name: "Kak Kenduri Team",
    title: "Events & Catering · 8 websites",
    quote: "From catering to kambing golek to tent rentals — AI manages quotes, availability, and bookings across all event services. Weekend rush? AI handles it.",
    stat: "8 services automated",
    color: "#ec4899",
  },
  {
    company: "SlipMatch",
    logo: "/images/client-logos/slipmatch-my.png",
    sites: 1,
    name: "Utopia Accelerator",
    title: "AI Product · Bank Reconciliation",
    quote: "Bank reconciliation that took 3 days now takes 3 minutes. Processes 8 Malaysian banks automatically. Built for accountants, by operators.",
    stat: "3 min reconcile",
    color: "#116dff",
  },
  {
    company: "Cold Truck Malaysia",
    logo: "/images/client-logos/coldroom-my.png",
    sites: 3,
    name: "Cold Truck MY Team",
    title: "Cold Chain · 3 websites",
    quote: "Cold room and cold truck bookings fully automated. AI qualifies leads by temperature requirements, volume, and duration before passing to our team.",
    stat: "100% auto-qualified",
    color: "#06b6d4",
  },
  {
    company: "Mobile Wheeler",
    logo: "/images/client-logos/foodtruck-com-my.png",
    sites: 4,
    name: "Mobile Wheeler Team",
    title: "Food Trucks · 4 websites",
    quote: "Food truck bookings, caravan rentals, motorhome enquiries — all handled by AI. One person runs what used to need three across all mobile services.",
    stat: "3x efficiency",
    color: "#f59e0b",
  },
  {
    company: "Pulse Pilates",
    logo: "/images/client-logos/pilatesreformer-my.png",
    sites: 3,
    name: "Pulse Pilates Team",
    title: "Fitness · 3 websites",
    quote: "Class bookings, pilates reformer sales, and ice bath sessions — AI manages the full customer journey from enquiry to booking confirmation.",
    stat: "Zero missed bookings",
    color: "#a855f7",
  },
  {
    company: "RecurPay",
    logo: "/images/client-logos/recurpay-my.png",
    sites: 1,
    name: "Utopia Accelerator",
    title: "AI Product · Collection Tracking",
    quote: "Collection tracking that took 2 days now takes 10 minutes. We catch every missed payment automatically across all our client companies.",
    stat: "95% collection rate",
    color: "#7c3aed",
  },
  {
    company: "Merry Elderly Care",
    logo: "/images/client-logos/elderlycare-my.png",
    sites: 1,
    name: "Merry Elderly Care Team",
    title: "Elderly Care · Healthcare",
    quote: "Families searching for elderly care at 2AM now get instant responses. AI explains services, pricing, and availability — then books a visit.",
    stat: "24/7 family support",
    color: "#ef4444",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[340px] md:w-[380px] shrink-0 bg-white rounded-3xl border border-[var(--color-border)] p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
      {/* Company header with real logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-soft)] flex items-center justify-center shrink-0 overflow-hidden border border-[var(--color-border-soft)]">
          <Image
            src={t.logo}
            alt={t.company}
            width={28}
            height={28}
            className="object-contain"
            unoptimized
          />
        </div>
        <div>
          <p className="font-semibold text-[14px] text-[var(--color-text-primary)]">
            {t.company}
          </p>
          <p className="text-[12px] text-[var(--color-text-soft)]">
            {t.title}
          </p>
        </div>
      </div>

      {/* Stat */}
      <div className="inline-flex self-start">
        <span
          className="text-[13px] font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: `${t.color}12`, color: t.color }}
        >
          {t.stat}
        </span>
      </div>

      {/* Quote */}
      <p className="text-[14px] text-[var(--color-text-body)] leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>
  );
}

export default function TestimonialScroll() {
  const { t } = useLanguage();
  return (
    <section className="bg-white overflow-hidden">
      <div className="section-padding !pb-8 md:!pb-12">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">{t("home.testimonials.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("home.testimonials.title")}{" "}
                <span className="gradient-text font-extrabold">
                  {t("home.testimonials.title2")}
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                {t("home.testimonials.sub")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scrolling row 1 — left to right */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex gap-4 animate-scroll-left w-max">
          {[...TESTIMONIALS.slice(0, 6), ...TESTIMONIALS.slice(0, 6)].map(
            (t, i) => (
              <TestimonialCard key={`row1-${i}`} t={t} />
            )
          )}
        </div>
      </div>

      {/* Scrolling row 2 — right to left */}
      <div className="relative mb-16 md:mb-20 overflow-hidden">
        <div className="flex gap-4 animate-scroll-right w-max">
          {[...TESTIMONIALS.slice(6), ...TESTIMONIALS.slice(6)].map((t, i) => (
            <TestimonialCard key={`row2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
