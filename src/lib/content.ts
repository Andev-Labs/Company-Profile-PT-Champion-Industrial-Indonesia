/**
 * Structural page data: the things that are the same in every language —
 * image files, ordering, numbering, ids, photographer credits.
 *
 * Every piece of copy that a reader sees lives in `messages/<locale>.json`
 * instead. Each entry here carries the message key its wording is looked up
 * under, so a new item is added in one place and both languages are then
 * required to fill it in (a missing key fails the build's type check).
 *
 * The photography is Unsplash placeholder material carried over from the
 * mockup (ANDEV-124); each entry keeps its attribution so the credit can be
 * rendered and so the swap to real factory photography is a one-line change
 * per item.
 */

/** Photographer attribution. Proper names — never translated. */
export type PhotoCredit = {
  src: string;
  credit: string;
  creditHref: string;
};

export type Milestone = { step: "01" | "02" | "03" | "04" };

export type NetworkLocationId =
  | "hong-kong"
  | "shenzhen"
  | "huizhou"
  | "vietnam"
  | "indonesia";

export type NetworkLocation = {
  id: NetworkLocationId;
  /** Canonical English name, for `schema.org` `areaServed`. */
  country: string;
  /** The Indonesian facility — the one the section is built around. */
  home?: boolean;
};

export type ProductId =
  | "bolts-screws"
  | "fasteners"
  | "micro-screw"
  | "custom-oem";

export type Product = PhotoCredit & { id: ProductId };

export type TechStep = PhotoCredit & { no: "01" | "02" | "03" };

export type GalleryId = "1" | "2" | "3" | "4" | "5" | "6";

export type GalleryItem = PhotoCredit & { id: GalleryId; wide: boolean };

export type HeroStatKey = "founded" | "operating" | "locations" | "oem";

/**
 * A hero figure either counts up into view or is a word that cannot.
 * `from` is the figure the count starts at: a year counts from the decade
 * below it, because a year ticking up from zero spends most of its run
 * showing dates that mean nothing.
 */
export type HeroStat = { key: HeroStatKey } & (
  | { from: number; to: number; suffix?: string }
  | { text: string }
);

export const heroStats: HeroStat[] = [
  { key: "founded", from: 1950, to: 1982 },
  { key: "operating", from: 1990, to: 2026 },
  { key: "locations", from: 0, to: 5 },
  { key: "oem", text: "OEM" },
];

export const tickerIndustries = [
  "furniture",
  "automotive",
  "construction",
  "electronics",
  "machinery",
  "manufacturing",
] as const;

export const heroPhoto: PhotoCredit = {
  src: "/images/hero-facility.jpg",
  credit: "Photo by Homa Appliances on Unsplash",
  creditHref: "https://unsplash.com/@homaappliances",
};

export const aboutPhoto: PhotoCredit = {
  src: "/images/about-facility.jpg",
  credit: "Photo by Homa Appliances on Unsplash",
  creditHref: "https://unsplash.com/@homaappliances",
};

export const aboutPillars = ["production", "rnd", "distribution"] as const;

export const timeline: Milestone[] = [
  { step: "01" },
  { step: "02" },
  { step: "03" },
  { step: "04" },
];

/**
 * Order here drives the card row under the map, and the last entry is the home
 * site the section is built around.
 */
export const network: NetworkLocation[] = [
  { id: "hong-kong", country: "Hong Kong" },
  { id: "shenzhen", country: "China" },
  { id: "huizhou", country: "China" },
  { id: "vietnam", country: "Vietnam" },
  { id: "indonesia", country: "Indonesia", home: true },
];

export const products: Product[] = [
  {
    id: "bolts-screws",
    src: "/images/product-bolts-screws.jpg",
    credit: "Photo by Marcel Strauß on Unsplash",
    creditHref: "https://unsplash.com/@martzzl",
  },
  {
    id: "fasteners",
    src: "/images/product-fasteners.jpg",
    credit: "Photo by Yevgen Tarasov on Unsplash",
    creditHref: "https://unsplash.com/@tstudio",
  },
  {
    id: "micro-screw",
    src: "/images/product-micro-screw.jpg",
    credit: "Photo by Kajetan Powolny on Unsplash",
    creditHref: "https://unsplash.com/@brutalgeometric",
  },
  {
    id: "custom-oem",
    src: "/images/product-custom-oem.jpg",
    credit: "Photo by William Warby on Unsplash",
    creditHref: "https://unsplash.com/@wwarby",
  },
];

export const services = ["01", "02", "03", "04"] as const;

export const techSteps: TechStep[] = [
  {
    no: "01",
    src: "/images/tech-cold-forming.jpg",
    credit: "Photo by Vladislav Glukhotko on Unsplash",
    creditHref: "https://unsplash.com/@azzurobudgie",
  },
  {
    no: "02",
    src: "/images/tech-heat-treatment.jpg",
    credit: "Photo by Warren Valentine on Unsplash",
    creditHref: "https://unsplash.com/@wjosiahv",
  },
  {
    no: "03",
    src: "/images/tech-testing.jpg",
    credit: "Photo by Hikmet on Unsplash",
    creditHref: "https://unsplash.com/@hikmethl",
  },
];

export const industries = ["01", "02", "03", "04", "05", "06"] as const;

export const reasons = ["1", "2", "3", "4", "5", "6"] as const;

export const qualitySteps = ["incoming", "inline", "traceability"] as const;

export const documents = [
  "certificate",
  "testReport",
  "material",
  "drawing",
] as const;

export const gallery: GalleryItem[] = [
  {
    id: "1",
    wide: true,
    src: "/images/gallery-1.jpg",
    credit: "Photo by Homa Appliances on Unsplash",
    creditHref: "https://unsplash.com/@homaappliances",
  },
  {
    id: "2",
    wide: false,
    src: "/images/gallery-2.jpg",
    credit: "Photo by Edge2Edge Media on Unsplash",
    creditHref: "https://unsplash.com/@edge2edgemedia",
  },
  {
    id: "3",
    wide: false,
    src: "/images/gallery-3.jpg",
    credit: "Photo by Eliza Diamond on Unsplash",
    creditHref: "https://unsplash.com/@eliza28diamonds",
  },
  {
    id: "4",
    wide: false,
    src: "/images/gallery-4.jpg",
    credit: "Photo by Kirill Mikhaylyuk on Unsplash",
    creditHref: "https://unsplash.com/@mkacompany",
  },
  {
    id: "5",
    wide: false,
    src: "/images/gallery-5.jpg",
    credit: "Photo by Roberto Sorin on Unsplash",
    creditHref: "https://unsplash.com/@roberto_sorin",
  },
  {
    id: "6",
    wide: true,
    src: "/images/gallery-6.jpg",
    credit: "Photo by Milad Fallah on Unsplash",
    creditHref: "https://unsplash.com/@miladfallah90",
  },
];

export const contactNeeds = [
  "bolts",
  "fasteners",
  "custom",
  "volume",
  "other",
] as const;

export type ContactNeed = (typeof contactNeeds)[number];
