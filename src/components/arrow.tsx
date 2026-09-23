/**
 * The mockup renders its call-to-action arrow as a glyph in the display face
 * rather than an icon, so it inherits colour and baseline from the label.
 *
 * It leans forward when the link it sits in is hovered, which is why every
 * such link carries `group`. The nudge is inert anywhere there is no `group`
 * ancestor, so the glyph is still safe to drop into plain text.
 */
export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="font-display inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      →
    </span>
  );
}
