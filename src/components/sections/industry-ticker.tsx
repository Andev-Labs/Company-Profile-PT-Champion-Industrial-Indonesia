import { Fragment } from "react";

import { tickerIndustries } from "@/lib/content";

export function IndustryTicker() {
  return (
    <div className="bg-mist border-line overflow-hidden border-b">
      {/* One line on the desktop grid; below it the strapline takes its own row
          and the industries wrap underneath rather than being clipped. */}
      <p className="max-w-shell px-shell text-caption tracking-caps text-slate-soft mx-auto flex flex-wrap items-center gap-x-3 gap-y-2 py-4.5 font-semibold lg:flex-nowrap lg:gap-3.5 lg:py-5.5">
        <span className="text-brand basis-full lg:basis-auto">
          PRECISION. QUALITY. GLOBAL CONNECTION.
        </span>
        <span aria-hidden="true" className="bg-line-mid hidden h-px flex-1 lg:block" />
        {tickerIndustries.map((industry, index) => (
          <Fragment key={industry}>
            {index > 0 && (
              <span aria-hidden="true" className="text-silver-soft">
                /
              </span>
            )}
            <span>{industry}</span>
          </Fragment>
        ))}
      </p>
    </div>
  );
}
