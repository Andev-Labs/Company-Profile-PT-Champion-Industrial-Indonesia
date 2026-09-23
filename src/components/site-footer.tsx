import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { InstagramIcon } from "@/components/instagram-icon";
import { site, whatsappDisplay, whatsappUrl } from "@/lib/site";

/** Shared heading for every column in the footer's top row. */
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-label tracking-label mb-4.5 font-semibold text-white">
      {children}
    </h2>
  );
}

/**
 * The footer is where the company's reference details live (ANDEV-131):
 * channels, the full postal address and the map that locates it. The contact
 * section itself only carries the enquiry form, so these have to be complete
 * here rather than being a teaser for a block further up the page.
 *
 * It deliberately carries no section links: this is a single-page site, so a
 * footer nav would only restate the header that stays pinned to the viewport.
 */
export function SiteFooter() {
  const t = useTranslations("Footer");
  const tBrand = useTranslations("Brand");

  return (
    <footer className="bg-ink text-fog">
      <div className="max-w-shell px-shell mx-auto grid grid-cols-1 gap-10 pt-14 pb-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.05fr)] lg:gap-12 lg:pt-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/logo-cmf.png"
            alt={tBrand("logoAlt")}
            width={780}
            height={540}
            className="mb-5.5 h-10.5 w-auto"
          />
          <p className="font-display text-lead-sm mb-2.5 font-bold text-white">
            {site.name}
          </p>
          <p className="text-body leading-text max-w-[380px]">{t("tagline")}</p>
        </div>

        <div>
          <ColumnHeading>{t("contactHeading")}</ColumnHeading>
          <ul className="text-body flex flex-col gap-3">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fog inline-flex items-center gap-2.25 hover:text-white"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="size-4.25 flex-none"
                />
                WhatsApp {whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fog inline-flex items-center gap-2.25 hover:text-white"
              >
                <InstagramIcon className="size-4.25 flex-none" />
                {site.instagram.handle}
              </a>
            </li>
            {/* The only place the full postal address is printed. */}
            <li>
              <address className="leading-text not-italic">
                {site.address.lines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </address>
            </li>
          </ul>
        </div>

        <div>
          <ColumnHeading>{t("mapHeading")}</ColumnHeading>
          {/* The map is the footer's locator for the address printed beside
              it, so it is lazy-loaded and kept small — it is a landmark, not
              a section of its own. */}
          <div className="border border-white/10">
            <iframe
              src={site.mapsEmbedUrl}
              title={t("mapTitle", { name: site.name })}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[190px] w-full"
            />
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body mt-3 inline-flex items-center gap-2.25 font-semibold text-white hover:text-white/80"
          >
            {t("mapCta")} <Arrow />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-shell px-shell text-caption mx-auto flex items-center justify-between gap-6 py-5.5">
          <p>{t("copyright", { name: site.name })}</p>
        </div>
      </div>
    </footer>
  );
}
