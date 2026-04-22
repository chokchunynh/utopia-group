"use client";

import Image from "next/image";
import { AuditSample, CATEGORY_META } from "@/lib/audit-samples";

type Props = {
  audit: AuditSample;
  compact?: boolean;
};

export default function AuditDocument({ audit, compact = false }: Props) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[var(--color-border)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden ${
        compact ? "text-[13px]" : "text-[13px] md:text-[14px]"
      }`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="p-6 md:p-10">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-5 border-b border-[var(--color-border)]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{audit.industryIcon}</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-soft)] font-semibold">
                {audit.industry}
              </span>
            </div>
            <h3 className="heading-display text-[22px] md:text-[30px] leading-[1.1] text-[var(--color-text-primary)] mb-1">
              AI Audit — {audit.company}
            </h3>
            <p className="text-[13px] text-[var(--color-text-muted)]">
              {audit.subtitle}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="heading-display text-[22px] text-[var(--color-text-primary)] mb-2">
              utopia.
            </div>
            <div className="text-[10.5px] text-[var(--color-text-soft)] leading-[1.55]">
              <div className="font-semibold text-[var(--color-text-muted)]">
                Prepared by Utopia AI Team
              </div>
              <div>Utopia Accelerator Sdn Bhd (1547823-K)</div>
              <div>Engagement: RM500 · {audit.date}</div>
              <div>Report ref: {audit.ref}</div>
            </div>
          </div>
        </div>

        {/* ===== PHOTO BANNER ===== */}
        <div className="relative -mx-6 md:-mx-10 mt-6 aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src={audit.photo}
            alt={audit.photoAlt}
            width={1600}
            height={686}
            priority={false}
            className="w-full h-full object-cover"
          />
          {/* bottom gradient for caption legibility */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%)",
            }}
          />
          {/* top-right anonymized label */}
          <div className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-white text-[9.5px] font-medium tracking-wide opacity-80">
            Sample engagement · anonymized
          </div>
          {/* bottom-left floating caption */}
          <div className="absolute bottom-3 left-3 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1.5 text-white text-[11px] font-medium flex items-center gap-1.5">
            <span>{audit.industryIcon}</span>
            <span>{audit.industry}</span>
          </div>
        </div>

        {/* ===== SNAPSHOT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-5 border-b border-[var(--color-border)]">
          <SnapCell label="Operation" value={audit.snapshot.operation} />
          <SnapCell label="Volume" value={audit.snapshot.volume} />
          <SnapCell label="Current stack" value={audit.snapshot.stack} />
        </div>

        {/* ===== TOP 5 FINDINGS ===== */}
        <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)] mt-5 mb-3">
          Top 5 findings
        </div>

        <div>
          {audit.findings.map((f, i) => {
            const cat = CATEGORY_META[f.category];
            const isLast = i === audit.findings.length - 1;
            return (
              <div
                key={f.num}
                className={`grid grid-cols-[34px_1fr] gap-3 md:gap-4 py-4 ${
                  !isLast ? "border-b border-[var(--color-border)]" : ""
                }`}
              >
                <div
                  className="heading-display text-[26px] md:text-[28px] leading-none text-[var(--color-brand)]"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {f.num}
                </div>
                <div className="min-w-0">
                  {/* Category pill — shining */}
                  <span
                    className="shine-pill inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
                    style={{
                      background: cat.bg,
                      color: cat.color,
                      boxShadow: `0 0 0 1px ${cat.ring} inset`,
                    }}
                  >
                    <span className="relative z-10">{cat.emoji}</span>
                    <span className="relative z-10">{f.category}</span>
                  </span>
                  <h4 className="text-[14px] md:text-[15px] font-bold text-[var(--color-text-primary)] leading-tight mb-1">
                    {f.title}
                  </h4>
                  <p className="text-[12px] md:text-[13px] text-[var(--color-text-body)] leading-[1.55] mb-2">
                    {f.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] md:text-[12px] text-[var(--color-text-muted)] pt-0.5">
                    <span>
                      Saving:{" "}
                      <b className="text-[var(--color-warning)] font-bold">
                        {f.savingPerYear}
                      </b>
                    </span>
                    <span>
                      Fix:{" "}
                      <b className="text-[var(--color-text-primary)] font-semibold">
                        {f.fixSetup}
                      </b>{" "}
                      + {f.fixMonthly}
                    </span>
                    <span>
                      Payback:{" "}
                      <b className="text-[var(--color-text-primary)] font-semibold">
                        {f.payback}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== IMPACT BOX ===== */}
        <div className="mt-6 rounded-xl border-2 border-[var(--color-warning)] bg-[#FFFBEB] p-5 md:p-6">
          <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 text-[13px] text-[var(--color-text-body)]">
            <div>Time saved</div>
            <div className="text-right font-semibold text-[var(--color-text-primary)]">
              {audit.impact.timeSaved}
            </div>
            <div>Money saved / recovered</div>
            <div className="text-right font-semibold text-[var(--color-text-primary)]">
              {audit.impact.moneySaved}
            </div>
            <div>Our cost (setup + 12 months service)</div>
            <div className="text-right font-semibold text-[var(--color-text-primary)]">
              {audit.impact.ourCost}
            </div>
          </div>
          <div className="h-px bg-[var(--color-warning)] opacity-30 my-4" />
          <div className="flex items-baseline justify-between gap-4">
            <div className="text-[13px] md:text-[15px] font-bold uppercase tracking-wide text-[var(--color-brand)]">
              Net year-1 gain
            </div>
            <div
              className="heading-display text-[34px] md:text-[42px] leading-none text-[var(--color-warning)]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {audit.impact.netGainNumber}
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[var(--color-warning)]/30 flex justify-between text-[12px] text-[var(--color-text-body)]">
            <span>Payback on full engagement</span>
            <span className="font-semibold text-[var(--color-text-primary)]">
              {audit.impact.payback}
            </span>
          </div>
        </div>

        {/* ===== ENGAGEMENT TERMS ===== */}
        <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)] mt-6 mb-3">
          Engagement terms
        </div>
        <div className="border border-[var(--color-border)] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
            <div className="bg-[var(--color-bg-soft)] p-4 border-b md:border-b-0 md:border-r border-[var(--color-border)]">
              <div className="text-[12px] font-bold text-[var(--color-brand)]">
                Full rollout
              </div>
              <div className="text-[18px] md:text-[20px] font-extrabold text-[var(--color-text-primary)] mt-1">
                {audit.terms.fullRollout}
              </div>
            </div>
            <div className="p-4 text-[12.5px] text-[var(--color-text-body)] leading-[1.6]">
              <ul className="space-y-1.5">
                <li>
                  <b className="text-[var(--color-text-primary)]">
                    50% upfront on confirmation:
                  </b>{" "}
                  {audit.terms.upfront}
                </li>
                <li>
                  <b className="text-[var(--color-text-primary)]">
                    6-month installment:
                  </b>{" "}
                  {audit.terms.monthly}/month (Months 1–6)
                </li>
                <li>
                  <b className="text-[var(--color-text-primary)]">
                    Total collected by Month 6
                  </b>{" "}
                  — service continues through Month 12 at no extra cost
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--color-border)] grid grid-cols-1 md:grid-cols-[200px_1fr]">
            <div className="bg-[var(--color-bg-soft)] p-4 border-b md:border-b-0 md:border-r border-[var(--color-border)]">
              <div className="text-[12px] font-bold text-[var(--color-brand)]">
                Pilot option
              </div>
            </div>
            <div className="p-4 text-[12.5px] text-[var(--color-text-body)] leading-[1.6]">
              Start with any 1 finding: 50% upfront + 6-month installment on
              that finding&apos;s setup fee.{" "}
              <b className="text-[var(--color-text-primary)]">50% refund</b> if
              payback misses projection by Month 3.
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border)] text-center text-[10.5px] text-[var(--color-text-soft)] leading-[1.65]">
          <div>
            <b className="text-[var(--color-text-muted)]">
              Utopia Accelerator Sdn Bhd
            </b>{" "}
            · utopia.my · CY Ng · +60 12-xxx xxxx
          </div>
          <div className="text-[9.5px] text-[var(--color-text-soft)] mt-1 opacity-80">
            © 2026 Utopia Accelerator Sdn Bhd. This document is confidential and
            prepared for the named client only. Projections are estimates based
            on observed data during the audit period and are not guaranteed.
          </div>
        </div>
      </div>

    </div>
  );
}

function SnapCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-soft)] mb-1">
        {label}
      </div>
      <div className="text-[12.5px] text-[var(--color-text-body)] leading-[1.5]">
        {value}
      </div>
    </div>
  );
}
