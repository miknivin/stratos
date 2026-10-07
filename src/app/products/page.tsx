import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CTABand } from "@/components/ui/cta-band";
import {
  IllustratedCard,
  cardGridClassName,
} from "@/components/services/illustrated-card";
import { productCategories } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Technology Products & Hardware Supply",
  description:
    "STRATOS INFO TECH supplies a diverse range of technical products and equipment through its wholesale offering, including spare parts, alarm and monitoring devices, astronomical instruments, smart systems and encryption equipment.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Technology Products for Business and Specialist Needs"
        description="STRATOS supplies a diverse range of technical products and equipment through its wholesale offering. Discuss your specifications, quantities and application requirements with our team to identify suitable sourcing options."
      />

      <section className="relative overflow-hidden bg-mist-50 py-24 sm:py-28">
        <div
          className="animate-float-a absolute -top-20 right-[-8%] h-96 w-96 rounded-full bg-brand-500/18 blur-[110px]"
          aria-hidden
        />
        <Container className="relative">
          <div className={cardGridClassName(productCategories.length)}>
            {productCategories.map((category, index) => (
              <Reveal key={category.slug} delay={(index % 3) * 80}>
                <IllustratedCard
                  id={category.slug}
                  href={`/contact?product=${category.slug}`}
                  icon={category.icon}
                  image={category.image}
                  title={category.title}
                  description={category.description}
                  linkLabel="Enquire About Products"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Share Your Product Requirements"
        description="Tell us the product type, specifications and quantity you need. Our team will respond with the next step."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
