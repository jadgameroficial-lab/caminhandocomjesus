import Link from "next/link";
import { BookOpen, Camera, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { VerseMark } from "@/components/ui/verse-mark";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-brown-deep text-canvas">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Link
              href="#inicio"
              className="flex items-center gap-2.5 font-display text-lg text-canvas"
            >
              <BookOpen className="h-4 w-4 text-gold" strokeWidth={1.5} />
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-canvas/60">
              Uma comunidade cristã caminhando junto para conhecer Jesus, um
              capítulo de cada vez.
            </p>
          </div>

          <div>
            <span className="eyebrow text-gold/80">Navegação</span>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-canvas/70 transition-colors hover:text-canvas"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-gold/80">Fale conosco</span>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  <Camera className="h-4 w-4" strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-canvas/10 pt-10">
          <VerseMark
            tone="dark"
            verse="Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho."
            reference="Salmos 119:105"
          />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-canvas/10 pt-8 text-xs text-canvas/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="font-display italic text-canvas/40">
            &ldquo;Caminhando juntos, um capítulo de cada vez.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
