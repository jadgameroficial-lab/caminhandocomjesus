import {
  BookOpen,
  Music,
  Lightbulb,
  ScrollText,
  MessageSquareQuote,
  Church,
  Flame,
  HandHeart,
  Home,
  Compass,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const topics = [
  { icon: BookOpen, label: "Evangelhos" },
  { icon: Music, label: "Salmos" },
  { icon: Lightbulb, label: "Provérbios" },
  { icon: ScrollText, label: "Cartas de Paulo" },
  { icon: MessageSquareQuote, label: "Parábolas" },
  { icon: Church, label: "Vida cristã" },
  { icon: Flame, label: "Fé" },
  { icon: HandHeart, label: "Oração" },
  { icon: Home, label: "Família" },
  { icon: Compass, label: "Propósito" },
  { icon: Users, label: "Personagens bíblicos" },
];

export function Studies() {
  return (
    <section id="o-que-estudamos" className="bg-canvas-deep/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <span className="eyebrow">O que estudamos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Toda a <em className="italic text-gold-deep">Palavra</em>, aos
              poucos.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-umber">
              Nossos ciclos de leitura percorrem diferentes livros e temas da
              Bíblia, sempre com aplicação para a vida.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <Reveal key={topic.label} delay={(i % 4) * 0.05}>
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-line/70 bg-paper px-6 py-7 transition-colors duration-300 hover:border-gold-deep/40">
                <topic.icon
                  className="h-5 w-5 text-gold-deep"
                  strokeWidth={1.4}
                />
                <span className="font-display text-lg text-ink">
                  {topic.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
