import { Eyebrow } from "@/components/eyebrow";
import { NetworkMap } from "@/components/sections/network-map";
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

        <NetworkMap locations={network} />
      </div>
    </section>
  );
}
