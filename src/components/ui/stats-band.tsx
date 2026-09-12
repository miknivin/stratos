import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/site-config";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/15 blur-[130px]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="text-center lg:text-left">
                <p className="text-gradient-brand text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
