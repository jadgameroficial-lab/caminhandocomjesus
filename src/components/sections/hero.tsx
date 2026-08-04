import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import heroBiblia from "@/assets/hero-biblia.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44 lg:pt-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-10">
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gold-deep/50" />
              Encontros semanais &middot; online
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
              Conheça Jesus <br className="hidden sm:block" />
              <em className="italic text-gold-deep">um capítulo</em> de cada
              vez.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-umber">
              Uma comunidade cristã para quem deseja criar o hábito de ler a
              Bíblia, compartilhar aprendizados e crescer espiritualmente ao
              lado de outras pessoas.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#contato">Quero participar</Button>
              <Button href="#como-funciona" variant="secondary">
                Como funciona
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-40px_rgba(46,36,28,0.35)] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src={heroBiblia}
              alt="Bíblia aberta ao ar livre, com uma cruz de luz brilhando no céu ao amanhecer"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
