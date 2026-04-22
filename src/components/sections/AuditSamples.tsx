"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AmbientPhotoBackdrop from "@/components/ui/AmbientPhotoBackdrop";
import { AUDIT_SAMPLES, CATEGORY_META, AuditCategory } from "@/lib/audit-samples";
import { whatsappUrl } from "@/lib/constants";

const AUDIT_WA = whatsappUrl(
  "Hi! I'd like to book the RM500 AI Audit for my business. Can you send me the details?"
);

const ALL_CATEGORIES: AuditCategory[] = [
  "Operations",
  "Sales",
  "Marketing",
  "Finance",
  "HR",
  "Customer",
];

const AMBIENT_PHOTOS = AUDIT_SAMPLES.map((a) => ({
  src: a.photo,
  targetSelector: `[data-audit-card="${a.slug}"]`,
}));

export default function AuditSamples() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Scroll-linked ambient photo backdrop — sits behind everything else.
          Includes its own gradient legibility overlay using --color-bg-soft. */}
      <AmbientPhotoBackdrop photos={AMBIENT_PHOTOS} />

      {/* Existing premium cross-hatch pattern — stays ABOVE the photos. */}
      <div className="absolute inset-0 premium-grid opacity-[0.5] z-[1]" aria-hidden />

      <div className="section-inner relative z-[2]">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="pill mb-4 inline-flex">
              <FileText size={14} /> RM500 AI Audit · Sample deliverables
            </span>
            <h2 className="heading-display text-[28px] md:text-[44px] mb-4">
              What{" "}
              <span className="gradient-text font-extrabold">RM500</span>{" "}
              gets you.
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
              Real 1-pager deliverables from our AI Audit. We find where your
              business loses time and money, quantify the fix, and show payback
              — before you commit to anything bigger.
            </p>
          </div>
        </ScrollReveal>

        {/* Coverage pills */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 justify-center mb-10 md:mb-14">
            {ALL_CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat];
              return (
                <span
                  key={cat}
                  className="shine-pill inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: meta.bg,
                    color: meta.color,
                    boxShadow: `0 0 0 1px ${meta.ring} inset`,
                  }}
                >
                  <span className="relative z-10">{meta.emoji}</span>
                  <span className="relative z-10">{cat}</span>
                </span>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Sample cards — 3-up desktop, horizontal scroll mobile */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {AUDIT_SAMPLES.map((audit, i) => {
            const topFinding = audit.findings[0];
            const topCat = CATEGORY_META[topFinding.category];
            void topCat; // unused but kept for parity with original
            return (
              <ScrollReveal key={audit.slug} delay={i * 120} className="shrink-0 w-[85vw] max-w-[340px] md:w-auto md:max-w-none snap-center">
                <Link
                  href={`/audit-samples#${audit.slug}`}
                  data-audit-card={audit.slug}
                  className="group block h-full bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-[0_20px_60px_rgba(17,109,255,0.12)] hover:border-[var(--color-brand-light)] hover:-translate-y-1 transition-all duration-200"
                >
                  {/* Photo thumbnail — 16:9, tight height so all content stays visible */}
                  <div className="relative w-full aspect-[16/9] max-h-[130px] overflow-hidden bg-[var(--color-bg-soft)]">
                    <Image
                      src={audit.photo}
                      alt={audit.photoAlt}
                      fill
                      sizes="(max-width: 768px) 85vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    {/* Industry tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{audit.industryIcon}</span>
                      <span className="text-[10.5px] uppercase tracking-[0.12em] text-[var(--color-text-soft)] font-semibold">
                        {audit.industry}
                      </span>
                    </div>

                    <h3 className="heading-display text-[18px] md:text-[20px] text-[var(--color-text-primary)] leading-[1.2] mb-1">
                      {audit.company}
                    </h3>
                    <p className="text-[12px] text-[var(--color-text-muted)] mb-5 leading-tight">
                      {audit.subtitle}
                    </p>

                    {/* Net gain hero */}
                    <div className="rounded-xl bg-[#FFFBEB] border border-[var(--color-warning)]/30 p-4 mb-5">
                      <div className="text-[10px] uppercase tracking-[0.1em] font-bold text-[var(--color-brand)] mb-1">
                        Net year-1 gain
                      </div>
                      <div
                        className="heading-display text-[28px] md:text-[32px] leading-none text-[var(--color-warning)]"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {audit.impact.netGainNumber}
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] mt-2">
                        Payback in {audit.impact.payback}
                      </div>
                    </div>

                    {/* Finding teaser */}
                    <div className="mb-3">
                      <div className="text-[10px] uppercase tracking-[0.1em] font-bold text-[var(--color-text-soft)] mb-2">
                        5 findings · covering
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {audit.findings.map((f) => {
                          const meta = CATEGORY_META[f.category];
                          return (
                            <span
                              key={f.num}
                              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: meta.bg,
                                color: meta.color,
                                boxShadow: `0 0 0 1px ${meta.ring} inset`,
                              }}
                            >
                              <span>{meta.emoji}</span>
                              {f.category}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                      <span className="text-[12.5px] font-semibold text-[var(--color-brand)]">
                        Read full audit
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-[var(--color-brand)] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-10 md:mt-14">
            <div className="inline-flex flex-col sm:flex-row gap-3">
              <a
                href={AUDIT_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Book your RM500 AI Audit
              </a>
              <Link href="/audit-samples" className="btn-secondary">
                See all sample audits
              </Link>
            </div>
            <p className="text-[12px] text-[var(--color-text-soft)] mt-4">
              Delivered in 5 business days · 100% refund if we find nothing
              worth fixing
            </p>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
