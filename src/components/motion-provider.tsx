"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Loads Framer Motion's feature set once for the whole page.
 *
 * `LazyMotion` with the slim `m` component keeps the client bundle to the
 * `domAnimation` package — animations, variants and the in-view gesture that
 * drives the scroll reveals — rather than the full `motion` component with
 * layout and drag support the site never uses. `strict` turns a stray
 * `motion.*` import into a runtime error, so the full bundle cannot creep back
 * in unnoticed.
 *
 * `reducedMotion="user"` honours the operating-system setting: transforms are
 * skipped and only the fade remains, so a reveal never slides for a reader who
 * has asked for less movement.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
