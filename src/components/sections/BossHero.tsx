"use client";

import { useState } from "react";
import Image from "next/image";
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
  Check,
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
  const w = size === "md" ? "w-[160px] md:w-[180px]" : "w-[130px] md:w-[150px]";

  return (
    <div
      className={`${w} bg-[#0a0a0a] rounded-[24px] p-2 shadow-2xl flex-shrink-0`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="bg-white rounded-[18px] p-3 space-y-2">
        <div className="flex items-center gap-1.5">
          <Icon size={14} style={{ color: mockup.color }} />
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: mockup.color }}
          >
            {mockup.industry}
          </span>
        </div>
        <div className="text-[22px] font-extrabold text-[#0a0a0a] leading-none">
          {mockup.revenue}
        </div>
        <div className="flex items-center gap-1 text-[10px]">
          {mockup.trendUp ? (
            <TrendingUp size={10} className="text-emerald-600" />
          ) : (
            <TrendingDown size={10} className="text-red-500" />
          )}
          <span className={mockup.trendUp ? "text-emerald-600" : "text-red-500"}>
            {mockup.trend}
          </span>
        </div>
        {mockup.metrics.map((m, i) => (
          <div
            key={i}
            className="rounded-lg px-2 py-1.5 text-[10px] text-[#374151] leading-tight"
            style={{ background: m.bg }}
          >
            {m.label}
          </div>
        ))}
        <div className="rounded-lg px-2 py-1.5 text-[10px] text-[#374151] leading-tight bg-[#f0f4ff]">
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
    [0, 1, 2], // car rental, cleaning, fresh produce
    [3, 4, 0], // motorcycle, fnb, car rental
  ];
  const currentPhones = sets[activeSet];

  return (
    <section className="relative overflow-hidden pt-24 md:pt-36 pb-12 md:pb-20 bg-gradient-to-br from-[#f8fafc] to-[#f0f4ff]">
      {/* Background hero image (subtle) */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/images/boss-os/boss-hero.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Ambient orb */}
      <div className="ambient-orb -top-40 -right-40 opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Copy */}
          <div className="flex-1 text-center md:text-left">
            <ScrollReveal>
              <span className="pill mb-4 inline-flex">{t("hero.pill")}</span>
              <h1 className="heading-display text-[32px] md:text-[48px] lg:text-[56px] mb-4">
                {t("hero.tagline")}
              </h1>
              <p className="text-[16px] md:text-[18px] text-[var(--color-text-body)] leading-relaxed max-w-lg mb-5">
                {t("hero.subtitle")}
              </p>
              <p className="text-[15px] font-semibold text-emerald-600 mb-6">
                {t("hero.roi")}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-5">
                <a href={WHATSAPP_URL} className="btn-whatsapp">
                  {t("hero.cta.whatsapp")}
                </a>
                <a href="#roi-calculator" className="btn-secondary">
                  {t("hero.cta.see")}
                  <ArrowDown size={16} />
                </a>
              </div>

              {/* Trust bar */}
              <div className="flex gap-4 justify-center md:justify-start text-[13px] text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <Check size={14} className="text-emerald-500" />
                  {t("hero.trust.companies")}
                </span>
                <span className="flex items-center gap-1">
                  <Check size={14} className="text-emerald-500" />
                  {t("hero.trust.staff")}
                </span>
                <span className="flex items-center gap-1">
                  <Check size={14} className="text-emerald-500" />
                  {t("hero.trust.setup")}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: 3 phones */}
          <div className="flex-1 flex justify-center">
            <ScrollReveal delay={200}>
              <div className="flex items-end gap-3 md:gap-4">
                <PhoneCard
                  mockup={PHONE_MOCKUPS[currentPhones[0]]}
                  size="sm"
                  rotation={-5}
                />
                <PhoneCard
                  mockup={PHONE_MOCKUPS[currentPhones[1]]}
                  size="md"
                  rotation={0}
                />
                <PhoneCard
                  mockup={PHONE_MOCKUPS[currentPhones[2]]}
                  size="sm"
                  rotation={5}
                />
              </div>

              {/* Industry switcher dots */}
              <div className="flex justify-center gap-2 mt-4">
                {sets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSet(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeSet === i
                        ? "bg-[var(--color-brand)]"
                        : "bg-[var(--color-border)]"
                    }`}
                    aria-label={`Show industry set ${i + 1}`}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
