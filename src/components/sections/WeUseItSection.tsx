"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { OWN_RESULTS } from "@/lib/constants";
import { Check, TrendingUp, Building2, Users } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const STAT_ICONS = [TrendingUp, Building2, Users];

export default function WeUseItSection() {
  const { t } = useLanguage();

  const translatedPoints = [
    t("home.weuseit.p1"),
    t("home.weuseit.p2"),
    t("home.weuseit.p3"),
  ];

  const metricLabels: Record<string, string> = {
    "Companies we operate": t("home.weuseit.companies"),
    "Staff using AI daily": t("home.weuseit.staffDaily"),
  };

  return (
    <section id="results" className="bg-white bg-dotted">
      <div className="section-padding">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto">
            {/* ── Split Layout: Stats Left | Proof Right ── */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* LEFT — Big stats */}
              <ScrollReveal direction="left">
                <div>
                  <span className="pill mb-6 inline-block">{t("home.weuseit.pill")}</span>

                  {/* Hero stat */}
                  <div className="mb-8">
                    <div className="font-extrabold text-[72px] md:text-[96px] tracking-tighter leading-none text-[var(--color-brand)]">
                      <AnimatedCounter value="70%" />
                    </div>
                    <p className="text-[var(--color-text-muted)] text-[15px] mt-1">
                      {t("home.weuseit.earnings")}
                    </p>
                  </div>

                  {/* Secondary stats — horizontal row */}
                  <div className="flex gap-8">
                    {OWN_RESULTS.metrics.slice(1).map((m, i) => {
                      const Icon = STAT_ICONS[i + 1];
                      return (
                        <div key={m.label} className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 text-[var(--color-brand)]" />
                          </div>
                          <div>
                            <div className="font-bold text-[22px] text-[var(--color-text-primary)] tracking-tight leading-tight">
                              <AnimatedCounter value={m.value} />
                            </div>
                            <p className="text-[12px] text-[var(--color-text-muted)]">
                              {metricLabels[m.label] || m.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* RIGHT — Headline + proof points */}
              <ScrollReveal direction="right" delay={150}>
                <div>
                  <h2 className="heading-lg text-[24px] md:text-[32px] mb-3 leading-tight">
                    {t("home.weuseit.headline")}
                  </h2>
                  <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed mb-6">
                    {t("home.weuseit.subheadline")}
                  </p>

                  <div className="space-y-4">
                    {translatedPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[var(--color-success)]" />
                        </div>
                        <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
