import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { products, services } from "@/lib/content";

export function ProductsSection() {
  const t = useTranslations("Products");

  return (
    <section id="produk" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="mb-10 flex flex-col items-start gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading text-ink font-bold">
              {t("title")}
            </h2>
          </div>
          <a
            href="#kontak"
            className="border-line-strong text-ink text-body hover:border-brand hover:text-brand inline-flex items-center gap-2.5 border px-6.5 py-3.75 font-semibold whitespace-nowrap"
          >
            {t("cta")} <Arrow />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {products.map((product) => (
            <li key={product.id} className="reveal-on-scroll">
              <div className="bg-mist relative mb-5.5 h-62.5">
                <PhotoFrame
                  {...product}
                  alt={t(`items.${product.id}.alt`)}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-display text-subtitle text-ink mb-2.5 font-bold">
                {t(`items.${product.id}.name`)}
              </h3>
              <p className="text-body leading-body text-slate-soft text-pretty">
                {t(`items.${product.id}.desc`)}
              </p>
            </li>
          ))}
        </ul>

        <ul className="bg-line border-line mt-14 grid grid-cols-1 gap-px border sm:grid-cols-2 lg:mt-18 lg:grid-cols-4">
          {services.map((no) => (
            <li key={no} className="hover:bg-mist bg-white px-7 py-8">
              <p className="font-display text-caption text-brand mb-3.5 font-bold">
                {no}
              </p>
              <h3 className="font-display text-cta text-ink mb-2.5 font-bold">
                {t(`services.${no}.name`)}
              </h3>
              <p className="text-note leading-copy text-slate-soft">
                {t(`services.${no}.desc`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
