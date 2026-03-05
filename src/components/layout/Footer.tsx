import { WHATSAPP_URL, NAV_LINKS, AI_APPS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-2xl font-[900] gradient-text-light">UTOPIA</span>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              AI implementation partner for Malaysian businesses. We build, deploy, and optimise.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">Navigate</h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="block text-white/50 hover:text-white/80 text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">Products</h4>
            <div className="space-y-2.5">
              {AI_APPS.filter(a => a.status === "live").map((app) => (
                <a key={app.name} href={app.url || "#"} target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-white/80 text-sm transition-colors">
                  {app.name}
                </a>
              ))}
              <span className="block text-white/30 text-sm">More coming soon</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-[var(--color-whatsapp)] text-sm transition-colors">
                WhatsApp Us
              </a>
              <span className="block text-white/50 text-sm">Kuala Lumpur, Malaysia</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Utopia Group Sdn Bhd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <svg className="w-4 h-3" viewBox="0 0 24 16" fill="none"><rect width="24" height="16" rx="1" fill="#CC0001"/><rect y="0" width="24" height="8" fill="#010066"/><rect y="0" width="24" height="4" fill="#CC0001"/><rect y="4" width="24" height="4" fill="#fff"/><rect y="8" width="24" height="4" fill="#CC0001"/><rect y="12" width="24" height="4" fill="#fff"/></svg>
            Built in Malaysia, For Malaysian Businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
