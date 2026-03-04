import ScrollReveal from "@/components/ui/ScrollReveal";
import { AI_APPS } from "@/lib/constants";

const iconMap: Record<string, string> = {
  bank: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3",
  megaphone: "M3 11l18-5v12L3 13v-2zM11.6 16.8a3 3 0 11-5.8-1.6",
  receipt: "M9 5H7a2 2 0 00-2 2v12l3-3 3 3 3-3 3 3V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  "chart-up": "M22 12l-4-4-6 6-4-4-6 6M22 12v4h-4",
  bot: "M12 2a2 2 0 012 2v2H10V4a2 2 0 012-2zM4 18v-6a8 8 0 0116 0v6M9 18h6M9 14h.01M15 14h.01",
  users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
};

export default function AIShowcase() {
  return (
    <section id="tools" className="py-20 md:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-cyan text-sm font-medium">Our AI Tools</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary mb-4">
              Battle-Tested AI Apps.<br />
              <span className="gradient-text">Built Here. Used Daily.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every tool runs in our own companies first. When it works for us, we offer it to you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_APPS.map((app, i) => (
            <ScrollReveal key={app.name} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${app.color}15` }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: app.color }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={iconMap[app.icon]} />
                    </svg>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Category tag */}
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        color: app.category === "make-money" ? "#F59E0B" : "#10B981",
                        backgroundColor: app.category === "make-money" ? "#F59E0B15" : "#10B98115",
                      }}
                    >
                      {app.category === "make-money" ? "Make Money" : "Save Money"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading font-bold text-lg text-text-primary">{app.name}</h3>
                  {app.status === "live" ? (
                    <span className="flex items-center gap-1 text-xs text-accent-emerald">
                      <span className="w-1.5 h-1.5 bg-accent-emerald rounded-full" />
                      Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-accent-amber">
                      <span className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
                      Coming Soon
                    </span>
                  )}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                  {app.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
                  {app.price ? (
                    <span className="text-text-primary font-heading font-bold">{app.price}</span>
                  ) : (
                    <span className="text-text-muted text-sm">Price TBA</span>
                  )}
                  {app.status === "live" ? (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold px-4 py-2 rounded-lg transition-opacity"
                      style={{ color: app.color, backgroundColor: `${app.color}15` }}
                    >
                      Try Now
                    </a>
                  ) : (
                    <button
                      className="text-sm font-semibold px-4 py-2 rounded-lg bg-elevated text-text-secondary cursor-default"
                    >
                      Get Notified
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
