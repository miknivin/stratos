import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/ui/cta-band";
import { ServiceCard } from "@/components/services/service-card";
import { services, getServiceBySlug } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
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
          <Eyebrow tone="light">Services</Eyebrow>
          <div className="mt-6 flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white sm:inline-flex">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              {service.title}
            </h1>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/65">
            {service.summary}
          </p>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="space-y-5">
              {service.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-relaxed text-pretty text-mist-500 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-ink-900/8 bg-mist-50 p-7 sm:p-8">
                <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-900 uppercase">
                  What&apos;s included
                </h2>
                <ul className="mt-5 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <span className="text-sm leading-relaxed text-ink-900/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {service.stat ? (
                  <div className="mt-7 rounded-2xl bg-navy-900 p-5">
                    <p className="text-gradient-brand text-3xl font-bold tracking-tight">
                      {service.stat.value}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                      {service.stat.label}
                    </p>
                  </div>
                ) : null}

                <Button href="/contact" className="mt-7 w-full">
                  Discuss this service
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <Eyebrow>Related services</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">
            Explore more of what we do
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
