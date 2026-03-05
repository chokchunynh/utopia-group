import ScrollReveal from "@/components/ui/ScrollReveal";
import { APPROACH_STEPS } from "@/lib/constants";
import { Search, Map, Code, BarChart3 } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  search: Search,
  map: Map,
  code: Code,
  chart: BarChart3,
};

const stepColors = ["#22D3EE", "#3B5BDB", "#8B5CF6", "#10B981"];

export default function OurApproach() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-gray-50)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-[var(--color-text-dark)] mb-4">
              We Don&apos;t Just Sell AI.<br />
              <span className="gradient-text">We Implement It.</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-lg max-w-2xl mx-auto">
              Every tool we offer, we use daily across our 30+ companies. This is battle-tested AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--color-accent-cyan)] via-[var(--color-brand)] to-[var(--color-accent-emerald)] opacity-20" />

          {APPROACH_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <div className="card-light p-6 text-center relative">
                  {/* Step number */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                    style={{ backgroundColor: `${stepColors[i]}10`, border: `2px solid ${stepColors[i]}30` }}
                  >
                    <span className="font-heading font-bold text-lg" style={{ color: stepColors[i] }}>
                      {step.step}
                    </span>
                  </div>
                  <Icon
                    className="w-6 h-6 mx-auto mb-3"
                    color={stepColors[i]}
                  />
                  <h3 className="font-heading font-bold text-xl text-[var(--color-text-dark)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    {step.description}
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
