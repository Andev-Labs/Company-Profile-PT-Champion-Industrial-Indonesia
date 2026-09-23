"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Arrow } from "@/components/arrow";
import { contactNeeds, type ContactNeed } from "@/lib/content";
import { buildWhatsappLink } from "@/lib/site";

const fieldClass =
  "border-line-strong text-field text-ink focus:border-brand border bg-white px-3.75 py-3.5 outline-none";

/**
 * The enquiry never hits our server: the fields are composed into a prefilled
 * WhatsApp message, which is the channel the business actually answers on.
 *
 * The state holds the requirement's *key*, not its label, so the selection
 * survives a language switch and the message that goes out is written in the
 * language the visitor is reading.
 */
export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState<ContactNeed>(contactNeeds[0]);
  const [message, setMessage] = useState("");

  const whatsappLink = buildWhatsappLink({
    labels: {
      greeting: t("message.greeting"),
      name: t("message.name"),
      company: t("message.company"),
      need: t("message.need"),
      detail: t("message.detail"),
    },
    name,
    company,
    need: t(`needs.${need}`),
    message,
  });

  return (
    // The form now stands on its own inside the contact section, so the panel
    // carries the tinted background and the fields stay white — the contrast
    // is what makes them read as the one thing to act on here.
    <div className="bg-mist px-6 py-9 sm:px-11 sm:py-12">
      <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2">
        <label className="flex flex-col gap-2.25">
          <span className="text-caption text-ink-soft font-semibold">
            {t("nameLabel")}
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t("namePlaceholder")}
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2.25">
          <span className="text-caption text-ink-soft font-semibold">
            {t("companyLabel")}
          </span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder={t("companyPlaceholder")}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5.5 flex flex-col gap-2.25">
        <span className="text-caption text-ink-soft font-semibold">
          {t("needLabel")}
        </span>
        <select
          name="need"
          value={need}
          onChange={(event) => {
            // Matched against the source list rather than cast, so the state
            // can only ever hold a key the message catalogue knows about.
            const selected = contactNeeds.find(
              (option) => option === event.target.value,
            );
            if (selected) setNeed(selected);
          }}
          className={fieldClass}
        >
          {contactNeeds.map((option) => (
            <option key={option} value={option}>
              {t(`needs.${option}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5.5 flex flex-col gap-2.25">
        <span className="text-caption text-ink-soft font-semibold">
          {t("detailLabel")}
        </span>
        <textarea
          name="detail"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={t("detailPlaceholder")}
          className={`${fieldClass} min-h-[10rem] resize-y`}
        />
      </label>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand text-body-lg hover:bg-ink group mt-7 inline-flex w-full items-center justify-center gap-2.5 px-7.5 py-4.5 font-semibold text-white hover:text-white"
      >
        <MessageCircle aria-hidden="true" className="size-5 flex-none" />
        {t("submit")} <Arrow />
      </a>
      <p className="text-caption leading-copy text-slate mt-4">{t("note")}</p>
    </div>
  );
}
