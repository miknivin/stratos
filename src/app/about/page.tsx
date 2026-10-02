import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CompanyStory } from "@/components/about/company-story";
import { OurPurpose } from "@/components/about/our-purpose";
import { ValuesGrid } from "@/components/about/values-grid";
import { OurExpertise } from "@/components/about/our-expertise";
import { CTABand } from "@/components/ui/cta-band";

export const metadata: Metadata = {
  title: { absolute: "About STRATOS INFO TECH | Abu Dhabi IT Solutions" },
  description:
    "STRATOS INFO TECH is an Abu Dhabi-based technology company providing integrated IT solutions and hardware distribution for businesses across the UAE.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About STRATOS"
        title="Your Technology Partner in the UAE"
        description="Integrated IT solutions, specialist services and hardware distribution from Abu Dhabi."
        breadcrumb={
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
        }
      />
      <CompanyStory />
      <OurPurpose />
      <ValuesGrid />
      <OurExpertise />
      <CTABand
        title="Let's Discuss Your Technology Goals"
        description="Planning a new setup, upgrading your systems or looking for ongoing support? Tell us what your business needs."
        primaryLabel="Talk to an IT Expert"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
