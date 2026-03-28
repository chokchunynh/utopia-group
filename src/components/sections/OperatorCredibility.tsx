import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { OPERATOR_RESULTS } from "@/lib/constants";

const OUR_COMPANIES = [
  { name: "Utopia Co-Living", logo: "/images/wix/logo-utopia-coliving.png", url: "https://utopiacoliving.com", dark: false },
  { name: "Encik Beku", logo: "/images/wix/logo-encik-beku.png", url: "https://aircondmalaysia.my", dark: true },
  { name: "Ibnu Sina Care", logo: "/images/wix/logo-medbed.png", url: "https://ibnusinacare.com.my", dark: false },
  { name: "Scaffolding MY", logo: "/images/wix/logo-scaffolding.png", url: "https://scaffolding.my", dark: false },
  { name: "RevBike", logo: "/images/wix/logo-revbike.png", url: "https://sewamotor.my", dark: false },
  { name: "Kak Kenduri", logo: "/images/wix/logo-kakkenduri.png", url: "https://katering.my", dark: false },
  { name: "Cold Truck MY", logo: "/images/wix/logo-coldtruck.png", url: "https://coldroom.my", dark: false },
  { name: "YumTruck", logo: "/images/wix/logo-yumtruck.png", url: "https://foodtruck.com.my", dark: false },
  { name: "Pulse Pilates", logo: "/images/wix/logo-pulse-pilates.png", url: "https://pilatesreformer.my", dark: false },
  { name: "Merry Elderly", logo: "/images/wix/logo-merry-elderly-care.png", url: "https://elderlycare.my", dark: false },
  { name: "Gula Melaka", logo: "/images/wix/logo-kak-liah-gula-melaka.png", url: "https://gulamelaka.my", dark: true },
  { name: "PotongPokok", logo: "/images/wix/logo-potong-pokok.png", url: "https://cuttree.my", dark: true },
  { name: "Motorhome MY", logo: "/images/wix/logo-motorhome-rental.png", url: "https://motorhome.my", dark: true },
  { name: "Motor Penang", logo: "/images/wix/logo-motor-rental-penang.png", url: "https://sewamotorpenang.my", dark: true },
  { name: "BatuRingan", logo: "/images/wix/logo-batu-ringan.png", url: "https://baturingan.my", dark: false },
  { name: "Lampu Jaundice", logo: "/images/wix/logo-lampu-jaundice.png", url: "https://lampujaundice.my", dark: false },
  { name: "Rev City Tour", logo: "/images/wix/logo-rev-city-tour.png", url: "https://revcitytour.my", dark: false },
  { name: "Glass House", logo: "/images/wix/logo-glass-house.png", url: "https://glasshouse.my", dark: false },
  { name: "Butik Glam", logo: "/images/wix/logo-butik-glam.png", url: "https://sewabaju.com.my", dark: false },
  { name: "Car Penang", logo: "/images/wix/logo-car-rental-penang.png", url: "https://sewacarpenang.my", dark: true },
];

export default function OperatorCredibility() {
  return (
    <section className="relative bg-[#0f1729]">
      <div className="relative z-[1] section-padding">
        <div className="section-inner">
          {/* ── Left-aligned heading ── */}
          <ScrollReveal direction="left">
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
                  <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.05] h-full flex flex-col">
                    <div className="font-bold text-3xl text-[var(--color-brand-light)] mb-2 tracking-tight">
                      {result.stat}
                    </div>
                    <div className="font-semibold text-white text-[15px] mb-1">
                      {result.industry}
                    </div>
                    <p className="text-[#b0bec5] text-[14px] leading-relaxed mt-auto">
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
              <div className="grid grid-cols-4 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
                {OUR_COMPANIES.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/15 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                      <Image
                        src={c.logo}
                        alt={c.name}
                        width={40}
                        height={40}
                        className={`object-contain ${c.dark ? "rounded-lg" : ""}`}
                        unoptimized
                      />
                    </div>
                    <span className="text-[10px] font-medium text-white/60 text-center leading-tight">
                      {c.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>{/* /section-padding z-[1] */}
    </section>
  );
}
