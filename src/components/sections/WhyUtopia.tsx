import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Shield, Building2, Users, Zap } from "lucide-react";

const stats = [
  { target: "30", suffix: "+", label: "Companies Using Our AI" },
  { target: "10,000", suffix: "+", label: "Hours Saved Monthly" },
  { target: "99.9", suffix: "%", label: "Accuracy Rate" },
];

const usps = [
  {
    title: "We Eat Our Own Cooking",
    description: "Every AI tool runs in our own 30+ companies before we offer it to you. If it doesn't work for us, we don't sell it.",
    icon: Zap,
    color: "#3B5BDB",
  },
  {
    title: "Malaysian-Built, Malaysian-Focused",
    description: "Our tools understand Malaysian banking, regulations, and business practices. Not generic global software adapted for Malaysia.",
    icon: Building2,
    color: "#22D3EE",
  },
  {
    title: "Implementation, Not Just Software",
    description: "We don't just hand you a login. We sit with your team, deploy the tools, and make sure everything runs smoothly.",
    icon: Users,
    color: "#8B5CF6",
  },
  {
    title: "MDEC-Recognised Technology",
    description: "We're recognised by Malaysia Digital Economy Corporation. Your investment is backed by a credible, established partner.",
    icon: Shield,
    color: "#10B981",
  },
];

export default function WhyUtopia() {
  return (
    <section id="why-utopia" className="py-20 md:py-28 bg-[var(--color-gray-50)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent-emerald)]/10 border border-[var(--color-accent-emerald)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-accent-emerald)] text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-[var(--color-text-dark)]">
              Built by <span className="gradient-text">Operators</span>,<br />
              Not Consultants
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-[900] text-3xl md:text-5xl text-[var(--color-brand)]">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-[var(--color-text-muted)] text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Image + USPs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Real image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
                alt="Malaysian business team working with AI technology"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* USPs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <ScrollReveal key={usp.title} delay={i * 0.1}>
                  <div className="card-light p-6 h-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${usp.color}10` }}
                    >
                      <Icon className="w-5 h-5" color={usp.color} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[var(--color-text-dark)] mb-2">{usp.title}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{usp.description}</p>
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
