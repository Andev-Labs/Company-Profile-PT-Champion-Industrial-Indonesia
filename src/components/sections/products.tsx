import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { products, services } from "@/lib/content";

export function ProductsSection() {
  return (
    <section id="produk" className="scroll-mt-24 bg-white">
      <div className="max-w-shell mx-auto px-10 py-27.5">
        <div className="mb-14 flex items-end justify-between gap-15">
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

        <ul className="grid grid-cols-4 gap-7">
          {products.map((product) => (
            <li key={product.name} className="reveal-on-scroll">
              <div className="bg-mist relative mb-5.5 h-62.5">
                <PhotoFrame {...product} sizes="280px" />
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

        <ul className="bg-line border-line mt-18 grid grid-cols-4 gap-px border">
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
