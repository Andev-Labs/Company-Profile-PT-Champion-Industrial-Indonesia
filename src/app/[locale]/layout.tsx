import type { Metadata } from "next";
import { IBM_Plex_Sans, Saira } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import {
  alt as ogImageAlt,
  size as ogImageSize,
} from "@/app/opengraph-image";
import { MotionProvider } from "@/components/motion-provider";
import { localeMeta, routing } from "@/i18n/routing";
import { site, siteUrl } from "@/lib/site";
import "../globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * The display face (ANDEV-132). Saira is a squared-off technical grotesque —
 * its flat-sided bowls and engineered figures suit a fastener manufacturer in
 * a way the previous humanist grotesque did not. Loaded as a variable font so
 * the 400–700 range the headings use costs one file, and pinned to the normal
 * width so the `wdth` axis cannot drift between browsers.
 */
const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  axes: ["wdth"],
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

/**
 * The branded link-preview card. It is generated at the app root so both
 * languages share one unprefixed URL, which puts it above this root layout —
 * Next only attaches `opengraph-image` files automatically from the root
 * layout down, so it is referenced explicitly here.
 */
const ogImage = {
  url: "/opengraph-image",
  ...ogImageSize,
  alt: ogImageAlt,
  type: "image/png",
};

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Metadata" });

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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
      className={`${ibmPlexSans.variable} ${saira.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={clientMessages}>
          <MotionProvider>{children}</MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
