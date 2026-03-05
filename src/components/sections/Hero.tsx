"use client";

import RotatingText from "@/components/ui/RotatingText";
import { SplineScene } from "@/components/ui/SplineScene";
import { ROTATING_USPS, WHATSAPP_URL } from "@/lib/constants";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left side: text content */}
          <div className="flex-1 max-w-2xl">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full animate-pulse" />
              <span className="text-[var(--color-accent-cyan)] text-sm font-medium">AI Implementation Partner</span>
            </div>

            {/* H1 */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[900] leading-[1.1] mb-6">
              <span className="text-white">We Help Malaysian</span>
              <br />
              <span className="text-white">Businesses </span>
              <br className="sm:hidden" />
              <RotatingText items={ROTATING_USPS} />
            </h1>

            {/* Subheadline */}
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              From AI tools we built for our own 30+ companies — now available for yours.
              Malaysia&apos;s first AI implementation partner that{" "}
              <span className="text-white font-medium">builds, not just talks.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] hover:bg-[var(--color-whatsapp)]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-opacity shadow-lg shadow-[var(--color-whatsapp)]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
              <a
                href="#lead-magnet"
                className="btn-shine inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-light)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-[var(--color-brand)]/20"
              >
                <Download className="w-5 h-5" />
                Download Free AI Guide
              </a>
            </div>

            {/* Trust micro-proof */}
            <div className="mt-10 flex items-center gap-4 text-white/50 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-[var(--color-navy)] overflow-hidden">
                    <img
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 20}.jpg`}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by <strong className="text-white">30+ companies</strong> across Malaysia</span>
            </div>
          </div>

          {/* Right side: Spline 3D scene */}
          <div className="hidden lg:block flex-1 h-[500px] xl:h-[600px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
