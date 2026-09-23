import { cn } from "@/lib/utils";

/** The small tracked-out label that opens most sections. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-eyebrow tracking-eyebrow text-brand mb-4.5 font-semibold",
        className,
      )}
    >
      {children}
    </p>
  );
}
