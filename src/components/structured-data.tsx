import { network } from "@/lib/content";
import { site, siteUrl, whatsappNumber } from "@/lib/site";

/**
 * Organization + LocalBusiness graph for the company profile.
 *
 * Opening hours are intentionally absent: the mockup still marks them
 * "menunggu konfirmasi", and publishing unconfirmed hours to search engines
 * would surface wrong information in the knowledge panel.
 */
export function OrganizationJsonLd() {
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
