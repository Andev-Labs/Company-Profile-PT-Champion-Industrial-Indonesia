import { useLocale, useTranslations } from "next-intl";

import { localeMeta, routing } from "@/i18n/routing";
import { network } from "@/lib/content";
import { site, siteUrl, whatsappNumber } from "@/lib/site";

/**
 * Organization + LocalBusiness graph for the company profile.
 *
 * The graph is emitted per locale: the description is the one the page itself
 * is written in and `inLanguage` names it, so the two language versions do not
 * both claim to be the same document in the same language. The `@id`s stay
 * stable across locales on purpose — it is one company, described twice.
 */
export function OrganizationJsonLd() {
  const locale = useLocale();
  const t = useTranslations("Metadata");

  const openingHoursSpecification = site.openingHours.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: entry.schema.dayOfWeek,
    opens: entry.schema.opens,
    closes: entry.schema.closes,
  }));

  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: siteUrl,
        logo: `${siteUrl}/images/logo-cmf.png`,
        image: `${siteUrl}/images/hero-facility.jpg`,
        description: t("description"),
        slogan: site.slogan,
        foundingDate: "1982",
        address,
        sameAs: [site.instagram.url],
        areaServed: network.map((location) => location.country),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: `+${whatsappNumber}`,
            availableLanguage: [...routing.locales],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: site.name,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        url: siteUrl,
        image: `${siteUrl}/images/hero-facility.jpg`,
        telephone: `+${whatsappNumber}`,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        openingHoursSpecification,
        hasMap: site.mapsUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        inLanguage: localeMeta[locale].htmlLang,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
