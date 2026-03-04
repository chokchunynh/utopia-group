import ScrollReveal from "@/components/ui/ScrollReveal";
import { APPROACH_STEPS } from "@/lib/constants";

const iconMap: Record<string, string> = {
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  map: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  chart: "M18 20V10M12 20V4M6 20v-6",
};

const stepColors = ["#06B6D4", "#3B82F6", "#8B5CF6", "#10B981"];

export default function OurApproach() {
  return (
    <section className="py-20 md:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-blue text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary mb-4">
              We Don&apos;t Just Sell AI.<br />
              <span className="gradient-text">We Implement It.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every tool we offer, we use daily across our 30+ companies. This is battle-tested AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-emerald opacity-20" />

          {APPROACH_STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12}>
              <div className="glass-card p-6 text-center relative">
                {/* Step number */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: `${stepColors[i]}15`, border: `2px solid ${stepColors[i]}30` }}
                >
                  <span className="font-heading font-bold text-lg" style={{ color: stepColors[i] }}>
                    {step.step}
                  </span>
                </div>
                <svg
                  className="w-6 h-6 mx-auto mb-3"
                  style={{ color: stepColors[i] }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconMap[step.icon]} />
                </svg>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
