"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const lineOneRef = useRef<HTMLSpanElement>(null);
  const lineTwoRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const [canPlay, setCanPlay] = useState(false);

  // Entrance choreography + gentle parallax on the film.
  useEffect(() => {
    const video = videoRef.current;

    if (prefersReducedMotion) {
      video?.pause();
      gsap.set(
        [
          eyebrowRef.current,
          lineOneRef.current,
          lineTwoRef.current,
          subRef.current,
          ctaRef.current,
        ],
        { opacity: 1, y: 0, clearProps: "transform" }
      );
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          [lineOneRef.current, lineTwoRef.current],
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.55"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          scrollCueRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3"
        );

      // Subtle drift on the film itself as the visitor scrolls away —
      // the storm keeps moving beneath the fold.
      if (sectionRef.current && video) {
        gsap.to(video, {
          yPercent: 12,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Pause the film when it's out of view to save battery/bandwidth.
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-abyss"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/sea-storm-poster.jpg"
          onCanPlay={() => setCanPlay(true)}
          aria-hidden="true"
        >
          <source
            src="/videos/sea-storm-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/videos/sea-storm.mp4" type="video/mp4" />
        </video>
        <div
          className={`absolute inset-0 bg-abyss transition-opacity duration-700 ${
            canPlay ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      </div>

      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-8%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:pb-20 sm:pt-48 lg:px-10 lg:pb-24">
        <span
          ref={eyebrowRef}
          className="eyebrow inline-flex items-center gap-2 text-gold-light"
        >
          <span className="h-px w-6 bg-gold-light/60" />
          Ainda que a tempestade venha
        </span>

        <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] leading-[1.08] tracking-tight text-canvas sm:text-6xl lg:text-[4.25rem]">
          <span ref={lineOneRef} className="block overflow-hidden">
            Mesmo na tempestade,
          </span>
          <span ref={lineTwoRef} className="block overflow-hidden">
            <em className="italic text-gold-light">a luz</em> não se apaga.
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-canvas/75"
        >
          Uma comunidade para quem deseja viver a fé de forma simples,
          profunda e constante — um capítulo de cada vez, sem caminhar
          sozinho.
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#contato">Quero fazer parte</Button>
          <Button
            href="#como-funciona"
            variant="secondary"
            className="!border-canvas/30 !text-canvas hover:!border-gold-light hover:!text-gold-light"
          >
            Como funciona
          </Button>
        </div>
      </div>

      <div
        ref={scrollCueRef}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-canvas/60 sm:flex"
      >
        <span className="eyebrow text-[0.6rem] text-canvas/50">Role para ver</span>
        <ChevronDown
          className="h-4 w-4 animate-[drift_2.6s_ease-in-out_infinite]"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}
