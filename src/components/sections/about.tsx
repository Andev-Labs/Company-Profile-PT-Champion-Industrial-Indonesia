import { Eyebrow } from "@/components/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { aboutPhoto, aboutPillars } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="tentang" className="scroll-mt-24 bg-white">
      <div className="max-w-shell mx-auto grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-20 px-10 py-27.5">
        <div className="reveal-on-scroll">
          <Eyebrow>TENTANG KAMI</Eyebrow>
          <h2 className="font-display text-section leading-display tracking-heading text-ink mb-7 font-bold">
            Dari pabrik kecil di Hong Kong ke jaringan industri Asia.
          </h2>
          <div className="relative h-80">
            <PhotoFrame {...aboutPhoto} sizes="505px" />
          </div>
        </div>

        <div className="reveal-on-scroll pt-13">
          <p className="text-prose leading-prose text-ink-soft mb-5.5 text-pretty">
            Berawal dari sebuah pabrik kecil di Hong Kong pada tahun 1982,
            perusahaan tumbuh menjadi grup industri fastener dan precision
            hardware yang terintegrasi. Setelah lebih dari 44 tahun, perjalanan
            tersebut berlanjut di Indonesia melalui PT Champion Industrial
            Indonesia yang mulai beroperasi pada tahun 2026.
          </p>
          <p className="text-prose leading-prose text-ink-soft mb-10 text-pretty">
            Kehadiran fasilitas di Indonesia merupakan bagian dari langkah
            strategis untuk memperkuat kapasitas produksi, meningkatkan
            kualitas, dan mendukung kebutuhan industri fastener di Asia
            Tenggara. Indonesia diposisikan sebagai salah satu pusat strategis
            baru dalam rantai pasok fastener kawasan.
          </p>

          <blockquote className="border-brand mb-11 border-l-[3px] py-1.5 pl-6">
            <p className="font-display text-quote leading-title text-ink font-semibold">
              &ldquo;From Hong Kong 1982, Growing Together in Indonesia
              2026.&rdquo;
            </p>
          </blockquote>

          <ul className="bg-line grid grid-cols-3 gap-px">
            {aboutPillars.map((pillar) => (
              <li key={pillar.name} className="bg-white px-5.5 py-6">
                <h3 className="font-display text-ink mb-2 text-[15px] font-bold">
                  {pillar.name}
                </h3>
                <p className="text-note leading-copy text-slate-soft">
                  {pillar.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
