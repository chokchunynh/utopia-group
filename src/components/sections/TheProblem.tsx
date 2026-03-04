import ScrollReveal from "@/components/ui/ScrollReveal";
import { PAIN_POINTS } from "@/lib/constants";

const iconMap: Record<string, string> = {
  clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2",
  alert: "M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
  "trending-down": "M23 18l-9.5-9.5-5 5L1 6",
  help: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 14v.01M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3",
};

export default function TheProblem() {
  return (
    <section className="py-20 md:py-28 bg-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-red-400 text-sm font-medium">The Problem</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary">
              Your Competitors Are Already Using AI.
              <br />
              <span className="text-red-400">Are You?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PAIN_POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="glass-card p-6 md:p-8 h-full group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${point.color}15` }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: point.color }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={iconMap[point.icon]} />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary mb-2">
                  {point.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
