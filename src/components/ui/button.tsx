import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = href.startsWith("http");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4";

  const variants = {
    primary:
      "bg-brown-deep text-canvas hover:bg-ink shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "border border-line bg-transparent text-ink hover:border-gold-deep hover:text-gold-deep",
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
