import { MAP_PROJECTION, MAP_VIEW } from "@/lib/map-geometry";

const DEG_TO_RAD = Math.PI / 180;

export type MapPoint = { x: number; y: number };

/**
 * Forward spherical Mercator, matching the projection the country outlines in
 * `map-geometry.ts` were generated with. Inlined rather than pulled from
 * `d3-geo` so the map ships no runtime dependency — the whole projection is
 * these four lines.
 *
 * Results are rounded because `Math.log` and `Math.tan` are implementation
 * defined: Node and V8-in-the-browser disagree on the last bit or two, which
 * is enough to make React report a hydration mismatch on every marker. Three
 * decimals in viewBox units is ~0.0008 CSS px — far below anything visible,
 * and far above the ~1e-12 the engines differ by.
 */
export function projectToMap(lng: number, lat: number): MapPoint {
  const { scale, translateX, translateY } = MAP_PROJECTION;
  const round = (value: number) => Math.round(value * 1000) / 1000;
  return {
    x: round(scale * lng * DEG_TO_RAD + translateX),
    y: round(translateY - scale * Math.log(Math.tan(Math.PI / 4 + (lat * DEG_TO_RAD) / 2))),
  };
}

/** Position within the map frame, as a percentage — used to place HTML labels. */
export function toMapPercent(point: MapPoint): { left: string; top: string } {
  return {
    left: `${((point.x / MAP_VIEW.width) * 100).toFixed(4)}%`,
    top: `${((point.y / MAP_VIEW.height) * 100).toFixed(4)}%`,
  };
}

/**
 * Quadratic Bézier between two markers, bowed perpendicular to the straight
 * line so overlapping routes stay readable. Positive `bow` bends west.
 */
export function routePath(from: MapPoint, to: MapPoint, bow: number): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const cx = (from.x + to.x) / 2 - dy * bow;
  const cy = (from.y + to.y) / 2 + dx * bow;
  return `M${from.x.toFixed(1)},${from.y.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${to.x.toFixed(1)},${to.y.toFixed(1)}`;
}
