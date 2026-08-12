"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Preciso já conhecer a Bíblia?",
    a: "Não. A comunidade foi pensada tanto para quem está começando agora quanto para quem já lê há anos. Cada leitura é explicada com calma, sem pressupor conhecimento prévio.",
  },
  {
    q: "Os encontros são gratuitos?",
    a: "O grupo no WhatsApp e o acompanhamento semanal têm um investimento simbólico mensal, usado para manter a estrutura da comunidade. Os valores estão na seção de inscrição.",
  },
  {
    q: "Posso participar mesmo sendo iniciante?",
    a: "Com certeza. Iniciantes são muito bem-vindos — o ritmo é leve e ninguém é cobrado por já saber algo.",
  },
  {
    q: "Como funcionam os encontros?",
    a: "Uma vez por semana, nos reunimos online por cerca de uma hora para conversar sobre a leitura da semana, compartilhar aprendizados e orar juntos.",
  },
  {
    q: "É obrigatório participar de todos?",
    a: "Não. A vida acontece, e entendemos isso. Você participa no seu ritmo, sem culpa, e sempre pode retomar quando for possível.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Perguntas frequentes</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Ainda com <em className="italic text-gold-deep">dúvidas</em>?
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-line/70 border-t border-line/70">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={cn(
                      "font-display text-lg transition-colors duration-300 sm:text-xl",
                      isOpen ? "text-gold-deep" : "text-ink group-hover:text-gold-deep"
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                      isOpen
                        ? "border-gold-deep/40 bg-canvas-deep/60"
                        : "border-line/70 group-hover:border-gold-deep/30"
                    )}
                  >
                    <Plus
                      className={cn(
                        "h-3.5 w-3.5 text-gold-deep transition-transform duration-300 ease-out",
                        isOpen && "rotate-45"
                      )}
                      strokeWidth={2}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="min-h-0 max-w-xl text-[0.98rem] leading-relaxed text-umber">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
