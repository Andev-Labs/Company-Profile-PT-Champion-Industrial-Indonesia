import Image from "next/image";
import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
import { SiteHeaderShell } from "@/components/site-header-shell";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const t = useTranslations("Nav");
  const tBrand = useTranslations("Brand");

  return (
    <SiteHeaderShell>
      <div className="max-w-shell px-shell h-nav lg:h-nav-lg mx-auto flex items-center justify-between gap-3 lg:gap-8">
        <a href="#atas" className="flex min-w-0 items-center gap-3 lg:gap-3.5">
          <Image
            src="/images/logo-cmf.png"
            alt={tBrand("logoAlt")}
            width={780}
            height={540}
            priority
            className="h-8 w-auto flex-none lg:h-9.5"
          />
          <span className="leading-heading flex min-w-0 flex-col">
            <span className="font-display tracking-nudge nav-solid:text-ink truncate text-[12px] font-bold text-white transition-colors duration-300 min-[400px]:text-[13px] sm:text-[15px]">
              PT CHAMPION INDUSTRIAL
            </span>
            <span className="text-fog tracking-logo text-micro nav-solid:text-slate font-medium transition-colors duration-300">
              INDONESIA
            </span>
          </span>
        </a>

        <nav
          aria-label={t("mainLabel")}
          className="text-body hidden items-center gap-6.5 font-medium whitespace-nowrap lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-fog-soft nav-solid:text-ink-soft nav-solid:hover:text-brand transition-colors duration-300 hover:text-white"
            >
              {t(item.key)}
            </a>
          ))}
          {/* Red on the dark hero and red on white alike, so only its hover
              treatment has to change: white-on-dark inverts to the hero's own
              button, ink-on-white to the one the rest of the page uses. */}
          <a
            href="#kontak"
            className="bg-brand text-note tracking-hair hover:text-ink nav-solid:hover:bg-ink inline-flex items-center gap-2.25 px-5.5 py-3.25 font-semibold text-white transition-colors duration-300 hover:bg-white nav-solid:hover:text-white"
          >
            {t("cta")}
            <Arrow />
          </a>
        </nav>

        {/* The switcher sits outside the collapsing nav so it stays reachable
            on a phone without opening the menu first. */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </SiteHeaderShell>
  );
}
