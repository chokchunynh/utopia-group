import ScrollReveal from "@/components/ui/ScrollReveal";
import { Lock, FileText, LogOut } from "lucide-react";

const TRUST_BADGES = [
  { icon: Lock, label: "PDPA Compliant" },
  { icon: FileText, label: "NDA Signed" },
  { icon: LogOut, label: "Revoke Anytime" },
] as const;

export default function BossDataPrivacy() {
  return (
    <section className="section-padding">
      <div className="section-inner max-w-2xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="heading-lg text-[24px] md:text-[30px] mb-3">
              Your data stays yours. Always.
            </h2>
            <p className="text-[14px] text-[var(--color-text-body)] leading-relaxed max-w-lg mx-auto mb-6">
              We access your data to build Boss OS, but it&apos;s protected
              under PDPA. Our team signs NDAs. You can revoke access anytime. We
              don&apos;t sell or share your data — ever.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-muted)] px-4 py-2"
                >
                  <Icon size={14} className="text-[var(--color-brand)]" />
                  <span className="text-[12px] font-medium text-[var(--color-brand)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
