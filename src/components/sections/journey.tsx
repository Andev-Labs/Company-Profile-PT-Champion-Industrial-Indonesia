import { useTranslations } from "next-intl";

import { timeline } from "@/lib/content";
import { revealLag } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function JourneySection() {
  const t = useTranslations("Journey");

  return (
    <section className="bg-mist border-line border-y">
      <div className="max-w-shell px-shell mx-auto py-16 lg:py-21">
        <div className="reveal-on-scroll mb-10 flex flex-col items-start gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-15">
          <h2 className="font-display text-subsection leading-heading tracking-heading text-ink font-bold">
            {t("title")}
          </h2>
          <p className="text-field text-slate max-w-[420px]">{t("intro")}</p>
        </div>

        {/* The rail turns with the list: horizontal across four columns on the
            desktop grid, vertical down the left edge once the steps stack. */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="bg-line-mid absolute top-[7px] right-0 left-0 hidden h-0.5 lg:block"
          />
          <span
            aria-hidden="true"
            className="bg-brand absolute top-[7px] left-0 hidden h-0.5 w-1/4 lg:block"
          />
          <span
            aria-hidden="true"
            className="bg-line-mid absolute top-2 bottom-2 left-[7px] w-0.5 lg:hidden"
          />
          <span
            aria-hidden="true"
            className="bg-brand absolute top-2 left-[7px] h-1/4 w-0.5 lg:hidden"
          />
          <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {timeline.map((milestone, index) => (
              <li
                key={milestone.step}
                className={cn(
                  "reveal-on-scroll relative pl-9 lg:pl-0",
                  revealLag(index),
                )}
              >
                <span
                  aria-hidden="true"
                  className="bg-mist border-brand absolute top-0 left-0 block size-4 rounded-full border-2 lg:static lg:mb-6.5"
                />
                <p className="mb-3 flex items-baseline gap-2.5">
                  <span className="font-display text-eyebrow tracking-step text-brand font-bold">
                    {milestone.step}
                  </span>
                  <span className="font-display text-eyebrow tracking-step text-slate font-semibold">
                    {t(`milestones.${milestone.step}.year`)}
                  </span>
                </p>
                <h3 className="font-display text-headline leading-heading tracking-title text-ink mb-3 font-bold">
                  {t(`milestones.${milestone.step}.place`)}
                </h3>
                <p className="text-body leading-body text-ink-soft text-pretty">
                  {t(`milestones.${milestone.step}.desc`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
