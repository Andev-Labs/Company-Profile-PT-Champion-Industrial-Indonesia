import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { gallery } from "@/lib/content";

export function GallerySection() {
  return (
    <section id="galeri" className="bg-ink scroll-mt-24 text-white">
      <div className="max-w-shell mx-auto px-10 py-27.5">
        <div className="mb-12 flex items-end justify-between gap-15">
          <div>
            <Eyebrow className="text-brand-bright">GALERI</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading font-bold">
              Fasilitas dan produk kami.
            </h2>
          </div>
          <a
            href="#kontak"
            className="text-body inline-flex items-center gap-2.5 border border-white/30 px-6.5 py-3.75 font-semibold whitespace-nowrap text-white hover:border-white hover:bg-white/5 hover:text-white"
          >
            Jadwalkan kunjungan <Arrow />
          </a>
        </div>

        <ul className="grid grid-cols-4 grid-rows-[repeat(2,220px)] gap-4">
          {gallery.map((item) => (
            <li
              key={item.src}
              className={item.wide ? "relative col-span-2" : "relative"}
            >
              <PhotoFrame {...item} sizes={item.wide ? "605px" : "295px"} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
