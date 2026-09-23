/**
 * Page content transcribed from the approved mockup (ANDEV-124).
 * Copy is authored by the business — do not paraphrase when editing.
 *
 * The photography is Unsplash placeholder material carried over from the
 * mockup; each entry keeps its attribution so the credit can be rendered and
 * so the swap to real factory photography is a one-line change per item.
 */

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  creditHref: string;
};

export type Milestone = {
  step: string;
  year: string;
  place: string;
  desc: string;
};

export type NetworkLocation = {
  id: string;
  city: string;
  country: string;
  role: string;
  /** Sub-label shown under the city name on the map. */
  detail: string;
  /** Plotted on the map through `projectToMap` in `@/lib/map-projection`. */
  lng: number;
  lat: number;
  /** The Indonesian facility, drawn with the heavier marker. */
  home?: boolean;
};

export type Product = Photo & { name: string; desc: string };

export type TechStep = Photo & { no: string; name: string; desc: string };

export type NumberedItem = { no: string; name: string; desc: string };

export type NamedItem = { name: string; desc: string };

export type GalleryItem = Photo & { wide: boolean };

export const heroStats = [
  { value: "1982", label: "Berdiri di Hong Kong" },
  { value: "2026", label: "Mulai beroperasi di Indonesia" },
  { value: "5", label: "Lokasi operasi lintas Asia" },
  { value: "OEM", label: "Custom part sesuai spesifikasi" },
] as const;

export const tickerIndustries = [
  "FURNITURE",
  "OTOMOTIF",
  "KONSTRUKSI",
  "ELEKTRONIK",
  "MESIN",
  "MANUFAKTUR",
] as const;

export const heroPhoto: Photo = {
  src: "/images/hero-facility.jpg",
  alt: "Lini produksi di dalam fasilitas manufaktur fastener",
  credit: "Photo by Homa Appliances on Unsplash",
  creditHref: "https://unsplash.com/@homaappliances",
};

export const aboutPhoto: Photo = {
  src: "/images/about-facility.jpg",
  alt: "Area lantai produksi pabrik dengan jalur kerja bertanda",
  credit: "Photo by Homa Appliances on Unsplash",
  creditHref: "https://unsplash.com/@homaappliances",
};

export const aboutPillars: NamedItem[] = [
  {
    name: "Produksi",
    desc: "Lini manufaktur fastener dan precision hardware",
  },
  { name: "R&D", desc: "Pengembangan komponen sesuai spesifikasi" },
  { name: "Distribusi", desc: "Supply skala besar untuk industri kawasan" },
];

export const timeline: Milestone[] = [
  {
    step: "01",
    year: "1982",
    place: "Hong Kong",
    desc: "Pabrik pertama berdiri, memproduksi komponen fastener.",
  },
  {
    step: "02",
    year: "EKSPANSI TIONGKOK",
    place: "Shenzhen & Huizhou",
    desc: "Kapasitas produksi dan R&D bertambah.",
  },
  {
    step: "03",
    year: "EKSPANSI ASEAN",
    place: "Vietnam",
    desc: "Jaringan manufaktur dan distribusi meluas.",
  },
  {
    step: "04",
    year: "2026",
    place: "Tangerang, Indonesia",
    desc: "PT Champion Industrial Indonesia mulai beroperasi.",
  },
];

/**
 * Order here drives the card row under the map. Coordinates are the real city
 * centres the mockup's map was plotted from, so the markers land where the
 * approved artwork put them.
 */
export const network: NetworkLocation[] = [
  {
    id: "hong-kong",
    city: "Hong Kong",
    country: "Hong Kong",
    role: "Basis awal grup sejak 1982",
    detail: "Hong Kong",
    lng: 114.17,
    lat: 22.32,
  },
  {
    id: "shenzhen",
    city: "Shenzhen",
    country: "Tiongkok",
    role: "Produksi dan pengembangan",
    detail: "Tiongkok",
    lng: 114.06,
    lat: 22.54,
  },
  {
    id: "huizhou",
    city: "Huizhou",
    country: "Tiongkok",
    role: "Produksi skala besar",
    detail: "Tiongkok",
    lng: 114.42,
    lat: 23.11,
  },
  {
    id: "vietnam",
    city: "Vietnam",
    country: "Vietnam",
    role: "Manufaktur dan distribusi",
    detail: "Vietnam",
    lng: 106.66,
    lat: 10.76,
  },
  {
    id: "indonesia",
    city: "Indonesia",
    country: "Indonesia",
    role: "Fasilitas baru, beroperasi 2026",
    detail: "Tangerang, Indonesia",
    lng: 106.63,
    lat: -6.18,
    home: true,
  },
];

