import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { CTABand } from "@/components/ui/cta-band";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cyber risk auditing, security architecture, IT and cyber security consultancy, data management, AI development, network services, cloud computing and risk management, delivered by Stratos Info Tech.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Professional services for every layer of your technology stack"
        description="Delivered by experienced consultants and engineers who tailor every engagement to your infrastructure, risk profile and compliance requirements."
      />

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
