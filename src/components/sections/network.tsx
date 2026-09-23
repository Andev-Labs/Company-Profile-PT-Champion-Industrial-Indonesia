import { Eyebrow } from "@/components/eyebrow";
import { NetworkMap } from "@/components/sections/network-map";
import { network } from "@/lib/content";

export function NetworkSection() {
  return (
    <section id="jaringan" className="bg-ink scroll-mt-20 text-white lg:scroll-mt-24">
      <div className="max-w-shell px-shell py-section mx-auto">
        <div className="reveal-on-scroll mb-12 flex flex-col items-start gap-6 lg:mb-18 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
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
