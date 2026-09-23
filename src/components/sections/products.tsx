import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { products, services } from "@/lib/content";

export function ProductsSection() {
  return (
    <section id="produk" className="scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="mb-10 flex flex-col items-start gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
          <div>
            <Eyebrow>PRODUK &amp; LAYANAN</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading text-ink font-bold">
              Small Component. Big Impact.
            </h2>
          </div>
          <a
            href="#kontak"
            className="border-line-strong text-ink text-body hover:border-brand hover:text-brand inline-flex items-center gap-2.5 border px-6.5 py-3.75 font-semibold whitespace-nowrap"
          >
            Tanya spesifikasi <Arrow />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {products.map((product) => (
            <li key={product.name} className="reveal-on-scroll">
              <div className="bg-mist relative mb-5.5 h-62.5">
                <PhotoFrame
                  {...product}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-display text-subtitle text-ink mb-2.5 font-bold">
                {product.name}
              </h3>
              <p className="text-body leading-body text-slate-soft text-pretty">
                {product.desc}
              </p>
            </li>
          ))}
        </ul>

        <ul className="bg-line border-line mt-14 grid grid-cols-1 gap-px border sm:grid-cols-2 lg:mt-18 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.no} className="hover:bg-mist bg-white px-7 py-8">
              <p className="font-display text-caption text-brand mb-3.5 font-bold">
                {service.no}
              </p>
              <h3 className="font-display text-cta text-ink mb-2.5 font-bold">
                {service.name}
              </h3>
              <p className="text-note leading-copy text-slate-soft">
                {service.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
