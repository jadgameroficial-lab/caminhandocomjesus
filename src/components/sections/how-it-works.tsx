import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    n: "1",
    title: "Leitura da semana",
    text: "Toda semana teremos uma leitura bíblica para refletirmos juntos, no seu tempo e no seu ritmo.",
  },
  {
    n: "2",
    title: "Comunidade",
    text: "Durante a semana, conversamos pelo WhatsApp — dúvidas, reflexões e apoio mútuo, todos os dias.",
  },
  {
    n: "3",
    title: "Encontro online",
    text: "Uma vez por semana nos reunimos para compartilhar aprendizados, conversar sobre a Palavra e orar juntos.",
  },
  {
    n: "4",
    title: "Crescimento",
    text: "Sem pressão e sem comparação. Cada pessoa cresce no seu ritmo, com a comunidade ao lado.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="eyebrow">Como funciona</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Simples, leve <br className="hidden sm:block" />e{" "}
                <em className="italic text-gold-deep">constante</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-umber">
                Um ritmo semanal, pensado para caber na vida real — como os
                versículos de um capítulo, um passo de cada vez.
              </p>
            </Reveal>
          </div>

          <ol className="space-y-0 divide-y divide-line/70 border-t border-line/70">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <li className="flex gap-6 py-8 sm:gap-10">
                  <span
                    aria-hidden
                    className="font-display text-2xl italic leading-none text-gold-deep/70 sm:text-3xl"
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink sm:text-[1.4rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[0.98rem] leading-relaxed text-umber">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
