"use client";

import { useState, useEffect } from "react";
import { BOSS_PROOF_STATS } from "@/lib/boss-os";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function BossProofStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BOSS_PROOF_STATS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 md:py-8 bg-white border-y border-[var(--color-warm-border)]">
      <div className="max-w-xl mx-auto px-5 text-center relative" style={{ minHeight: "80px" }}>
        {BOSS_PROOF_STATS.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 transition-opacity duration-700"
            style={{
              position: i === activeIndex ? "relative" : "absolute",
              top: i === activeIndex ? undefined : 0,
              left: i === activeIndex ? undefined : 0,
              right: i === activeIndex ? undefined : 0,
              opacity: i === activeIndex ? 1 : 0,
              pointerEvents: i === activeIndex ? "auto" : "none",
            }}
          >
            <AnimatedCounter
              value={stat.value}
              className="text-[28px] md:text-[36px] font-bold text-[var(--color-gold)]"
            />
            <span className="text-[14px] text-[var(--color-warm-text)]">
              {stat.label}
            </span>
            <span className="text-[12px] text-[var(--color-text-soft)] italic">
              {stat.source}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
