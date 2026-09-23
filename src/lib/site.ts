/**
 * Single source of truth for company-level facts used across metadata,
 * structured data and the page chrome. Values transcribed from the approved
 * mockup (ANDEV-124).
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
  slogan: "Stronger Connections. Built to Perform.",
  description:
    "PT Champion Industrial Indonesia memproduksi fastener dan precision hardware di Tangerang. Lebih dari 44 tahun pengalaman grup manufaktur sejak Hong Kong 1982, dengan kontrol mutu ketat dan kesiapan supply jumlah besar.",
  locale: "id_ID",
  instagram: {
    handle: "@champion_industrial_id",
    url: "https://instagram.com/champion_industrial_id",
  },
  mapsUrl:
    "https://www.google.com/maps/dir//PT+CHAMPION+INDUSTRIAL+INDONESIA",
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
   * Still marked "menunggu konfirmasi" in the mockup, so these are rendered
   * with that caveat and deliberately kept out of the structured data.
   */
  openingHours: [
    { days: "Senin – Jumat", hours: "08.00 – 17.00", closed: false },
    { days: "Sabtu", hours: "08.00 – 13.00", closed: false },
    { days: "Minggu & hari besar", hours: "Tutup", closed: true },
  ],
} as const;

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "#tentang", label: "Tentang" },
  { href: "#jaringan", label: "Jaringan" },
  { href: "#produk", label: "Produk" },
  { href: "#teknologi", label: "Teknologi" },
  { href: "#industri", label: "Industri" },
  { href: "#galeri", label: "Galeri" },
];

export const footerNavItems: NavItem[] = [
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#jaringan", label: "Jaringan Operasi" },
  { href: "#produk", label: "Produk & Layanan" },
  { href: "#teknologi", label: "Teknologi & Proses" },
  { href: "#industri", label: "Industri yang Dilayani" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

/** Builds the prefilled WhatsApp deep link used by the contact form. */
export function buildWhatsappLink(input: {
  name: string;
  company: string;
  need: string;
  message: string;
}): string {
  const body = [
    "Halo PT Champion Industrial Indonesia,",
    "",
    `Nama: ${input.name || "-"}`,
    `Perusahaan: ${input.company || "-"}`,
    `Kebutuhan: ${input.need}`,
    `Detail: ${input.message || "-"}`,
  ].join("\n");

  return `${whatsappUrl}?text=${encodeURIComponent(body)}`;
}
