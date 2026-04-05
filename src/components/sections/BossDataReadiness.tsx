"use client";

import { useState } from "react";
import { DATA_SOURCES } from "@/lib/boss-os";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Receipt,
  Briefcase,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Database,
} from "lucide-react";
import type { TranslationKey } from "@/lib/translations";

const ICON_MAP: Record<string, React.ElementType> = {
  Receipt,
  Briefcase,
  BookOpen,
};

const DATA_KEYS: Record<string, { name: TranslationKey; desc: TranslationKey }> = {
  sales: { name: "data.sales", desc: "data.sales.desc" },
  hr: { name: "data.hr", desc: "data.hr.desc" },
  accounting: { name: "data.accounting", desc: "data.accounting.desc" },
};

export default function BossDataReadiness() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[var(--color-bg-soft)]">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center">
                <Database size={20} className="text-[var(--color-brand)]" />
              </div>
            </div>
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              {t("data.title")}
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              {t("data.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
          {DATA_SOURCES.map((source, i) => {
            const Icon = ICON_MAP[source.icon] || Receipt;
            const isOpen = expanded === source.id;
            const keys = DATA_KEYS[source.id];

            return (
              <ScrollReveal key={source.id} delay={i * 80}>
                <button
                  onClick={() => setExpanded(isOpen ? null : source.id)}
                  className="card w-full text-left cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center mb-3">
                      <Icon size={24} className="text-[var(--color-brand)]" />
                    </div>
                    <h3 className="font-bold text-[15px] text-[var(--color-text-primary)] mb-1">
                      {keys ? t(keys.name) : source.name}
                    </h3>
                    <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed mb-2">
                      {keys ? t(keys.desc) : source.description}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-[var(--color-brand)] font-medium">
                      {isOpen ? "Hide examples" : "See examples"}
                      {isOpen ? (
                        <ChevronUp size={12} />
                      ) : (
                        <ChevronDown size={12} />
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                      <ul className="space-y-1.5">
                        {source.examples.map((ex) => (
                          <li
                            key={ex}
                            className="text-[12px] text-[var(--color-text-body)] flex items-start gap-1.5"
                          >
                            <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                              •
                            </span>
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <div className="inline-block rounded-xl bg-[var(--color-bg-muted)] px-5 py-3">
              <p className="text-[14px] text-[var(--color-brand)] font-medium">
                {t("data.enough")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
