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
        image={{
          src: "/images/services/services-hub-hero.png",
          alt: "A cloud, server racks, network switches, a security shield and a network globe outside a smart building",
        }}
        primaryLabel="Find the Right Solution"
        primaryHref="/contact"
      />

      <section className="relative overflow-hidden bg-mist-50 py-24 sm:py-28">
        <div
          className="animate-float-a absolute -top-20 left-[-8%] h-96 w-96 rounded-full bg-brand-500/18 blur-[110px]"
          aria-hidden
        />
        <Container className="relative">
          <div className={cardGridClassName(serviceCategories.length)}>
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
