"use client";

import { useLanguage } from "@/lib/language-context";
import { BOSS_TIMELINE_STEPS } from "@/lib/boss-os";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, Target, Wrench, Rocket, Sparkles } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Target,
  Wrench,
  Rocket,
  Sparkles,
};

export default function BossTimeline() {
  const { t } = useLanguage();

  return (
    <section
      id="your-first-week"
      className="relative overflow-hidden bg-[var(--color-warm-bg-alt)] py-16 md:py-24"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 premium-grid opacity-[0.7]" />
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-display text-[28px] md:text-[40px] mb-3">
              {t("boss.timeline.title")}
            </h2>
            <p className="text-[15px] md:text-[16px] text-[var(--color-warm-text)] max-w-lg mx-auto">
              {t("boss.timeline.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline container — center-aligned */}
        <div className="relative">
          {/* Timeline items — alternating left/right */}
          <div className="flex flex-col gap-6 md:gap-8">
            {BOSS_TIMELINE_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Search;
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal
                  key={step.day}
                  direction={isLeft ? "left" : "right"}
                  delay={i * 120}
                >
                  <div className="max-w-lg mx-auto">
                    <div className="card-warm p-5 md:p-6">
                      {/* Day badge */}
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          size={16}
                          className="text-[var(--color-gold)]"
                          strokeWidth={2}
                        />
                        <span className="text-[var(--color-gold)] font-bold text-[13px] uppercase tracking-wide">
                          {step.day}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="heading-md text-[18px] md:text-[22px] mb-1.5">
                        {t(step.titleKey)}
                      </h3>

                      {/* Copy */}
                      <p className="text-[14px] md:text-[15px] text-[var(--color-warm-text)] leading-relaxed">
                        {t(step.copyKey)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Conversion subtext */}
        <ScrollReveal delay={700}>
          <p className="text-center mt-12 text-[15px] md:text-[16px] italic text-[var(--color-gold)]">
            {t("boss.timeline.speed")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
