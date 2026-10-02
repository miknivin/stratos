"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { heroSlides } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function HeroSwiper() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const goTo = (next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (hovered || userPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [hovered, userPaused]);

  const slide = heroSlides[index];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div aria-live="polite" className="sr-only">
        Slide {index + 1} of {heroSlides.length}: {slide.headline}
      </div>

      <Container className="relative py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:py-36">
        <div className="min-h-72 max-w-2xl sm:min-h-64">
          {heroSlides.map((s, i) => (
            <div
              key={s.headline}
              className={cn(
                "transition-opacity duration-500",
                i === index
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0",
              )}
              aria-hidden={i !== index}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {s.eyebrow}
              </span>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                {s.headline}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/65">
                {s.body}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={s.primaryHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 text-base font-medium tracking-wide text-white shadow-lg shadow-brand-700/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                >
                  {s.primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-base font-medium tracking-wide text-white transition-all duration-200 hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                >
                  Talk to an IT Expert
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 shrink-0 lg:mt-0">
          <div className="relative mx-auto aspect-920/1120 w-full max-w-92 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-navy-950/50 lg:mx-0 lg:h-120 lg:w-92 lg:aspect-auto">
            {heroSlides.map((s, i) => (
              <Image
                key={s.image + i}
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 23rem, 90vw"
                className={cn(
                  "object-cover transition-opacity duration-700 ease-out",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <div
              className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent"
              aria-hidden
            />

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.headline}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show slide ${i + 1} of ${heroSlides.length}`}
                    aria-current={i === index}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60",
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setUserPaused((v) => !v)}
                aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                aria-pressed={userPaused}
                className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {userPaused ? (
                  <Play className="h-3.5 w-3.5" />
                ) : (
                  <Pause className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
          <div
            className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-gradient-brand opacity-90 blur-2xl"
            aria-hidden
          />
        </div>
      </Container>
    </div>
  );
}
