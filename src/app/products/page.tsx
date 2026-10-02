import type { Metadata } from "next";
import { Package } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/ui/cta-band";
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

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Reveal key={category.slug} delay={(index % 3) * 80}>
                <div
                  id={category.slug}
                  className="scroll-mt-24 flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-7"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Package className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-ink-900">
                    {category.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
                    {category.description}
                  </p>
                  <Button
                    href={`/contact?product=${category.slug}`}
                    variant="outline-ink"
                    size="sm"
                    className="mt-5 self-start"
                  >
                    Enquire About Products
                  </Button>
                </div>
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
