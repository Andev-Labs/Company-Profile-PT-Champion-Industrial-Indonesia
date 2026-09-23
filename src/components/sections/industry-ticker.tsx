import { Fragment } from "react";

import { tickerIndustries } from "@/lib/content";

export function IndustryTicker() {
  return (
    <div className="bg-mist border-line overflow-hidden border-b">
      <p className="max-w-shell text-caption tracking-caps text-slate-soft mx-auto flex items-center gap-3.5 px-10 py-5.5 font-semibold">
        <span className="text-brand">PRECISION. QUALITY. GLOBAL CONNECTION.</span>
        <span aria-hidden="true" className="bg-line-mid h-px flex-1" />
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
