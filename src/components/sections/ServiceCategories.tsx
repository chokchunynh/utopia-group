import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  {
    title: "Make More Money",
    description: "AI tools that bring customers to your door and multiply your revenue.",
    color: "#F59E0B",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    items: [
      "AI-powered viral marketing content",
      "Intelligent sales forecasting",
      "24/7 AI customer support bots",
      "Automated lead generation",
    ],
  },
  {
    title: "Save More Money",
    description: "AI tools that cut costs, eliminate errors, and free your team from manual work.",
    color: "#10B981",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    items: [
      "Instant bank reconciliation",
      "Automated invoice matching",
      "AI-powered HR & payroll",
      "Error detection & prevention",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="py-20 md:py-28 bg-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent-violet/10 border border-accent-violet/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-violet text-sm font-medium">What We Offer</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary">
              AI That Works <span className="gradient-text">Two Ways</span><br />
              for Your Business
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.15}>
              <div
                className="glass-card p-8 md:p-10 h-full relative overflow-hidden group"
                style={{ borderColor: `${cat.color}15` }}
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: cat.color }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <svg
                      className="w-7 h-7"
                      style={{ color: cat.color }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={cat.icon} />
                    </svg>
                  </div>

                  <h3
                    className="font-heading font-[800] text-2xl md:text-3xl mb-3"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-text-secondary mb-6">{cat.description}</p>

                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-text-secondary">
                        <svg className="w-5 h-5 shrink-0" style={{ color: cat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#tools"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors"
                    style={{ color: cat.color }}
                  >
                    See Tools
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
