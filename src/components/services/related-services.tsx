import { Reveal } from "@/components/ui/reveal";
import {
  IllustratedCard,
  cardGridClassName,
} from "@/components/services/illustrated-card";
import type { ServicePage } from "@/lib/services-data";

export function RelatedServices({ services }: { services: ServicePage[] }) {
  return (
    <div className={cardGridClassName(services.length)}>
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={(index % 3) * 80}>
          <IllustratedCard
            href={`/services/${service.slug}`}
            icon={service.icon}
            image={service.image}
            title={service.shortTitle}
            description={service.summary}
            linkLabel="Learn more"
          />
        </Reveal>
      ))}
    </div>
  );
}
