"use client";

import { BOSS_OS_PRICING } from "@/lib/boss-os";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, Award } from "lucide-react";

export default function BossPricing() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[var(--color-bg-soft)]">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              {t("pricing.title")}
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              {t("pricing.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-2xl mx-auto">
          {BOSS_OS_PRICING.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`card relative flex-1 ${
                  plan.highlighted
                    ? "border-2 border-[var(--color-brand)]"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-4 bg-[var(--color-brand)] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="text-[12px] text-[var(--color-text-muted)] font-semibold uppercase tracking-wider mb-1">
                  {plan.name}
                </div>
                <div className="text-[11px] text-[var(--color-brand)] mb-4">
                  {plan.target}
                </div>

                <div className="text-[32px] font-extrabold text-[var(--color-text-primary)]">
                  {plan.setup}
                </div>
                <div className="text-[12px] text-[var(--color-text-muted)] mb-1">
                  {t("pricing.setup")}
                </div>

                <div className="text-[22px] font-bold text-[var(--color-text-primary)] mt-2">
                  {plan.monthly}
                  <span className="text-[12px] font-normal text-[var(--color-text-muted)]">
                    /month
                  </span>
                </div>
                <div className="text-[12px] font-semibold text-emerald-600 mb-5">
                  → saves {plan.savings}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13px] text-[var(--color-text-body)]"
                    >
                      <Check
                        size={14}
                        className="text-emerald-500 mt-0.5 flex-shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center rounded-xl py-3 font-semibold text-[14px] transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-[var(--color-brand)] text-white"
                      : "bg-[var(--color-bg-soft)] text-[var(--color-brand)] border border-[var(--color-border)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* MDEC Grant badge */}
        <ScrollReveal delay={250}>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">
              <Award size={16} className="text-emerald-600" />
              <span className="text-[12px] text-emerald-700 font-medium">
                {t("pricing.grant")}
              </span>
            </div>
            <p className="text-[12px] text-[var(--color-text-soft)] mt-2">
              {t("pricing.cancel")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
