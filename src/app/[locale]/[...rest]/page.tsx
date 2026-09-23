import { notFound } from "next/navigation";

/**
 * The proxy routes every unmatched path through the locale segment, so this
 * catch-all is what turns `/typo` and `/id/typo` into the localised 404 rather
 * than an untranslated framework page.
 */
export default function CatchAllPage() {
  notFound();
}
