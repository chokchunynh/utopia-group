"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, Cpu, Rocket, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const STEP_ICONS = [Search, Cpu, Rocket, HeadphonesIcon];
const STEP_COLORS = ["#116dff", "#8B5CF6", "#25D366", "#EC4899"];
const STEP_NUMBERS = ["01", "02", "03", "04"];

export default function HowWeWork() {
  const { t } = useLanguage();

  const STEPS = [
    {
      icon: STEP_ICONS[0],
      number: STEP_NUMBERS[0],
      title: t("home.howwework.s1.title"),
      description: t("home.howwework.s1.desc"),
      detail: t("home.howwework.s1.detail"),
      color: STEP_COLORS[0],
    },
    {
      icon: STEP_ICONS[1],
      number: STEP_NUMBERS[1],
      title: t("home.howwework.s2.title"),
      description: t("home.howwework.s2.desc"),
      detail: t("home.howwework.s2.detail"),
      color: STEP_COLORS[1],
    },
    {
      icon: STEP_ICONS[2],
      number: STEP_NUMBERS[2],
      title: t("home.howwework.s3.title"),
      description: t("home.howwework.s3.desc"),
      detail: t("home.howwework.s3.detail"),
      color: STEP_COLORS[2],
    },
    {
      icon: STEP_ICONS[3],
      number: STEP_NUMBERS[3],
      title: t("home.howwework.s4.title"),
      description: t("home.howwework.s4.desc"),
      detail: t("home.howwework.s4.detail"),
      color: STEP_COLORS[3],
    },
  ];
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Ambient gradient orb */}
      <div className="ambient-orb -top-40 -right-40 md:top-10 md:right-[-100px]" aria-hidden="true" />

      <div className="relative z-[1] section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="pill mb-4 inline-block">{t("home.howwework.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("home.howwework.title")}{" "}
                <span className="gradient-text font-extrabold">{t("home.howwework.title2")}</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Steps — alternating left/right on desktop */}
          <div className="max-w-3xl mx-auto">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal key={step.number} delay={i * 100} direction={isLeft ? "left" : "right"}>
                  <div className="flex gap-5 md:gap-8 mb-10 last:mb-0">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: `${step.color}14`, color: step.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="w-px flex-1 bg-[var(--color-border)] mt-3" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[12px] font-bold tracking-wider"
                          style={{ color: step.color }}
                        >
                          STEP {step.number}
                        </span>
                        <span className="text-[11px] text-[var(--color-text-soft)] bg-[var(--color-bg-soft)] px-2 py-0.5 rounded-full">
                          {step.detail}
                        </span>
                      </div>
                      <h3 className="font-bold text-[20px] md:text-[24px] text-[var(--color-text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
