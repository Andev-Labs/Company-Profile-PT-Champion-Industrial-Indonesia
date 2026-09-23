import { createCn } from "cn/config";

/**
 * The project's design tokens live in `globals.css`, which the class merger
 * cannot read. Without this registration it cannot tell a custom font size
 * (`text-eyebrow`) from a custom colour (`text-brand`) and silently drops one
 * of them whenever both land in the same `cn()` call.
 *
 * Keep these lists in sync with the `@theme` block in `src/app/globals.css`.
 */
export const cn = createCn({
  extend: {
    theme: {
      color: [
        "brand",
        "brand-hover",
        "brand-bright",
        "ink",
        "ink-soft",
        "slate",
        "slate-soft",
        "fog",
        "fog-soft",
        "silver",
        "silver-soft",
        "line",
        "line-strong",
        "line-mid",
        "line-soft",
        "wash",
        "mist",
      ],
      text: [
        "hero",
        "campaign",
        "section",
        "stat",
        "stat-sm",
        "subsection",
        "headline",
        "title",
        "title-sm",
        "quote",
        "quote",
        "subtitle",
        "prose",
        "lead",
        "lead-sm",
        "cta",
        "cta-sm",
        "body-lg",
        "body",
        "field",
        "note",
        "meta",
        "caption",
        "eyebrow",
        "label",
        "micro",
        "micro-xs",
      ],
      leading: [
        "hero",
        "display",
        "heading",
        "title",
        "copy",
        "body",
        "text",
        "prose",
      ],
      tracking: [
        "display",
        "heading",
        "title",
        "card",
        "hair",
        "nudge",
        "badge",
        "micro",
        "step",
        "caps",
        "label",
        "eyebrow",
        "logo",
      ],
    },
  },
});
