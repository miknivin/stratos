import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTABand({
  title = "Ready to strengthen your security posture?",
  description = "Tell us about your infrastructure and goals, and our consultants will help you find the right mix of services.",
  primaryLabel = "Contact our team",
  primaryHref = "/contact",
  secondaryLabel = "Browse services",
  secondaryHref = "/services",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div
        className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-600/25 blur-[110px]"
        aria-hidden
      />
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={600}
        height={585}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-104 w-auto -translate-y-1/2 opacity-[0.06] mix-blend-screen"
      />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-pretty text-white/60">
          {description}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={secondaryHref} size="lg" variant="outline">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
