import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { CompanyStory } from "@/components/about/company-story";
import { ValuesGrid } from "@/components/about/values-grid";
import { ProductsGrid } from "@/components/about/products-grid";
import { StatsBand } from "@/components/ui/stats-band";
import { CTABand } from "@/components/ui/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Stratos Info Tech is an Abu Dhabi based technology company delivering cybersecurity, cloud, AI, network and hardware distribution services to modern enterprises.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Stratos Info Tech"
        title="Empowering businesses by aligning technology with strategy"
        description="We're a full-service technology company headquartered in Abu Dhabi, combining cybersecurity expertise, cloud and AI services, and trusted hardware distribution under one roof."
      />
      <CompanyStory />
      <ValuesGrid />
      <ProductsGrid />
      <StatsBand />
      <CTABand
        title="Let's talk about your technology roadmap"
        description="Whether you need a security audit, a cloud migration plan, or a trusted hardware partner, our team is ready to help."
      />
    </>
  );
}
