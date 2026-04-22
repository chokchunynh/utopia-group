import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import AuditDocument from "@/components/ui/AuditDocument";
import AmbientPhotoBackdrop from "@/components/ui/AmbientPhotoBackdrop";
import { AUDIT_SAMPLES, CATEGORY_META, AuditCategory } from "@/lib/audit-samples";
import { whatsappUrl } from "@/lib/constants";

const AMBIENT_PHOTOS = AUDIT_SAMPLES.map((a) => ({
  src: a.photo,
  targetSelector: `#${a.slug}`,
}));

export const metadata: Metadata = {
  title: "Sample AI Audits — What RM500 Gets You | Utopia Accelerator",
  description:
    "Real 1-pager deliverables from our RM500 AI Audit: Kopitiam chain (RM73,920/yr gain), GP clinic (RM112,340/yr), Property management (RM126,120/yr). See exactly what you'll receive.",
  openGraph: {
    title: "Sample AI Audits — What RM500 Gets You",
    description:
      "See the exact 1-pager deliverables from our AI Audit. Real findings. Real ROI. Real payment terms.",
    url: "/audit-samples",
  },
};

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

export default function AuditSamplesPage() {
  return (
    <main className="bg-[var(--color-bg-soft)]">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 premium-grid opacity-[0.4]" aria-hidden />
        <div className="relative z-[1] section-padding !pt-32 md:!pt-44 !pb-12 md:!pb-20">
          <div className="section-inner text-center max-w-3xl mx-auto">
            <span className="pill mb-5 inline-flex">
              <FileText size={14} /> Sample Deliverables
            </span>
            <h1 className="heading-display text-[34px] md:text-[56px] mb-5 leading-[1.05]">
              What{" "}
              <span className="gradient-text font-extrabold">RM500</span>{" "}
              gets you.
            </h1>
            <p className="text-[15px] md:text-[18px] text-[var(--color-text-muted)] leading-relaxed mb-8">
              Three real 1-pager AI Audits — written the same way you&apos;ll
              receive yours. Each one names the finding, quantifies the loss,
              prices the fix, and shows payback. No fluff. No &quot;digital
              transformation.&quot; Just the numbers.
            </p>

            {/* Coverage pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
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

            <div className="inline-flex flex-col sm:flex-row gap-3">
              <a
                href={AUDIT_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Book your RM500 AI Audit
              </a>
              <a href="#audits" className="btn-secondary">
                Scroll to sample audits
              </a>
            </div>

            {/* Promise strip */}
            <div className="flex flex-wrap gap-5 md:gap-8 justify-center mt-10 text-[12.5px] text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-500" />
                Delivered in 5 business days
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-500" />
                100% refund if nothing worth fixing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-500" />
                No software pitch inside
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AUDITS ═══ */}
      <section id="audits" className="pb-20 md:pb-32 relative overflow-hidden bg-white">
        {/* Scroll-linked ambient photo backdrop — cross-fades between audit
            photos based on which <div id={audit.slug}> is most visible. */}
        <AmbientPhotoBackdrop photos={AMBIENT_PHOTOS} />
        <div className="relative z-[1] max-w-4xl mx-auto px-5 md:px-8 pt-12 md:pt-20 space-y-12 md:space-y-20">
          {AUDIT_SAMPLES.map((audit) => (
            <div
              key={audit.slug}
              id={audit.slug}
              className="scroll-mt-28"
            >
              <AuditDocument audit={audit} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-padding bg-white border-t border-[var(--color-border)]">
        <div className="section-inner text-center max-w-2xl mx-auto">
          <h2 className="heading-display text-[28px] md:text-[40px] mb-4">
            Yours could look like this in{" "}
            <span className="gradient-text font-extrabold">5 days</span>.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-8">
            RM500 upfront. We spend a half-day on-site, 2–3 days analyzing, and
            hand you a 1-pager exactly like the ones above. If we don&apos;t
            find at least RM30,000/year in recoverable savings — full refund.
          </p>
          <a
            href={AUDIT_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Book your RM500 AI Audit
          </a>
          <div className="mt-6 text-[13px] text-[var(--color-text-soft)]">
            Or{" "}
            <Link
              href="/how-we-charge"
              className="text-[var(--color-brand)] font-semibold inline-flex items-center gap-1 hover:underline"
            >
              see our full pricing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