export const products: Product[] = [
  {
    name: "Baut & Sekrup Industri",
    desc: "Berbagai tipe dan ukuran untuk kebutuhan perakitan dan konstruksi.",
    src: "/images/product-bolts-screws.jpg",
    alt: "Baut dan sekrup industri dalam berbagai ukuran",
    credit: "Photo by Marcel Strauß on Unsplash",
    creditHref: "https://unsplash.com/@martzzl",
  },
  {
    name: "Fastener & Precision Hardware",
    desc: "Komponen pengencang presisi dengan toleransi ketat.",
    src: "/images/product-fasteners.jpg",
    alt: "Komponen fastener presisi tersusun berdiri",
    credit: "Photo by Yevgen Tarasov on Unsplash",
    creditHref: "https://unsplash.com/@tstudio",
  },
  {
    name: "Micro Screw",
    desc: "Sekrup presisi kecil, contoh PWB 2,6 mm x 15 mm.",
    src: "/images/product-micro-screw.jpg",
    alt: "Close up sekrup presisi kecil dengan latar biru",
    credit: "Photo by Kajetan Powolny on Unsplash",
    creditHref: "https://unsplash.com/@brutalgeometric",
  },
  {
    name: "Custom Part & OEM",
    desc: "Diproduksi sesuai gambar dan spesifikasi pelanggan.",
    src: "/images/product-custom-oem.jpg",
    alt: "Tumpukan komponen sekrup custom hasil produksi OEM",
    credit: "Photo by William Warby on Unsplash",
    creditHref: "https://unsplash.com/@wwarby",
  },
];

export const services: NumberedItem[] = [
  {
    no: "01",
    name: "Fastening Solution",
    desc: "Rekomendasi komponen sesuai spesifikasi pelanggan.",
  },
  {
    no: "02",
    name: "Customized Manufacturing",
    desc: "OEM dan custom part untuk kebutuhan khusus.",
  },
  {
    no: "03",
    name: "Supply Jumlah Besar",
    desc: "Kesiapan pasokan untuk kebutuhan produksi berkelanjutan.",
  },
  {
    no: "04",
    name: "Konsultasi & Penawaran",
    desc: "Pendampingan teknis, pemesanan, dan penawaran harga.",
  },
];

export const techSteps: TechStep[] = [
  {
    no: "01",
    name: "Cold Forming & Thread Rolling",
    desc: "Pembentukan dan pembuatan alur ulir untuk konsistensi dimensi antar batch.",
    src: "/images/tech-cold-forming.jpg",
    alt: "Mesin produksi pembentuk komponen logam",
    credit: "Photo by Vladislav Glukhotko on Unsplash",
    creditHref: "https://unsplash.com/@azzurobudgie",
  },
  {
    no: "02",
    name: "Heat Treatment",
    desc: "Perlakuan panas untuk mencapai kekerasan dan kekuatan tarik yang dipersyaratkan.",
    src: "/images/tech-heat-treatment.jpg",
    alt: "Proses perlakuan panas pada komponen logam",
    credit: "Photo by Warren Valentine on Unsplash",
    creditHref: "https://unsplash.com/@wjosiahv",
  },
  {
    no: "03",
    name: "Pengujian & Pengukuran",
    desc: "Pemeriksaan dimensi, torsi, dan ketahanan korosi sebelum komponen dikemas.",
    src: "/images/tech-testing.jpg",
    alt: "Area pengujian dan pengukuran komponen",
    credit: "Photo by Hikmet on Unsplash",
    creditHref: "https://unsplash.com/@hikmethl",
  },
];

export const industries: NumberedItem[] = [
  {
    no: "01",
    name: "Furniture",
    desc: "Komponen yang menggabungkan kekuatan, presisi, dan keandalan untuk proses manufaktur furnitur.",
  },
  {
    no: "02",
    name: "Otomotif",
    desc: "Komponen dan fastening solution untuk kebutuhan otomotif yang menuntut presisi dan daya tahan.",
  },
  {
    no: "03",
    name: "Konstruksi",
    desc: "Produk pengencang yang mendukung kebutuhan pekerjaan konstruksi.",
  },
  {
    no: "04",
    name: "Elektronik",
    desc: "Sekrup dan komponen presisi kecil untuk perakitan perangkat elektronik.",
  },
  {
    no: "05",
    name: "Mesin",
    desc: "Fastener untuk perakitan dan perawatan permesinan industri.",
  },
  {
    no: "06",
    name: "Manufaktur Umum",
    desc: "Dukungan komponen untuk berbagai lini produksi manufaktur.",
  },
];

