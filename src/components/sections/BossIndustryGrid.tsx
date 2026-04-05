"use client";

import Link from "next/link";
import { INDUSTRIES } from "@/lib/boss-os";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Car,
  Sparkles,
  Building2,
  Leaf,
  Heart,
  Home,
  Bike,
  UtensilsCrossed,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Car,
  Sparkles,
  Building2,
  Leaf,
  Heart,
  Home,
  Bike,
  UtensilsCrossed,
};

export default function BossIndustryGrid() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="section-padding">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              {t("industry.title")}
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              {t("industry.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICON_MAP[industry.icon] || Car;
            return (
              <ScrollReveal key={industry.id} delay={i * 60}>
                <Link
                  href={`/boss-os/${industry.slug}`}
                  className="card flex flex-col items-center justify-center text-center py-6 px-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center mb-3 group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors">
                    <Icon
                      size={22}
                      className="text-[var(--color-brand)] group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="font-semibold text-[13px] text-[var(--color-text-primary)]">
                    {industry.name}
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
