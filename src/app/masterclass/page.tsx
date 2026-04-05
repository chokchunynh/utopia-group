"use client";

import { whatsappUrl } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DashedGrid from "@/components/ui/DashedGrid";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  User,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Calendar,
  CalendarDays,
  Camera,
} from "lucide-react";

const MASTERCLASS_WA = whatsappUrl(
  "Hi! I'm interested in the Utopia AI Masterclass."
);

export default function MasterclassChooserPage() {
  return (
    <main>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="bg-image-hero"
          style={{ backgroundImage: "url('/hero/bg-masterclass.png')" }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/50" />
        <div className="relative z-10 section-padding !pt-28 !pb-16 md:!pt-36 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/10 text-white/90 border border-white/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                AI Training Program
              </span>
              <h1 className="text-[32px] md:text-[56px] font-bold tracking-tight leading-[1.1] text-white mb-4">
                Utopia AI{" "}
                <span className="gradient-text-hero font-extrabold">
                  Masterclass
                </span>
              </h1>
              <p className="text-[18px] md:text-[22px] font-semibold text-white/90 mb-4 max-w-2xl mx-auto leading-snug">
                AI Training From A Company That Uses It Daily
              </p>
              <p className="text-[#94a3b8] max-w-xl mx-auto text-[16px] leading-relaxed mb-10">
                We saved RM3M+ with AI across our own 35+ companies. Now we
                teach your team — or you — to do the same.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ WORKSHOP PHOTOS ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="pill mb-4">
                <Camera className="w-3.5 h-3.5" />
                Live Sessions
              </span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-3">
                Real Training.{" "}
                <span className="gradient-text font-extrabold">
                  Real Teams.
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                Hands-on AI masterclass sessions with Malaysian companies — not
                slides, real implementation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            <ScrollReveal className="col-span-2 row-span-2">
              <div className="relative rounded-2xl overflow-hidden group h-full min-h-[280px] md:min-h-[420px]">
                <Image
                  src="/images/masterclass/masterclass-presenting.webp"
                  alt="AI Masterclass — live presentation by Utopia trainer"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/90 text-[13px] font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Live AI Training Session
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/masterclass/masterclass-llm-slide.webp"
                  alt="How LLMs Work — masterclass curriculum"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/masterclass/masterclass-hands-on.webp"
                  alt="Participants practicing AI tools hands-on"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} className="col-span-2">
              <div className="relative rounded-2xl overflow-hidden group aspect-[2/1.2] md:aspect-[2/1]">
                <Image
                  src="/images/masterclass/masterclass-workshop.webp"
                  alt="Full workshop room — AI masterclass in progress"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/90 text-[13px] font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Hands-On Workshop
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ CHOOSER ══════════════ */}
      <section className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4">Choose Your Path</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Who Is This{" "}
                <span className="gradient-text font-extrabold">For?</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[16px] leading-relaxed">
                We have two programs — one for companies training their teams,
                and one for individuals who want to level up on their own.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Companies */}
            <ScrollReveal>
              <Link href="/masterclass/company" className="block h-full">
                <div className="card h-full flex flex-col hover:border-[var(--color-brand)] transition-colors duration-200 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[#116dff]/10 flex items-center justify-center mb-5">
                    <Building2 className="w-7 h-7 text-[var(--color-brand)]" />
                  </div>
                  <h3 className="heading-md text-[22px] mb-2">
                    For Companies
                  </h3>
                  <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed mb-5 flex-1">
                    On-site team training tailored to your business. We come to
                    your office, train your team, and build AI tools for your
                    actual workflows.
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {[
                      "Full-day intensive or 4-week transformation",
                      "Up to 8 participants per session",
                      "RM12,000 – RM32,000",
                      "Department-by-department AI rollout",
                      "Custom AI tools built for your company",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5 shrink-0" />
                        <span className="text-[14px] text-[var(--color-text-body)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 text-[var(--color-brand)] font-semibold text-[15px] group-hover:gap-3 transition-all duration-200">
                    View Company Programs
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Individuals */}
            <ScrollReveal delay={120}>
              <Link href="/masterclass/individual" className="block h-full">
                <div className="card h-full flex flex-col hover:border-[var(--color-brand)] transition-colors duration-200 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center mb-5">
                    <User className="w-7 h-7 text-[#8B5CF6]" />
                  </div>
                  <h3 className="heading-md text-[22px] mb-2">
                    For Individuals
                  </h3>
                  <p className="text-[var(--color-text-body)] text-[15px] leading-relaxed mb-5 flex-1">
                    Personal AI mastery program. Learn Claude Code, ChatGPT,
                    Gemini, and the full AI ecosystem at your own pace with
                    weekly live sessions.
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {[
                      "8 weekly live sessions",
                      "RM299 per session (RM2,392 total)",
                      "1-on-1 or small group format",
                      "Build a real portfolio project",
                      "Fresh grads, professionals & entrepreneurs",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 shrink-0" />
                        <span className="text-[14px] text-[var(--color-text-body)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 text-[#8B5CF6] font-semibold text-[15px] group-hover:gap-3 transition-all duration-200">
                    View Individual Program
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ QUICK COMPARE ══════════════ */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="pill mb-4">Compare</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Quick Comparison
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-[var(--color-border)]">
                    <th className="py-4 px-4 text-[14px] font-semibold text-[var(--color-text-primary)]" />
                    <th className="py-4 px-4 text-[14px] font-semibold text-[var(--color-brand)]">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Companies
                      </div>
                    </th>
                    <th className="py-4 px-4 text-[14px] font-semibold text-[#8B5CF6]">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Individuals
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14px] text-[var(--color-text-body)]">
                  {[
                    ["Format", "On-site at your office", "Online live sessions"],
                    [
                      "Duration",
                      "1 day (8h) or 4 weeks",
                      "8 weekly sessions",
                    ],
                    [
                      "Group Size",
                      "Up to 8 per company",
                      "1-on-1 or small group",
                    ],
                    [
                      "Price",
                      "RM12,000 – RM32,000",
                      "RM299/session (RM2,392 total)",
                    ],
                    [
                      "Focus",
                      "Company processes & tools",
                      "Personal AI skills & portfolio",
                    ],
                    [
                      "Take-Home",
                      "Working AI workflows for your company",
                      "Built project + certification",
                    ],
                  ].map(([label, company, individual]) => (
                    <tr
                      key={label}
                      className="border-b border-[var(--color-border)]"
                    >
                      <td className="py-3.5 px-4 font-semibold text-[var(--color-text-primary)]">
                        {label}
                      </td>
                      <td className="py-3.5 px-4">{company}</td>
                      <td className="py-3.5 px-4">{individual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ CTA FOOTER ══════════════ */}
      <section className="relative gradient-cta-band overflow-hidden">
        <DashedGrid />
        <div className="relative z-10 section-padding !py-20 md:!py-28">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-display text-[28px] md:text-[44px] mb-4">
                Not Sure Which One?{" "}
                <span className="gradient-text">Ask Us.</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto text-[16px] leading-relaxed">
                WhatsApp us and we&apos;ll recommend the right program based on
                your goals — no commitment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={MASTERCLASS_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-10 py-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <Link
                  href="/masterclass/company"
                  className="btn-secondary text-base px-8 py-4"
                >
                  <Building2 className="w-5 h-5" />
                  Companies
                </Link>
                <Link
                  href="/masterclass/individual"
                  className="btn-secondary text-base px-8 py-4"
                >
                  <User className="w-5 h-5" />
                  Individuals
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
