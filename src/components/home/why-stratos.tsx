import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/lib/site-config";

export function WhyStratos() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Why Stratos</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
              A disciplined, customer-focused approach to every engagement
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-mist-500 sm:text-lg">
              STRATOS INFO TECH is driven by a commitment to innovation,
              excellence, and integrity. We strive to empower businesses by
              aligning technology with their strategic needs, fostering
              long-term partnerships through creative problem-solving,
              disciplined execution, and the highest standards of service.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline-ink">
                More about us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-ink-900/8 bg-mist-50 p-8 sm:p-10">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <li key={value.title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <div>
                      <p className="font-semibold text-ink-900">
                        {value.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mist-500">
                        {value.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
