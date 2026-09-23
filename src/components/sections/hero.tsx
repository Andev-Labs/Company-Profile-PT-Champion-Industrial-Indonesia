import { Arrow } from "@/components/arrow";
import { PhotoFrame } from "@/components/photo-frame";
import { heroPhoto, heroStats } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="atas" className="bg-ink relative overflow-hidden text-white">
      <div className="max-w-shell mx-auto grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start gap-16 px-10 pt-24">
        <div className="reveal-in">
          <p className="text-eyebrow tracking-label mb-8.5 inline-flex items-center gap-3 border border-white/20 px-4 py-2.25 font-semibold text-line-soft">
            <span
              aria-hidden="true"
              className="bg-brand size-1.75 rounded-full"
            />
            HONG KONG 1982 — INDONESIA 2026
          </p>
          <h1 className="font-display text-hero leading-hero tracking-display mb-6.5 text-balance">
            Fastener dan precision hardware, diproduksi di Indonesia.
          </h1>
          <p className="text-subtitle leading-body text-fog-soft mb-5 max-w-[560px] text-pretty">
            Lebih dari 44 tahun pengalaman grup manufaktur fastener, kini
            berlanjut di Tangerang. Kualitas setara produk impor dengan kontrol
            mutu ketat dan kesiapan supply dalam jumlah besar.
          </p>
          <p className="font-display text-body-lg tracking-nudge mb-10 font-semibold text-white">
            Stronger Connections. Built to Perform.
          </p>
          <div className="flex items-center gap-4 pb-18">
            <a
              href="#produk"
              className="bg-brand text-cta-sm hover:bg-white hover:text-ink inline-flex items-center gap-2.5 px-7.5 py-4.25 font-semibold text-white"
            >
              Lihat Produk <Arrow />
            </a>
            <a
              href="#kontak"
              className="text-cta-sm inline-flex items-center gap-2.5 border border-white/30 px-7.5 py-4.25 font-semibold text-white hover:border-white hover:bg-white/5 hover:text-white"
            >
              Minta Penawaran
            </a>
          </div>
        </div>

        <div className="reveal-in relative h-130 [animation-delay:0.12s] [animation-duration:1s]">
          <PhotoFrame {...heroPhoto} sizes="540px" priority />
          <p className="bg-brand pointer-events-none absolute top-9 -left-10 px-7 py-6 text-white">
            <span className="font-display text-stat block leading-none font-bold">
              44+
            </span>
            <span className="text-eyebrow tracking-caps mt-1 block font-semibold">
              TAHUN PENGALAMAN
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <dl className="max-w-shell mx-auto grid grid-cols-4 px-10">
          {heroStats.map((stat) => (
            <div
              key={stat.value}
              className="border-white/10 px-8 py-8 first:pl-0 last:pr-0 not-last:border-r"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-stat-sm block leading-none font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-meta text-fog mt-2 block">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
