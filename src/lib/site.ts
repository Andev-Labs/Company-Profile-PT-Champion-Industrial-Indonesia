/**
 * Single source of truth for company-level facts used across metadata,
 * structured data and the page chrome. Values transcribed from the approved
 * mockup (ANDEV-124).
 *
 * Facts only — anything a reader reads as a sentence lives in
 * `messages/<locale>.json`. The opening-hours rows keep the `schema.org`
 * shape here and carry the message key their day label is printed from, so
 * the JSON-LD and the visible table can never drift apart.
 */

/**
 * Production origin. The live domain has not been confirmed on the issue yet,
 * so it is overridable without a code change and falls back to the placeholder
 * below. Set NEXT_PUBLIC_SITE_URL before deploying.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.championindustrial.co.id";

export const whatsappNumber = "628135207992";
export const whatsappDisplay = "0813 5207 992";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const site = {
  name: "PT Champion Industrial Indonesia",
  shortName: "Champion Industrial",
  /** Brand line. Stays English in both languages, by design. */
  slogan: "Stronger Connections. Built to Perform.",
  instagram: {
    handle: "@champion_industrial_id",
    url: "https://instagram.com/champion_industrial_id",
  },
  mapsUrl:
    "https://www.google.com/maps/dir//PT+CHAMPION+INDUSTRIAL+INDONESIA",
  /**
   * Embed supplied by the company on ANDEV-127. It is the satellite view
   * centred on the plant, so it stays verbatim rather than being rebuilt from
   * the coordinates below. Rendered in the footer next to the address.
   */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5174.889802697884!2d106.55915311161088!3d-6.213166693748804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff0070ea9d41%3A0x184d5a02375e62da!2sPT%20CHAMPION%20INDUSTRIAL%20INDONESIA!5e1!3m2!1sen!2sid!4v1790169266226!5m2!1sen!2sid",
  /** Read off the embed above, so the map pin and the knowledge panel agree. */
  geo: { latitude: -6.2131667, longitude: 106.5591531 },
  /** A postal address is not translated — it has to be writable on an envelope. */
  address: {
    lines: [
      "Komplek Pergudangan & Industri PKT Bitung,",
      "Jl. Kp. Kadu Jaya Blok F No. 1 & 2, Kadu Jaya,",
      "Kec. Curug, Kabupaten Tangerang, Banten 15810",
    ],
    street:
      "Komplek Pergudangan & Industri PKT Bitung, Jl. Kp. Kadu Jaya Blok F No. 1 & 2, Kadu Jaya",
    locality: "Kec. Curug, Kabupaten Tangerang",
    region: "Banten",
    postalCode: "15810",
    country: "ID",
  },
  /**
   * Confirmed on ANDEV-127. Each row carries the message key its day label is
   * printed from and the schema.org shape the JSON-LD needs, so the two can
   * never drift.
   */
  openingHours: [
    {
      key: "weekdays",
      hours: "08.00 – 17.00",
      closed: false,
      schema: {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    },
    {
      key: "saturday",
      hours: "08.00 – 13.00",
      closed: false,
      schema: { dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" },
    },
    {
      key: "sunday",
      hours: null,
      closed: true,
      schema: { dayOfWeek: ["Sunday"], opens: "00:00", closes: "00:00" },
    },
  ],
} as const;

export type NavKey =
  | "about"
  | "network"
  | "products"
  | "technology"
  | "industries"
  | "gallery";

export type NavItem = { href: string; key: NavKey };

/**
 * Section anchors stay as they are: they are stable technical identifiers that
 * existing links point at, not copy, so they do not change with the language.
 */
export const navItems: NavItem[] = [
  { href: "#tentang", key: "about" },
  { href: "#jaringan", key: "network" },
  { href: "#produk", key: "products" },
  { href: "#teknologi", key: "technology" },
  { href: "#industri", key: "industries" },
  { href: "#galeri", key: "gallery" },
];

/** Builds the prefilled WhatsApp deep link used by the contact form. */
export function buildWhatsappLink(input: {
  labels: {
    greeting: string;
    name: string;
    company: string;
    need: string;
    detail: string;
  };
  name: string;
  company: string;
  need: string;
  message: string;
}): string {
  const { labels } = input;
  const body = [
    labels.greeting,
    "",
    `${labels.name}: ${input.name || "-"}`,
    `${labels.company}: ${input.company || "-"}`,
    `${labels.need}: ${input.need}`,
    `${labels.detail}: ${input.message || "-"}`,
  ].join("\n");

  return `${whatsappUrl}?text=${encodeURIComponent(body)}`;
}
