import { MessageCircle } from "lucide-react";
import { Fragment } from "react";

import { Arrow } from "@/components/arrow";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/eyebrow";
import { site, whatsappDisplay, whatsappUrl } from "@/lib/site";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-label tracking-label text-slate mb-2.5 font-semibold">
      {children}
    </h3>
  );
}

export function ContactSection() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="mb-10 max-w-[680px] lg:mb-14">
          <Eyebrow>KONTAK</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-5 font-bold">
            Konsultasi, pemesanan, dan penawaran harga.
          </h2>
          <p className="text-lead leading-text text-slate-soft">
            Sampaikan kebutuhan komponen Anda — tim kami akan membantu
            menentukan spesifikasi yang tepat.
          </p>
        </div>

        <div className="bg-line border-line grid grid-cols-1 gap-px border lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="bg-mist flex flex-col gap-8 px-6 py-9 sm:px-11 sm:py-12 lg:gap-8.5">
            <div>
              <FieldLabel>WHATSAPP</FieldLabel>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-headline text-ink hover:text-brand inline-flex items-center gap-2.75 font-bold"
              >
                <MessageCircle aria-hidden="true" className="size-6 flex-none" />
                {whatsappDisplay}
              </a>
            </div>

            <div>
              <FieldLabel>ALAMAT</FieldLabel>
              <address className="text-body-lg leading-text text-ink-soft not-italic">
                {site.address.lines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </address>
            </div>

            <div>
              <FieldLabel>RESPON TERCEPAT</FieldLabel>
              <p className="text-field leading-body text-ink-soft">
                Pertanyaan teknis, permintaan sampel, dan penawaran harga
                dijawab paling cepat lewat WhatsApp pada jam kerja.
              </p>
            </div>

            <div>
              <h3 className="text-label tracking-label text-slate mb-3 font-semibold">
                JAM OPERASIONAL{" "}
                <span className="font-medium tracking-normal normal-case">
                  (menunggu konfirmasi)
                </span>
              </h3>
              <dl className="text-field text-ink-soft flex flex-col gap-2">
                {site.openingHours.map((entry) => (
                  <div
                    key={entry.days}
                    className="flex max-w-[320px] justify-between gap-5"
                  >
                    <dt>{entry.days}</dt>
                    <dd
                      className={
                        entry.closed
                          ? "text-slate font-semibold"
                          : "text-ink font-semibold"
                      }
                    >
                      {entry.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <FieldLabel>INSTAGRAM</FieldLabel>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-lg text-ink hover:text-brand font-medium"
              >
                {site.instagram.handle}
              </a>
            </div>

            <div className="border-line mt-auto border bg-white px-5 py-5.5">
              <FieldLabel>LOKASI</FieldLabel>
              <p className="text-field leading-body text-ink-soft mb-4">
                Komplek Pergudangan &amp; Industri PKT Bitung, Kadu Jaya, Kec.
                Curug, Kabupaten Tangerang, Banten 15810
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-note text-ink hover:text-brand inline-flex items-center gap-2.25 font-semibold"
              >
                Lihat di Google Maps <Arrow />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
