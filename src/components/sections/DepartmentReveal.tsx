"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DEPARTMENTS } from "@/lib/constants";
import {
  MessageCircle,
  Calculator,
  Package,
  Megaphone,
  Users,
  Settings,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "message-circle": MessageCircle,
  calculator: Calculator,
  package: Package,
  megaphone: Megaphone,
  users: Users,
  settings: Settings,
};

export default function DepartmentReveal() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const heroDept = DEPARTMENTS[0]; // Sales & WhatsApp — #1 product
  const restDepts = DEPARTMENTS.slice(1);
  const HeroIcon = ICONS[heroDept.icon] || MessageCircle;

  return (
    <section id="tools" className="bg-[var(--color-bg-soft)]">
      <div className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">
                Areas of AI Improvement
              </span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                Average client: 6 areas. All-In clients: 15 areas.
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                We find every part of your business where AI can save time, cut
                costs, or make money.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {/* ── Hero Card — Sales & WhatsApp (full-width) ── */}
            <ScrollReveal>
              <div className="mb-4">
                <div
                  className="relative p-6 md:p-8 rounded-3xl border border-[var(--color-whatsapp)]/30 bg-white overflow-hidden"
                  style={{ boxShadow: "0 4px 24px rgba(37, 211, 102, 0.08)" }}
                >
                  <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center"
                          style={{ background: `${heroDept.color}14`, color: heroDept.color }}
                        >
                          <HeroIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[17px] text-[var(--color-text-primary)]">
                            {heroDept.name}
                          </h3>
                          <span className="text-[11px] font-semibold text-[var(--color-whatsapp)] uppercase tracking-wider">
                            Our #1 Tool
                          </span>
                        </div>
                      </div>
                      <p className="text-[15px] text-[var(--color-text-body)] leading-relaxed mb-4 max-w-xl">
                        {heroDept.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {heroDept.tools.map((tool) => (
                          <a
                            key={tool.name}
                            href={tool.url}
                            className="text-[12px] font-medium px-3 py-1 rounded-full hover:opacity-80 transition-opacity"
                            style={{ background: `${heroDept.color}10`, color: heroDept.color }}
                          >
                            {tool.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <a
                      href="#trueai"
                      className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--color-whatsapp)] text-white hover:opacity-90 transition-opacity shrink-0"
                    >
                      See TrueAI Demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Bento Grid — remaining departments with rich expansion ── */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {restDepts.map((dept) => {
                  const Icon = ICONS[dept.icon] || MessageCircle;
                  const isActive = activeId === dept.id;

                  return (
                    <div
                      key={dept.id}
                      className={`text-left rounded-3xl border bg-white transition-transform transition-shadow duration-200 ${
                        isActive
                          ? "border-[var(--color-brand)] shadow-lg md:col-span-3"
                          : "border-[var(--color-border)] hover:shadow-md hover:scale-[1.01]"
                      }`}
                    >
                      {/* Card header — always visible */}
                      <button
                        type="button"
                        onClick={() => setActiveId(isActive ? null : dept.id)}
                        className="w-full text-left p-5 flex items-start justify-between gap-3"
                      >
                        <div className="flex-1">
                          <div
                            className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3"
                            style={{
                              background: `${dept.color}12`,
                              color: dept.color,
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)] mb-1.5">
                            {dept.name}
                          </h3>
                          {!isActive && dept.tools.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {dept.tools.map((tool) => (
                                <span
                                  key={tool.name}
                                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                                  style={{
                                    background: `${dept.color}10`,
                                    color: dept.color,
                                  }}
                                >
                                  {tool.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 mt-1 shrink-0 text-[var(--color-text-soft)] transition-transform duration-200 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded tool details */}
                      {isActive && (
                        <div className="px-5 pb-5 border-t border-[var(--color-border)]">
                          <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed py-4">
                            {dept.description}
                          </p>
                          <div className="grid md:grid-cols-3 gap-3">
                            {dept.tools.map((tool) => (
                              <a
                                key={tool.name}
                                href={tool.url}
                                target={tool.url.startsWith("http") ? "_blank" : undefined}
                                rel={tool.url.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-start gap-3 p-4 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-brand-light)] hover:shadow-sm transition-shadow"
                              >
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                                  style={{ background: `${dept.color}10` }}
                                >
                                  {tool.logo ? (
                                    <Image
                                      src={tool.logo}
                                      alt={tool.name}
                                      width={24}
                                      height={24}
                                      className="object-contain"
                                      unoptimized
                                    />
                                  ) : (
                                    <span style={{ color: dept.color }}><Icon className="w-5 h-5" /></span>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <span className="font-semibold text-[14px] text-[var(--color-text-primary)]">
                                      {tool.name}
                                    </span>
                                    {tool.url.startsWith("http") && (
                                      <ExternalLink className="w-3 h-3 text-[var(--color-text-soft)]" />
                                    )}
                                  </div>
                                  <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed">
                                    {tool.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
