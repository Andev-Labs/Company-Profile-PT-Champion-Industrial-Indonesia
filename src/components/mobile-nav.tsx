"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useState } from "react";

import { Arrow } from "@/components/arrow";
import { navItems } from "@/lib/site";

/**
 * The small-screen half of the site navigation: a disclosure button in the
 * header bar and a panel that drops out of it.
 *
 * Deliberately not a dialog. The project has no registry configured in
 * `components.json`, and the menu is seven same-page anchors — a modal with a
 * focus trap and a scroll lock would be more machinery than the content
 * warrants, and it would fight the anchor scrolling the links exist to do.
 * A disclosure gives the same keyboard and screen-reader contract for far
 * less: a labelled `aria-expanded` trigger pointing at the panel it owns.
 */
export function MobileNav() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((current) => !current)}
        className="text-ink hover:text-brand -mr-2.5 inline-flex size-11 flex-none items-center justify-center rounded-lg lg:hidden"
      >
        {open ? (
          <X aria-hidden="true" className="size-6" />
        ) : (
          <Menu aria-hidden="true" className="size-6" />
        )}
      </button>

      {/* Positioned against the sticky header, so the panel hangs below the
          bar without the bar growing and shifting the page under it. */}
      <div
        id={panelId}
        hidden={!open}
        className="border-line absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b bg-white lg:hidden"
      >
        <nav aria-label={t("mainLabel")} className="px-shell flex flex-col pt-2 pb-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-ink-soft hover:text-brand text-body-lg border-line-soft flex min-h-12 items-center border-b font-medium"
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="bg-brand text-note tracking-hair hover:bg-ink mt-6 inline-flex min-h-12 items-center justify-center gap-2.25 rounded-lg px-5.5 font-semibold text-white hover:text-white"
          >
            {t("cta")}
            <Arrow />
          </a>
        </nav>
      </div>
    </>
  );
}
