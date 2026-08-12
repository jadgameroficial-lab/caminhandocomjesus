"use client";

import { BookOpen, MessagesSquare, Video, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    n: "01",
    icon: BookOpen,
    title: "Leitura da semana",
    text: "Toda semana teremos uma leitura bíblica para refletirmos juntos, no seu tempo e no seu ritmo.",
  },
  {
    n: "02",
    icon: MessagesSquare,
    title: "Comunidade",
    text: "Durante a semana, conversamos pelo WhatsApp — dúvidas, reflexões e apoio mútuo, todos os dias.",
  },
  {
    n: "03",
    icon: Video,
    title: "Encontro online",
    text: "Uma vez por semana nos reunimos para compartilhar aprendizados, conversar sobre a Palavra e orar juntos.",
  },
  {
    n: "04",
    icon: Sprout,
    title: "Crescimento",
    text: "Sem pressão e sem comparação. Cada pessoa cresce no seu ritmo, com a comunidade ao lado.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
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
            <p className="mt-6 text-[1.02rem] leading-relaxed text-umber">
              Um ritmo semanal, pensado para caber na vida real — como os
              versículos de um capítulo, um passo de cada vez.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={(i % 2) * 0.08 + Math.floor(i / 2) * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl border border-line/70 bg-paper p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/15"
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line/70 bg-canvas-deep/60 transition-colors duration-300 group-hover:border-gold-deep/40">
                    <step.icon
                      className="h-[1.05rem] w-[1.05rem] text-gold-deep"
                      strokeWidth={1.4}
                    />
                  </span>
                  <span className="font-display text-2xl italic leading-none text-gold-deep/30 transition-colors duration-300 group-hover:text-gold-deep/60">
                    {step.n}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl text-ink sm:text-[1.4rem]">
                  {step.title}
                </h3>
                <p className="relative mt-2.5 max-w-md text-[0.98rem] leading-relaxed text-umber">
                  {step.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
