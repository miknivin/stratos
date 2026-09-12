import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <Image
        src="/images/page-header-bg.jpg"
        alt=""
        fill
        priority
        aria-hidden
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/95 to-navy-900/70"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div
        className="absolute -top-24 right-[10%] h-80 w-80 rounded-full bg-brand-600/20 blur-[110px]"
        aria-hidden
      />
      <Container className="relative max-w-3xl">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/65">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
