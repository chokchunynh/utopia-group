"use client";

import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Lock, FileText, LogOut } from "lucide-react";
import type { TranslationKey } from "@/lib/translations";

const TRUST_BADGES: { icon: React.ElementType; key: TranslationKey }[] = [
  { icon: Lock, key: "privacy.pdpa" },
  { icon: FileText, key: "privacy.nda" },
  { icon: LogOut, key: "privacy.revoke" },
];

export default function BossDataPrivacy() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="section-inner max-w-2xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="heading-lg text-[24px] md:text-[30px] mb-3">
              {t("privacy.title")}
            </h2>
            <p className="text-[14px] text-[var(--color-text-body)] leading-relaxed max-w-lg mx-auto mb-6">
              {t("privacy.body")}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {TRUST_BADGES.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-muted)] px-4 py-2"
                >
                  <Icon size={14} className="text-[var(--color-brand)]" />
                  <span className="text-[12px] font-medium text-[var(--color-brand)]">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
