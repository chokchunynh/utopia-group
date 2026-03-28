"use client";

import { useState } from "react";
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

            {/* ── Bento Grid — remaining departments ── */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {restDepts.map((dept) => {
                  const Icon = ICONS[dept.icon] || MessageCircle;
                  const isActive = activeId === dept.id;

                  return (
                    <div
                      key={dept.id}
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setActiveId(isActive ? null : dept.id)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveId(isActive ? null : dept.id);
                        }
                      }}
                      className={`text-left p-5 rounded-3xl border cursor-pointer transition-transform transition-shadow duration-200 ${
                        isActive
                          ? "border-[var(--color-brand)] shadow-lg scale-[1.02] bg-white"
                          : "border-[var(--color-border)] bg-white hover:shadow-md hover:scale-[1.01]"
                      }`}
                    >
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
                      {dept.tools.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {dept.tools.map((tool) => (
                            <a
                              key={tool.name}
                              href={tool.url}
                              target={tool.url.startsWith("http") ? "_blank" : undefined}
                              rel={tool.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              onClick={(e) => e.stopPropagation()}
                              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full hover:opacity-80 transition-opacity"
                              style={{
                                background: `${dept.color}10`,
                                color: dept.color,
                              }}
                            >
                              {tool.name}
                            </a>
                          ))}
                        </div>
                      )}

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                          isActive
                            ? "max-h-32 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
                          {dept.description}
                        </p>
                      </div>
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
