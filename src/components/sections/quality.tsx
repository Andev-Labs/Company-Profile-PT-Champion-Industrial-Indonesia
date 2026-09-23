import Image from "next/image";

import { Arrow } from "@/components/arrow";
import { Eyebrow } from "@/components/eyebrow";
import { documents, qualitySteps } from "@/lib/content";

export function QualitySection() {
  return (
    <section id="mutu" className="bg-mist border-line scroll-mt-20 border-t lg:scroll-mt-24">
      <div className="max-w-shell px-shell mx-auto grid grid-cols-1 items-start gap-12 pt-16 pb-12 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-20 lg:pt-27.5 lg:pb-14">
        <div>
          <Eyebrow>KOMITMEN MUTU</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-6.5 font-bold">
            Standar yang bisa diperiksa, bukan sekadar dijanjikan.
          </h2>
          <p className="text-lead leading-text text-ink-soft mb-10 max-w-[560px] text-pretty">
            Kontrol kualitas dijalankan di setiap lini, dari material masuk
            sampai komponen dikemas. Dokumen mutu dan hasil uji tersedia atas
            permintaan pelanggan.
          </p>
          <ul className="bg-line border-line grid grid-cols-1 gap-px border sm:grid-cols-3">
            {qualitySteps.map((step) => (
              <li key={step.name} className="bg-white px-6 py-7">
                <h3 className="font-display text-body-lg text-ink mb-2.25 font-bold">
                  {step.name}
                </h3>
                <p className="text-note leading-copy text-slate-soft">
                  {step.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Placeholder rendering of the quality certificate — swapped for a scan
            of the real document once the company provides it. */}
        <div className="border-line border bg-white p-6.5">
          <div className="border-brand flex flex-col items-center border px-6 py-6.5 text-center">
            <Image
              src="/images/logo-cmf.png"
              alt=""
              width={780}
              height={540}
              className="mb-4.5 h-8.5 w-auto"
            />
            <p className="font-display text-lead-sm tracking-badge text-ink mb-2 font-bold">
              SERTIFIKAT MUTU
            </p>
            <p className="text-label tracking-caps text-slate mb-6 font-semibold">
              SISTEM MANAJEMEN KUALITAS
            </p>
            <div
              aria-hidden="true"
              className="mb-6.5 flex w-full flex-col gap-2.25"
            >
              <span className="bg-wash block h-2" />
              <span className="bg-wash mx-auto block h-2 w-[88%]" />
              <span className="bg-wash mx-auto block h-2 w-[70%]" />
            </div>
            <div
              aria-hidden="true"
              className="flex w-full items-end justify-between gap-5"
            >
              <span className="flex-1 text-left">
                <span className="bg-silver-soft mb-1.75 block h-px" />
                <span className="text-micro-xs tracking-step text-slate block font-semibold">
                  NOMOR &amp; MASA BERLAKU
                </span>
              </span>
              <span className="border-line-strong block size-14 flex-none rounded-full border-2 border-dashed" />
            </div>
          </div>
          <p className="text-caption leading-copy text-slate mt-4 text-center">
            Contoh tampilan. Scan sertifikat asli dari perusahaan akan
            menggantikan bagian ini.
          </p>
        </div>
      </div>

      <div className="max-w-shell px-shell mx-auto pb-16 sm:pb-20 lg:pb-27.5">
        <div className="bg-ink px-6 py-9 text-white sm:px-10 sm:py-11">
          <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-15 lg:mb-9">
            <p className="text-label tracking-label text-fog-soft font-semibold">
              DOKUMEN TEKNIS
            </p>
            <a
              href="#kontak"
              className="text-body inline-flex items-center gap-2.5 border border-white/30 px-6 py-3.5 font-semibold whitespace-nowrap text-white hover:border-white hover:bg-white/5 hover:text-white"
            >
              Minta dokumen <Arrow />
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((document) => (
              <li key={document.name} className="bg-ink py-4 sm:py-0 sm:pr-7">
                <div className="flex items-start gap-3.25">
                  <span
                    aria-hidden="true"
                    className="bg-brand mt-2 size-1.75 flex-none rounded-full"
                  />
                  <div>
                    <h3 className="font-display text-body-lg mb-2 font-semibold">
                      {document.name}
                    </h3>
                    <p className="text-meta leading-copy text-fog-soft">
                      {document.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
