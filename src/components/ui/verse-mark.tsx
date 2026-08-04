import { cn } from "@/lib/utils";

type VerseMarkProps = {
  verse: string;
  reference: string;
  className?: string;
  tone?: "light" | "dark";
  size?: "md" | "lg";
};

export function VerseMark({
  verse,
  reference,
  className,
  tone = "light",
  size = "md",
}: VerseMarkProps) {
  const isDark = tone === "dark";

  return (
    <figure
      className={cn(
        "relative flex items-start gap-5 sm:gap-8",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "mt-1 h-full min-h-[3rem] w-px shrink-0 self-stretch",
          isDark ? "bg-gold/50" : "bg-gold-deep/40"
        )}
      />
      <div>
        <blockquote
          className={cn(
            "font-display italic leading-snug",
            size === "lg" ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl",
            isDark ? "text-canvas" : "text-ink"
          )}
        >
          &ldquo;{verse}&rdquo;
        </blockquote>
        <figcaption
          className={cn(
            "eyebrow mt-4",
            isDark && "text-gold"
          )}
        >
          {reference}
        </figcaption>
      </div>
    </figure>
  );
}
