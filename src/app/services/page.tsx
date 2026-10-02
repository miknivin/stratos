import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ServiceHero } from "@/components/services/service-hero";
import {
  IllustratedCard,
  cardGridClassName,
} from "@/components/services/illustrated-card";
import { ConsultationBand } from "@/components/services/consultation-band";
import { serviceCategories } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "IT Services & Solutions in UAE",
  description:
    "Infrastructure, cloud, cybersecurity, AI, business applications, AV, smart systems and managed IT services from STRATOS INFO TECH in Abu Dhabi.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        title="Complete IT Solutions for Your Business"
        description="From the infrastructure your business depends on to the cloud platforms, applications and smart systems that move it forward, STRATOS brings your technology requirements together. Explore solutions designed around your operations, priorities and growth."
        icons={serviceCategories.map((category) => category.icon)}
        primaryLabel="Find the Right Solution"
        primaryHref="/contact"
      />

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <Reveal key={category.slug} delay={(index % 3) * 80}>
                <IllustratedCard
                  href={`/services/${category.slug}`}
                  icon={category.icon}
                  title={category.name}
                  description={category.intro}
                  linkLabel="Explore category"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationBand
        title="Find the Right Solution"
        description="Tell us what your business needs, and our team will help you define the next step."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
      />
    </>
  );
}
