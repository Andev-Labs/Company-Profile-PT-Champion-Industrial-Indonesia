import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

/**
 * The link-preview card WhatsApp, LinkedIn, Facebook and X show when the site
 * is shared (ANDEV-137). It carries the CMF logo so the preview is recognisable
 * at a glance, instead of the 368 KB hero photo it used before.
 *
 * Everything is centred: WhatsApp's compact preview crops the card to a
 * square from the middle, and a centred layout keeps the logo inside that
 * crop.
 *
 * It lives at the app root rather than under `[locale]`: the card has no
 * translated copy, and `as-needed` prefixing would answer `/en/opengraph-image`
 * with a redirect, which preview crawlers do not reliably follow. One
 * unprefixed `/opengraph-image` serves both languages, is excluded from the
 * locale proxy in `src/proxy.ts`, and is rendered once at build time.
 *
 * Colours mirror `--primary` and `--foreground` in `globals.css`; the image
 * renderer cannot read CSS custom properties.
 */
const brandRed = "#d81f26";
const ink = "#101922";

export const alt = `${site.name} logo — ${site.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/images/logo-cmf.png"),
    "base64",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderBottom: `24px solid ${brandRed}`,
          color: ink,
        }}
      >
        {/* 780 × 540 source, scaled to keep its aspect ratio. */}
        <img
          src={`data:image/png;base64,${logo}`}
          width={390}
          height={270}
          alt=""
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 12, fontSize: 30, color: brandRed }}>
          {site.slogan}
        </div>
      </div>
    ),
    size,
  );
}
