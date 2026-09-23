import type { Metadata } from "next";
import Link from "next/link";

import { Arrow } from "@/components/arrow";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-ink px-shell flex min-h-screen flex-col items-center justify-center gap-6.5 text-center text-white">
      <p className="text-eyebrow tracking-eyebrow text-brand-bright font-semibold">
        ERROR 404
      </p>
      <h1 className="font-display text-section leading-display tracking-heading max-w-[620px] font-bold">
        Halaman yang Anda cari tidak ditemukan.
      </h1>
      <Link
        href="/"
        className="bg-brand text-cta-sm hover:bg-white hover:text-ink inline-flex items-center gap-2.5 px-7.5 py-4.25 font-semibold text-white"
      >
        Kembali ke beranda <Arrow />
      </Link>
    </main>
  );
}
