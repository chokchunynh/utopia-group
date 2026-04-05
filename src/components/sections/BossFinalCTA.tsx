"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageCircle } from "lucide-react";

export default function BossFinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-[var(--color-bg-muted)] to-[#fdf2f8]">
      <div className="section-inner max-w-xl text-center">
        <ScrollReveal>
          <h2 className="heading-lg text-[28px] md:text-[36px] mb-3">
            {t("cta.title")}
          </h2>
          <p className="text-[15px] text-[var(--color-text-body)] mb-8">
            {t("cta.subtitle")}
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-[16px] px-8 py-4 inline-flex"
          >
            <MessageCircle size={20} />
            {t("cta.button")}
          </a>

          <p className="text-[12px] text-[var(--color-text-soft)] mt-4">
            {t("cta.note")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
