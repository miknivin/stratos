import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { ServiceHero } from "@/components/services/service-hero";
import {
  IllustratedCard,
  cardGridClassName,
} from "@/components/services/illustrated-card";
import { ScopeCardGrid } from "@/components/services/scope-card-grid";
import { BusinessOutcomes } from "@/components/services/business-outcomes";
import { DeliverySteps } from "@/components/services/delivery-steps";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ConsultationBand } from "@/components/services/consultation-band";
import { RelatedServices } from "@/components/services/related-services";
import {
  serviceCategories,
  getCategoryBySlug,
  getServiceBySlug,
  getCategoryForService,
  getRelatedServices,
  approvedPages,
  heroIconsForCategory,
  heroIconsForService,
  getHeroHeadline,
  type ServiceCategory,
  type ServicePage,
} from "@/lib/services-data";
import { categoryProcess, serviceDeliverySteps, serviceFaqs } from "@/lib/site-config";

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

/**
 * The hero description reuses `summary`, which for several services is
 * authored as the leading sentence of `intro[0]`. Strip that sentence back
 * out of the body paragraph so it isn't printed twice on the page — this is
 * the exact "repeated introduction" the brief flags on the current site.
 */
function dedupeIntro(summary: string, intro: string[]): string[] {
  const [first, ...rest] = intro;
  if (first && first.startsWith(summary)) {
    const strippedFirst = first.slice(summary.length).trim();
    return strippedFirst ? [strippedFirst, ...rest] : rest;
  }
  return intro;
}

function CategoryOverview({ category }: { category: ServiceCategory }) {
  const pages = approvedPages(category.pages);
  const relatedCategories = serviceCategories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 3);

  return (
    <>
      <ServiceHero
        breadcrumb={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: category.name },
            ]}
          />
        }
        eyebrow={category.name}
        title={getHeroHeadline(category.slug)}
        description={category.intro}
        icons={heroIconsForCategory(category)}
        image={category.heroImage}
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Eyebrow>What&apos;s included</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
            Built around the way you work.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-mist-500 sm:text-lg">
            Explore each part of this category in detail.
          </p>

          <div className={`mt-10 ${cardGridClassName(pages.length)}`}>
            {pages.map((page, index) => (
              <Reveal key={page.slug} delay={(index % 3) * 80}>
                <IllustratedCard
                  href={`/services/${page.slug}`}
                  icon={page.icon}
                  image={page.image}
                  title={page.shortTitle}
                  description={page.summary}
                  linkLabel="Explore solution"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <Eyebrow>Business outcomes</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
            What this means for your business
          </h2>
          <div className="mt-10">
            <BusinessOutcomes outcomes={category.outcomes} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
            Assess, design, implement, support
          </h2>
          <div className="mt-10">
            <DeliverySteps steps={categoryProcess} />
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-16">
        <Container>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-mist-500 uppercase">
            Related categories
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedCategories.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-brand-500/30 hover:text-brand-700"
              >
                {related.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationBand
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
  const introParagraphs = dedupeIntro(service.summary, service.intro);

  return (
    <>
      <ServiceHero
        breadcrumb={
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
        }
        eyebrow={service.title}
        title={getHeroHeadline(service.slug)}
        description={service.summary}
        icons={heroIconsForService(service)}
        image={service.image}
        primaryLabel="Request a Consultation"
        primaryHref={`/contact?service=${service.slug}`}
        secondaryLabel="View scope"
        secondaryHref="#scope"
      />

      {introParagraphs.length > 0 ? (
        <section className="bg-white py-24 sm:py-28">
          <Container className="max-w-3xl">
            <Reveal className="space-y-5">
              {introParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-relaxed text-pretty text-mist-500 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section id="scope" className="scroll-mt-24 bg-mist-50 py-24 sm:py-28">
        <Container>
          <Eyebrow>Service scope</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
            What this service includes
          </h2>
          <div className="mt-10">
            <ScopeCardGrid items={service.scope} />
          </div>
        </Container>
      </section>

      {category ? (
        <section className="bg-white py-24 sm:py-28">
          <Container>
            <Eyebrow>Business outcomes</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
              What this means for your business
            </h2>
            <div className="mt-10">
              <BusinessOutcomes outcomes={category.outcomes} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <Eyebrow>How we deliver this</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
            From requirement to working solution
          </h2>
          <div className="mt-10">
            <DeliverySteps steps={serviceDeliverySteps} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container className="max-w-3xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <ServiceFAQ faqs={serviceFaqs} />
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-mist-50 py-24 sm:py-28">
          <Container>
            <Eyebrow>Related services</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-900 sm:text-4xl">
              Explore more in {category?.name ?? "this category"}
            </h2>
            <div className="mt-10">
              <RelatedServices services={related} />
            </div>
          </Container>
        </section>
      ) : null}

      <ConsultationBand
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
