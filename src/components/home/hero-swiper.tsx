"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  {
    src: "/images/hero-visual.jpg",
    alt: "Stratos Info Tech security dashboard overview",
  },
  {
    src: "/images/hero-visual-2.jpg",
    alt: "Stratos Info Tech cyber risk auditing and analysis",
  },
  {
    src: "/images/hero-visual-3.jpg",
    alt: "Stratos Info Tech real-time threat protection",
  },
];

export function HeroSwiper() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative h-120 w-92 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-navy-950/50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority
          sizes="(min-width: 1024px) 23rem, 0px"
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

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1} of ${slides.length}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}
