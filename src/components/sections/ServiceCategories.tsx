import ScrollReveal from "@/components/ui/ScrollReveal";
import { TrendingUp, DollarSign, Check, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Make More Money",
    description: "AI tools that bring customers to your door and multiply your revenue.",
    color: "#F59E0B",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
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
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
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
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent-violet)]/10 border border-[var(--color-accent-violet)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-accent-violet)] text-sm font-medium">What We Offer</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-[var(--color-text-dark)]">
              AI That Works <span className="gradient-text">Two Ways</span><br />
              for Your Business
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.title} delay={i * 0.15}>
                <div className="card-light p-0 h-full overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3
                      className="font-heading font-[800] text-2xl md:text-3xl mb-3"
                      style={{ color: cat.color }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-[var(--color-text-body)] mb-6">{cat.description}</p>

                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[var(--color-text-body)]">
                          <Check className="w-5 h-5 shrink-0" color={cat.color} />
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
                      <ArrowRight className="w-4 h-4" />
                    </a>
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
