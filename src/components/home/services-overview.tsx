import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IllustratedCard } from "@/components/services/illustrated-card";
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
              <IllustratedCard
                href={`/services/${category.slug}`}
                icon={category.icon}
                image={category.heroImage}
                title={category.name}
                description={category.intro}
                linkLabel="Explore category"
              />
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
