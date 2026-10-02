import { Hero } from "@/components/home/hero";
import { CapabilityStrip } from "@/components/home/capability-strip";
import { AboutTeaser } from "@/components/home/about-teaser";
import { ServicesOverview } from "@/components/home/services-overview";
import { ProductFeature } from "@/components/home/product-feature";
import { DeliveryProcess } from "@/components/home/delivery-process";
import { WhyStratos } from "@/components/home/why-stratos";
import { BrandsRow } from "@/components/home/brands-row";
import { CTABand } from "@/components/ui/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <AboutTeaser />
      <ServicesOverview />
      <ProductFeature />
      <DeliveryProcess />
      <WhyStratos />
      <BrandsRow />
      <CTABand />
    </>
  );
}
