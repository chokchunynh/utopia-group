import { WHATSAPP_URL } from "@/lib/constants";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="heading-lg text-3xl mb-4">Coming Soon</h1>
        <p className="text-[var(--color-text-muted)] mb-6">This page is being rebuilt.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp Us
        </a>
      </div>
    </main>
  );
}
