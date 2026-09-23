"use client";

import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

/**
 * A floating button that returns the reader to the top of the page.
 *
 * It stays out of the way until the hero has scrolled off screen — before that
 * the top of the page is already in view and the button would only be noise.
 * While hidden it is `invisible`, not just transparent, so it also leaves the
 * tab order and the accessibility tree rather than sitting there as an
 * unlabelled-looking stop a keyboard user cannot see.
 *
 * The scroll itself is a plain `scrollTo` with no `behavior`, so it follows
 * the `scroll-smooth` set on `html` — and with it the reduced-motion override
 * in `globals.css` that turns the glide into a jump.
 *
 * Brand red rather than ink: the page alternates white and ink sections, and
 * red is the one fill that reads against both.
 */
export function BackToTop() {
  const t = useTranslations("Nav");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(window.scrollY > window.innerHeight);

    // A reload restores the previous scroll position before this runs.
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    // Keyboard and screen-reader users are moved with the view, so the next
    // Tab starts from the top of the page instead of from the footer.
    document.getElementById("atas")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("backToTop")}
      data-visible={visible ? "" : undefined}
      className="bg-brand hover:bg-brand-hover invisible fixed right-5 bottom-5 z-50 inline-flex size-12 translate-y-3 items-center justify-center text-white opacity-0 shadow-lg transition-[opacity,translate,visibility,background-color] duration-300 data-visible:visible data-visible:translate-y-0 data-visible:opacity-100 motion-reduce:translate-y-0 sm:right-8 sm:bottom-8"
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}
