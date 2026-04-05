"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/language-context";
import { Calculator, TrendingDown } from "lucide-react";

export default function BossROICalculator() {
  const { t } = useLanguage();
  const [staff, setStaff] = useState(12);
  const [hours, setHours] = useState(3.5);
  const hourlyRate = 15;
  const workingDays = 22;

  const monthlyWaste = Math.round(staff * hours * hourlyRate * workingDays);
  const bossCost = staff <= 10 ? 1500 : 3000;
  const savings = monthlyWaste - bossCost;

  return (
    <section
      id="roi-calculator"
      className="section-padding bg-[var(--color-bg-soft)]"
    >
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#fefce8] flex items-center justify-center">
                <Calculator size={20} className="text-amber-500" />
              </div>
            </div>
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              {t("roi.title")}
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              {t("roi.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-xl mx-auto">
            {/* Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="card-flat text-center">
                <label htmlFor="roi-staff" className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium">
                  {t("roi.staff")}
                </label>
                <div className="text-[32px] font-extrabold text-[var(--color-text-primary)] my-2">
                  {staff}
                </div>
                <input
                  id="roi-staff"
                  type="range"
                  min={1}
                  max={50}
                  value={staff}
                  onChange={(e) => setStaff(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-[var(--color-text-soft)] mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div className="card-flat text-center">
                <label htmlFor="roi-hours" className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium">
                  {t("roi.hours")}
                </label>
                <div className="text-[32px] font-extrabold text-[var(--color-text-primary)] my-2">
                  {hours}
                </div>
                <input
                  id="roi-hours"
                  type="range"
                  min={1}
                  max={8}
                  step={0.5}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-[var(--color-text-soft)] mt-1">
                  <span>1 hr</span>
                  <span>8 hrs</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="rounded-2xl bg-[#fefce8] border border-[#fde68a] p-6 text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingDown size={16} className="text-red-500" />
                <span className="text-[13px] text-[#92400e]">
                  {t("roi.losing")}
                </span>
              </div>
              <div className="text-[36px] md:text-[42px] font-extrabold text-red-600">
                RM {monthlyWaste.toLocaleString()} <span className="text-[18px] font-normal text-[#92400e]">{t("roi.perMonth")}</span>
              </div>
              <div className="text-[13px] text-[#92400e]">
                {t("roi.toManual")}
              </div>
            </div>

            {savings > 0 && (
              <div className="text-center">
                <p className="text-[15px] font-semibold text-emerald-600">
                  {t("roi.savings")
                    .replace("{cost}", bossCost.toLocaleString())
                    .replace("{savings}", savings.toLocaleString())}
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
