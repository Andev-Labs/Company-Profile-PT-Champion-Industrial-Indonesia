"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { localeMeta, routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Language control in the header bar.
 *
 * With exactly two languages, both are shown inline rather than behind a menu:
 * switching language is navigation, not a setting, so the honest markup is two
 * links — one per locale, the active one marked `aria-current`. That costs one
 * click instead of two, needs no popup, no focus trap and no client state
 * beyond reading the current pathname, and it reads the same on a phone as on
 * a desktop. The globe labels the pair; each link carries the full language
 * name for screen readers, since "EN" on its own is not a language.
 *
 * `usePathname` here is Next's own — it reports the *prefixed* path, which is
 * what `<Link>` from `@/i18n/navigation` needs stripped back. next-intl's
 * `Link` re-applies the right prefix for the locale it is given, so pointing
 * both links at the unprefixed pathname keeps the visitor on the same page.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Language");
  const activeLocale = useLocale();
  const pathname = usePathname();

  /** Drop the locale prefix Next reports, so `Link` can add the correct one. */
  const unprefixed =
    pathname.replace(new RegExp(`^/(${routing.locales.join("|")})(?=/|$)`), "") ||
    "/";

  return (
    <div
      className={cn("flex flex-none items-center gap-1.5 sm:gap-2", className)}
      data-slot="language-switcher"
    >
      <Globe aria-hidden="true" className="text-slate size-4 flex-none sm:size-4.5" />
      <p className="text-note flex items-center font-semibold">
        <span className="sr-only">{t("label")}: </span>
        {routing.locales.map((locale, index) => {
          const isActive = locale === activeLocale;

          return (
            <span key={locale} className="flex items-center">
              {index > 0 && (
                <span aria-hidden="true" className="text-line-strong px-1 sm:px-1.5">
                  /
                </span>
              )}
              {isActive ? (
                <span aria-current="true" className="text-ink">
                  <span className="sr-only">{t(locale)}</span>
                  <span aria-hidden="true">{t(`${locale}Short`)}</span>
                </span>
              ) : (
                <Link
                  href={unprefixed}
                  locale={locale}
                  hrefLang={localeMeta[locale].htmlLang}
                  aria-label={t("switchTo", { language: t(locale) })}
                  className="text-slate hover:text-brand flex min-h-6 min-w-6 items-center justify-center"
                >
                  <span aria-hidden="true">{t(`${locale}Short`)}</span>
                </Link>
              )}
            </span>
          );
        })}
      </p>
    </div>
  );
}
