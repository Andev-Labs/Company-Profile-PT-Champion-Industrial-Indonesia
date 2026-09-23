"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

/**
 * The bar itself: fixed to the top of the viewport, transparent while the page
 * is still at the top so it reads as part of the hero, and solid white from
 * the moment the page scrolls away from it.
 *
 * Only the scroll flag lives on the client. The bar's contents are passed
 * through as `children`, which keeps the logo, the navigation and its
 * translated labels rendering on the server — the alternative, making the
 * whole header a Client Component, would ship the brand markup and another
 * copy of the `Nav` catalogue to the browser to decide one boolean.
 *
 * That boolean is published as `data-nav-solid` and read by the `nav-solid:`
 * variant (see `globals.css`), so the chrome inside states both of its colour
 * treatments in classes and nothing in this tree has to be told about scroll.
 */
export function SiteHeaderShell({ children }: { children: ReactNode }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    /* Half the bar's height: far enough down that a trackpad twitch at the top
       of the page does not flip the treatment, close enough that the switch
       still reads as a response to the scroll that caused it. */
    const threshold = 32;
    const sync = () => setSolid(window.scrollY > threshold);

    // A reload restores the previous scroll position before this runs, so the
    // first reading has to be taken rather than assumed.
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <header
      data-nav-solid={solid ? "" : undefined}
      className="fixed inset-x-0 top-0 z-60 border-b border-transparent transition-colors duration-300 nav-solid:border-line nav-solid:bg-white/95 nav-solid:backdrop-blur-[10px]"
    >
      {children}
    </header>
  );
}
