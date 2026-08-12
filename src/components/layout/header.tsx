"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The hero sits behind the header as a dark cinematic film, so the
  // header starts light-on-dark and only becomes a solid paper bar once
  // the visitor has scrolled onto lighter sections below it.
  const dark = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="#inicio"
          className={cn(
            "flex items-center gap-2.5 font-display text-[1.05rem] tracking-tight transition-colors duration-300",
            dark ? "text-ink" : "text-canvas"
          )}
        >
          <BookOpen
            className={cn(
              "h-4 w-4 transition-colors duration-300",
              dark ? "text-gold-deep" : "text-gold-light"
            )}
            strokeWidth={1.5}
          />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.85rem] font-medium transition-colors duration-300",
                dark
                  ? "text-umber hover:text-ink"
                  : "text-canvas/80 hover:text-canvas"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contato"
            className={cn(
              "!px-6 !py-2.5 text-[0.8rem] transition-colors duration-300",
              !dark && "!bg-canvas !text-ink hover:!bg-white"
            )}
          >
            {siteConfig.cta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
            dark ? "text-ink" : "text-canvas"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line/70 bg-canvas px-6 pb-8 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[0.95rem] font-medium text-umber hover:bg-canvas-deep hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="#contato" className="mt-4 w-full">
            {siteConfig.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
