import { useTranslations } from "next-intl";

import { Eyebrow } from "@/components/eyebrow";
import { network } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Counted from the data rather than written down, so the summary strip cannot
 * drift out of step with the cards directly under it.
 */
const summary = [
  { key: "locations", value: network.length },
  {
    key: "countries",
    value: new Set(network.map((location) => location.country)).size,
  },
  { key: "network", value: 1 },
] as const;

export function NetworkSection() {
  const t = useTranslations("Network");

  return (
    <section
      id="jaringan"
      className="bg-ink scroll-mt-20 text-white lg:scroll-mt-24"
    >
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="reveal-on-scroll mb-10 flex flex-col items-start gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
          <div>
            <Eyebrow className="text-brand-bright">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading max-w-[620px] font-bold">
              {t("title")}
            </h2>
          </div>
          <p className="text-lead-sm leading-text text-fog-soft max-w-[400px] text-pretty">
            {t("intro")}
          </p>
        </div>

        <dl className="mb-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-white/10 py-5 lg:mb-12">
          {summary.map((entry) => (
            <div key={entry.key}>
              <dt className="sr-only">{t(`summary.${entry.key}`)}</dt>
              <dd className="flex items-baseline gap-2.5">
                <span className="font-display text-stat-sm text-brand-bright leading-none font-bold">
                  {entry.value}
                </span>
                <span className="text-meta text-fog">
                  {t(`summary.${entry.key}`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Five cells, two columns from `sm`, so the last one takes the spare
            row to itself rather than leaving a bare slot showing through the
            grid's hairline background.

            The reveal sits on the grid rather than on each cell: the hairlines
            are the grid's own background showing through the gaps, so fading
            the cells individually would flash that pale background through
            every card on the way in. */}
        <ul className="reveal-on-scroll grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {network.map((location) => (
            <li
              key={location.id}
              className={cn(
                // The home site is flagged by the rule alone. A badge here
                // would only repeat its own `role` line word for word.
                "bg-ink flex flex-col border-t-[3px] px-6 py-7 sm:last:col-span-2 lg:px-7 lg:py-8 lg:last:col-span-1",
                location.home ? "border-t-brand" : "border-t-transparent",
              )}
            >
              <h3 className="font-display text-title tracking-card mb-2 font-bold">
                {t(`locations.${location.id}.city`)}
              </h3>
              {/* `detail` is the more specific line, but for four of the five
                  it just repeats the country — so it only earns its place on
                  the home site, where it names the city the plant is in. */}
              <p className="text-meta text-fog mb-4.5">
                {location.home
                  ? t(`locations.${location.id}.detail`)
                  : t(`locations.${location.id}.country`)}
              </p>
              <p className="text-meta leading-copy text-fog-soft">
                {t(`locations.${location.id}.role`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
