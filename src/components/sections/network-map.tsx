"use client";

import { useState } from "react";

import type { NetworkLocation } from "@/lib/content";
import { MAP_COUNTRIES, MAP_VIEW } from "@/lib/map-geometry";
import { projectToMap, routePath, toMapPercent } from "@/lib/map-projection";
import { cn } from "@/lib/utils";

/**
 * Label anchors are in the map's own viewBox units, carried over from the
 * bitmap this replaced. The three Pearl River Delta sites sit within ~10 units
 * of each other — about 2.5 CSS px — so they share a leader-line stack instead
 * of being labelled in place.
 */
type LabelPlacement = {
  x: number;
  y: number;
  variant: "inline" | "stacked";
  leader: boolean;
};

const LABELS: Record<string, LabelPlacement> = {
  huizhou: { x: 1690, y: 466, variant: "inline", leader: true },
  shenzhen: { x: 1690, y: 544, variant: "inline", leader: true },
  "hong-kong": { x: 1690, y: 622, variant: "inline", leader: true },
  vietnam: { x: 1449, y: 928, variant: "stacked", leader: false },
  indonesia: { x: 1445, y: 1494, variant: "stacked", leader: true },
};

/** Every site feeds the Indonesian facility; bows fan the shared corridor out. */
const ROUTES: { from: string; bow: number }[] = [
  { from: "huizhou", bow: 0.22 },
  { from: "shenzhen", bow: 0.185 },
  { from: "hong-kong", bow: 0.15 },
  { from: "vietnam", bow: 0.075 },
];

const HUB = "indonesia";

/**
 * The Pearl River Delta sites. Hong Kong and Shenzhen project ~6 viewBox units
 * apart — under 2 CSS px — so no pointer can pick between them on the map.
 * They are reachable through their label rows and their cards instead.
 */
const CLUSTER = new Set(["hong-kong", "shenzhen", "huizhou"]);

/** Half the city-label row height, to aim leader lines at the text's middle. */
const LEADER_INSET = 26;

const TIER_FILL = {
  base: "fill-[#1a242e]",
  light: "fill-[#24323e]",
  home: "fill-[#3a2126]",
} as const;

