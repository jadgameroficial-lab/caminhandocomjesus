import { UserRound } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";

export function Story() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:items-start lg:gap-20 lg:px-10">
        <Reveal direction="left" className="lg:sticky lg:top-32">
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
                Sou apaixonado por programação e futebol. Durante muito tempo
                vivi do meu jeito, fazendo minhas próprias escolhas e correndo
                atrás dos meus sonhos. Eu tinha liberdade para fazer tudo o
                que queria, mas, mesmo assim, existia um vazio que eu não
                conseguia explicar. Faltava propósito. Faltava paz. Parecia
                que, por mais que eu tentasse seguir em frente, sempre havia
                algo fora do lugar.
              </p>
              <p>
                Tudo começou a mudar em um culto. Naquele dia, Deus falou
                profundamente ao meu coração e me concedeu uma visão que
                transformou completamente a maneira como eu enxergava a vida.
                A partir daquele momento, entendi que Jesus me chamava para
                viver algo muito maior do que os meus próprios planos.
              </p>
              <p>
                Foi então que tomei a decisão mais importante da minha vida:
                apostar todas as minhas fichas em Jesus.
              </p>
              <p>
                Desde esse dia, minha caminhada não tem sido perfeita, mas
                tem sido transformadora. A cada novo dia descubro que
                caminhar com Cristo muda a forma como enxergamos a vida e nos
                dá uma certeza que nunca mais abandonei: com Jesus, nunca
                estamos sozinhos e, para aquele que crê, todas as coisas são
                possíveis.
              </p>
              <p>
                Essa comunidade nasceu desse desejo. Quero reunir pessoas que
                também desejam crescer na fé, conhecer mais a Palavra de Deus
                e viver o Evangelho no dia a dia. Não importa se você está
                começando agora ou se já caminha com Cristo há muitos anos.
                Aqui teremos um lugar para aprender, compartilhar, orar e
                fortalecer uns aos outros, sempre com Jesus no centro de
                tudo.
              </p>
              <p>
                Se você sente que Deus tem algo maior para a sua vida ou
                simplesmente deseja conhecê-Lo mais, saiba que será muito
                bem-vindo. Vamos caminhar juntos, um passo de cada vez,
                sempre com Cristo à frente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
