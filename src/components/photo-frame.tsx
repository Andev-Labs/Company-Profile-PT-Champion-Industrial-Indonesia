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
    <figure className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* The photo eases in when the card around it is hovered. Like `Arrow`,
          the zoom only fires under a `group` ancestor, so a frame that is not
          part of a hoverable card stays still. */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <figcaption className="absolute bottom-2 left-2">
        <a
          href={creditHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink/70 text-micro text-white inline-block px-1.5 py-0.5 hover:bg-ink/90 hover:text-white"
        >
          {credit}
        </a>
      </figcaption>
    </figure>
  );
}
