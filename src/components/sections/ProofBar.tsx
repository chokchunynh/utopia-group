import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROOF_STATS } from "@/lib/constants";

function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <circle cx="12" cy="12" r="12" fill="#D97757" />
      <path d="M15.297 8.402l-3.547 5.73a.286.286 0 00.239.437h1.811c.218 0 .375.21.312.415l-1.125 3.65a.095.095 0 00.156.099l3.68-5.238a.286.286 0 00-.234-.45h-1.87a.286.286 0 01-.276-.363l1.069-3.847a.095.095 0 00-.17-.105z" fill="white" />
      <path d="M10.297 8.402l-3.547 5.73a.286.286 0 00.239.437h1.811c.218 0 .375.21.312.415l-1.125 3.65a.095.095 0 00.156.099l3.68-5.238a.286.286 0 00-.234-.45h-1.87a.286.286 0 01-.276-.363l1.069-3.847a.095.095 0 00-.17-.105z" fill="white" opacity="0.6" />
    </svg>
  );
}

function ChatGPTIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#10a37f">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.741.243a6.044 6.044 0 00-5.765 4.18 6.04 6.04 0 00-4.039 2.945 6.046 6.046 0 00.749 7.105 5.98 5.98 0 00.516 4.91 6.046 6.046 0 006.51 2.9A6.065 6.065 0 0013.26 23.757a6.044 6.044 0 005.765-4.18 6.04 6.04 0 004.039-2.945 6.046 6.046 0 00-.749-7.105l-.033.294zm-9.022 12.6a4.527 4.527 0 01-2.907-1.054l.144-.083 4.83-2.788a.786.786 0 00.397-.681v-6.806l2.041 1.178a.073.073 0 01.04.056v5.638a4.548 4.548 0 01-4.545 4.54zm-9.767-4.166a4.519 4.519 0 01-.54-3.043l.144.086 4.83 2.788a.784.784 0 00.794 0l5.897-3.405v2.355a.073.073 0 01-.029.062l-4.884 2.82a4.547 4.547 0 01-6.212-1.663zM2.183 7.875A4.53 4.53 0 014.559 5.87l-.002.167v5.575a.785.785 0 00.394.681l5.897 3.405-2.041 1.178a.073.073 0 01-.069.006l-4.884-2.82A4.547 4.547 0 012.183 7.875zm16.79 3.913l-5.897-3.405 2.041-1.178a.073.073 0 01.069-.006l4.884 2.82a4.546 4.546 0 01-.7 8.2v-5.75a.785.785 0 00-.397-.681zm2.031-3.055l-.144-.086-4.83-2.788a.784.784 0 00-.794 0L9.339 9.264V6.91a.073.073 0 01.029-.062l4.884-2.82a4.546 4.546 0 016.752 4.705zM8.264 12.705l-2.042-1.178a.073.073 0 01-.04-.056V5.833a4.546 4.546 0 017.452-3.493l-.144.083-4.83 2.788a.786.786 0 00-.397.681l.001 6.813zm1.108-2.393l2.628-1.518 2.628 1.518v3.036l-2.628 1.518-2.628-1.518V10.312z" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <defs><linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285f4" /><stop offset="100%" stopColor="#a855f7" /></linearGradient></defs>
      <path fill="url(#gem)" d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

const AI_TOOLS = [
  { name: "Claude", icon: <ClaudeIcon /> },
  { name: "ChatGPT", icon: <ChatGPTIcon /> },
  { name: "Gemini", icon: <GeminiIcon /> },
  { name: "Grok", icon: <span className="w-5 h-5 flex items-center justify-center font-bold text-sm">𝕏</span> },
  { name: "Copilot", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0078d4"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5L7 13l1.414-1.414L10.5 13.672l5.086-5.086L17 10l-6.5 6.5z" /></svg> },
  { name: "Cursor", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000"><path d="M5.5 2l13 10-13 10V2z" /></svg> },
  { name: "Next.js", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.66V7.34l8.16 4.66-8.16 4.66z" /></svg> },
  { name: "Vercel", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000"><path d="M12 2L2 19.778h20L12 2z" /></svg> },
  { name: "Supabase", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><defs><linearGradient id="supa" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#3ecf8e" /><stop offset="100%" stopColor="#1a9f68" /></linearGradient></defs><path fill="url(#supa)" d="M13.5 21.87c-.46.6-1.43.27-1.44-.49L11.73 12H20c.82 0 1.29-.95.78-1.58L10.5 2.13c-.46-.6-1.43-.27-1.44.49L9.27 12H4c-.82 0-1.29.95-.78 1.58l10.28 8.29z" /></svg> },
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
                    className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {tool.icon}
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
