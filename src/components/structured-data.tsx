import { network } from "@/lib/content";
import { site, siteUrl, whatsappNumber } from "@/lib/site";

/**
 * Organization + LocalBusiness graph for the company profile.
 *
 * Opening hours were held back while the mockup still marked them "menunggu
 * konfirmasi". They were confirmed on ANDEV-127, so they are published here
 * from the same `site.openingHours` rows the contact section prints.
 */
export function OrganizationJsonLd() {
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
        description: site.description,
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
            availableLanguage: ["id", "en"],
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
        inLanguage: "id-ID",
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