export const reasons: NumberedItem[] = [
  {
    no: "1",
    name: "Kualitas terjamin",
    desc: "Standar mutu yang dijaga di setiap tahap produksi.",
  },
  {
    no: "2",
    name: "Presisi tinggi",
    desc: "Toleransi ketat untuk komponen yang menuntut akurasi.",
  },
  {
    no: "3",
    name: "Harga kompetitif",
    desc: "Produksi lokal menekan biaya tanpa menurunkan mutu.",
  },
  {
    no: "4",
    name: "Siap supply besar",
    desc: "Kapasitas untuk kebutuhan pasokan dalam jumlah besar.",
  },
  {
    no: "5",
    name: "Mitra terpercaya",
    desc: "Pengalaman grup lebih dari 44 tahun di industri fastener.",
  },
  {
    no: "6",
    name: "Produksi dalam negeri",
    desc: "Fasilitas di Tangerang dengan kontrol kualitas ketat.",
  },
];

export const qualitySteps: NamedItem[] = [
  {
    name: "Material masuk",
    desc: "Verifikasi spesifikasi bahan sebelum masuk lini produksi.",
  },
  {
    name: "Inspeksi lini",
    desc: "Pemeriksaan sampel berkala di setiap tahap proses.",
  },
  {
    name: "Rekam jejak",
    desc: "Dokumentasi hasil uji per batch, tersedia atas permintaan.",
  },
];

export const documents: NamedItem[] = [
  { name: "Sertifikat mutu", desc: "Dokumen sistem manajemen kualitas perusahaan." },
  {
    name: "Laporan hasil uji",
    desc: "Dimensi, torsi, dan ketahanan korosi per batch produksi.",
  },
  {
    name: "Spesifikasi material",
    desc: "Jenis baja, perlakuan panas, dan finishing permukaan.",
  },
  {
    name: "Gambar teknik",
    desc: "Drawing komponen custom sebelum produksi dimulai.",
  },
];

export const gallery: GalleryItem[] = [
  {
    wide: true,
    src: "/images/gallery-1.jpg",
    alt: "Unit mesin besar berjajar di dalam fasilitas produksi",
    credit: "Photo by Homa Appliances on Unsplash",
    creditHref: "https://unsplash.com/@homaappliances",
  },
  {
    wide: false,
    src: "/images/gallery-2.jpg",
    alt: "Baut dan mur baja dilihat dari dekat",
    credit: "Photo by Edge2Edge Media on Unsplash",
    creditHref: "https://unsplash.com/@edge2edgemedia",
  },
  {
    wide: false,
    src: "/images/gallery-3.jpg",
    alt: "Tumpukan sekrup baja dalam jumlah besar",
    credit: "Photo by Eliza Diamond on Unsplash",
    creditHref: "https://unsplash.com/@eliza28diamonds",
  },
  {
    wide: false,
    src: "/images/gallery-4.jpg",
    alt: "Interior bangunan pabrik dengan struktur baja",
    credit: "Photo by Kirill Mikhaylyuk on Unsplash",
    creditHref: "https://unsplash.com/@mkacompany",
  },
  {
    wide: false,
    src: "/images/gallery-5.jpg",
    alt: "Berbagai jenis sekrup dan baut tersebar di permukaan terang",
    credit: "Photo by Roberto Sorin on Unsplash",
    creditHref: "https://unsplash.com/@roberto_sorin",
  },
  {
    wide: true,
    src: "/images/gallery-6.jpg",
    alt: "Close up baut dan sekrup baja dengan berbagai kepala",
    credit: "Photo by Milad Fallah on Unsplash",
    creditHref: "https://unsplash.com/@miladfallah90",
  },
];

export const contactNeeds = [
  "Baut dan sekrup industri",
  "Fastener dan precision hardware",
  "Custom part / OEM",
  "Supply jumlah besar",
  "Lainnya",
] as const;
