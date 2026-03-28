"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { OWN_RESULTS } from "@/lib/constants";
import { Check, TrendingUp, Building2, Users } from "lucide-react";

const STAT_ICONS = [TrendingUp, Building2, Users];

export default function WeUseItSection() {
  return (
    <section id="results" className="bg-white bg-dotted">
      <div className="section-padding">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto">
            {/* ── Split Layout: Stats Left | Proof Right ── */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* LEFT — Big stats */}
              <ScrollReveal>
                <div>
                  <span className="pill mb-6 inline-block">Why Us</span>

                  {/* Hero stat */}
                  <div className="mb-8">
                    <div className="font-extrabold text-[72px] md:text-[96px] tracking-tighter leading-none text-[var(--color-brand)]">
                      <AnimatedCounter value="70%" />
                    </div>
                    <p className="text-[var(--color-text-muted)] text-[15px] mt-1">
                      earnings improvement across our own companies
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
                              {m.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* RIGHT — Headline + proof points */}
              <ScrollReveal delay={150}>
                <div>
                  <h2 className="heading-lg text-[24px] md:text-[32px] mb-3 leading-tight">
                    {OWN_RESULTS.headline}
                  </h2>
                  <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed mb-6">
                    {OWN_RESULTS.subheadline}
                  </p>

                  <div className="space-y-4">
                    {OWN_RESULTS.points.map((point) => (
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
