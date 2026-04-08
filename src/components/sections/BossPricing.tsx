"use client";

import { BOSS_OS_PRICING } from "@/lib/boss-os";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, Award } from "lucide-react";

export default function BossPricing() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white relative">
      <div className="absolute inset-0 premium-grid opacity-[0.7]" />
      <div className="grain-overlay" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="heading-display text-[28px] md:text-[36px] mb-2">
              {t("boss.pricing.title")}
            </h2>
            <p className="text-[var(--color-text-soft)] text-[15px]">
              {t("boss.pricing.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch max-w-4xl mx-auto">
          {BOSS_OS_PRICING.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 120} className="flex-1 flex">
              <div
                className={`card-warm relative flex flex-col w-full ${
                  plan.highlighted
                    ? "border-2 border-[var(--color-gold)] md:scale-105"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-gold)] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="text-[12px] text-[var(--color-text-soft)] font-semibold uppercase tracking-wider mb-1">
                  {plan.name}
                </div>
                <p className="text-[12px] text-[var(--color-warm-text)] mb-4">
                  {plan.who}
                </p>

                <div className="text-[36px] md:text-[44px] font-extrabold text-[var(--color-text-primary)] leading-tight">
                  {plan.monthly}
                  <span className="text-[14px] md:text-[16px] font-normal text-[var(--color-text-soft)]">
                    {t("boss.pricing.perMonth")}
                  </span>
                </div>
                <div className="text-[13px] text-[var(--color-text-soft)] mb-1">
                  {plan.setup} — {t("boss.pricing.setup")}
                </div>

                <p className="text-[14px] font-semibold text-[var(--color-gold)] mb-5">
                  {plan.resultPromise}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13px] text-[var(--color-warm-text)]"
                    >
                      <Check
                        size={14}
                        className="text-emerald-500 mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl py-3 min-h-[48px] flex items-center justify-center font-semibold text-[14px] transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "btn-whatsapp"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Conversion line */}
        <ScrollReveal delay={200}>
          <p className="text-center text-[14px] text-[var(--color-gold)] font-medium mt-8">
            {t("boss.pricing.conversion")}
          </p>
        </ScrollReveal>

        {/* De-risk line */}
        <ScrollReveal delay={220}>
          <p className="text-center text-[13px] text-[var(--color-text-soft)] mt-2">
            {t("boss.pricing.derisk")}
          </p>
        </ScrollReveal>

        {/* MDEC Grant badge */}
        <ScrollReveal delay={280}>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">
              <Award size={16} className="text-emerald-600" />
              <span className="text-[12px] text-emerald-700 font-medium">
                {t("boss.pricing.grant")}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
