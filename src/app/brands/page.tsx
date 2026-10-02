import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CTABand } from "@/components/ui/cta-band";
import { brandLogos } from "@/lib/brands-data";

export const metadata: Metadata = {
  title: "Brands We Deal In",
  description:
    "Explore the technology brands represented in STRATOS INFO TECH's hardware offering. Contact our team to discuss product suitability, specifications and sourcing requirements.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Brands We Deal In"
        description="Explore the technology brands represented in STRATOS's existing hardware offering. Contact our team to discuss product suitability, specifications and sourcing requirements."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-900/8 sm:grid-cols-3 lg:grid-cols-4">
            {brandLogos.map((brand, index) => (
              <Reveal key={brand.name} delay={(index % 8) * 40}>
                <div className="flex h-32 items-center justify-center bg-white p-6 transition-colors hover:bg-mist-50">
                  <Image
                    src={`/images/brands/${brand.file}`}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="h-10 w-auto max-w-full object-contain grayscale transition-all duration-200 hover:grayscale-0"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Discuss Product Suitability and Sourcing"
        description="Tell us the product type, specifications and quantity you need. Our team will respond with the next step."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
}
