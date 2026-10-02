import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function ConsultationBand({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" aria-hidden />
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full opacity-40"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 120 C 200 40, 400 160, 600 90 S 1000 20, 1200 100"
          fill="none"
          stroke="var(--color-brand-500)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M0 140 C 220 70, 420 170, 620 110 S 1020 50, 1200 130"
          fill="none"
          stroke="var(--color-lavender-300)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <div
        className="animate-float-a absolute -top-16 right-[8%] h-64 w-64 rounded-full bg-brand-600/20 blur-[110px]"
        aria-hidden
      />

      <Container className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-balance text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty text-white/65">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={primaryHref}>
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="outline">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
