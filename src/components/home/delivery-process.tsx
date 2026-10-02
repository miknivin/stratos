import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { deliveryProcess } from "@/lib/site-config";

export function DeliveryProcess() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div className="animate-float-a h-full w-full rounded-full bg-brand-700/15 blur-[130px]" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Eyebrow tone="light">Our approach</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            From requirement to working solution
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {deliveryProcess.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="text-center lg:text-left">
                <p className="text-gradient-brand text-3xl font-bold tracking-tight sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  {step.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
