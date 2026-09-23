import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { reasons } from "@/lib/content";

export function AdvantagesSection() {
  const t = useTranslations("Advantages");

  return (
    <section id="keunggulan" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-6.5 font-bold">
            {t("title")}
          </h2>
          <p className="text-lead leading-text text-slate-soft mb-9 text-pretty">
            {t("intro")}
          </p>
          <a
            href="#kontak"
            className="bg-ink text-cta-sm hover:bg-brand group inline-flex items-center gap-2.5 px-7.5 py-4.25 font-semibold text-white hover:text-white"
          >
            {t("cta")} <Arrow />
          </a>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:gap-y-8.5">
          {reasons.map((no, index) => (
            <Reveal
              as="li"
              key={no}
              index={index}
              className="flex gap-4.5"
            >
              <span
                aria-hidden="true"
                className="bg-brand font-display flex size-8.5 flex-none items-center justify-center rounded-full text-note font-bold text-white"
              >
                {no}
              </span>
              <div>
                <h3 className="font-display text-lead text-ink mb-2 font-bold">
                  {t(`reasons.${no}.name`)}
                </h3>
                <p className="text-body leading-body text-slate-soft text-pretty">
                  {t(`reasons.${no}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
