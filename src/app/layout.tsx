import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";

const siteUrl = "https://lendocomjesus.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lendo com Jesus — Uma comunidade para conhecer Jesus através da Palavra",
    template: "%s — Lendo com Jesus",
  },
  description:
    "Uma comunidade cristã para quem deseja criar o hábito de ler a Bíblia, compartilhar aprendizados e crescer espiritualmente ao lado de outras pessoas.",
  keywords: [
    "comunidade cristã",
    "leitura bíblica",
    "Bíblia",
    "estudo bíblico",
    "crescimento espiritual",
    "Jesus",
  ],
  authors: [{ name: "Lendo com Jesus" }],
  openGraph: {
    title: "Lendo com Jesus — Conheça Jesus um capítulo de cada vez",
    description:
      "Uma comunidade cristã para quem deseja criar o hábito de ler a Bíblia, compartilhar aprendizados e crescer espiritualmente ao lado de outras pessoas.",
    url: siteUrl,
    siteName: "Lendo com Jesus",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lendo com Jesus — Conheça Jesus um capítulo de cada vez",
    description:
      "Uma comunidade cristã para quem deseja criar o hábito de ler a Bíblia, compartilhar aprendizados e crescer espiritualmente ao lado de outras pessoas.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body">
        {children}
      </body>
    </html>
  );
}
