"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BOSS_SHOWCASE_CASES } from "@/lib/boss-os";

/* ── Before / After Card ─────────────────────────────────────── */

function BeforeAfterCard({
  before,
  after,
  saved,
}: {
  before: { metric: string; value: string; detail: string };
  after: { metric: string; value: string; detail: string };
  saved: string;
}) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--color-warm-border)]">
      <div className="grid grid-cols-2">
        {/* Before half */}
        <div className="p-4 md:p-5 bg-[#f5f3f0]">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-warm-text)] opacity-60">
            {t("boss.showcase.before")}
          </span>
          <p className="mt-2 text-[22px] md:text-[26px] font-bold text-[var(--color-warm-text)]">
            {before.value}
          </p>
          <p className="text-[13px] text-[var(--color-warm-text)] opacity-70">
            {before.metric}
          </p>
          <p className="mt-1 text-[12px] text-[var(--color-warm-text)] opacity-50">
            {before.detail}
          </p>
        </div>

        {/* Divider */}
        <div className="relative p-4 md:p-5 bg-[var(--color-warm-bg)]">
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-[var(--color-gold)]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            {t("boss.showcase.after")}
          </span>
          <p className="mt-2 text-[22px] md:text-[26px] font-bold text-[var(--color-gold)]">
            {after.value}
          </p>
          <p className="text-[13px] text-[var(--color-warm-text)] opacity-70">
            {after.metric}
          </p>
          <p className="mt-1 text-[12px] text-[var(--color-warm-text)] opacity-50">
            {after.detail}
          </p>
        </div>
      </div>

      {/* Saved strip */}
      <div className="px-4 py-3 bg-[var(--color-warm-bg)] border-t border-[var(--color-warm-border)] text-center">
        <span className="text-[12px] uppercase tracking-wider text-[var(--color-warm-text)] opacity-60">
          {t("boss.showcase.saved")}
        </span>
        <span className="ml-2 text-[16px] md:text-[18px] font-bold text-[var(--color-gold)]">
          {saved}
        </span>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────── */

export default function BossShowcase() {
  const { t } = useLanguage();

  return (
    <section>
      {/* Section header */}
      <div className="py-12 md:py-16 bg-white relative">
        <div className="absolute inset-0 premium-grid opacity-[0.5]" />
        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          <ScrollReveal>
            <h2 className="heading-display text-[28px] md:text-[40px]">
              {t("boss.showcase.title")}
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Case Studies (dynamic, alternating layout) ────────── */}
      {BOSS_SHOWCASE_CASES.map((caseItem, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven ? "bg-white" : "bg-[var(--color-warm-bg-alt)]";

        return (
          <div key={caseItem.id} className={`py-12 md:py-20 ${bg} relative`}>
            <div className="absolute inset-0 premium-grid opacity-[0.5]" />
            <div className="max-w-5xl mx-auto px-5 relative z-10">
              <div
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <ScrollReveal
                  direction={isEven ? "left" : "right"}
                  className="w-full md:w-1/2"
                >
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[var(--color-warm-bg)]">
                    <Image
                      src={caseItem.image}
                      alt={`${caseItem.name} dashboard`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </ScrollReveal>

                {/* Copy + Card */}
                <ScrollReveal
                  direction={isEven ? "right" : "left"}
                  delay={150}
                  className="w-full md:w-1/2"
                >
                  {/* Company logo + label */}
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={caseItem.logo}
                      alt={`${caseItem.name} logo`}
                      width={120}
                      height={40}
                      className="h-7 w-auto object-contain"
                    />
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                      {caseItem.industry}
                    </span>
                  </div>
                  <p className="text-[16px] md:text-[18px] text-[var(--color-warm-text)] leading-relaxed mb-6">
                    {t(caseItem.copyKey as TranslationKey)}
                  </p>
                  <BeforeAfterCard
                    before={caseItem.before}
                    after={caseItem.after}
                    saved={caseItem.saved}
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── TV Wall (dark, full bleed) ────────────────────────── */}
      <div
        className="py-16 md:py-24 bg-[var(--color-warm-dark)] relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(184,134,11,0.12) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="overflow-hidden rounded-none md:rounded-xl">
              <Image
                src="/images/boss-os/tv-wall-command-radar.webp"
                alt="Command Radar TV wall display"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 md:mt-12 text-center max-w-2xl mx-auto">
              <h3 className="heading-display text-[24px] md:text-[34px] text-white">
                {t("boss.showcase.tv.headline")}
              </h3>
              <p className="mt-3 text-[16px] md:text-[18px] text-white/80 leading-relaxed">
                {t("boss.showcase.tv.subhead")}
              </p>
              <p className="mt-2 text-[14px] text-white/50">
                {t("boss.showcase.tv.detail")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
