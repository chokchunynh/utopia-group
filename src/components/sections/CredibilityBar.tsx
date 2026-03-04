import ScrollReveal from "@/components/ui/ScrollReveal";

const badges = [
  { label: "30+ Companies", sublabel: "Battle-Tested" },
  { label: "MDEC", sublabel: "Recognised" },
  { label: "Built in Malaysia", sublabel: "For Malaysian Businesses" },
  { label: "100% AI-Powered", sublabel: "Not Just Consulting" },
];

export default function CredibilityBar() {
  return (
    <section className="bg-surface py-8 border-y border-border-subtle">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {badges.map((badge) => (
              <div key={badge.label} className="text-center">
                <p className="text-text-primary font-heading font-bold text-sm md:text-base">{badge.label}</p>
                <p className="text-text-muted text-xs mt-0.5">{badge.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
