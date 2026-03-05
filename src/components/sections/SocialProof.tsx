"use client";

import { TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="glass-card-dark p-6 w-[320px] md:w-[360px] shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-white/50 text-xs">{t.role}, {t.company}</p>
        </div>
      </div>
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-white/70 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </div>
  );
}

export default function SocialProof() {
  const row1 = TESTIMONIALS.slice(0, 10);
  const row2 = TESTIMONIALS.slice(10, 20);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-navy)] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-sm font-medium">What Our Companies Say</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-white">
              Trusted Across<br />
              <span className="gradient-text-light">30+ Malaysian Businesses</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-6">
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{ animation: "scroll-left 60s linear infinite", width: "max-content" }}
        >
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{ animation: "scroll-right 60s linear infinite", width: "max-content" }}
        >
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
