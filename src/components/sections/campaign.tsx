import { MessageCircle } from "lucide-react";

import { Arrow } from "@/components/arrow";
import { whatsappUrl } from "@/lib/site";

export function CampaignSection() {
  return (
    <section className="bg-brand text-white">
      <div className="max-w-shell mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-16 px-10 py-21">
        <div>
          <p className="font-display text-campaign tracking-display mb-4.5 leading-[1.05] font-bold">
            Buat apa impor?
          </p>
          <p className="text-subtitle leading-body max-w-[680px] text-pretty text-white">
            Kualitas lokal dengan harga kompetitif, siap supply dalam jumlah
            besar. Dukung produk dalam negeri untuk industri Indonesia.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand text-cta hover:bg-ink inline-flex items-center gap-3 bg-white px-8.5 py-5 font-bold whitespace-nowrap hover:text-white"
        >
          <MessageCircle aria-hidden="true" className="size-5.25 flex-none" />
          Minta penawaran <Arrow />
        </a>
      </div>
    </section>
  );
}
