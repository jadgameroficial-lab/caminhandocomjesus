import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export function Cta() {
  return (
    <section
      id="inscricao"
      className="relative overflow-hidden bg-abyss py-28 sm:py-36"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/videos/sea-storm-poster.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/40 via-abyss/70 to-abyss" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <Reveal direction="none">
          <div aria-hidden className="beam" />
        </Reveal>
        <Reveal delay={0.06}>
          <span className="eyebrow text-gold-light">Inscrições abertas</span>
        </Reveal>
        <Reveal delay={0.14}>
          <h2 className="mt-5 font-display text-4xl leading-tight text-canvas sm:text-5xl">
            Comece sua <em className="italic text-gold-light">caminhada</em>{" "}
            hoje.
          </h2>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-relaxed text-canvas/70">
            Não importa em que ponto da tempestade você está. Aqui, você
            caminha acompanhado — um capítulo de cada vez.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Button
              href={siteConfig.contact.whatsapp}
              className="!bg-gold-deep !text-canvas hover:!bg-gold"
            >
              Quero fazer parte da comunidade
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
