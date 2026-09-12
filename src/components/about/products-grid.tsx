import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { productCategories } from "@/lib/site-config";
import { Package } from "lucide-react";

export function ProductsGrid() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Wholesale distribution"
          title="Technology products, sourced from trusted manufacturers"
          description="Alongside our services, Stratos is a premier wholesale supplier of technical products and equipment, collaborating with leading vendors to offer reliable, high-performance hardware."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 80}>
              <div className="h-full rounded-2xl border border-ink-900/8 bg-mist-50 p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Package className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {category.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
