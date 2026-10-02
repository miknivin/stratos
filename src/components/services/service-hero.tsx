import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/services/illustration";

export function ServiceHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  icons,
  image,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  breadcrumb?: React.ReactNode;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  icons: LucideIcon[];
  /** Real designer artwork, once available — see illustration.tsx for the spec. */
  image?: { src: string; alt: string };
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" aria-hidden />
      <div
        className="animate-float-a absolute top-[-20%] left-[-10%] h-96 w-96 rounded-full bg-navy-700/40 blur-[130px]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
          <div>
            {breadcrumb ? <div className="mb-5">{breadcrumb}</div> : null}
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.1] font-semibold text-balance text-white sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button href={secondaryHref} variant="outline" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>

          <HeroIllustration icons={icons} image={image} />
        </div>
      </Container>
    </section>
  );
}
