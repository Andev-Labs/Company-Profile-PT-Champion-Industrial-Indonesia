import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * One entry per language, each declaring the other as its alternate, so a
 * crawler that finds either version knows both exist. English is unprefixed
 * because `localePrefix: "as-needed"` keeps the default locale on `/`.
 */
const languages = {
  en: siteUrl,
  id: `${siteUrl}/id`,
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(languages).map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
