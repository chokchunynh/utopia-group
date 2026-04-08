"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BossHero() {
  const { t } = useLanguage();

  const headlineParts = t("boss.hero.headline").split("\n");

  return (
    <section className="relative overflow-hidden bg-[var(--color-warm-bg)] pt-28 md:pt-40 pb-16 md:pb-28">
      {/* Background patterns */}
      <div className="absolute inset-0 premium-grid opacity-[0.7]" />
      <div className="grain-overlay" />

      {/* Ambient orbs */}
      <div
        className="ambient-orb-warm"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
        }}
      />
      <div
        className="ambient-orb-warm"
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "400px",
          height: "400px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
        {/* Headline */}
        <ScrollReveal>
          <h1 className="heading-display text-[36px] md:text-[56px] lg:text-[64px] text-center max-w-3xl mx-auto mb-5">
            {headlineParts.map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {part}
              </span>
            ))}
          </h1>
        </ScrollReveal>

        {/* Subhead */}
        <ScrollReveal delay={80}>
          <p className="text-center text-[16px] md:text-[18px] text-[var(--color-warm-text)] leading-relaxed max-w-xl mx-auto mb-3">
            {t("boss.hero.subhead")}
          </p>
        </ScrollReveal>

        {/* Trust line */}
        <ScrollReveal delay={120}>
          <p className="text-center text-[13px] text-[var(--color-text-soft)] mb-8">
            {t("boss.hero.trust")}
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={160}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 md:mb-16">
            <a
              href="#your-first-week"
              className="btn-primary"
            >
              {t("boss.hero.cta.primary")}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {t("boss.hero.cta.secondary")}
            </a>
          </div>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={220}>
          <div
            className="max-w-[800px] mx-auto rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 25px 80px rgba(184, 134, 11, 0.08), 0 8px 32px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="bg-[var(--color-warm-bg)] rounded-2xl">
              <Image
                src="/images/boss-os/hero-boss-room.webp"
                alt="Boss OS Command Center"
                width={800}
                height={500}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
