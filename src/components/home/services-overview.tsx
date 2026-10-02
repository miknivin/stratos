import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/services-data";

export function ServicesOverview() {
  return (
    <section className="bg-mist-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="A complete IT solutions provider for your business"
          description="Seven coordinated service categories, delivered by experienced consultants and engineers and tailored to your infrastructure, priorities and growth."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.slug} delay={(index % 3) * 80}>
              <Link
                href={`/services/${category.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-lg hover:shadow-brand-700/10"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform duration-300 group-hover:scale-110">
                  <category.icon className="h-5 w-5" strokeWidth={2} />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
                  {category.intro}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Explore category
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outline-ink">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
