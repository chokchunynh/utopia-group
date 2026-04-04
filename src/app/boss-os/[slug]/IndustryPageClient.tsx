"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/constants";
import { BOSS_OS_PRICING } from "@/lib/boss-os";
import type { IndustryPage } from "@/lib/boss-os";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Car,
  Sparkles,
  Leaf,
  Wrench,
  ArrowLeft,
  AlertTriangle,
  Check,
  MessageCircle,
  TrendingDown,
  Award,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Car,
  Sparkles,
  Leaf,
  Wrench,
};

export default function IndustryPageClient({ page }: { page: IndustryPage }) {
  const Icon = ICON_MAP[page.icon] || Car;
  const [staff, setStaff] = useState(page.roiDefaults.staff);
  const [hours, setHours] = useState(page.roiDefaults.hoursAdmin);
  const hourlyRate = 15;
  const workingDays = 22;
  const monthlyWaste = Math.round(staff * hours * hourlyRate * workingDays);
  const bossCost = staff <= 10 ? 1500 : 3000;
  const savings = monthlyWaste - bossCost;

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <Link
          href="/#industries"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to all industries
        </Link>
      </div>

      {/* Hero */}
      <section className="section-padding pt-4 md:pt-8 bg-gradient-to-br from-[#f8fafc] to-[#f0f4ff]">
        <div className="section-inner text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-muted)] flex items-center justify-center">
                <Icon size={28} className="text-[var(--color-brand)]" />
              </div>
            </div>
            <h1 className="heading-display text-[32px] md:text-[48px] mb-3">
              {page.headline}
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-body)] max-w-lg mx-auto mb-8">
              {page.subtitle}
            </p>
            <a
              href={whatsappUrl(page.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle size={18} />
              WhatsApp Us — Free Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding">
        <div className="section-inner max-w-2xl">
          <ScrollReveal>
            <h2 className="heading-lg text-[24px] md:text-[30px] text-center mb-8">
              Sound familiar?
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {page.painPoints.map((pain, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                  <AlertTriangle
                    size={18}
                    className="text-red-500 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-[14px] text-red-800">{pain}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-lg text-[24px] md:text-[30px] text-center mb-8">
              How Boss OS solves this
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card h-full">
                  <div className="flex items-start gap-2 mb-2">
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 flex-shrink-0"
                    />
                    <h3 className="font-bold text-[14px] text-[var(--color-text-primary)]">
                      {f.name}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[var(--color-text-body)] leading-relaxed pl-6">
                    {f.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="section-inner max-w-md">
          <ScrollReveal>
            <h2 className="heading-lg text-[24px] md:text-[30px] text-center mb-8">
              Real results
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="card text-center">
              <div className="font-bold text-[16px] text-[var(--color-text-primary)] mb-4">
                {page.caseStudy.name} — {page.name}
              </div>
              <div className="flex gap-3 mb-4">
                <div className="flex-1 rounded-xl bg-red-50 p-4">
                  <div className="text-[10px] font-semibold text-red-800 uppercase tracking-wider">
                    Before
                  </div>
                  <div className="text-[22px] font-extrabold text-red-600">
                    {page.caseStudy.before.value}
                  </div>
                  <div className="text-[11px] text-red-700">
                    {page.caseStudy.before.label}
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-emerald-50 p-4">
                  <div className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">
                    After
                  </div>
                  <div className="text-[22px] font-extrabold text-emerald-600">
                    {page.caseStudy.after.value}
                  </div>
                  <div className="text-[11px] text-emerald-700">
                    {page.caseStudy.after.label}
                  </div>
                </div>
              </div>
              <p className="text-[14px] font-semibold text-emerald-600">
                {page.caseStudy.result}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner max-w-xl">
          <ScrollReveal>
            <h2 className="heading-lg text-[24px] md:text-[30px] text-center mb-8">
              Calculate your savings
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="card-flat text-center">
                <label className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium">
                  Staff count
                </label>
                <div className="text-[28px] font-extrabold text-[var(--color-text-primary)] my-2">
                  {staff}
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={staff}
                  onChange={(e) => setStaff(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="card-flat text-center">
                <label className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium">
                  Hours/day on admin
                </label>
                <div className="text-[28px] font-extrabold text-[var(--color-text-primary)] my-2">
                  {hours}
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={0.5}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-[#fefce8] border border-[#fde68a] p-5 text-center mb-3">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingDown size={14} className="text-red-500" />
                <span className="text-[12px] text-[#92400e]">
                  You&apos;re losing approximately
                </span>
              </div>
              <div className="text-[32px] font-extrabold text-red-600">
                RM {monthlyWaste.toLocaleString()}{" "}
                <span className="text-[16px] font-normal text-[#92400e]">
                  /month
                </span>
              </div>
            </div>
            {savings > 0 && (
              <p className="text-center text-[14px] font-semibold text-emerald-600">
                Boss OS costs RM{bossCost.toLocaleString()}/month. You save RM
                {savings.toLocaleString()}.
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="section-inner max-w-2xl">
          <ScrollReveal>
            <h2 className="heading-lg text-[24px] md:text-[30px] text-center mb-8">
              Get Boss OS for your {page.name.toLowerCase()} business
            </h2>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {BOSS_OS_PRICING.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`card relative flex-1 ${
                    plan.highlighted
                      ? "border-2 border-[var(--color-brand)]"
                      : ""
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 right-4 bg-[var(--color-brand)] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <div className="text-[12px] text-[var(--color-text-muted)] font-semibold uppercase tracking-wider mb-1">
                    {plan.name}
                  </div>
                  <div className="text-[28px] font-extrabold text-[var(--color-text-primary)]">
                    {plan.setup}
                  </div>
                  <div className="text-[12px] text-[var(--color-text-muted)] mb-1">
                    one-time setup
                  </div>
                  <div className="text-[20px] font-bold text-[var(--color-text-primary)] mt-1">
                    {plan.monthly}
                    <span className="text-[12px] font-normal text-[var(--color-text-muted)]">
                      /month
                    </span>
                  </div>
                  <div className="text-[12px] font-semibold text-emerald-600 mb-4">
                    → saves {plan.savings}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[13px] text-[var(--color-text-body)]"
                      >
                        <Check
                          size={14}
                          className="text-emerald-500 mt-0.5 flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl(page.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center rounded-xl py-3 font-semibold text-[14px] transition-opacity hover:opacity-90 ${
                      plan.highlighted
                        ? "bg-[var(--color-brand)] text-white"
                        : "bg-[var(--color-bg-soft)] text-[var(--color-brand)] border border-[var(--color-border)]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">
              <Award size={14} className="text-emerald-600" />
              <span className="text-[12px] text-emerald-700 font-medium">
                Eligible for MDEC / SME Corp Digitalization Grant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-bg-muted)] to-[#fdf2f8]">
        <div className="section-inner max-w-xl text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-[24px] md:text-[30px] mb-3">
              Ready to automate your {page.name.toLowerCase()} business?
            </h2>
            <p className="text-[14px] text-[var(--color-text-body)] mb-6">
              One WhatsApp message. 15-minute chat. No hard sell.
            </p>
            <a
              href={whatsappUrl(page.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
