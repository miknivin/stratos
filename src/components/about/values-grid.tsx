import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/lib/site-config";

function OrbitRings() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-140 w-140 -translate-x-1/2 -translate-y-1/2"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full border border-brand-600/35" />
      <div className="animate-ring-pulse absolute inset-15 rounded-full border-2 border-brand-500/40" />
      <div className="absolute inset-30 rounded-full border border-navy-700/25" />

      <div className="animate-orbit absolute inset-0">
        <span className="absolute top-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand shadow-[0_0_18px_4px_rgba(232,68,95,0.55)]" />
      </div>
      <div className="animate-orbit-reverse absolute inset-15">
        <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 shadow-[0_0_12px_3px_rgba(232,68,95,0.4)]" />
      </div>
      <div className="animate-orbit-slow absolute inset-30">
        <span className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-700" />
      </div>
    </div>
  );
}

export function ValuesGrid() {
  return (
    <section className="relative overflow-hidden bg-mist-50 py-24 sm:py-28">
      <div
        className="animate-float-b absolute -right-24 -bottom-28 h-96 w-96 rounded-full bg-navy-700/8 blur-[120px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="relative isolate flex flex-col items-center">
          <OrbitRings />
          <SectionHeading
            eyebrow="What guides us"
            title="The values behind every project"
            align="center"
            className="mx-auto"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/20 hover:shadow-lg hover:shadow-brand-700/10">
                <span className="text-sm font-semibold text-brand-600 transition-colors duration-300 group-hover:text-brand-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {value.description}
                </p>
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
