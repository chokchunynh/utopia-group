"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function Page() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="heading-lg text-3xl mb-4">{t("comingSoon.title")}</h1>
        <p className="text-[var(--color-text-muted)] mb-6">{t("comingSoon.sub")}</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          {t("comingSoon.whatsapp")}
        </a>
      </div>
    </main>
  );
}
