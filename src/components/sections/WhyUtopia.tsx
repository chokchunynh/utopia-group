import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: "30", suffix: "+", label: "Companies Using Our AI" },
  { target: "10,000", suffix: "+", label: "Hours Saved Monthly" },
  { target: "99.9", suffix: "%", label: "Accuracy Rate" },
];

const usps = [
  {
    title: "We Eat Our Own Cooking",
    description: "Every AI tool runs in our own 30+ companies before we offer it to you. If it doesn't work for us, we don't sell it.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "#3B82F6",
  },
  {
    title: "Malaysian-Built, Malaysian-Focused",
    description: "Our tools understand Malaysian banking, regulations, and business practices. Not generic global software adapted for Malaysia.",
    icon: "M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 4h14a1 1 0 011 1v16H4V5a1 1 0 011-1z",
    color: "#06B6D4",
  },
  {
    title: "Implementation, Not Just Software",
    description: "We don't just hand you a login. We sit with your team, deploy the tools, and make sure everything runs smoothly.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    color: "#8B5CF6",
  },
  {
    title: "MDEC-Recognised Technology",
    description: "We're recognised by Malaysia Digital Economy Corporation. Your investment is backed by a credible, established partner.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "#10B981",
  },
];

export default function WhyUtopia() {
  return (
    <section id="why-utopia" className="py-20 md:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-emerald text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary">
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
                <div className="font-heading font-[900] text-3xl md:text-5xl text-text-primary">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-text-muted text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* USPs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {usps.map((usp, i) => (
            <ScrollReveal key={usp.title} delay={i * 0.1}>
              <div className="glass-card p-6 md:p-8 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${usp.color}15` }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: usp.color }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={usp.icon} />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{usp.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{usp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
