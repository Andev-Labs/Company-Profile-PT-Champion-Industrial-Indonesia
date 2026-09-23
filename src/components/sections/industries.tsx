import { Eyebrow } from "@/components/eyebrow";
import { industries } from "@/lib/content";

export function IndustriesSection() {
  return (
    <section id="industri" className="bg-mist border-line scroll-mt-24 border-y">
      <div className="max-w-shell mx-auto px-10 py-27.5">
        <div className="mb-14 max-w-[700px]">
          <Eyebrow>INDUSTRI YANG DILAYANI</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink font-bold">
            Engineered with Precision. Built for Your Needs.
          </h2>
        </div>

        <ul className="bg-line border-line grid grid-cols-3 gap-px border">
          {industries.map((industry) => (
            <li
              key={industry.no}
              className="hover:border-t-brand flex min-h-53 flex-col border-t-[3px] border-t-transparent bg-white px-8.5 py-9.5"
            >
              <p className="font-display text-eyebrow tracking-micro text-silver mb-auto font-bold">
                {industry.no}
              </p>
              <h3 className="font-display text-title tracking-card text-ink mt-6.5 mb-3 font-bold">
                {industry.name}
              </h3>
              <p className="text-body leading-body text-slate-soft text-pretty">
                {industry.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
