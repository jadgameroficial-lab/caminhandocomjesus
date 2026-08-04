import { UserRound } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";

export function Story() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-20 lg:px-10">
        <Reveal direction="left">
          <ImagePlaceholder
            icon={UserRound}
            label="Fotografia — Thiago, fundador da comunidade"
            className="aspect-[4/5] w-full"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Minha história</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Oi, eu sou <em className="italic text-gold-deep">Thiago</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-umber">
              <p>
                Por muito tempo, ler a Bíblia sozinho foi algo que eu
                começava com entusiasmo e abandonava poucas semanas depois.
                Faltava constância — e, principalmente, faltava companhia.
              </p>
              <p>
                Quando comecei a compartilhar essa jornada com outras
                pessoas, tudo mudou. A leitura deixou de ser uma tarefa
                solitária e virou um encontro semanal de aprendizado,
                perguntas sinceras e orações compartilhadas.
              </p>
              <p>
                Foi assim que nasceu esta comunidade: um espaço simples,
                acolhedor e sem pressa, para caminharmos juntos rumo a Jesus,
                uma página de cada vez.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
