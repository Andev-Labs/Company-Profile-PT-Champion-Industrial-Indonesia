import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/**
 * Locale-aware replacements for `next/link` and the navigation hooks. `Link`
 * prefixes hrefs with the active locale, and `usePathname` reports the
 * pathname *without* that prefix — which is what the language switcher needs
 * to point at the same page in the other language.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
