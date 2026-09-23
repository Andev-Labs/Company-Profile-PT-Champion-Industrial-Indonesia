import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { localeMeta, routing } from "@/i18n/routing";
import { site, siteUrl } from "@/lib/site";
import "../globals.css";

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

/** Both languages are known up front, so both are prerendered at build time. */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * `as-needed` prefixing means English lives at `/` and Indonesian at `/id`.
 * Both are published as alternates of each other, with English as `x-default`
 * so a search engine has an unambiguous fallback for unmatched languages.
 */
const localePath = {
  en: "/",
  id: "/id",
} as const;

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });

  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s — ${site.shortName}` },
    description,
    alternates: {
      canonical: localePath[locale],
      languages: {
        en: localePath.en,
        id: localePath.id,
        "x-default": localePath.en,
      },
    },
    keywords: t("keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    openGraph: {
      type: "website",
      locale: localeMeta[locale].openGraph,
      alternateLocale: routing.locales
        .filter((other) => other !== locale)
        .map((other) => localeMeta[other].openGraph),
      url: new URL(localePath[locale], siteUrl).toString(),
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: "/images/hero-facility.jpg",
          width: 1600,
          height: 1067,
          alt: tHero("photoAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-facility.jpg"],
    },
  };
}

/**
 * Only these three namespaces are read from Client Components — the language
 * switcher, the mobile nav and the contact form. Everything else is rendered
 * on the server, so shipping the whole catalogue would put the entire site's
 * copy into the RSC payload twice over for no benefit.
 */
const CLIENT_NAMESPACES = ["Language", "Nav", "ContactForm"] as const;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Opts the whole tree into static rendering rather than falling back to
  // dynamic rendering the moment a translation is read.
  setRequestLocale(locale);

  const messages = await getMessages();
  const clientMessages = Object.fromEntries(
    CLIENT_NAMESPACES.map((namespace) => [namespace, messages[namespace]]),
  );

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={`${ibmPlexSans.variable} ${instrumentSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={clientMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
