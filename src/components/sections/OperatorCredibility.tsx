import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { OPERATOR_RESULTS } from "@/lib/constants";

const OUR_COMPANIES = [
  { name: "Utopia Co-Living", logo: "/images/client-logos/utopiacoliving-com.png", url: "https://utopiacoliving.com", sites: 2 },
  { name: "Encik Beku", logo: "/images/client-logos/aircondmalaysia-my.png", url: "https://aircondmalaysia.my", sites: 27 },
  { name: "Ibnu Sina Care", logo: "/images/client-logos/ibnusinacare-com-my.png", url: "https://ibnusinacare.com.my", sites: 30 },
  { name: "Scaffolding MY", logo: "/images/client-logos/scaffolding-my.png", url: "https://scaffolding.my", sites: 25 },
  { name: "Rev Move", logo: "/images/client-logos/sewamotor-my.png", url: "https://sewamotor.my", sites: 22 },
  { name: "Kak Kenduri", logo: "/images/client-logos/katering-my.png", url: "https://katering.my", sites: 8 },
  { name: "Cold Truck MY", logo: "/images/client-logos/coldroom-my.png", url: "https://coldroom.my", sites: 3 },
  { name: "Mobile Wheeler", logo: "/images/client-logos/foodtruck-com-my.png", url: "https://foodtruck.com.my", sites: 4 },
  { name: "Pulse Pilates", logo: "/images/client-logos/pilatesreformer-my.png", url: "https://pilatesreformer.my", sites: 3 },
  { name: "Merry Elderly", logo: "/images/client-logos/elderlycare-my.png", url: "https://elderlycare.my", sites: 1 },
  { name: "Gula Melaka", logo: "/images/client-logos/gulamelaka-my.png", url: "https://gulamelaka.my", sites: 1 },
  { name: "Jom Vend", logo: "/images/client-logos/vendingmachinemalaysia-my.png", url: "https://vendingmachinemalaysia.my", sites: 1 },
  { name: "SlipMatch", logo: "/images/client-logos/slipmatch-my.png", url: "https://slipmatch.my", sites: 1 },
  { name: "RecurPay", logo: "/images/client-logos/recurpay-my.png", url: "https://recurpay.my", sites: 1 },
  { name: "GetBill", logo: "/images/client-logos/getbill-my.png", url: "https://getbill.my", sites: 1 },
];

export default function OperatorCredibility() {
  return (
    <section className="bg-[#0f1729]">
      <div className="section-padding">
        <div className="section-inner">
          {/* ── Left-aligned heading ── */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="md:grid md:grid-cols-[1.2fr_1fr] md:gap-12 md:items-end">
                <div>
                  <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight leading-tight text-white mb-4 md:mb-0">
                    We&apos;re not consultants. We&apos;re not software developers.{" "}
                    <span className="gradient-text-hero font-extrabold">
                      We&apos;re business owners.
                    </span>
                  </h2>
                </div>
                <div>
                  <p className="text-[#b0bec5] text-[15px] leading-relaxed">
                    Every AI tool we sell, we use first. Across 173 business units
                    with 400+ staff. If it doesn&apos;t work for us, we don&apos;t
                    sell it to you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Staggered result cards ── */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-5">
              {OPERATOR_RESULTS.map((result, i) => (
                <ScrollReveal key={result.industry} delay={i * 120}>
                  <div
                    className={`p-6 rounded-3xl border border-white/10 bg-white/[0.05] ${
                      i === 1 ? "md:translate-y-6" : ""
                    }`}
                  >
                    <div className="font-bold text-3xl text-[var(--color-brand-light)] mb-2 tracking-tight">
                      {result.stat}
                    </div>
                    <div className="font-semibold text-white text-[15px] mb-1">
                      {result.industry}
                    </div>
                    <p className="text-[#b0bec5] text-[14px] leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Our companies — real logos with links */}
          <ScrollReveal delay={300}>
            <div className="border-t border-white/10 pt-10">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">
                Our companies powered by AI
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
                {OUR_COMPANIES.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/15 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={c.logo}
                        alt={c.name}
                        width={24}
                        height={24}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-[11px] font-medium text-white/60 text-center leading-tight">
                      {c.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
