"use client";

import { CASE_STUDIES } from "@/lib/boss-os";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Car, Sparkles, Leaf, TrendingUp } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Car,
  Sparkles,
  Leaf,
};

export default function BossCaseStudies() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] flex items-center justify-center">
                <TrendingUp size={20} className="text-emerald-600" />
              </div>
            </div>
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              Real results from real bosses
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              Before and after Boss OS. Numbers don&apos;t lie.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {CASE_STUDIES.map((study, i) => {
            const Icon = ICON_MAP[study.icon] || Car;
            return (
              <ScrollReveal key={study.name} delay={i * 100}>
                <div className="card">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-muted)] flex items-center justify-center">
                      <Icon
                        size={16}
                        className="text-[var(--color-brand)]"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[14px] text-[var(--color-text-primary)]">
                        {study.name}
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)]">
                        {study.industry}
                      </div>
                    </div>
                  </div>

                  {/* Before / After */}
                  <div className="flex gap-2 mb-3">
                    <div className="flex-1 rounded-xl bg-red-50 p-3 text-center">
                      <div className="text-[10px] font-semibold text-red-800 uppercase tracking-wider">
                        Before
                      </div>
                      <div className="text-[18px] font-extrabold text-red-600">
                        {study.before.value}
                      </div>
                      <div className="text-[10px] text-red-700">
                        {study.before.label}
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl bg-emerald-50 p-3 text-center">
                      <div className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">
                        After
                      </div>
                      <div className="text-[18px] font-extrabold text-emerald-600">
                        {study.after.value}
                      </div>
                      <div className="text-[10px] text-emerald-700">
                        {study.after.label}
                      </div>
                    </div>
                  </div>

                  <p className="text-[12px] font-semibold text-emerald-600">
                    {study.result}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
