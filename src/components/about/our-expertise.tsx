import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Users, Layers, PackageSearch, MapPin } from "lucide-react";

const expertise = [
  {
    icon: Users,
    title: "Experienced consultants and engineers",
  },
  {
    icon: Layers,
    title: "A broad service offering",
  },
  {
    icon: PackageSearch,
    title: "Hardware sourcing alongside specialist services",
  },
  {
    icon: MapPin,
    title: "An Abu Dhabi base supporting UAE business requirements",
  },
];

export function OurExpertise() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our expertise"
          title="What we bring to every engagement"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-ink-900/8 bg-mist-50 p-7 text-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-medium text-ink-900">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
