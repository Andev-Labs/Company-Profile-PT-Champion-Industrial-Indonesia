import { MessageCircle } from "lucide-react";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/eyebrow";
import { InstagramIcon } from "@/components/instagram-icon";
import { site, whatsappDisplay, whatsappUrl } from "@/lib/site";

/**
 * Every block in the contact column opens with the same tracked-out label at
 * the same size and colour, so the column reads as one list rather than as
 * five unrelated fragments in four different type sizes.
 */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-label tracking-label text-slate mb-3 font-semibold">
      {children}
    </h3>
  );
}

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section id="kontak" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="mb-10 max-w-[680px] lg:mb-14">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-5 font-bold">
            {t("title")}
          </h2>
          <p className="text-lead leading-text text-slate-soft">{t("intro")}</p>
        </div>

        <div className="border-line border">
          <div className="bg-line grid grid-cols-1 gap-px lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="bg-mist divide-line-mid flex flex-col divide-y px-6 sm:px-11">
              <div className="py-8 sm:py-10">
                <FieldLabel>{t("whatsappLabel")}</FieldLabel>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-headline text-ink hover:text-brand inline-flex items-center gap-2.75 py-1 font-bold"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-6 flex-none"
                  />
                  {whatsappDisplay}
                </a>
                <p className="text-field leading-text text-slate mt-3 max-w-[46ch]">
                  {t("whatsappNote")}
                </p>
              </div>

              <div className="py-7 sm:py-8">
                <FieldLabel>{t("instagramLabel")}</FieldLabel>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-lg text-ink hover:text-brand inline-flex items-center gap-2.5 py-1 font-semibold"
                >
                  <InstagramIcon className="size-5 flex-none" />
                  {site.instagram.handle}
                </a>
              </div>

              {/* The only place the full postal address is printed. The map
                  block below carries the location instead of repeating it. */}
              <div className="py-7 sm:py-8">
                <FieldLabel>{t("addressLabel")}</FieldLabel>
                <address className="text-field leading-text text-ink-soft not-italic">
                  {site.address.lines.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </address>
              </div>

              <div className="py-7 sm:py-8">
                <FieldLabel>{t("hoursLabel")}</FieldLabel>
                <dl className="text-field divide-line-mid border-line-mid divide-y border-y">
                  {site.openingHours.map((entry) => (
                    <div
                      key={entry.key}
                      className="flex items-baseline justify-between gap-6 py-2.75"
                    >
                      <dt className="text-ink-soft">{t(`hours.${entry.key}`)}</dt>
                      <dd
                        className={
                          entry.closed
                            ? "text-brand font-semibold"
                            : "text-ink font-semibold tabular-nums"
                        }
                      >
                        {entry.hours ?? t("closed")}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-caption leading-copy text-slate mt-3">
                  {t("timezoneNote")}
                </p>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="border-line border-t bg-white">
            <div className="border-line flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b px-6 py-4 sm:px-8">
              <h3 className="text-label tracking-label text-slate font-semibold">
                {t("mapHeading")}
              </h3>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-note text-ink hover:text-brand inline-flex items-center gap-2.25 py-1 font-semibold"
              >
                {t("mapCta")} <Arrow />
              </a>
            </div>
            <iframe
              src={site.mapsEmbedUrl}
              title={t("mapTitle", { name: site.name })}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[320px] w-full sm:h-[400px] lg:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
