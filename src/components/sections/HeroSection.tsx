"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40 pb-0">
      {/* Cloud background — static image on mobile, video on desktop */}
      <div className="bg-image-hero md:hidden" />
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/bg-light.png"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 bg-video-hero"
      >
        <source src="/hero/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 z-[1] bg-[#0f2027]/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <ScrollReveal>
          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/15 text-white backdrop-blur-sm border border-[var(--color-accent)]/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] inline-block" />
              We Operate 173 Business Units on AI
            </span>
          </div>

          {/* Headline — Inter semibold, white on dark */}
          <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-5 px-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            We Run AI Across 173 Business Units.{" "}
            <span className="gradient-text-hero font-extrabold">
              Now We&apos;ll Run It For Yours.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
            We don&apos;t just consult on AI. We set up a machine in your
            office, build your custom dashboard, and automate your
            operations — from day one.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href="/#tools"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-[15px] bg-white text-[var(--color-text-primary)] hover:bg-white/90 transition-opacity min-h-[48px] w-full sm:w-auto text-center shadow-lg"
            >
              Try Our Tools Free
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-center w-full sm:w-auto shadow-lg"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <p className="text-[13px] text-white/60 mb-12 md:mb-16">
            No credit card. No sign-up. See AI work before you pay a single
            ringgit.
          </p>
        </ScrollReveal>

        {/* Bottom spacer — cloud bg fades into next section */}
        <div className="h-16 md:h-24" />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
