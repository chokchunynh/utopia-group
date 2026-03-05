import ScrollReveal from "@/components/ui/ScrollReveal";
import { PAIN_POINTS } from "@/lib/constants";
import { Clock, AlertTriangle, TrendingUp, Search } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  clock: Clock,
  alert: AlertTriangle,
  "trending-down": TrendingUp,
  help: Search,
};

export default function TheProblem() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-red-500 text-sm font-medium">The Problem</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-[var(--color-text-dark)]">
              Your Competitors Are Already Using AI.
              <br />
              <span className="text-red-500">Are You?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PAIN_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon] || Clock;
            return (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="card-light p-6 md:p-8 h-full group hover:shadow-lg transition-shadow">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${point.color}10` }}
                  >
                    <Icon className="w-6 h-6" color={point.color} />
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-[var(--color-text-dark)] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-[var(--color-text-body)] text-sm md:text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
