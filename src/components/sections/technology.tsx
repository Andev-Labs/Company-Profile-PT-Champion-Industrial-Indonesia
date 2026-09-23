import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { techSteps } from "@/lib/content";

export function TechnologySection() {
  return (
    <section id="teknologi" className="bg-ink scroll-mt-24 text-white">
      <div className="max-w-shell mx-auto px-10 py-27.5">
        <div className="mb-14 flex items-end justify-between gap-15">
          <div>
            <Eyebrow className="text-brand-bright">TEKNOLOGI &amp; PROSES</Eyebrow>
            <h2 className="font-display text-section leading-display tracking-heading max-w-[620px] font-bold">
              Presisi datang dari proses yang terkendali.
            </h2>
          </div>
          <p className="text-lead-sm leading-text text-fog-soft max-w-[380px] text-pretty">
            Setiap tahap produksi melewati pengukuran dan pengujian sebelum
            komponen dinyatakan siap kirim.
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-7">
          {techSteps.map((step) => (
            <li key={step.no} className="reveal-on-scroll">
              <div className="relative mb-5.5 h-70">
                <PhotoFrame {...step} sizes="385px" />
              </div>
              <p className="font-display text-caption text-brand-bright mb-3 font-bold">
                {step.no}
              </p>
              <h3 className="font-display text-title-sm mb-2.5 font-bold">
                {step.name}
              </h3>
              <p className="text-body leading-body text-fog-soft text-pretty">
                {step.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
