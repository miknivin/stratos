import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/ui/cta-band";
import { ServiceCard } from "@/components/services/service-card";
import {
  serviceCategories,
  getCategoryBySlug,
  getServiceBySlug,
  getCategoryForService,
  getRelatedServices,
  approvedPages,
  type ServiceCategory,
  type ServicePage,
} from "@/lib/services-data";
import { categoryProcess, serviceDelivery, serviceFaqs } from "@/lib/site-config";

export function generateStaticParams() {
  const categorySlugs = serviceCategories.map((category) => ({
    slug: category.slug,
  }));
  const serviceSlugs = serviceCategories.flatMap((category) =>
    category.pages.map((page) => ({ slug: page.slug })),
  );
  return [...categorySlugs, ...serviceSlugs];
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;

  const category = getCategoryBySlug(slug);
  if (category) {
    return {
      title: `${category.name} Services in UAE`,
      description: category.intro,
    };
  }

  const service = getServiceBySlug(slug);
  if (service) {
    return {
      title: `${service.title} in UAE`,
      description: service.summary,
      openGraph: { title: service.title, description: service.summary },
    };
  }

  return {};
}

export default async function ServicesSlugPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;

  const category = getCategoryBySlug(slug);
  if (category) {
    return <CategoryOverview category={category} />;
  }

  const service = getServiceBySlug(slug);
  if (service) {
    return <ServiceDetail service={service} />;
  }

  notFound();
}

function CategoryOverview({ category }: { category: ServiceCategory }) {
  const pages = approvedPages(category.pages);
  const relatedCategories = serviceCategories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={category.name}
        description={category.intro}
        breadcrumb={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: category.name },
            ]}
          />
        }
      />

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, index) => (
              <Reveal key={page.slug} delay={(index % 3) * 80}>
                <ServiceCard service={page} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Eyebrow>Business outcomes</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            What this means for your business
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {category.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-mist-50 p-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <p className="font-medium text-ink-900">{outcome}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Assess, design, implement, support
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryProcess.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-ink-900/8 bg-white p-6">
                <span className="text-sm font-semibold text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-mist-500 uppercase">
            Related categories
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedCategories.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-full border border-ink-900/10 px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-brand-500/30 hover:text-brand-700"
              >
                {related.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Find the Right Solution"
        description="Tell us what your business needs, and our team will help you define the next step."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}

function ServiceDetail({ service }: { service: ServicePage }) {
  const category = getCategoryForService(service);
  const related = getRelatedServices(service);
  const Icon = service.icon;

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
          className="animate-float-a absolute -top-24 right-[10%] h-80 w-80 rounded-full bg-brand-600/20 blur-[110px]"
          aria-hidden
        />
        <Container className="relative max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              ...(category
                ? [{ label: category.name, href: `/services/${category.slug}` }]
                : []),
              { label: service.title },
            ]}
          />
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
            <div>
              <Reveal className="space-y-5">
                {service.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-relaxed text-pretty text-mist-500 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              <div className="mt-12 scroll-mt-24">
                <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-900 uppercase">
                  Service scope
                </h2>
                <div className="mt-6 space-y-8">
                  {service.scope.map((item) => (
                    <div key={item.id} id={item.id} className="scroll-mt-24">
                      <h3 className="text-lg font-semibold text-ink-900">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-base leading-relaxed text-mist-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {category ? (
                <div className="mt-12">
                  <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-900 uppercase">
                    Business outcomes
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {category.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                        <span className="text-base text-ink-900/80">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-12 rounded-2xl border border-ink-900/8 bg-mist-50 p-7">
                <h2 className="text-lg font-semibold text-ink-900">
                  {serviceDelivery.heading}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-mist-500">
                  {serviceDelivery.body}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-900 uppercase">
                  Frequently asked questions
                </h2>
                <div className="mt-5 space-y-5">
                  {serviceFaqs.map((faq) => (
                    <div key={faq.question}>
                      <p className="font-semibold text-ink-900">
                        {faq.question}
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed text-mist-500">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-ink-900/8 bg-mist-50 p-7 sm:p-8">
                <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-900 uppercase">
                  Jump to a scope item
                </h2>
                <ul className="mt-5 space-y-1">
                  {service.scope.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg px-2 py-1.5 text-sm text-mist-500 transition-colors hover:bg-white hover:text-brand-700"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-7 text-sm font-semibold tracking-[0.14em] text-ink-900 uppercase">
                  Discuss Your {service.shortTitle} Requirements
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  Tell us about your current environment, priorities and
                  project scope. Our team will help you identify the next
                  step.
                </p>
                <Button
                  href={`/contact?service=${service.slug}`}
                  className="mt-5 w-full"
                >
                  Request a Consultation
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-mist-50 py-24 sm:py-28">
          <Container>
            <Eyebrow>Related services</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">
              Explore more in {category?.name ?? "this category"}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABand
        title="Let's Build the Right IT Solution for Your Business"
        description="Planning a new setup, upgrading your systems or looking for ongoing support? Tell us what your business needs."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
        secondaryLabel="Browse services"
        secondaryHref="/services"
      />
    </>
  );
}
