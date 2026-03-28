import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROOF_STATS } from "@/lib/constants";

const AI_TOOLS = [
  { name: "Claude", mark: "C", bg: "#D97757" },
  { name: "ChatGPT", mark: "G", bg: "#10a37f" },
  { name: "Gemini", mark: "✦", bg: "#4285f4" },
  { name: "Grok", mark: "𝕏", bg: "#000000" },
  { name: "Copilot", mark: "⟡", bg: "#0078d4" },
  { name: "Cursor", mark: "▸", bg: "#000000" },
  { name: "Midjourney", mark: "◆", bg: "#000000" },
  { name: "Next.js", mark: "N", bg: "#000000" },
  { name: "Vercel", mark: "▲", bg: "#000000" },
  { name: "Supabase", mark: "⚡", bg: "#3ecf8e" },
];

export default function ProofBar() {
  return (
    <section className="bg-white border-b border-[var(--color-border)]">
      <div className="section-padding !py-10 md:!py-14">
        <div className="section-inner">
          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-10">
              {PROOF_STATS.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div className="text-center">
                    <div className="font-extrabold text-[40px] md:text-[56px] text-[var(--color-text-primary)] tracking-tighter leading-none">
                      <AnimatedCounter value={stat.number} />
                    </div>
                    <p className="text-[var(--color-text-muted)] text-[13px] md:text-[14px] mt-2 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* AI Tool Logos */}
          <ScrollReveal delay={300}>
            <div className="border-t border-[var(--color-border)] pt-8">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-soft)] mb-5">
                We build with the tools that matter
              </p>
              <div className="flex items-center justify-center gap-x-5 gap-y-3 md:gap-6 flex-wrap px-2">
                {AI_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                      style={{ backgroundColor: tool.bg }}
                    >
                      {tool.mark}
                    </div>
                    <span className="text-[13px] font-medium text-[var(--color-text-body)]">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
