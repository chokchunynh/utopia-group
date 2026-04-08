"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageCircle, Phone } from "lucide-react";

export default function BossFinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-b from-[var(--color-warm-bg)] to-white relative">
      <div className="grain-overlay" />
      <div className="section-inner max-w-xl text-center relative z-10">
        <ScrollReveal>
          <h2 className="heading-display text-[28px] md:text-[40px] mb-8">
            {t("boss.finalcta.title")}
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-[15px] px-6 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              {t("boss.finalcta.cta.whatsapp")}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[15px] px-6 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              {t("boss.finalcta.cta.call")}
            </a>
          </div>

          <p className="text-[14px] font-medium text-[var(--color-gold)] mt-6">
            {t("boss.finalcta.trust")}
          </p>
          <p className="text-[12px] text-[var(--color-text-soft)] mt-1">
            {t("boss.finalcta.privacy")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
