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
      className="relative isolate min-h-155 overflow-hidden sm:min-h-170 lg:min-h-190"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div aria-live="polite" className="sr-only">
        Slide {index + 1} of {heroSlides.length}: {slide.headline}
      </div>

      {/* Background photo, crossfading per slide */}
      {heroSlides.map((s, i) => (
        <Image
          key={s.image + i}
          src={s.image}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {/* Legibility overlays — darker toward the text side and the bottom controls */}
      <div
        className="absolute inset-0 bg-linear-to-r from-navy-950/95 via-navy-950/80 to-navy-950/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-transparent to-navy-950/10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay" aria-hidden />

      <Container className="relative flex min-h-155 flex-col justify-center py-24 sm:min-h-170 sm:py-28 lg:min-h-190 lg:py-32">
        <div className="relative min-h-125 max-w-2xl sm:min-h-90 lg:min-h-115">
          {heroSlides.map((s, i) => (
            <div
              key={s.headline}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                i === index
                  ? "opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0",
              )}
              aria-hidden={i !== index}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {s.eyebrow}
              </span>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                {s.headline}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/70">
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
      </Container>

      <div className="absolute inset-x-0 bottom-7 sm:bottom-9">
        <Container className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
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
                  "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
                  i === index ? "w-7 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setUserPaused((v) => !v)}
            aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
            aria-pressed={userPaused}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            {userPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>
        </Container>
      </div>
    </div>
  );
}
