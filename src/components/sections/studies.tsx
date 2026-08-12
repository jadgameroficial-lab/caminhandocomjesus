"use client";

import { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const topics = [
  { icon: BookOpen, label: "Evangelhos", category: "Novo Testamento" },
  { icon: Music, label: "Salmos", category: "Antigo Testamento" },
  { icon: Lightbulb, label: "Provérbios", category: "Antigo Testamento" },
  { icon: ScrollText, label: "Cartas de Paulo", category: "Novo Testamento" },
  { icon: MessageSquareQuote, label: "Parábolas", category: "Novo Testamento" },
  { icon: Church, label: "Vida cristã", category: "Vida cristã" },
  { icon: Flame, label: "Fé", category: "Vida cristã" },
  { icon: HandHeart, label: "Oração", category: "Vida cristã" },
  { icon: Home, label: "Família", category: "Vida cristã" },
  { icon: Compass, label: "Propósito", category: "Vida cristã" },
  { icon: Users, label: "Personagens bíblicos", category: "Antigo Testamento" },
] as const;

const filters = ["Todos", "Antigo Testamento", "Novo Testamento", "Vida cristã"] as const;

export function Studies() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");

  const visible =
    active === "Todos" ? topics : topics.filter((t) => t.category === active);

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

        <Reveal delay={0.2}>
          <div
            role="tablist"
            aria-label="Filtrar temas de estudo"
            className="mx-auto mt-12 flex max-w-full flex-wrap items-center justify-center gap-2"
          >
            {filters.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.8rem] font-medium transition-colors duration-300",
                    isActive ? "text-canvas" : "text-umber hover:text-ink"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="studies-filter-pill"
                      className="absolute inset-0 rounded-full bg-brown-deep"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative">{filter}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((topic) => (
              <motion.div
                key={topic.label}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-line/70 bg-paper px-6 py-7 transition-colors duration-300 hover:border-gold-deep/40"
              >
                <topic.icon
                  className="h-5 w-5 text-gold-deep"
                  strokeWidth={1.4}
                />
                <span className="font-display text-lg text-ink">
                  {topic.label}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
