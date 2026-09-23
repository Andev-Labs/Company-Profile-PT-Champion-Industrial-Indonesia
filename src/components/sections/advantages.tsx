import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { reasons } from "@/lib/content";

export function AdvantagesSection() {
  return (
    <section id="keunggulan" className="scroll-mt-24 bg-white">
      <div className="max-w-shell mx-auto grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-20 px-10 py-27.5">
        <div>
          <Eyebrow>KENAPA KAMI</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-6.5 font-bold">
            Built for Strength, Made for Progress
          </h2>
          <p className="text-lead leading-text text-slate-soft mb-9 text-pretty">
            Produksi dalam negeri dengan kontrol kualitas ketat, didukung
            jaringan global lintas lima lokasi.
          </p>
          <a
            href="#kontak"
            className="bg-ink text-cta-sm hover:bg-brand inline-flex items-center gap-2.5 px-7.5 py-4.25 font-semibold text-white hover:text-white"
          >
            Konsultasi kebutuhan <Arrow />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-x-10 gap-y-8.5">
          {reasons.map((reason) => (
            <li key={reason.no} className="reveal-on-scroll flex gap-4.5">
              <span
                aria-hidden="true"
                className="bg-brand font-display flex size-8.5 flex-none items-center justify-center rounded-full text-note font-bold text-white"
              >
                {reason.no}
              </span>
              <div>
                <h3 className="font-display text-lead text-ink mb-2 font-bold">
                  {reason.name}
                </h3>
                <p className="text-body leading-body text-slate-soft text-pretty">
                  {reason.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
