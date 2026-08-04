import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="inscricao" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="eyebrow">Inscrições abertas</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Sua caminhada com Jesus <br className="hidden sm:block" />
            não precisa ser{" "}
            <em className="italic text-gold-deep">solitária</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-umber">
            Venha caminhar conosco.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex justify-center">
            <Button href={`https://wa.me/5500000000000`}>
              Quero participar da comunidade
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
