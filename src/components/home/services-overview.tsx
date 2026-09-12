import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="bg-mist-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="A full-stack technology partner, from risk to resilience"
          description="Nine specialist service lines delivered by experienced consultants and engineers, tailored to each client's infrastructure and compliance needs."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
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
