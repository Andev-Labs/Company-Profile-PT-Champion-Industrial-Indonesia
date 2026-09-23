import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { footerNavItems, site, whatsappDisplay, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-fog">
      <div className="max-w-shell mx-auto grid grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,1fr))] gap-15 px-10 pt-16 pb-8">
        <div>
          <Image
            src="/images/logo-cmf.png"
            alt="Logo CMF"
            width={780}
            height={540}
            className="mb-5.5 h-10.5 w-auto"
          />
          <p className="font-display text-lead-sm mb-2.5 font-bold text-white">
            {site.name}
          </p>
          <p className="text-body leading-text max-w-[380px]">
            Manufaktur fastener dan precision hardware. Bagian dari grup
            industri yang berdiri di Hong Kong sejak 1982.
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="text-label tracking-label mb-4.5 font-semibold text-white">
            HALAMAN
          </h2>
          <ul className="text-body flex flex-col gap-3">
            {footerNavItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-fog hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-label tracking-label mb-4.5 font-semibold text-white">
            KONTAK
          </h2>
          <ul className="text-body flex flex-col gap-3">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fog inline-flex items-center gap-2.25 hover:text-white"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="size-4.25 flex-none"
                />
                WhatsApp {whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fog hover:text-white"
              >
                {site.instagram.handle}
              </a>
            </li>
            <li className="leading-text">
              Kadu Jaya, Curug,
              <br />
              Kabupaten Tangerang, Banten
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-shell text-caption mx-auto flex items-center justify-between gap-6 px-10 py-5.5">
          <p>© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
