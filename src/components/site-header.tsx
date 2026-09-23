import Image from "next/image";

import { Arrow } from "@/components/arrow";
import { MobileNav } from "@/components/mobile-nav";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bg-white/95 border-line sticky top-0 z-60 border-b backdrop-blur-[10px]">
      <div className="max-w-shell px-shell mx-auto flex h-16 items-center justify-between gap-4 lg:h-21 lg:gap-10">
        <a href="#atas" className="flex min-w-0 items-center gap-3 lg:gap-3.5">
          <Image
            src="/images/logo-cmf.png"
            alt="Logo CMF"
            width={780}
            height={540}
            priority
            className="h-8 w-auto flex-none lg:h-9.5"
          />
          <span className="leading-heading flex min-w-0 flex-col">
            <span className="font-display text-ink tracking-nudge truncate text-[13px] font-bold sm:text-[15px]">
              PT CHAMPION INDUSTRIAL
            </span>
            <span className="text-slate tracking-logo text-micro font-medium">
              INDONESIA
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="text-body hidden items-center gap-6.5 font-medium whitespace-nowrap lg:flex"
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

        <MobileNav />
      </div>
    </header>
  );
}
