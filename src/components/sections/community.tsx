import {
  Users,
  HandHeart,
  BookOpen,
  Heart,
  MessageCircleHeart,
  Sprout,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { VerseMark } from "@/components/ui/verse-mark";

const pillars = [
  {
    icon: Users,
    title: "Comunhão",
    text: "Um espaço de acolhimento genuíno, onde ninguém caminha sozinho.",
  },
  {
    icon: HandHeart,
    title: "Oração",
    text: "Levamos uns aos outros diante de Deus, com cuidado e constância.",
  },
  {
    icon: BookOpen,
    title: "Leitura bíblica",
    text: "A Palavra no centro de tudo, lida devagar e em comunidade.",
  },
  {
    icon: Heart,
    title: "Amizades",
    text: "Relações reais nascem quando caminhamos juntos por um propósito.",
  },
  {
    icon: MessageCircleHeart,
    title: "Reflexões",
    text: "Trocamos o que a leitura tem revelado sobre a vida de cada um.",
  },
  {
    icon: Sprout,
    title: "Crescimento espiritual",
    text: "Passos pequenos, consistentes, que transformam com o tempo.",
  },
];

export function Community() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <span className="eyebrow">Comunidade</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Mais do que um grupo. <br className="hidden sm:block" />
              Uma <em className="italic text-gold-deep">família</em> em
              Cristo.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-line/70 bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(46,36,28,0.18)]">
                <pillar.icon
                  className="h-6 w-6 text-gold-deep"
                  strokeWidth={1.3}
                />
                <h3 className="mt-5 font-display text-xl text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-umber">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-2xl border-t border-line/70 pt-14 text-center">
            <VerseMark
              size="md"
              className="mx-auto justify-center text-left"
              verse="Onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles."
              reference="Mateus 18:20"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
