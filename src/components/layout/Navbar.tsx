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
    document.body.style.overflow = open ? "hidden" : "";
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
        scrolled
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
              scrolled ? "text-[var(--color-text-primary)]" : "text-white"
            }`}
          >
            UTOPIA
          </span>
          <span
            className={`font-normal text-lg tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[var(--color-text-muted)]" : "text-white/70"
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
              className={`text-[14px] font-medium transition-colors duration-150 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}

          {/* Masterclass Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-[14px] font-medium transition-colors duration-150 ${linkColor}`}
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
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
            className={`inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full font-semibold text-[13px] transition-colors duration-150 ${
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
            className={`inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full font-semibold text-[13px] transition-colors duration-150 ${
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
          className={`md:hidden p-3 transition-colors ${
            scrolled
              ? "text-[var(--color-text-body)] hover:text-[var(--color-text-primary)]"
              : "text-white/80 hover:text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-[var(--color-border)] px-4 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={
                  "newTab" in link && link.newTab ? "_blank" : undefined
                }
                rel={
                  "newTab" in link && link.newTab
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-[var(--color-text-body)] hover:text-[var(--color-text-primary)] py-3 border-b border-[var(--color-border-soft)] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Masterclass Dropdown */}
            <button
              type="button"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between text-[15px] font-medium text-[var(--color-text-body)] py-3 border-b border-[var(--color-border-soft)]"
            >
              {MORE_DROPDOWN.label}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {MORE_DROPDOWN.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {item.label}
                    <span className="block text-[11px] text-[var(--color-text-soft)]">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center !text-[14px]"
            >
              Start Free
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="btn-secondary w-full text-center !text-[14px]"
            >
              Contact Sales
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
