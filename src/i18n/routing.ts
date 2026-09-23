import { defineRouting } from "next-intl/routing";

/**
 * Locale routing for the company profile.
 *
 * `as-needed` keeps English — the default — on the bare paths the site already
 * publishes (`/`), and prefixes Indonesian only (`/id`). Nothing that is
 * already indexed moves, and each language still gets its own canonical URL to
 * hang `hreflang` off.
 *
 * Automatic detection is off on purpose: the issue specifies English as *the*
 * default, so every first visit lands on English regardless of the browser's
 * `Accept-Language`. The globe switcher in the header is the explicit control,
 * and `localeCookie` remembers the visitor's choice for the next visit.
 */
export const routing = defineRouting({
  locales: ["en", "id"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/** BCP 47 tags, for `<html lang>`, `hreflang`, and Open Graph. */
export const localeMeta = {
  en: { htmlLang: "en", openGraph: "en_US" },
  id: { htmlLang: "id", openGraph: "id_ID" },
} as const satisfies Record<Locale, { htmlLang: string; openGraph: string }>;
