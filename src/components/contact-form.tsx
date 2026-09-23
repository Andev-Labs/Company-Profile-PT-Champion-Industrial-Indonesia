"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

import { Arrow } from "@/components/arrow";
import { contactNeeds } from "@/lib/content";
import { buildWhatsappLink } from "@/lib/site";

const fieldClass =
  "border-line-strong text-field text-ink focus:border-brand border bg-white px-3.75 py-3.5 outline-none";

/**
 * The enquiry never hits our server: the fields are composed into a prefilled
 * WhatsApp message, which is the channel the business actually answers on.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState<string>(contactNeeds[0]);
  const [message, setMessage] = useState("");

  const whatsappLink = buildWhatsappLink({ name, company, need, message });

  return (
    <div className="bg-white px-11 py-12">
      <div className="grid grid-cols-2 gap-5.5">
        <label className="flex flex-col gap-2.25">
          <span className="text-caption text-ink-soft font-semibold">Nama</span>
          <input
            type="text"
            name="nama"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nama Anda"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2.25">
          <span className="text-caption text-ink-soft font-semibold">
            Perusahaan
          </span>
          <input
            type="text"
            name="perusahaan"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Nama perusahaan"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5.5 flex flex-col gap-2.25">
        <span className="text-caption text-ink-soft font-semibold">
          Kebutuhan
        </span>
        <select
          name="kebutuhan"
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          className={fieldClass}
        >
          {contactNeeds.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5.5 flex flex-col gap-2.25">
        <span className="text-caption text-ink-soft font-semibold">
          Detail spesifikasi
        </span>
        <textarea
          name="detail"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ukuran, material, finishing, dan estimasi jumlah"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand text-body-lg hover:bg-ink mt-7 inline-flex w-full items-center justify-center gap-2.5 px-7.5 py-4.5 font-semibold text-white hover:text-white"
      >
        <MessageCircle aria-hidden="true" className="size-5 flex-none" />
        Kirim via WhatsApp <Arrow />
      </a>
      <p className="text-caption leading-copy text-slate mt-4">
        Pesan akan terbuka di WhatsApp dengan detail yang Anda isi di atas.
      </p>
    </div>
  );
}
