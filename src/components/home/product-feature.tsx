import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { productCategories } from "@/lib/site-config";

export function ProductFeature() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Products</Eyebrow>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-balance text-ink-900 sm:text-3xl">
            The Technology Behind Your Next Step
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-mist-500 sm:text-lg">
            Source the equipment and components your business needs through
            STRATOS. Our wholesale offering includes technical spare parts,
            monitoring devices, smart systems, encryption equipment and
            specialist instruments.
          </p>
          <div className="mt-8">
            <Button href="/products" variant="outline-ink">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {productCategories.map((category) => (
              <div
                key={category.slug}
                className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-mist-50 p-5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                  <category.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-medium text-ink-900">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
