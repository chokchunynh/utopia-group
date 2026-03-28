import ScrollReveal from "@/components/ui/ScrollReveal";
import { PRICING } from "@/lib/constants";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[var(--color-bg-soft)]">
      <div className="section-padding">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-block">
                Transparent Pricing
              </span>
              <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
                We show you the price upfront.{" "}
                <span className="gradient-text font-extrabold">
                  No other AI company in Malaysia does this.
                </span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
                Start free. Scale when you&apos;re ready.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
            {PRICING.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 100} className="h-full">
                <div
                  className={`card h-full flex flex-col relative ${
                    i === 1
                      ? "border-2 border-[var(--color-brand)] md:scale-105 md:shadow-xl"
                      : ""
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        i === 1
                          ? "bg-[var(--color-brand)] text-white"
                          : "bg-[var(--color-text-primary)] text-white"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <div className="mb-5 mt-2">
                    <h3 className="heading-md text-lg mb-2">{tier.name}</h3>
                    <div className="font-bold text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-tight">
                      {tier.price}
                    </div>
                    <p className="text-sm text-[var(--color-brand)] font-medium">
                      {tier.priceDetail}
                    </p>
                    <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-5 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[var(--color-success)]" />
                        </div>
                        <span className="text-[13px] text-[var(--color-text-body)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Selling point */}
                  <div className="bg-[var(--color-bg-muted)] border border-[var(--color-border-soft)] rounded-2xl p-3 mb-5">
                    <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed">
                      {tier.sellingPoint}
                    </p>
                  </div>

                  <a
                    href={tier.ctaUrl}
                    target={tier.ctaStyle === "whatsapp" ? "_blank" : undefined}
                    rel={
                      tier.ctaStyle === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`w-full !text-sm text-center ${
                      tier.ctaStyle === "whatsapp"
                        ? "btn-whatsapp"
                        : "btn-primary"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
