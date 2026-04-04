"use client";

import { CORE_FEATURES } from "@/lib/boss-os";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  BarChart3,
  MessageCircle,
  Brain,
  Wallet,
  Users,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3,
  MessageCircle,
  Brain,
  Wallet,
  Users,
};

export default function BossCoreFeatures() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              5 things Boss OS handles from Day 1
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              Every feature below is live in your system within 2 weeks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CORE_FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] || BarChart3;
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
                    {feature.name}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-body)] leading-relaxed">
                    {feature.description}
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
