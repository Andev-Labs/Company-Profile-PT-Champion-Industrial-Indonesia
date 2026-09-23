import { useTranslations } from "next-intl";

import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { aboutPhoto, aboutPillars } from "@/lib/content";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="tentang" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="reveal-on-scroll">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-7 font-bold">
            {t("title")}
          </h2>
          <div className="relative h-60 sm:h-80">
            <PhotoFrame
              {...aboutPhoto}
              alt={t("photoAlt")}
              sizes="(min-width: 1024px) 505px, 100vw"
            />
          </div>
        </div>

        <div className="reveal-on-scroll lg:pt-13">
          <p className="text-prose leading-prose text-ink-soft mb-5.5 text-pretty">
            {t("paragraph1")}
          </p>
          <p className="text-prose leading-prose text-ink-soft mb-10 text-pretty">
            {t("paragraph2")}
          </p>

          <blockquote className="border-brand mb-10 border-l-[3px] py-1.5 pl-5 lg:mb-11 lg:pl-6">
            <p className="font-display text-quote leading-title text-ink font-semibold">
              &ldquo;From Hong Kong 1982, Growing Together in Indonesia
              2026.&rdquo;
            </p>
          </blockquote>

          <ul className="bg-line grid grid-cols-1 gap-px overflow-hidden rounded-xl sm:grid-cols-3">
            {aboutPillars.map((pillar) => (
              <li key={pillar} className="bg-white px-5.5 py-6">
                <h3 className="font-display text-ink mb-2 text-[15px] font-bold">
                  {t(`pillars.${pillar}.name`)}
                </h3>
                <p className="text-note leading-copy text-slate-soft">
                  {t(`pillars.${pillar}.desc`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
