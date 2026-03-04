import ScrollReveal from "@/components/ui/ScrollReveal";
import { PRICING_TIERS, WHATSAPP_URL } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-cta/10 border border-cta/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-cta text-sm font-medium">Pricing</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-[800] text-text-primary mb-4">
              Transparent Pricing.<br />
              <span className="gradient-text">No Hidden Fees.</span>
            </h2>
            <p className="text-text-secondary text-lg">
              All prices in Malaysian Ringgit (RM). Start free, upgrade when ready.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <div
                className={`glass-card p-8 h-full flex flex-col relative ${
                  tier.highlighted ? "border-cta/30 glow-cta" : ""
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-white text-xs font-bold px-4 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    {tier.originalPrice && (
                      <span className="text-text-muted line-through text-lg">{tier.originalPrice}</span>
                    )}
                    <span className="font-heading font-[900] text-4xl text-text-primary">{tier.price}</span>
                    {tier.period && (
                      <span className="text-text-muted text-sm">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm mt-2">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-text-secondary text-sm">
                      <svg className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaStyle === "primary" ? WHATSAPP_URL : tier.name === "Enterprise" ? WHATSAPP_URL : "#lead-magnet"}
                  target={tier.ctaStyle === "primary" || tier.name === "Enterprise" ? "_blank" : undefined}
                  rel={tier.ctaStyle === "primary" || tier.name === "Enterprise" ? "noopener noreferrer" : undefined}
                  className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-opacity ${
                    tier.highlighted
                      ? "bg-cta text-white shadow-lg shadow-cta/20"
                      : "bg-elevated border border-border-subtle text-text-primary hover:bg-floating"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-text-muted text-sm mt-8">
            For AI consulting engagements, <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">WhatsApp us</a> for a custom quote.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
