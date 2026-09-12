import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/lib/site-config";

const NETWORK_NODES = [
  { x: 46, y: 46, r: 4 },
  { x: 210, y: 26, r: 3 },
  { x: 362, y: 58, r: 5 },
  { x: 300, y: 150, r: 3 },
  { x: 58, y: 214, r: 3 },
  { x: 214, y: 258, r: 5 },
  { x: 366, y: 226, r: 3 },
  { x: 150, y: 150, r: 2.5 },
];

const NETWORK_LINES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 5],
  [5, 6],
  [4, 5],
  [0, 4],
  [1, 7],
  [3, 7],
  [7, 4],
];

function NetworkPattern() {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <radialGradient id="why-spark-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="var(--color-brand-300)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--color-brand-600)" stopOpacity="0" />
        </radialGradient>
        <filter id="why-spark-blur" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      {/* faint static conduits the light travels along */}
      {NETWORK_LINES.map(([a, b], i) => {
        const from = NETWORK_NODES[a];
        const to = NETWORK_NODES[b];
        return (
          <path
            key={i}
            id={`why-path-${i}`}
            d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
            fill="none"
            stroke="var(--color-brand-600)"
            strokeOpacity={0.22}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
        );
      })}

      {/* small glowing orbs that shoot along each conduit */}
      {NETWORK_LINES.map((_, i) => {
        const duration = 3.6 + (i % 4) * 0.7;
        const begin = -(i * 0.65).toFixed(2);
        return (
          <g key={i} className="why-network-spark">
            <circle r={6} fill="url(#why-spark-glow)" filter="url(#why-spark-blur)">
              <animateMotion
                dur={`${duration}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#why-path-${i}`} />
              </animateMotion>
            </circle>
            <circle r={1.5} fill="#ffffff">
              <animateMotion
                dur={`${duration}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#why-path-${i}`} />
              </animateMotion>
            </circle>
          </g>
        );
      })}

      {NETWORK_NODES.map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r={node.r} fill="var(--color-brand-600)" />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r * 2.2}
            fill="url(#why-spark-glow)"
            className="why-network-spark animate-pulse-node origin-center transform-fill"
            style={{ animationDelay: `${i * -0.5}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

export function WhyStratos() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div
        className="animate-float-a absolute -top-24 -left-16 h-80 w-80 rounded-full bg-brand-500/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="animate-float-b absolute -right-20 -bottom-24 h-96 w-96 rounded-full bg-navy-700/10 blur-[110px]"
        aria-hidden
      />

      <Container className="relative">
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
            <div className="group relative overflow-hidden rounded-3xl border border-ink-900/8 bg-mist-50 p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-45">
                <NetworkPattern />
              </div>

              <ul className="relative grid grid-cols-1 gap-2 sm:grid-cols-2">
                {values.map((value) => (
                  <li
                    key={value.title}
                    className="group/item flex gap-3 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-900/8 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 group-hover/item:scale-110" />
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
