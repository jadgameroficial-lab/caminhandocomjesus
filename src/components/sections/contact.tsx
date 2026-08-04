import { Camera, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    detail: "Fale diretamente com a gente",
    href: siteConfig.contact.whatsapp,
  },
  {
    icon: Camera,
    label: "Instagram",
    detail: "Acompanhe nosso dia a dia",
    href: siteConfig.contact.instagram,
  },
  {
    icon: Mail,
    label: "E-mail",
    detail: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export function Contact() {
  return (
    <section id="contato" className="bg-canvas-deep/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <span className="eyebrow">Contato</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Fale <em className="italic text-gold-deep">com a gente</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.06}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-line/70 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-deep/40"
              >
                <div className="flex items-start justify-between">
                  <channel.icon
                    className="h-5 w-5 text-gold-deep"
                    strokeWidth={1.4}
                  />
                  <ArrowUpRight className="h-4 w-4 text-umber-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-8">
                  <p className="font-display text-lg text-ink">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-sm text-umber">{channel.detail}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
