"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
    <section id="lead-magnet" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-blue/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 text-center glow-blue">
              <div className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-accent-blue text-sm font-medium">Free Resource</span>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-[800] text-text-primary mb-4">
                How to Get Started with AI<br />
                in Your Company <span className="gradient-text">from Zero</span>
              </h2>

              <p className="text-text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
                A practical guide for Malaysian business owners. No jargon. No fluff. Just clear steps to start using AI today.
              </p>

              {status === "success" ? (
                <div className="bg-accent-emerald/10 border border-accent-emerald/20 rounded-xl p-6">
                  <svg className="w-12 h-12 text-accent-emerald mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-accent-emerald font-semibold">Check your email!</p>
                  <p className="text-text-secondary text-sm mt-1">The guide is on its way.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-elevated border border-border-subtle rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue text-sm"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-cta hover:bg-cta/90 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-opacity disabled:opacity-50 whitespace-nowrap shadow-lg shadow-cta/20"
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
                <p className="text-red-400 text-sm mt-3">Something went wrong. Try again or WhatsApp us instead.</p>
              )}

              {status === "idle" && (
                <p className="text-text-muted text-xs mt-4">
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
