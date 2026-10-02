import { useId } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Drop-in real artwork once it exists, with no further layout changes:
 * pass `image` and the designer's asset replaces the placeholder scene at
 * its native aspect ratio (4:3 hero / 3:2 card — see each component).
 */
type RealImage = { src: string; alt: string };

/**
 * Shared visual language for the services redesign: dark plum gradient,
 * a faint technical grid, restrained pink connection paths and lavender
 * illumination — standing in for photoreal hero/card imagery (none of
 * which can be generated in this environment). Built as lightweight
 * CSS/SVG rather than heavy runtime 3D scenes, per the brief's own
 * fallback guidance.
 */

const NODE_POSITIONS = [
  { top: "14%", left: "52%", size: "lg" as const },
  { top: "40%", left: "16%", size: "md" as const },
  { top: "52%", left: "78%", size: "md" as const },
  { top: "76%", left: "44%", size: "sm" as const },
];

const SIZE_CLASSES = {
  lg: "h-16 w-16 sm:h-20 sm:w-20",
  md: "h-13 w-13 sm:h-16 sm:w-16",
  sm: "h-11 w-11 sm:h-13 sm:w-13",
} as const;

const ICON_SIZE_CLASSES = {
  lg: "h-7 w-7 sm:h-8 sm:w-8",
  md: "h-5.5 w-5.5 sm:h-6.5 sm:w-6.5",
  sm: "h-4.5 w-4.5 sm:h-5 sm:w-5",
} as const;

/** Only shown on the placeholder scene — disappears automatically once a real `image` is supplied. */
function SizeLabel({ text }: { text: string }) {
  return (
    <span className="absolute bottom-3 left-3 z-10 rounded-md border border-white/15 bg-black/50 px-2 py-1 font-mono text-[10px] tracking-wide text-white/70 backdrop-blur-sm sm:text-xs">
      {text}
    </span>
  );
}

function SceneBackdrop({ gradientId }: { gradientId: string }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, var(--color-navy-800) 0%, var(--color-navy-900) 48%, var(--color-navy-950) 100%)`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-25" aria-hidden />
      <div
        className="animate-float-a absolute -top-10 right-[-10%] h-56 w-56 rounded-full bg-lavender-300/20 blur-[90px]"
        aria-hidden
      />
      <div
        className="animate-float-b absolute -bottom-16 left-[-10%] h-48 w-48 rounded-full bg-brand-600/20 blur-[90px]"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-400)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-brand-600)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M52 18 L20 42 M52 18 L76 54 M20 42 L44 76 M76 54 L44 76"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="2 3"
        />
      </svg>
    </>
  );
}

/**
 * Wide hero scene: the page/category's icon plus a few of its scope icons,
 * arranged as a loosely connected node network on the right-hand side,
 * with dark quiet space reserved on the left for copy.
 */
export function HeroIllustration({
  icons,
  image,
  className,
}: {
  icons: LucideIcon[];
  image?: RealImage;
  className?: string;
}) {
  const gradientId = useId();
  const nodes = icons.slice(0, 4);

  return (
    <div
      className={cn(
        "relative aspect-4/3 w-full overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-navy-950/50",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 640px, 90vw"
          className="object-cover"
        />
      ) : (
        <>
          <SceneBackdrop gradientId={gradientId} />
          <SizeLabel text="Design at 1600×1200 (4:3)" />

          {nodes.map((Icon, i) => {
            const pos = NODE_POSITIONS[i];
            return (
              <div
                key={i}
                className="animate-float-a absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: pos.top,
                  left: pos.left,
                  animationDelay: `${i * 0.9}s`,
                  animationDuration: `${9 + i}s`,
                }}
              >
                <div
                  className={cn(
                    "flex items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-navy-950/40 backdrop-blur-sm",
                    SIZE_CLASSES[pos.size],
                  )}
                >
                  <Icon
                    className={cn("text-brand-300", ICON_SIZE_CLASSES[pos.size])}
                    strokeWidth={1.6}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

/**
 * Compact card scene: one clearly recognisable subject, used for scope
 * cards, category/service listing cards and related-service cards.
 */
export function CardIllustration({
  icon: Icon,
  image,
  className,
}: {
  icon: LucideIcon;
  image?: RealImage;
  className?: string;
}) {
  const gradientId = useId();

  return (
    <div
      className={cn(
        "relative aspect-3/2 w-full overflow-hidden rounded-t-2xl",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover"
        />
      ) : (
        <>
          <SceneBackdrop gradientId={gradientId} />
          <SizeLabel text="1000×667 (3:2)" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-navy-950/40 backdrop-blur-sm sm:h-18 sm:w-18">
              <Icon
                className="h-7 w-7 text-brand-300 sm:h-8 sm:w-8"
                strokeWidth={1.6}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
