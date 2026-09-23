import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { CountUp } from "@/components/count-up";
import { PhotoFrame } from "@/components/photo-frame";
import { heroPhoto, heroStats } from "@/lib/content";
import { site } from "@/lib/site";

export function HeroSection() {
  const t = useTranslations("Hero");

  // The header is out of the flow and floats over this section, so the hero
  // opens the page by carrying the bar's height itself. The design's own top
  // padding sits below that, untouched.
  return (
    <section
      id="atas"
      // Focus target for the back-to-top button; never a Tab stop itself.
      tabIndex={-1}
      className="bg-ink pt-nav lg:pt-nav-lg relative overflow-hidden text-white outline-none"
    >
      <div className="max-w-shell px-shell mx-auto grid grid-cols-1 items-start gap-12 pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-24">
        <div className="reveal-in">
          <p className="text-eyebrow tracking-label text-line-soft mb-7 inline-flex items-center gap-3 border border-white/20 px-4 py-2.25 font-semibold lg:mb-8.5">
            <span
              aria-hidden="true"
              className="bg-brand size-1.75 rounded-full"
            />
            {t("badge")}
          </p>
          <h1 className="font-display text-hero leading-hero tracking-display mb-6.5 text-balance">
            {t("title")}
          </h1>
          <p className="text-subtitle leading-body text-fog-soft mb-5 max-w-[560px] text-pretty">
            {t("subtitle")}
          </p>
          <p className="font-display text-body-lg tracking-nudge mb-8 font-semibold text-white lg:mb-10">
            {site.slogan}
          </p>
          <div className="flex flex-col gap-3.5 pb-12 sm:flex-row sm:items-center sm:gap-4 lg:pb-18">
            <a
              href="#produk"
              className="bg-brand text-cta-sm hover:bg-white hover:text-ink group inline-flex items-center justify-center gap-2.5 px-7.5 py-4.25 font-semibold text-white sm:justify-start"
            >
              {t("ctaProducts")} <Arrow />
            </a>
            <a
              href="#kontak"
              className="text-cta-sm inline-flex items-center justify-center gap-2.5 border border-white/30 px-7.5 py-4.25 font-semibold text-white hover:border-white hover:bg-white/5 hover:text-white sm:justify-start"
            >
              {t("ctaQuote")}
            </a>
          </div>
        </div>

        <div className="reveal-in relative h-72 [animation-delay:0.12s] [animation-duration:1s] sm:h-96 lg:h-130">
          <PhotoFrame
            {...heroPhoto}
            alt={t("photoAlt")}
            sizes="(min-width: 1024px) 540px, 100vw"
            priority
          />
          {/* The badge only breaks out of the frame once there is a gutter to
              break out into; on a phone it tucks inside the photo instead. */}
          <p className="bg-brand pointer-events-none absolute top-4 left-0 px-5 py-4 text-white lg:top-9 lg:-left-10 lg:px-7 lg:py-6">
            <CountUp
              to={44}
              suffix="+"
              className="font-display text-stat block leading-none font-bold"
            />
            <span className="text-eyebrow tracking-caps mt-1 block font-semibold">
              {t("badgeLabel")}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        {/* Held back behind the two columns above so the figures start counting
            as the rest of the hero is settling, not on top of it. */}
        <dl className="max-w-shell px-shell reveal-in mx-auto grid grid-cols-2 [animation-delay:0.28s] sm:grid-cols-4">
          {/* Two columns on a phone, four from `sm`. The dividers follow the
              column count: a row rule under the first pair only while there
              are two rows, and a column rule everywhere but the last cell. */}
          {heroStats.map((stat) => (
            <div
              key={stat.key}
              className="border-white/10 py-7 odd:border-r odd:pr-6 even:pl-6 nth-[-n+2]:border-b sm:border-b-0 sm:px-8 sm:py-8 sm:not-last:border-r sm:first:pl-0 sm:last:pr-0 sm:odd:pr-8 sm:even:pl-8"
            >
              <dt className="sr-only">{t(`stats.${stat.key}`)}</dt>
              <dd>
                {"text" in stat ? (
                  <span className="font-display text-stat-sm block leading-none font-bold text-white">
                    {stat.text}
                  </span>
                ) : (
                  <CountUp
                    from={stat.from}
                    to={stat.to}
                    suffix={stat.suffix}
                    className="font-display text-stat-sm block leading-none font-bold text-white"
                  />
                )}
                <span className="text-meta text-fog mt-2 block">
                  {t(`stats.${stat.key}`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
