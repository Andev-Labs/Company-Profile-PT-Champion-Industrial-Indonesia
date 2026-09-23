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
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OrganizationJsonLd } from "@/components/structured-data";

export default function HomePage() {
  return (
    /* The approved design is a fixed desktop grid; mobile breakpoints are
       deliberately out of scope for ANDEV-124, so the shell holds its width. */
    <div className="min-w-desk w-full">
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
    </div>
  );
}
