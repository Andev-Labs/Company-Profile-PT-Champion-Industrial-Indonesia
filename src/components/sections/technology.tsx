import { useTranslations } from "next-intl";

import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import { techSteps } from "@/lib/content";

export function TechnologySection() {
  const t = useTranslations("Technology");

  return (
    <section id="teknologi" className="bg-ink scroll-mt-20 text-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <Reveal className="mb-10 flex flex-col items-start gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
          <div>
            <Eyebrow className="text-brand-bright">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading max-w-[620px] font-bold">
              {t("title")}
            </h2>
          </div>
          <p className="text-lead-sm leading-text text-fog-soft max-w-[380px] text-pretty">
            {t("intro")}
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {techSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.no}
              index={index}
              className="group"
            >
              <div className="relative mb-5.5 h-70">
                <PhotoFrame
                  {...step}
                  alt={t(`steps.${step.no}.alt`)}
                  sizes="(min-width: 1024px) 385px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <p className="font-display text-caption text-brand-bright mb-3 font-bold">
                {step.no}
              </p>
              <h3 className="font-display text-title-sm mb-2.5 font-bold">
                {t(`steps.${step.no}.name`)}
              </h3>
              <p className="text-body leading-body text-fog-soft text-pretty">
                {t(`steps.${step.no}.desc`)}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
