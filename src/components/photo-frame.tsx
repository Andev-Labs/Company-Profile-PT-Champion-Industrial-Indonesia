import Image from "next/image";

import type { PhotoCredit } from "@/lib/content";
import { cn } from "@/lib/utils";

type PhotoFrameProps = PhotoCredit & {
  /** Comes from the message catalogue — alt text is copy, so it is translated. */
  alt: string;
  /** Matches the rendered width of the frame so the browser picks the right file. */
  sizes: string;
  /** Only the LCP image (the hero) should set this. */
  priority?: boolean;
  className?: string;
};

/**
 * Fills its positioned parent with a cropped photo and keeps the Unsplash
 * attribution attached — the mockup's `image-slot`, as plain React.
 */
export function PhotoFrame({
  src,
  alt,
  credit,
  creditHref,
  sizes,
  priority = false,
  className,
}: PhotoFrameProps) {
  return (
    <figure className={cn("absolute inset-0 overflow-hidden rounded-xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <figcaption className="absolute bottom-2 left-2">
        <a
          href={creditHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink/70 text-micro text-white inline-block rounded-md px-1.5 py-0.5 hover:bg-ink/90 hover:text-white"
        >
          {credit}
        </a>
      </figcaption>
    </figure>
  );
}
