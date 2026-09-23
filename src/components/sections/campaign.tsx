import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/site";

export function CampaignSection() {
  const t = useTranslations("Campaign");

  return (
    <section className="bg-brand text-white">
      <div className="max-w-shell px-shell mx-auto grid grid-cols-1 items-center gap-9 py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:py-21">
        <Reveal>
          <p className="font-display text-campaign tracking-display mb-4.5 leading-[1.05] font-bold">
            {t("title")}
          </p>
          <p className="text-subtitle leading-body max-w-[680px] text-pretty text-white">
            {t("body")}
          </p>
        </Reveal>
        <Reveal
          as="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand text-cta hover:bg-ink group inline-flex items-center justify-center gap-3 bg-white px-8.5 py-5 font-bold whitespace-nowrap hover:text-white"
        >
          <MessageCircle aria-hidden="true" className="size-5.25 flex-none" />
          {t("cta")} <Arrow />
        </Reveal>
      </div>
    </section>
  );
}
