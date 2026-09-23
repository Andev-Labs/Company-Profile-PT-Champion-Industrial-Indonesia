import Image from "next/image";

import { Eyebrow } from "@/components/eyebrow";
import { network } from "@/lib/content";

export function NetworkSection() {
  return (
    <section id="jaringan" className="bg-ink scroll-mt-24 text-white">
      <div className="max-w-shell mx-auto px-10 py-27.5">
        <div className="reveal-on-scroll mb-18 flex items-end justify-between gap-15">
          <div>
            <Eyebrow className="text-brand-bright">JARINGAN OPERASI</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading max-w-[620px] font-bold">
              Lima lokasi. Satu jaringan terintegrasi.
            </h2>
          </div>
          <p className="text-lead-sm leading-text text-fog-soft max-w-[400px] text-pretty">
            Satu ekosistem industri yang terhubung, mencakup produksi, R&amp;D,
            distribusi, dan customized manufacturing.
          </p>
        </div>

        <div className="relative mb-18 h-130 border border-white/10">
          <Image
            src="/images/network-map.png"
            alt="Peta jaringan operasi CMF: Hong Kong, Shenzhen, Huizhou, Vietnam, Indonesia"
            fill
            sizes="1200px"
            className="bg-ink object-contain"
          />
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-[11px] right-0 left-0 h-px bg-white/15"
          />
          <ul className="relative grid grid-cols-5 gap-6">
            {network.map((location) => (
              <li key={location.city} className="reveal-on-scroll">
                <span
                  aria-hidden="true"
                  className="bg-ink mb-6.5 flex size-5.75 items-center justify-center rounded-full border border-white/30"
                >
                  <span className="bg-brand block size-2.25 rounded-full" />
                </span>
                <h3 className="font-display text-title tracking-card mb-2 font-bold">
                  {location.city}
                </h3>
                <p className="text-meta text-fog mb-4.5">{location.country}</p>
                <p className="text-meta leading-copy text-fog-soft">
                  {location.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
