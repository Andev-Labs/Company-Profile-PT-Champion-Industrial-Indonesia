"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  /**
   * The real figure. It is what the server renders, so a crawler, a reader
   * with JavaScript switched off and a screen reader all get the final number
   * rather than whatever the count happens to be passing through.
   */
  to: number;
  /**
   * Where the count starts. Years read better counting from the decade below
   * them than from zero — the digits that move are then the ones that carry
   * the meaning.
   */
  from?: number;
  /** Trails the figure, e.g. the `+` in `44+`. */
  suffix?: string;
  durationMs?: number;
  className?: string;
};

/** Quick off the mark, settling gently onto the final figure. */
function easeOut(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

/**
 * A figure that counts up to its value the first time it is scrolled into
 * view, and only then — scrolling back past a statistic does not restart it.
 *
 * The digits are written straight to the DOM rather than held in state. The
 * value changes every frame and nothing else in the tree depends on it, so a
 * re-render per frame would be pure cost; and the component never re-renders
 * after mount, so there is no chance of React clobbering what the animation
 * wrote.
 */
export function CountUp({
  to,
  from = 0,
  suffix = "",
  durationMs = 1600,
  className,
}: CountUpProps) {
  const digits = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = digits.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.textContent = `${from}${suffix}`;

    let frame = 0;
    let startedAt = 0;

    const step = (now: number) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const value = Math.round(from + (to - from) * easeOut(progress));
      node.textContent = `${value}${suffix}`;
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      node.textContent = `${to}${suffix}`;
    };
  }, [from, to, suffix, durationMs]);

  return (
    <span className={className}>
      {/* The moving digits are decoration; the figure announced to assistive
          technology is the settled one, never a number mid-count. */}
      <span ref={digits} aria-hidden="true">
        {to}
        {suffix}
      </span>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
    </span>
  );
}
