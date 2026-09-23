"use client";

import { m, type Variants } from "motion/react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/** The elements a reveal wraps across the sections. */
const tags = {
  div: m.div,
  p: m.p,
  ul: m.ul,
  li: m.li,
  dl: m.dl,
  a: m.a,
} as const;

type RevealTag = keyof typeof tags;

type RevealProps = {
  as?: RevealTag;
  /**
   * Position in a grid. Cards in the same row cross the viewport edge
   * together, so without a delay a four-up grid lands as a single block; with
   * one, the row reads left to right. The cycle restarts every four so that a
   * long list begins each new row afresh instead of trailing further behind.
   */
  index?: number;
  className?: string;
  children: ReactNode;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;

const STAGGER_S = 0.08;
const CASCADE = 4;

const variants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: (index % CASCADE) * STAGGER_S,
    },
  }),
};

/**
 * Fades and lifts its content into place the first time it scrolls into
 * view. Scrolling back up leaves it where it is — a section that re-animates
 * on every pass reads as a page that cannot settle.
 *
 * The bottom margin holds the trigger back until the element is properly on
 * screen rather than a pixel past the fold, so the movement is actually seen.
 * Needs `MotionProvider` above it for the `m` component's features.
 */
export function Reveal({ as = "div", index = 0, children, ...rest }: RevealProps) {
  const Component = tags[as];

  return (
    <Component
      {...rest}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </Component>
  );
}
