import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { gallery } from "@/lib/content";

export function GallerySection() {
  const t = useTranslations("Gallery");

  return (
    <section id="galeri" className="bg-ink scroll-mt-20 text-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="mb-10 flex flex-col items-start gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
          <div>
            <Eyebrow className="text-brand-bright">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading font-bold">
              {t("title")}
            </h2>
          </div>
          <a
            href="#kontak"
            className="text-body inline-flex items-center gap-2.5 rounded-lg border border-white/30 px-6.5 py-3.75 font-semibold whitespace-nowrap text-white hover:border-white hover:bg-white/5 hover:text-white"
          >
            {t("cta")} <Arrow />
          </a>
        </div>

        <ul className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 lg:auto-rows-auto lg:grid-cols-4 lg:grid-rows-[repeat(2,220px)]">
          {gallery.map((item) => (
            <li
              key={item.id}
              className={item.wide ? "relative col-span-2" : "relative"}
            >
              <PhotoFrame
                {...item}
                alt={t(`items.${item.id}`)}
                sizes={
                  item.wide
                    ? "(min-width: 1024px) 605px, 100vw"
                    : "(min-width: 1024px) 295px, 50vw"
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
