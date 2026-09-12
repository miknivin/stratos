import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/lib/site-config";

export function ValuesGrid() {
  return (
    <section className="bg-mist-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What guides us"
          title="The values behind every project"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-ink-900/8 bg-white p-7">
                <span className="text-sm font-semibold text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
