"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whatsappUrl } from "@/lib/constants";
import {
  Wrench,
  Package,
  Building2,
  HeartPulse,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ROICalculator() {
  const { t } = useLanguage();

  const BUSINESS_TYPES = [
    {
      id: "service",
      label: t("home.roi.biz.service"),
      icon: Wrench,
      desc: t("home.roi.biz.service.desc"),
      savingsPerStaff: 18000,
      enterpriseMultiplier: 3.5,
    },
    {
      id: "trading",
      label: t("home.roi.biz.trading"),
      icon: Package,
      desc: t("home.roi.biz.trading.desc"),
      savingsPerStaff: 12000,
      enterpriseMultiplier: 4,
    },
    {
      id: "asset",
      label: t("home.roi.biz.asset"),
      icon: Building2,
      desc: t("home.roi.biz.asset.desc"),
      savingsPerStaff: 25000,
      enterpriseMultiplier: 3,
    },
    {
      id: "healthcare",
      label: t("home.roi.biz.healthcare"),
      icon: HeartPulse,
      desc: t("home.roi.biz.healthcare.desc"),
      savingsPerStaff: 22000,
      enterpriseMultiplier: 3.2,
    },
    {
      id: "fnb",
      label: t("home.roi.biz.fnb"),
      icon: UtensilsCrossed,
      desc: t("home.roi.biz.fnb.desc"),
      savingsPerStaff: 14000,
      enterpriseMultiplier: 3,
    },
    {
      id: "other",
      label: t("home.roi.biz.other"),
      icon: Briefcase,
      desc: t("home.roi.biz.other.desc"),
      savingsPerStaff: 15000,
      enterpriseMultiplier: 3,
    },
  ];
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [staffCount, setStaffCount] = useState(20);

  const biz = BUSINESS_TYPES.find((b) => b.id === selectedType);
  const isEnterprise = staffCount >= 50;
  const basePerStaff = biz
    ? isEnterprise
      ? biz.savingsPerStaff * biz.enterpriseMultiplier
      : biz.savingsPerStaff
    : 0;
  const annualSavings = staffCount * basePerStaff;
  const monthlySavings = Math.round(annualSavings / 12);

  return (
    <section className="bg-white bg-dotted">
      <div className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="heading-lg text-[24px] md:text-[32px] mb-3">
                  {t("home.roi.title")}
                </h2>
                <p className="text-[var(--color-text-muted)] text-[15px]">
                  {t("home.roi.sub")}
                </p>
              </div>

              <div className="card p-6 md:p-8">
                {/* Step 1: Business Type Selector */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-[var(--color-text-primary)] block mb-3">
                    {t("home.roi.bizType")}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {BUSINESS_TYPES.map((btype) => (
                      <button
                        key={btype.id}
                        type="button"
                        onClick={() => setSelectedType(btype.id)}
                        className={`text-left p-3 rounded-2xl border h-full flex flex-col transition-transform transition-shadow duration-200 ${
                          selectedType === btype.id
                            ? "border-[var(--color-brand)] bg-[var(--color-bg-muted)] shadow-md scale-[1.02]"
                            : "border-[var(--color-border)] hover:border-[var(--color-brand-light)] hover:shadow-sm"
                        }`}
                      >
                        <btype.icon className={`w-5 h-5 mb-2 ${selectedType === btype.id ? "text-[var(--color-brand)]" : "text-[var(--color-text-muted)]"}`} />
                        <span className="text-[13px] font-semibold text-[var(--color-text-primary)] block leading-tight min-h-[32px] flex items-center">
                          {btype.label}
                        </span>
                        <span className="text-[11px] text-[var(--color-text-muted)] mt-1 leading-snug">
                          {btype.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Slider + Results (always visible, grayed out until selection) */}
                <div className={`${!selectedType ? "opacity-40 pointer-events-none select-none" : ""}`}>
                  <div className="border-t border-[var(--color-border)] pt-6 mb-6">
                    <div className="flex justify-between items-end mb-3">
                      <label className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {t("home.roi.staffCount")}
                      </label>
                      <span className="font-bold text-2xl text-[var(--color-brand)] tracking-tight">
                        {staffCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={200}
                      step={5}
                      value={staffCount}
                      onChange={(e) => setStaffCount(parseInt(e.target.value))}
                      aria-label="Number of staff"
                      title="Number of staff"
                      className="w-full accent-[var(--color-brand)] h-2"
                    />
                    <div className="flex justify-between text-xs text-[var(--color-text-soft)] mt-1">
                      <span>5</span>
                      <span>50</span>
                      <span>100</span>
                      <span>200</span>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center mb-6">
                    <p className="text-sm font-medium text-[var(--color-success)] mb-2">
                      {biz ? `${t("home.roi.estimated")} ${biz.label.toLowerCase()}` : t("home.roi.selectFirst")}
                    </p>
                    <div className="font-bold text-4xl md:text-5xl text-[var(--color-success)] tracking-tight">
                      RM{annualSavings.toLocaleString()}
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">
                      {t("home.roi.thats")}{" "}
                      <strong>RM{monthlySavings.toLocaleString()}/month</strong>{" "}
                      {t("home.roi.backInPocket")}
                      {isEnterprise && ` ${t("home.roi.enterprise")}`}
                    </p>
                  </div>

                  {/* Tier info — non-clickable, just informational */}
                  <div className="grid grid-cols-2 gap-3 text-center mb-6">
                    <div className={`p-3 rounded-2xl ${!isEnterprise ? "bg-[var(--color-bg-muted)]" : "bg-white border border-[var(--color-border)]"}`}>
                      <p className="text-[12px] text-[var(--color-text-muted)]">{t("home.roi.sme")}</p>
                      <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">
                        RM{(biz ? biz.savingsPerStaff * 30 : 0).toLocaleString()}/yr avg
                      </p>
                    </div>
                    <div className={`p-3 rounded-2xl ${isEnterprise ? "bg-[var(--color-bg-muted)]" : "bg-white border border-[var(--color-border)]"}`}>
                      <p className="text-[12px] text-[var(--color-text-muted)]">{t("home.roi.enterpriseLabel")}</p>
                      <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">
                        RM{(biz ? Math.round(biz.savingsPerStaff * biz.enterpriseMultiplier * 80) : 0).toLocaleString()}/yr avg
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="text-center">
                    <a
                      href={whatsappUrl(
                        `Hi! I run a ${biz?.label || "business"} with ${staffCount} staff. Your calculator says I could save RM${annualSavings.toLocaleString()}/year. I'd like to learn more!`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp !text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {t("home.roi.talkToUs")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
