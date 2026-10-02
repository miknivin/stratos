import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CTABand } from "@/components/ui/cta-band";
import { serviceCategories } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "IT Services & Solutions in UAE",
  description:
    "Infrastructure, cloud, cybersecurity, AI, business applications, AV, smart systems and managed IT services from STRATOS INFO TECH in Abu Dhabi.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete IT Solutions for Your Business"
        description="From the infrastructure your business depends on to the cloud platforms, applications and smart systems that move it forward, STRATOS brings your technology requirements together. Explore solutions designed around your operations, priorities and growth."
      />

      <section className="bg-mist-50 py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <Reveal key={category.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/services/${category.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-lg hover:shadow-brand-700/10"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform duration-300 group-hover:scale-110">
                    <category.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
                    {category.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Explore category
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Find the Right Solution"
        description="Tell us what your business needs, and our team will help you define the next step."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
      />
    </>
  );
}
