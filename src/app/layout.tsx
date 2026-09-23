import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Sans } from "next/font/google";

import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Fastener & Precision Hardware`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  keywords: [
    "fastener",
    "precision hardware",
    "baut dan sekrup industri",
    "micro screw",
    "custom part OEM",
    "pabrik fastener Tangerang",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Fastener & Precision Hardware`,
    description: site.description,
    images: [
      {
        url: "/images/hero-facility.jpg",
        width: 1600,
        height: 1067,
        alt: "Lini produksi di dalam fasilitas manufaktur fastener",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Fastener & Precision Hardware`,
    description: site.description,
    images: ["/images/hero-facility.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${ibmPlexSans.variable} ${instrumentSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
