"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { AI_APPS } from "@/lib/constants";
import { Landmark, Megaphone, Receipt, LineChart, Bot, Users } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  bank: Landmark,
  megaphone: Megaphone,
  receipt: Receipt,
  "chart-up": LineChart,
  bot: Bot,
  users: Users,
};

export default function AIShowcase() {
  return (
    <section id="tools" className="py-20 md:py-28 bg-[var(--color-gray-50)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-accent-cyan)] text-sm font-medium">Our AI Tools</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-[var(--color-text-dark)] mb-4">
              Battle-Tested AI Apps.<br />
              <span className="gradient-text">Built Here. Used Daily.</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-lg max-w-2xl mx-auto">
              Every tool runs in our own companies first. When it works for us, we offer it to you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_APPS.map((app, i) => {
            const Icon = iconMap[app.icon] || Landmark;
            return (
              <ScrollReveal key={app.name} delay={i * 0.08}>
                <div className="card-light p-6 h-full flex flex-col group relative rounded-xl">
                  <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${app.color}10` }}
                    >
                      <Icon className="w-6 h-6" color={app.color} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          color: app.category === "make-money" ? "#F59E0B" : "#10B981",
                          backgroundColor: app.category === "make-money" ? "#F59E0B10" : "#10B98110",
                        }}
                      >
                        {app.category === "make-money" ? "Make Money" : "Save Money"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-bold text-lg text-[var(--color-text-dark)]">{app.name}</h3>
                    {app.status === "live" ? (
                      <span className="flex items-center gap-1 text-xs text-[var(--color-accent-emerald)]">
                        <span className="w-1.5 h-1.5 bg-[var(--color-accent-emerald)] rounded-full" />
                        Live
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-[var(--color-accent-amber)]">
                        <span className="w-1.5 h-1.5 bg-[var(--color-accent-amber)] rounded-full" />
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-6 flex-1">
                    {app.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
                    {app.price ? (
                      <span className="text-[var(--color-text-dark)] font-heading font-bold">{app.price}</span>
                    ) : (
                      <span className="text-[var(--color-text-muted)] text-sm">Price TBA</span>
                    )}
                    {app.status === "live" ? (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        style={{ color: app.color, backgroundColor: `${app.color}10` }}
                      >
                        Try Now
                      </a>
                    ) : (
                      <button
                        className="text-sm font-semibold px-4 py-2 rounded-lg bg-[var(--color-gray-50)] text-[var(--color-text-muted)] cursor-default border border-[var(--color-border)]"
                      >
                        Get Notified
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
