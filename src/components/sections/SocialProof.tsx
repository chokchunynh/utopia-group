"use client";

import { TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="glass-card p-6 w-[320px] md:w-[360px] shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-text-primary font-semibold text-sm">{t.name}</p>
          <p className="text-text-muted text-xs">{t.role}, {t.company}</p>
        </div>
      </div>
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </div>
  );
}

export default function SocialProof() {
  const row1 = TESTIMONIALS.slice(0, 10);
  const row2 = TESTIMONIALS.slice(10, 20);

  return (
    <section className="py-20 md:py-28 bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-sm font-medium">What Our Companies Say</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary">
              Trusted Across<br />
              <span className="gradient-text">30+ Malaysian Businesses</span>
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
