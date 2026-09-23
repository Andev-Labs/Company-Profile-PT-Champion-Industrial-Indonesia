import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";

import { AboutSection } from "@/components/sections/about";
import { AdvantagesSection } from "@/components/sections/advantages";
import { CampaignSection } from "@/components/sections/campaign";
import { ContactSection } from "@/components/sections/contact";
import { GallerySection } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { IndustryTicker } from "@/components/sections/industry-ticker";
import { JourneySection } from "@/components/sections/journey";
import { NetworkSection } from "@/components/sections/network";
import { ProductsSection } from "@/components/sections/products";
import { QualitySection } from "@/components/sections/quality";
import { TechnologySection } from "@/components/sections/technology";
import { BackToTop } from "@/components/back-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OrganizationJsonLd } from "@/components/structured-data";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  // Narrows the generated `string` param to a known locale; the layout has
  // already rejected anything else, so this can only ever pass here.
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <div className="w-full">
      <OrganizationJsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <IndustryTicker />
        <AboutSection />
        <JourneySection />
        <NetworkSection />
        <ProductsSection />
        <TechnologySection />
        <IndustriesSection />
        <AdvantagesSection />
        <QualitySection />
        <GallerySection />
        <CampaignSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
