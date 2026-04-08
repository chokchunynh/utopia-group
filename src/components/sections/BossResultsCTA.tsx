"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ArrowRight } from "lucide-react";

const RESULT_CARDS = [
  {
    industry: "DKing Durian",
    metric: "Waste",
    before: "12%",
    after: "3%",
    impact: "Save RM14,000/mo",
  },
  {
    industry: "Scaffolding.my",
    metric: "On-time",
    before: "71%",
    after: "94%",
    impact: "+RM22,000/mo",
  },
  {
    industry: "RevMove Fleet",
    metric: "Admin",
    before: "4 hrs",
    after: "30 min",
    impact: "Save RM8,400/mo",
  },
] as const;

export default function BossResultsCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[var(--color-warm-bg)] relative">
      <div className="absolute inset-0 premium-grid opacity-[0.7]" />
      <div className="grain-overlay" />
      <div className="section-inner relative z-10">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-soft)] mb-8">
            {t("homepage.resultscta.eyebrow")}
          </p>
        </ScrollReveal>

        {/* Result cards */}
        <div className="flex flex-col md:flex-row gap-5 justify-center max-w-3xl mx-auto mb-10">
          {RESULT_CARDS.map((card, i) => (
            <ScrollReveal key={card.industry} delay={i * 120} className="flex-1 flex">
              <div className="card-warm flex flex-col w-full text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-soft)] mb-4">
                  {card.industry}
                </p>

                <p className="text-[12px] font-medium text-[var(--color-warm-text)] mb-2">
                  {card.metric}
                </p>

                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-[16px] text-[var(--color-text-soft)] line-through">
                    {card.before}
                  </span>
                  <ArrowRight size={14} className="text-[var(--color-text-soft)]" />
                  <AnimatedCounter
                    value={card.after}
                    className="text-[24px] text-[var(--color-gold)] font-bold"
                  />
                </div>

                <p className="text-[14px] font-semibold text-[var(--color-gold)]">
                  {card.impact}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center">
            <h3 className="heading-lg text-[22px] md:text-[28px] mb-4">
              {t("homepage.resultscta.headline")}
            </h3>
            <Link
              href="/boss-os"
              className="btn-primary text-[15px] px-8 py-3.5 min-h-[48px] inline-flex items-center justify-center"
            >
              {t("homepage.resultscta.cta")}
            </Link>
            <p className="text-[13px] text-[var(--color-text-soft)] mt-3">
              {t("homepage.resultscta.price")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
