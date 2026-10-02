import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Target, Compass } from "lucide-react";

const purpose = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Help businesses use technology effectively through reliable solutions, thoughtful advice and disciplined implementation.",
  },
  {
    icon: Compass,
    title: "Vision",
    description:
      "Be a long-term technology partner for UAE businesses as their operational needs evolve.",
  },
];

export function OurPurpose() {
  return (
    <section className="bg-mist-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our purpose"
          title="What we're working toward"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {purpose.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-ink-900/8 bg-white p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-mist-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
