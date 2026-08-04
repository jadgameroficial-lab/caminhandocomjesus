import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  icon?: LucideIcon;
  className?: string;
  variant?: "warm" | "deep";
};

export function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  className,
  variant = "warm",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "grain relative flex items-center justify-center overflow-hidden rounded-[1.75rem]",
        variant === "warm"
          ? "bg-gradient-to-br from-[#efe4cf] via-[#e9dcc3] to-[#dfcda7]"
          : "bg-gradient-to-br from-[#3a2c20] via-[#2e2118] to-[#211710]",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl",
          variant === "warm" ? "bg-white/40" : "bg-gold/20"
        )}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <Icon
          className={cn(
            "h-7 w-7",
            variant === "warm" ? "text-gold-deep/70" : "text-gold/70"
          )}
          strokeWidth={1.25}
        />
        <span
          className={cn(
            "eyebrow text-[0.65rem]",
            variant === "warm" ? "text-umber/70" : "text-canvas/50"
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
