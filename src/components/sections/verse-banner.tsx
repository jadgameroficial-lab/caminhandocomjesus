import { Reveal } from "@/components/ui/reveal";
import { VerseMark } from "@/components/ui/verse-mark";

export function VerseBanner() {
  return (
    <section className="border-y border-line/70 bg-canvas-deep/60 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <VerseMark
            size="lg"
            verse="Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês."
            reference="Mateus 6:33"
          />
        </Reveal>
      </div>
    </section>
  );
}
