"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/language-context";
import { DEPARTMENTS, whatsappUrl } from "@/lib/constants";
import {
  MessageCircle,
  Calculator,
  Package,
  Megaphone,
  Users,
  Settings,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "message-circle": MessageCircle,
  calculator: Calculator,
  package: Package,
  megaphone: Megaphone,
  users: Users,
  settings: Settings,
};

const TOOLS_WA = whatsappUrl(
  "Hi! I saw your AI tools page. I'd like to learn more about implementing these for my business."
);

export default function AutomatePage() {
  const { t } = useLanguage();
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div
          className="bg-image-hero"
          style={{ backgroundImage: "url('/hero/bg-light.png')" }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f2027]/40" />
        <div className="relative z-10 section-padding !pt-32 md:!pt-44 !pb-16 md:!pb-24">
          <div className="section-inner text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/15 text-white/90 border border-white/10 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {t("automate.hero.pill")}
              </span>
              <h1 className="text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.1] text-white mb-5 max-w-3xl mx-auto">
                {t("automate.hero.title")}{" "}
                <span className="gradient-text-hero font-extrabold">
                  {t("automate.hero.title2")}
                </span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {t("automate.hero.sub")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <section className="section-padding !py-8 md:!py-10 bg-[var(--color-bg-muted)]">
        <div className="section-inner">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-center">
            <div>
              <div className="font-bold text-xl text-[var(--color-text-primary)]">8+</div>
              <p className="text-[12px] text-[var(--color-text-muted)]">{t("automate.stats.tools")}</p>
            </div>
            <div className="w-px h-8 bg-[var(--color-border)] hidden md:block" />
            <div>
              <div className="font-bold text-xl text-[var(--color-text-primary)]">35+</div>
              <p className="text-[12px] text-[var(--color-text-muted)]">{t("automate.stats.companies")}</p>
            </div>
            <div className="w-px h-8 bg-[var(--color-border)] hidden md:block" />
            <div>
              <div className="font-bold text-xl text-[var(--color-text-primary)]">400+</div>
              <p className="text-[12px] text-[var(--color-text-muted)]">{t("automate.stats.users")}</p>
            </div>
            <div className="w-px h-8 bg-[var(--color-border)] hidden md:block" />
            <div>
              <div className="font-bold text-xl text-[var(--color-text-primary)]">70%</div>
              <p className="text-[12px] text-[var(--color-text-muted)]">{t("automate.stats.improvement")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tools by Department ─── */}
      {DEPARTMENTS.map((dept, deptIdx) => {
        const Icon = ICONS[dept.icon] || MessageCircle;
        const isEven = deptIdx % 2 === 0;

        return (
          <section
            key={dept.id}
            className={isEven ? "bg-white" : "bg-[var(--color-bg-soft)]"}
          >
            <div className="section-padding">
              <div className="section-inner">
                <ScrollReveal>
                  {/* Department header — alternating alignment */}
                  <div className={`mb-8 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-start" : "md:justify-end"} justify-center`}>
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center"
                        style={{ background: `${dept.color}14`, color: dept.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="heading-lg text-[24px] md:text-[32px]">
                        {dept.name}
                      </h2>
                    </div>
                    <p className="text-[var(--color-text-muted)] text-[15px] max-w-xl leading-relaxed"
                       style={isEven ? {} : { marginLeft: "auto" }}>
                      {dept.description}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Tool cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {dept.tools.map((tool, i) => (
                    <ScrollReveal key={tool.name} delay={i * 80}>
                      <a
                        href={tool.url}
                        target={tool.url.startsWith("http") ? "_blank" : undefined}
                        rel={tool.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="card h-full flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
                            style={{ background: `${dept.color}10` }}
                          >
                            {tool.logo ? (
                              <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={28}
                                height={28}
                                className="object-contain"
                                unoptimized
                              />
                            ) : (
                              <span style={{ color: dept.color }}>
                                <Icon className="w-5 h-5" />
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)]">
                                {tool.name}
                              </h3>
                              {tool.url.startsWith("http") && (
                                <ExternalLink className="w-3 h-3 text-[var(--color-text-soft)]" />
                              )}
                            </div>
                            {tool.url.startsWith("http") && (
                              <span className="badge-live text-[10px]">Live</span>
                            )}
                          </div>
                        </div>
                        <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed flex-1">
                          {tool.desc}
                        </p>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/bg-light.png')" }}
        />
        <div className="absolute inset-0 z-[1] bg-white/80" />
        <div className="relative z-10 section-padding !py-20 md:!py-28">
          <div className="section-inner text-center">
            <ScrollReveal>
              <h2 className="heading-display text-[28px] md:text-[40px] mb-4">
                {t("automate.cta.title")}{" "}
                <span className="gradient-text font-extrabold">{t("automate.cta.title2")}</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto text-[15px]">
                {t("automate.cta.sub")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={TOOLS_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  {t("automate.cta.whatsapp")}
                </a>
                <Link href="/how-we-charge" className="btn-secondary">
                  {t("automate.cta.pricing")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
