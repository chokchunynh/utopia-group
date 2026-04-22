"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import DashedGrid from "@/components/ui/DashedGrid";
import { useLanguage } from "@/lib/language-context";
import { PRICING, whatsappUrl } from "@/lib/constants";
import { Check, HelpCircle, ArrowRight } from "lucide-react";

const CHARGE_WA = whatsappUrl(
  "Hi! I'd like to understand more about your pricing and how AI implementation works for my business."
);

export default function HowWeChargePage() {
  const { t } = useLanguage();

  const FAQ = [
    { q: t("charge.faq.q1"), a: t("charge.faq.a1") },
    { q: t("charge.faq.q2"), a: t("charge.faq.a2") },
    { q: t("charge.faq.q3"), a: t("charge.faq.a3") },
    { q: t("charge.faq.q4"), a: t("charge.faq.a4") },
    { q: t("charge.faq.q5"), a: t("charge.faq.a5") },
    { q: t("charge.faq.q6"), a: t("charge.faq.a6") },
  ];

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div
          className="bg-image-hero"
          style={{ backgroundImage: "url('/hero/bg-masterclass.png')" }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/45" />
        <div className="relative z-10 section-padding !pt-32 md:!pt-44 !pb-16 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/15 text-white/90 border border-white/10 mb-6">
                {t("charge.hero.pill")}
              </span>
              <h1 className="text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.1] text-white mb-5 max-w-3xl mx-auto">
                {t("charge.hero.title")}{" "}
                <span className="gradient-text-hero font-extrabold">
                  {t("charge.hero.title2")}
                </span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {t("charge.hero.sub")}
              </p>
              <div className="mt-6">
                <a
                  href="/audit-samples"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-full transition-colors"
                >
                  See sample audit deliverables{" "}
                  <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section-padding bg-white bg-dotted">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("charge.model.title")}
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                {t("charge.model.sub")}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
            <ScrollReveal delay={0}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4 text-[20px] font-bold text-[var(--color-brand)]">
                  1
                </div>
                <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)] mb-2">
                  {t("charge.model.s1.title")}
                </h3>
                <p className="text-[14px] text-[var(--color-text-muted)]">
                  {t("charge.model.s1.desc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4 text-[20px] font-bold text-[var(--color-brand)]">
                  2
                </div>
                <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)] mb-2">
                  {t("charge.model.s2.title")}
                </h3>
                <p className="text-[14px] text-[var(--color-text-muted)]">
                  {t("charge.model.s2.desc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center mx-auto mb-4 text-[20px] font-bold text-[var(--color-brand)]">
                  3
                </div>
                <h3 className="font-semibold text-[16px] text-[var(--color-text-primary)] mb-2">
                  {t("charge.model.s3.title")}
                </h3>
                <p className="text-[14px] text-[var(--color-text-muted)]">
                  {t("charge.model.s3.desc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ PRICING CARDS ═══ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("charge.pricing.title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
            {PRICING.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 100} className="h-full">
                <div
                  className={`card h-full flex flex-col relative ${
                    i === 1
                      ? "border-2 border-[var(--color-brand)] md:scale-105 md:shadow-xl"
                      : ""
                  }`}
                >
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        i === 1
                          ? "bg-[var(--color-brand)] text-white"
                          : "bg-[var(--color-text-primary)] text-white"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <div className="mb-5 mt-2">
                    <h3 className="heading-md text-lg mb-2">{tier.name}</h3>
                    <div className="font-bold text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-tight">
                      {tier.price}
                    </div>
                    <p className="text-sm text-[var(--color-brand)] font-medium">
                      {tier.priceDetail}
                    </p>
                    <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-5 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[var(--color-success)]" />
                        </div>
                        <span className="text-[13px] text-[var(--color-text-body)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[var(--color-bg-muted)] border border-[var(--color-border-soft)] rounded-2xl p-3 mb-5">
                    <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed">
                      {tier.sellingPoint}
                    </p>
                  </div>

                  <a
                    href={tier.ctaUrl}
                    target={tier.ctaStyle === "whatsapp" ? "_blank" : undefined}
                    rel={
                      tier.ctaStyle === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`w-full !text-sm text-center ${
                      tier.ctaStyle === "whatsapp"
                        ? "btn-whatsapp"
                        : "btn-primary"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-padding bg-white bg-dotted">
        <div className="section-inner max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">{t("charge.faq.pill")}</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                {t("charge.faq.title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 60}>
                <div className="card p-5 md:p-6">
                  <div className="flex gap-3">
                    <HelpCircle className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)] mb-2">
                        {item.q}
                      </h3>
                      <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative gradient-cta-band overflow-hidden">
        <DashedGrid />
        <div className="relative z-10 section-padding !py-20 md:!py-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-lg text-[28px] md:text-[36px] mb-4">
                {t("charge.cta.title")}{" "}
                <span className="gradient-text font-extrabold">
                  {t("charge.cta.title2")}
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto text-[15px]">
                {t("charge.cta.sub")}
              </p>
              <a
                href={CHARGE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                {t("charge.cta.button")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
