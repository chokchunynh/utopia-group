"use client";

import { useState } from "react";
import { DATA_SOURCES } from "@/lib/boss-os";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Receipt,
  Briefcase,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Database,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Receipt,
  Briefcase,
  BookOpen,
};

export default function BossDataReadiness() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="section-padding bg-[var(--color-bg-soft)]">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center">
                <Database size={20} className="text-[var(--color-brand)]" />
              </div>
            </div>
            <h2 className="heading-lg text-[28px] md:text-[36px] mb-2">
              You don&apos;t need perfect data. You need 30%.
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px]">
              If you have ANY of these, we can build your Boss OS:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
          {DATA_SOURCES.map((source, i) => {
            const Icon = ICON_MAP[source.icon] || Receipt;
            const isOpen = expanded === source.id;

            return (
              <ScrollReveal key={source.id} delay={i * 80}>
                <button
                  onClick={() => setExpanded(isOpen ? null : source.id)}
                  className="card w-full text-left cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center mb-3">
                      <Icon size={24} className="text-[var(--color-brand)]" />
                    </div>
                    <h3 className="font-bold text-[15px] text-[var(--color-text-primary)] mb-1">
                      {source.name}
                    </h3>
                    <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed mb-2">
                      {source.description}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-[var(--color-brand)] font-medium">
                      {isOpen ? "Hide examples" : "See examples"}
                      {isOpen ? (
                        <ChevronUp size={12} />
                      ) : (
                        <ChevronDown size={12} />
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                      <ul className="space-y-1.5">
                        {source.examples.map((ex) => (
                          <li
                            key={ex}
                            className="text-[12px] text-[var(--color-text-body)] flex items-start gap-1.5"
                          >
                            <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                              •
                            </span>
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <div className="inline-block rounded-xl bg-[var(--color-bg-muted)] px-5 py-3">
              <p className="text-[14px] text-[var(--color-brand)] font-medium">
                Have at least one? That&apos;s enough. We handle the rest during
                setup.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