export function NetworkMap({ locations }: { locations: NetworkLocation[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;

  const points = new Map(locations.map((l) => [l.id, projectToMap(l.lng, l.lat)]));
  const hub = points.get(HUB);

  const isDimmed = (id: string) => active !== null && active !== id;

  return (
    <>
      {/*
        `overflow-hidden` because the map is sized to fill a 1200px-wide frame.
        The page's `min-w-desk` floor lets the frame get as narrow as 1100px,
        and there the map is cropped at the border rather than letterboxed —
        which is the whole point: no stranded edges inside the frame.
      */}
      <div
        className="relative mb-18 h-130 overflow-hidden border border-white/10"
        onPointerLeave={() => setHovered(null)}
      >
        <div
          className="relative mx-auto h-full"
          style={{ aspectRatio: `${MAP_VIEW.width} / ${MAP_VIEW.height}` }}
        >
          <svg
            viewBox={`${MAP_VIEW.minX} ${MAP_VIEW.minY} ${MAP_VIEW.width} ${MAP_VIEW.height}`}
            className="absolute inset-0 size-full"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <radialGradient id="map-home-glow">
                <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g>
              {MAP_COUNTRIES.map((country) => {
                const home = country.tier === "home";
                const lit = home && active === HUB;
                return (
                  <path
                    key={country.name}
                    d={country.d}
                    strokeWidth={home ? 3 : 2}
                    className={cn(
                      "transition-[fill,stroke] duration-300",
                      home ? "stroke-brand" : "stroke-[#2c3a46]/50",
                      lit ? "fill-[#65222a]" : TIER_FILL[country.tier],
                      home && !lit && "opacity-90",
                    )}
                  />
                );
              })}
            </g>

            {hub && (
              <g fill="none" strokeWidth="4" strokeDasharray="14 12">
                {ROUTES.map((route, index) => {
                  const from = points.get(route.from);
                  if (!from) return null;
                  const live = active === route.from || active === HUB;
                  return (
                    <path
                      key={route.from}
                      d={routePath(from, hub, route.bow)}
                      style={{ animationDelay: `${index * -0.65}s` }}
                      className={cn(
                        "map-route-flow transition-[stroke,opacity] duration-300",
                        live ? "stroke-brand-bright opacity-90" : "stroke-brand",
                        !live && isDimmed(route.from) ? "opacity-20" : !live && "opacity-55",
                      )}
                    />
                  );
                })}
              </g>
            )}

            <g stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2.5">
              {locations.map((location) => {
                const placement = LABELS[location.id];
                const point = points.get(location.id);
                if (!placement?.leader || !point) return null;
                return (
                  <line
                    key={location.id}
                    x1={point.x}
                    y1={point.y}
                    x2={placement.x - 24}
                    y2={placement.y + LEADER_INSET}
                    className={cn(
                      "transition-opacity duration-300",
                      isDimmed(location.id) && "opacity-25",
                    )}
                  />
                );
              })}
            </g>

            {locations.map((location, index) => {
              const point = points.get(location.id);
              if (!point) return null;
              const radius = location.home ? 14.5 : 9.5;
              const lit = active === location.id;
              return (
                <g
                  key={location.id}
                  className={cn(
                    "transition-opacity duration-300",
                    isDimmed(location.id) && "opacity-30",
                  )}
                >
                  {location.home && (
                    <circle cx={point.x} cy={point.y} r={88} fill="url(#map-home-glow)" />
                  )}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={radius}
                    style={{ animationDelay: `${index * -0.6}s` }}
                    className={cn("map-pulse fill-brand", lit && "fill-brand-bright")}
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={radius}
                    strokeWidth="6"
                    className={cn(
                      "stroke-ink transition-[fill,r] duration-300",
                      lit ? "fill-brand-bright" : "fill-brand",
                    )}
                  />
                  {lit && (
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={radius + 13}
                      fill="none"
                      strokeWidth="4"
                      className="stroke-brand-bright"
                    />
                  )}
                </g>
              );
            })}

            {/*
              Pointer affordances on the map itself, for the sites that stand
              alone. Every site also has a full-size card below, which is what
              WCAG 2.2 target size is measured against.
            */}
            {locations
              .filter((location) => !CLUSTER.has(location.id))
              .map((location) => {
                const point = points.get(location.id);
                if (!point) return null;
                return (
                  <circle
                    key={location.id}
                    cx={point.x}
                    cy={point.y}
                    r={46}
                    fill="transparent"
                    className="cursor-pointer"
                    onPointerEnter={() => setHovered(location.id)}
                  />
                );
              })}
          </svg>

          {locations.map((location) => {
            const placement = LABELS[location.id];
            if (!placement) return null;
            const lit = active === location.id;
            const dimmed = isDimmed(location.id);
            return (
              <div
                key={location.id}
                aria-hidden="true"
                data-location={location.id}
                style={toMapPercent({ x: placement.x, y: placement.y })}
                className={cn(
                  "absolute flex cursor-pointer py-1 whitespace-nowrap transition-opacity duration-300",
                  placement.variant === "inline"
                    ? "-translate-y-1/2 items-baseline gap-2"
                    : "flex-col",
                  dimmed && "opacity-35",
                )}
                onPointerEnter={() => setHovered(location.id)}
              >
                {/*
                  The active label stays white rather than going brand-bright:
                  over Indonesia's lit fill that red would drop to 3.8:1, under
                  AA. Dimming the other four is what marks this one as active.
                */}
                <span className="font-display text-label tracking-card font-bold text-white">
                  {location.city}
                </span>
                <span
                  className={cn(
                    "text-micro transition-colors duration-300",
                    lit ? "text-fog-soft" : "text-fog",
                    placement.variant === "stacked" && "tracking-nudge mt-0.5 uppercase",
                  )}
                >
                  {location.detail}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative" onPointerLeave={() => setHovered(null)}>
        <span
          aria-hidden="true"
          className="absolute top-[11px] right-0 left-0 h-px bg-white/15"
        />
        <ul className="relative grid grid-cols-5 gap-6">
          {locations.map((location) => {
            const lit = active === location.id;
            // The cards deliberately do not dim with the map. They carry the
            // same copy at full information value, and fading them would put
            // `text-fog-soft` at 3.6:1 — under AA. The active one is marked by
            // highlighting, not by suppressing the other four.
            return (
              <li
                key={location.city}
                className="reveal-on-scroll relative"
                onPointerEnter={() => setHovered(location.id)}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "bg-ink mb-6.5 flex size-5.75 items-center justify-center rounded-full border transition-colors duration-300",
                    lit ? "border-brand" : "border-white/30",
                  )}
                >
                  <span
                    className={cn(
                      "block size-2.25 rounded-full transition-colors duration-300",
                      lit ? "bg-brand-bright" : "bg-brand",
                    )}
                  />
                </span>
                <h3
                  className={cn(
                    "font-display text-title tracking-card mb-2 font-bold transition-colors duration-300",
                    lit && "text-brand-bright",
                  )}
                >
                  {location.city}
                </h3>
                <p className="text-meta text-fog mb-4.5">{location.country}</p>
                <p className="text-meta leading-copy text-fog-soft">{location.role}</p>
                {/*
                  Covers the whole cell so the card is one large target, while
                  the heading above keeps its own semantics. Click pins the
                  highlight, which is how this works without a pointer.
                */}
                <button
                  type="button"
                  aria-pressed={pinned === location.id}
                  onFocus={() => setHovered(location.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() =>
                    setPinned((current) => (current === location.id ? null : location.id))
                  }
                  className="absolute inset-0 cursor-pointer"
                >
                  <span className="sr-only">Sorot {location.city} pada peta jaringan</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
