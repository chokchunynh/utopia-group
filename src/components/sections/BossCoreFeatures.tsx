"use client";

import { CORE_FEATURES } from "@/lib/boss-os";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  BarChart3,
  MessageCircle,
  Brain,
  Wallet,
  Users,
} from "lucide-react";
import type { TranslationKey } from "@/lib/translations";

const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3,
  MessageCircle,
  Brain,
  Wallet,
  Users,
};

const FEATURE_KEYS: Record<string, { name: TranslationKey; desc: TranslationKey }> = {
  "sales-command": { name: "feature.sales", desc: "feature.sales.desc" },
  "whatsapp-ai": { name: "feature.whatsapp", desc: "feature.whatsapp.desc" },
  "ai-insights": { name: "feature.insights", desc: "feature.insights.desc" },
  "cashflow": { name: "feature.cashflow", desc: "feature.cashflow.desc" },
  "staff-ops": { name: "feature.staff", desc: "feature.staff.desc" },
};

export default function BossCoreFeatures() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              {t("features.title")}
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              {t("features.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CORE_FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] || BarChart3;
            const keys = FEATURE_KEYS[feature.id];
            return (
              <ScrollReveal key={feature.id} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: feature.bg }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: `${feature.color}15`,
                    }}
                  >
                    <Icon size={20} style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-bold text-[16px] text-[var(--color-text-primary)] mb-2">
                    {keys ? t(keys.name) : feature.name}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-body)] leading-relaxed">
                    {keys ? t(keys.desc) : feature.description}
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
