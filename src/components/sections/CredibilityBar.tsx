import ScrollReveal from "@/components/ui/ScrollReveal";
import { Shield, Building2, Sparkles, Users } from "lucide-react";

const badges = [
  { label: "30+ Companies", sublabel: "Battle-Tested", icon: Users },
  { label: "MDEC", sublabel: "Recognised", icon: Shield },
  { label: "Built in Malaysia", sublabel: "For Malaysian Businesses", icon: Building2 },
  { label: "100% AI-Powered", sublabel: "Not Just Consulting", icon: Sparkles },
];

export default function CredibilityBar() {
  return (
    <section className="bg-[var(--color-gray-50)] py-8 border-y border-[var(--color-border)]">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="text-center flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5 text-[var(--color-brand)]" />
                  <div>
                    <p className="text-[var(--color-text-dark)] font-heading font-bold text-sm md:text-base">{badge.label}</p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-0.5">{badge.sublabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
