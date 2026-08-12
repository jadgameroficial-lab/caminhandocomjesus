import { Reveal } from "@/components/ui/reveal";

export function Purpose() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal direction="none">
          <div aria-hidden className="beam" />
        </Reveal>

        <Reveal delay={0.06}>
          <span className="eyebrow">Nosso propósito</span>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-7 text-balance font-display text-[1.85rem] leading-[1.32] tracking-tight text-ink sm:text-[2.4rem] lg:text-[2.75rem]">
            Uma comunidade criada para quem deseja viver a fé de forma{" "}
            <em className="italic text-gold-deep">simples</em>,{" "}
            <em className="italic text-gold-deep">profunda</em> e{" "}
            <em className="italic text-gold-deep">constante</em>.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mx-auto mt-8 max-w-lg text-[1.02rem] leading-relaxed text-umber">
            Sem pressa e sem pressão. Só um espaço para conhecer a Palavra e
            caminhar acompanhado, um passo por vez.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
