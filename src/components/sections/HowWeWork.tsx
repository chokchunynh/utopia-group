import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, Cpu, Rocket, HeadphonesIcon } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    description: "We study your business. Find at least 5 areas where AI saves time or makes money.",
    detail: "Week 1-2",
    color: "#116dff",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Build",
    description: "We set up a machine in your office, build your AI tools, and connect to your systems.",
    detail: "Week 3-4",
    color: "#8B5CF6",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy",
    description: "Go live. Your team starts using AI daily. We train your staff and monitor results.",
    detail: "Week 5",
    color: "#25D366",
  },
  {
    icon: HeadphonesIcon,
    number: "04",
    title: "Support",
    description: "Monthly optimization, new AI features, and ongoing support. AI keeps getting smarter.",
    detail: "Week 6+",
    color: "#EC4899",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Ambient gradient orb */}
      <div className="ambient-orb -top-40 -right-40 md:top-10 md:right-[-100px]" aria-hidden="true" />

      <div className="relative z-[1] section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="pill mb-4 inline-block">How We Work</span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                From audit to autopilot in{" "}
                <span className="gradient-text font-extrabold">4 steps</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Steps — alternating left/right on desktop */}
          <div className="max-w-3xl mx-auto">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal key={step.number} delay={i * 100} direction={isLeft ? "left" : "right"}>
                  <div className="flex gap-5 md:gap-8 mb-10 last:mb-0">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: `${step.color}14`, color: step.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="w-px flex-1 bg-[var(--color-border)] mt-3" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[12px] font-bold tracking-wider"
                          style={{ color: step.color }}
                        >
                          STEP {step.number}
                        </span>
                        <span className="text-[11px] text-[var(--color-text-soft)] bg-[var(--color-bg-soft)] px-2 py-0.5 rounded-full">
                          {step.detail}
                        </span>
                      </div>
                      <h3 className="font-bold text-[20px] md:text-[24px] text-[var(--color-text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
