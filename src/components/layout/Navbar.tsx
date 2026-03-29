"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, MORE_DROPDOWN, WHATSAPP_URL } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      // Delay re-enabling scroll until close transition (400ms) finishes
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
      }, 400);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkColor = scrolled
    ? "text-[var(--color-text-body)] hover:text-[var(--color-text-primary)]"
    : "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,backdrop-filter] duration-300 ${
        open
          ? "bg-transparent border-b-0"
          : scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1"
          onClick={() => setOpen(false)}
        >
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              open
                ? "text-white"
                : scrolled
                  ? "text-[var(--color-text-primary)]"
                  : "text-white"
            }`}
          >
            UTOPIA
          </span>
          <span
            className={`font-normal text-lg tracking-tight transition-colors duration-300 ${
              open
                ? "text-white/60"
                : scrolled
                  ? "text-[var(--color-text-muted)]"
                  : "text-white/70"
            }`}
          >
            GROUP
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={"newTab" in link && link.newTab ? "_blank" : undefined}
              rel={
                "newTab" in link && link.newTab
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`text-[14px] font-medium transition-colors duration-150 py-3 px-2 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-[14px] font-medium transition-colors duration-150 py-3 px-2 ${linkColor}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {MORE_DROPDOWN.label}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 pt-3">
                <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-2 min-w-[240px]">
                  {MORE_DROPDOWN.items.map((item) => (
                    <div key={item.label} className="relative group/nested">
                      {"children" in item && item.children ? (
                        <>
                          <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[var(--color-bg-soft)] transition-colors cursor-default">
                            <div>
                              <span className="text-[14px] font-semibold text-[var(--color-text-primary)] block">
                                {item.label}
                              </span>
                              <span className="text-[12px] text-[var(--color-text-muted)]">
                                {item.description}
                              </span>
                            </div>
                            <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[var(--color-text-soft)]" />
                          </div>
                          <div className="hidden group-hover/nested:block absolute left-full top-0 pl-2">
                            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-2 min-w-[200px]">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-3 rounded-xl hover:bg-[var(--color-bg-soft)] transition-colors"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="text-[14px] font-semibold text-[var(--color-text-primary)] block">
                                    {child.label}
                                  </span>
                                  <span className="text-[12px] text-[var(--color-text-muted)]">
                                    {child.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 rounded-xl hover:bg-[var(--color-bg-soft)] transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="text-[14px] font-semibold text-[var(--color-text-primary)] block">
                            {item.label}
                          </span>
                          <span className="text-[12px] text-[var(--color-text-muted)]">
                            {item.description}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/how-we-charge"
            className={`inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full font-semibold text-[13px] min-h-[40px] transition-colors duration-150 ${
              scrolled
                ? "bg-white text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-soft)]"
                : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
            }`}
          >
            How We Charge
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full font-semibold text-[13px] min-h-[40px] transition-colors duration-150 ${
              scrolled
                ? "bg-[var(--color-text-primary)] text-white hover:opacity-85"
                : "bg-white text-[var(--color-text-primary)] hover:bg-white/90"
            }`}
          >
            Start Free
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`md:hidden p-3 transition-colors relative z-50 ${
            open
              ? "text-white/80 hover:text-white"
              : scrolled
                ? "text-[var(--color-text-body)] hover:text-[var(--color-text-primary)]"
                : "text-white/80 hover:text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-[#0f1729] flex flex-col transition-opacity duration-400 overscroll-contain ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-4 h-16 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1"
            onClick={() => setOpen(false)}
          >
            <span className="font-bold text-lg tracking-tight text-white">
              UTOPIA
            </span>
            <span className="font-normal text-lg tracking-tight text-white/60">
              GROUP
            </span>
          </Link>
          <button
            type="button"
            className="p-3 text-white/80 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 flex flex-col justify-center px-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={`menu-${i}`}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[32px] font-bold tracking-[-1px] py-2.5 transition-all duration-500 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              } text-white/35 hover:text-white`}
              style={{
                transitionDelay: open ? `${100 + i * 50}ms` : "0ms",
              }}
            >
              <span className="text-[12px] font-medium text-[var(--color-accent)] mr-3 align-super tracking-normal">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
          {/* More section — expand dropdown items inline */}
          <button
            type="button"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className={`text-left text-[32px] font-bold tracking-[-1px] py-2.5 transition-all duration-500 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } text-white/35 hover:text-white`}
            style={{
              transitionDelay: open ? `${100 + NAV_LINKS.length * 50}ms` : "0ms",
            }}
          >
            <span className="text-[12px] font-medium text-[var(--color-accent)] mr-3 align-super tracking-normal">
              {String(NAV_LINKS.length + 1).padStart(2, "0")}
            </span>
            {MORE_DROPDOWN.label}
            <ChevronDown
              className={`inline-block w-6 h-6 ml-2 transition-transform duration-200 ${
                mobileDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-12 flex flex-col gap-1 pb-2">
              {MORE_DROPDOWN.items.flatMap((item) =>
                "children" in item && item.children
                  ? item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-[18px] font-semibold py-2 text-white/40 hover:text-white transition-colors"
                      >
                        {child.label}
                      </a>
                    ))
                  : [(
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-[18px] font-semibold py-2 text-white/40 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    )]
              )}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div
          className={`px-8 pb-12 flex flex-col gap-3 transition-all duration-500 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: open ? "350ms" : "0ms" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center py-4 bg-[var(--color-brand)] text-white font-semibold text-[15px] rounded-[14px]"
          >
            Start Free
          </a>
          <Link
            href="/how-we-charge"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center py-4 bg-white/[0.08] text-white/70 font-semibold text-[15px] rounded-[14px] border border-white/10"
          >
            How We Charge
          </Link>
        </div>
      </div>
    </nav>
  );
}
