import type messages from "../messages/en.json";
import type { routing } from "@/i18n/routing";

/**
 * Registers the locales and the English catalogue (the source language) with
 * next-intl, which makes `useTranslations` key-checked and `useLocale()`
 * return the union rather than a bare `string`. A key that exists in one
 * catalogue but not the other, or a typo in a `t("…")` call, then fails
 * `tsc --noEmit` instead of rendering as the raw key at runtime.
 */
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
