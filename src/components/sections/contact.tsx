import { useTranslations } from "next-intl";

import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/eyebrow";

/**
 * The section is deliberately the enquiry form and nothing else (ANDEV-131).
 * WhatsApp, Instagram, the address and the opening hours are reference
 * details rather than an action, so they live in the footer where they stay
 * reachable from every part of the page.
 */
export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section id="kontak" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
        <div className="max-w-[680px] lg:self-center">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-5 font-bold">
            {t("title")}
          </h2>
          <p className="text-lead leading-text text-slate-soft">{t("intro")}</p>
          <p className="text-field leading-text text-slate mt-5 max-w-[46ch]">
            {t("whatsappNote")}
          </p>
        </div>

        <div className="border-line border">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
