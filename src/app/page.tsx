import { Hero } from "@/components/home/hero";
import { AboutTeaser } from "@/components/home/about-teaser";
import { BrandsRow } from "@/components/home/brands-row";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyStratos } from "@/components/home/why-stratos";
import { StatsBand } from "@/components/ui/stats-band";
import { CTABand } from "@/components/ui/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <BrandsRow />
      <ServicesOverview />
      <WhyStratos />
      <StatsBand />
      <CTABand />
    </>
  );
}
