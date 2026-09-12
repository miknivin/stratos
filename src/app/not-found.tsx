import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div className="animate-float-b h-full w-full rounded-full bg-brand-600/20 blur-[120px]" />
      </div>
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Eyebrow tone="light">404</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          This page went offline
        </h1>
        <p className="max-w-md text-base leading-relaxed text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back on track.
        </p>
        <Button href="/" size="lg">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Container>
    </section>
  );
}
