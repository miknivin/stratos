import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { productCategories } from "@/lib/site-config";
import { Package } from "lucide-react";
import { cn } from "@/lib/cn";

const CIRCUIT_TRACES = [
  { d: "M 300 40 H 170 V 95 H 78", duration: 4.2 },
  { d: "M 300 120 H 210 V 161 H 78", duration: 5.1 },
];

const CIRCUIT_PADS = [
  { x: 300, y: 40 },
  { x: 170, y: 95 },
  { x: 300, y: 120 },
  { x: 210, y: 161 },
];

function CircuitDecoration({
  idPrefix,
  mirror = false,
}: {
  idPrefix: string;
  mirror?: boolean;
}) {
  const glowId = `${idPrefix}-circuit-glow`;
  const blurId = `${idPrefix}-circuit-blur`;

  return (
    <svg
      viewBox="0 0 300 220"
      className={cn(
        "pointer-events-none absolute h-56 w-72",
        mirror ? "top-0 left-0 -scale-x-100" : "right-0 bottom-0",
      )}
      aria-hidden
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="var(--color-brand-300)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--color-brand-600)" stopOpacity="0" />
        </radialGradient>
        <filter id={blurId} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      <rect
        x={38}
        y={146}
        width={30}
        height={30}
        rx={4}
        fill="none"
        stroke="var(--color-navy-700)"
        strokeOpacity={0.35}
        strokeWidth={1.5}
      />

      {CIRCUIT_TRACES.map((trace, i) => (
        <path
          key={i}
          id={`${idPrefix}-path-${i}`}
          d={trace.d}
          fill="none"
          stroke="var(--color-navy-700)"
          strokeOpacity={0.28}
          strokeWidth={1.25}
        />
      ))}

      {CIRCUIT_PADS.map((pad, i) => (
        <rect
          key={i}
          x={pad.x - 2.5}
          y={pad.y - 2.5}
          width={5}
          height={5}
          fill="var(--color-brand-600)"
          fillOpacity={0.4}
        />
      ))}

      {CIRCUIT_TRACES.map((trace, i) => (
        <g key={i} className="motion-spark">
          <circle r={5} fill={`url(#${glowId})`} filter={`url(#${blurId})`}>
            <animateMotion
              dur={`${trace.duration}s`}
              begin={`${-i * 1.1}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#${idPrefix}-path-${i}`} />
            </animateMotion>
          </circle>
          <circle r={1.3} fill="#ffffff">
            <animateMotion
              dur={`${trace.duration}s`}
              begin={`${-i * 1.1}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#${idPrefix}-path-${i}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  );
}

export function ProductsGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <CircuitDecoration idPrefix="products-a" />
      <CircuitDecoration idPrefix="products-b" mirror />

      <Container className="relative">
        <SectionHeading
          eyebrow="Wholesale distribution"
          title="Technology products, sourced from trusted manufacturers"
          description="Alongside our services, Stratos is a premier wholesale supplier of technical products and equipment, collaborating with leading vendors to offer reliable, high-performance hardware."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 80}>
              <div className="group h-full rounded-2xl border border-ink-900/8 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-700/20 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Package className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {category.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
