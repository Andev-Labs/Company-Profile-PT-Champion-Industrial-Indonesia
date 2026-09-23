import Image from "next/image";

import { Arrow } from "@/components/arrow";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bg-white/95 border-line sticky top-0 z-60 border-b backdrop-blur-[10px]">
      <div className="max-w-shell mx-auto flex h-21 items-center justify-between gap-10 px-10">
        <a href="#atas" className="flex items-center gap-3.5">
          <Image
            src="/images/logo-cmf.png"
            alt="Logo CMF"
            width={780}
            height={540}
            priority
            className="h-9.5 w-auto"
          />
          <span className="flex flex-col leading-heading">
            <span className="font-display text-ink tracking-nudge text-[15px] font-bold">
              PT CHAMPION INDUSTRIAL
            </span>
            <span className="text-slate tracking-logo text-micro font-medium">
              INDONESIA
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="text-body flex items-center gap-6.5 font-medium whitespace-nowrap"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="bg-brand text-note tracking-hair hover:bg-ink inline-flex items-center gap-2.25 px-5.5 py-3.25 font-semibold text-white hover:text-white"
          >
            Hubungi Kami
            <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
