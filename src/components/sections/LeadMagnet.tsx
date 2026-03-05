"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, Download } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "ebook" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="lead-magnet" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle brand gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--color-brand)]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="card-light p-8 md:p-12 text-center border-[var(--color-brand)]/20">
              <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
                <Download className="w-4 h-4 text-[var(--color-brand)]" />
                <span className="text-[var(--color-brand)] text-sm font-medium">Free Resource</span>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-[800] text-[var(--color-text-dark)] mb-4">
                How to Get Started with AI<br />
                in Your Company <span className="gradient-text">from Zero</span>
              </h2>

              <p className="text-[var(--color-text-body)] text-base md:text-lg mb-8 max-w-xl mx-auto">
                A practical guide for Malaysian business owners. No jargon. No fluff. Just clear steps to start using AI today.
              </p>

              {status === "success" ? (
                <div className="bg-[var(--color-accent-emerald)]/10 border border-[var(--color-accent-emerald)]/20 rounded-xl p-6">
                  <Check className="w-12 h-12 text-[var(--color-accent-emerald)] mx-auto mb-3" />
                  <p className="text-[var(--color-accent-emerald)] font-semibold">Check your email!</p>
                  <p className="text-[var(--color-text-body)] text-sm mt-1">The guide is on its way.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-[var(--color-gray-50)] border border-[var(--color-border)] rounded-xl px-4 py-3.5 text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-light)] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 whitespace-nowrap shadow-lg shadow-[var(--color-brand)]/20"
                  >
                    {status === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        Sending...
                      </span>
                    ) : "Download Free Guide"}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm mt-3">Something went wrong. Try again or WhatsApp us instead.</p>
              )}

              {status === "idle" && (
                <p className="text-[var(--color-text-muted)] text-xs mt-4">
                  We&apos;ll send the guide to your email. No spam. Unsubscribe anytime.
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
