/**
 * Helpers for the page's scroll motion. The animation itself lives in
 * `globals.css` as the `reveal-on-scroll` utility; this only hands out the
 * per-card offset that turns a row of cards into a cascade.
 */

/**
 * `--reveal-lag` shifts a card's slice of the scroll timeline later. Cards in
 * the same row enter the viewport at the same moment, so without an offset a
 * four-up grid arrives as a single block; with one, the row reads left to
 * right. Written as whole classes rather than built from a template string so
 * that Tailwind's source scan can see them.
 */
const lags = [
  "",
  "[--reveal-lag:5%]",
  "[--reveal-lag:10%]",
  "[--reveal-lag:15%]",
] as const;

/**
 * Offset for the card at `index` in a grid. The cycle is shorter than most of
 * the grids, so a long list restarts the cascade rather than drifting further
 * and further behind the scroll — which is what you want, since each new row
 * is a fresh left-to-right sweep anyway.
 */
export function revealLag(index: number): string {
  return lags[index % lags.length];
}
