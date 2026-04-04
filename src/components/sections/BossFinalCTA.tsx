import { WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageCircle } from "lucide-react";

export default function BossFinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-[var(--color-bg-muted)] to-[#fdf2f8]">
      <div className="section-inner max-w-xl text-center">
        <ScrollReveal>
          <h2 className="heading-lg text-[28px] md:text-[36px] mb-3">
            Your competitor already started.
          </h2>
          <p className="text-[15px] text-[var(--color-text-body)] mb-8">
            35+ companies run on Boss OS. One WhatsApp message to join them.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-[16px] px-8 py-4 inline-flex"
          >
            <MessageCircle size={20} />
            WhatsApp Us — Free Consultation
          </a>

          <p className="text-[12px] text-[var(--color-text-soft)] mt-4">
            No commitment. No hard sell. Just a 15-minute chat about your
            business.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
