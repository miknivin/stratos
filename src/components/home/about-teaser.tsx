import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";

export function AboutTeaser() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-ink-900/8 lg:order-1">
          <Image
            src="/images/home-about.jpg"
            alt="Stratos Info Tech team and technology"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:order-2">
          <Eyebrow>About us</Eyebrow>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-balance text-ink-900 sm:text-3xl">
            One Partner for Your Complete IT Environment
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-mist-500 sm:text-lg">
            STRATOS INFO TECH is an Abu Dhabi-based technology company
            providing integrated IT solutions and hardware distribution for
            businesses across the UAE. Our experienced consultants and
            engineers help connect infrastructure, networks, cloud,
            cybersecurity, AI and data into a practical technology
            environment built around your business.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline-ink">
              Discover STRATOS
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
