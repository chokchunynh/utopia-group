"use client";

import { useState } from "react";
import { PHONE_MOCKUPS } from "@/lib/boss-os";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Car,
  Sparkles,
  Leaf,
  Bike,
  UtensilsCrossed,
  ArrowDown,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Car,
  Sparkles,
  Leaf,
  Bike,
  UtensilsCrossed,
};

function PhoneCard({
  mockup,
  size = "md",
  rotation = 0,
}: {
  mockup: (typeof PHONE_MOCKUPS)[number];
  size?: "sm" | "md";
  rotation?: number;
}) {
  const Icon = ICON_MAP[mockup.icon] || Car;
  const w = size === "md" ? "w-[150px] md:w-[170px]" : "w-[120px] md:w-[140px]";

  return (
    <div
      className={`${w} bg-[#1a1a1a] rounded-[22px] p-[6px] flex-shrink-0 transition-transform duration-500`}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      <div className="bg-white rounded-[17px] p-2.5 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Icon size={12} style={{ color: mockup.color }} strokeWidth={2.5} />
          <span
            className="text-[9px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: mockup.color }}
          >
            {mockup.industry}
          </span>
        </div>
        <div className="text-[20px] font-extrabold text-[#0a0a0a] leading-none tracking-tight">
          {mockup.revenue}
        </div>
        <div className="flex items-center gap-1 text-[9px]">
          {mockup.trendUp ? (
            <TrendingUp size={9} className="text-emerald-600" />
          ) : (
            <TrendingDown size={9} className="text-red-500" />
          )}
          <span className={mockup.trendUp ? "text-emerald-600" : "text-red-500"}>
            {mockup.trend}
          </span>
        </div>
        {mockup.metrics.map((m, i) => (
          <div
            key={i}
            className="rounded-md px-2 py-1 text-[9px] text-[#374151] leading-snug"
            style={{ background: m.bg }}
          >
            {m.label}
          </div>
        ))}
        <div className="rounded-md px-2 py-1 text-[9px] text-[#475569] leading-snug bg-[#f0f4ff] italic">
          {mockup.aiInsight}
        </div>
      </div>
    </div>
  );
}

export default function BossHero() {
  const [activeSet, setActiveSet] = useState(0);
  const { t } = useLanguage();
  const sets = [
    [0, 1, 2],
    [3, 4, 0],
  ];
  const currentPhones = sets[activeSet];

  return (
    <section className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-28">
      {/* Clean background with subtle dot texture */}
      <div className="absolute inset-0 bg-[#fafbfc]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* Eyebrow — elegant, not a pill badge */}
        <ScrollReveal>
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-soft)]">
              <span className="w-8 h-px bg-[var(--color-border)]" />
              {t("hero.pill")}
              <span className="w-8 h-px bg-[var(--color-border)]" />
            </span>
          </div>
        </ScrollReveal>

        {/* Headline — editorial serif, the first impression */}
        <ScrollReveal delay={50}>
          <h1 className="heading-display text-[36px] md:text-[56px] lg:text-[72px] text-center max-w-3xl mx-auto mb-5">
            {t("hero.tagline")}
          </h1>
        </ScrollReveal>

        {/* Subhead — clean, readable, not trying too hard */}
        <ScrollReveal delay={100}>
          <p className="text-center text-[16px] md:text-[18px] text-[var(--color-text-body)] leading-relaxed max-w-xl mx-auto mb-3">
            {t("hero.subtitle")}
          </p>
          <p className="text-center text-[14px] font-medium text-emerald-600 mb-8">
            {t("hero.roi")}
          </p>
        </ScrollReveal>

        {/* CTAs — centered, two options */}
        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {t("hero.cta.whatsapp")}
            </a>
            <a href="#roi-calculator" className="btn-secondary">
              {t("hero.cta.see")}
              <ArrowDown size={15} />
            </a>
          </div>
        </ScrollReveal>

        {/* Trust line — quiet, not desperate */}
        <ScrollReveal delay={200}>
          <div className="flex gap-6 justify-center text-[13px] text-[var(--color-text-soft)] mb-16 md:mb-20">
            <span>{t("hero.trust.companies")}</span>
            <span className="text-[var(--color-border)]">|</span>
            <span>{t("hero.trust.staff")}</span>
            <span className="text-[var(--color-border)]">|</span>
            <span>{t("hero.trust.setup")}</span>
          </div>
        </ScrollReveal>

        {/* 3 phones — hero visual */}
        <ScrollReveal delay={250}>
          <div className="flex justify-center">
            <div className="flex items-end gap-3 md:gap-5">
              <PhoneCard
                mockup={PHONE_MOCKUPS[currentPhones[0]]}
                size="sm"
                rotation={-6}
              />
              <PhoneCard
                mockup={PHONE_MOCKUPS[currentPhones[1]]}
                size="md"
                rotation={0}
              />
              <PhoneCard
                mockup={PHONE_MOCKUPS[currentPhones[2]]}
                size="sm"
                rotation={6}
              />
            </div>
          </div>

          {/* Switcher — animated pill, not just dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {sets.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSet(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSet === i
                    ? "w-8 bg-[var(--color-brand)]"
                    : "w-1.5 bg-[var(--color-border)]"
                }`}
                aria-label={`Show industry set ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
