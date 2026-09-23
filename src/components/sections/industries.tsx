import { useTranslations } from "next-intl";

import { Eyebrow } from "@/components/eyebrow";
import { industries } from "@/lib/content";

export function IndustriesSection() {
  const t = useTranslations("Industries");

  return (
    <section id="industri" className="bg-mist border-line scroll-mt-20 border-y lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="mb-10 max-w-[700px] lg:mb-14">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink font-bold">
            {t("title")}
          </h2>
        </div>

        <ul className="bg-line border-line grid grid-cols-1 gap-px border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((no) => (
            <li
              key={no}
              className="hover:border-t-brand flex flex-col border-t-[3px] border-t-transparent bg-white px-6 py-8 sm:min-h-53 lg:px-8.5 lg:py-9.5"
            >
              <p className="font-display text-eyebrow tracking-micro text-silver mb-auto font-bold">
                {no}
              </p>
              <h3 className="font-display text-title tracking-card text-ink mt-6.5 mb-3 font-bold">
                {t(`items.${no}.name`)}
              </h3>
              <p className="text-body leading-body text-slate-soft text-pretty">
                {t(`items.${no}.desc`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
