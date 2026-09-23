import { timeline } from "@/lib/content";

export function JourneySection() {
  return (
    <section className="bg-mist border-line border-y">
      <div className="max-w-shell mx-auto px-10 py-21">
        <div className="mb-14 flex items-end justify-between gap-15">
          <h2 className="font-display text-subsection leading-heading tracking-heading text-ink font-bold">
            The Journey Continues
          </h2>
          <p className="text-field text-slate max-w-[420px]">
            Empat tahap yang membawa CMF dari satu pabrik di Hong Kong ke
            fasilitas di Tangerang.
          </p>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="bg-line-mid absolute top-[7px] right-0 left-0 h-0.5"
          />
          <span
            aria-hidden="true"
            className="bg-brand absolute top-[7px] left-0 h-0.5 w-1/4"
          />
          <ol className="relative grid grid-cols-4 gap-8">
            {timeline.map((milestone) => (
              <li key={milestone.step} className="reveal-on-scroll">
                <span
                  aria-hidden="true"
                  className="bg-mist border-brand mb-6.5 block size-4 rounded-full border-2"
                />
                <p className="mb-3 flex items-baseline gap-2.5">
                  <span className="font-display text-eyebrow tracking-step text-brand font-bold">
                    {milestone.step}
                  </span>
                  <span className="font-display text-eyebrow tracking-step text-slate font-semibold">
                    {milestone.year}
                  </span>
                </p>
                <h3 className="font-display text-headline leading-heading tracking-title text-ink mb-3 font-bold">
                  {milestone.place}
                </h3>
                <p className="text-body leading-body text-ink-soft text-pretty">
                  {milestone.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
