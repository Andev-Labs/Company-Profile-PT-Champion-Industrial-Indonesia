/**
 * The mockup renders its call-to-action arrow as a glyph in the display face
 * rather than an icon, so it inherits colour and baseline from the label.
 */
export function Arrow() {
  return (
    <span aria-hidden="true" className="font-display">
      →
    </span>
  );
}
