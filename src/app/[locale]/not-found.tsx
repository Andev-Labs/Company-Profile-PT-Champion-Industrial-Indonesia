import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import { Arrow } from "@/components/arrow";
import { Link } from "@/i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NotFound");

  return {
    title: t("metaTitle"),
    robots: { index: false, follow: true },
  };
}

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="bg-ink px-shell flex min-h-screen flex-col items-center justify-center gap-6.5 text-center text-white">
      <p className="text-eyebrow tracking-eyebrow text-brand-bright font-semibold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-section leading-display tracking-heading max-w-[620px] font-bold">
        {t("title")}
      </h1>
      <Link
        href="/"
        className="bg-brand text-cta-sm hover:bg-white hover:text-ink inline-flex items-center gap-2.5 rounded-lg px-7.5 py-4.25 font-semibold text-white"
      >
        {t("cta")} <Arrow />
      </Link>
    </main>
  );
}
