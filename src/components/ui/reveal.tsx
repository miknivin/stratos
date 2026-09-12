import { cn } from "@/lib/cn";

/**
 * Pure-CSS mount fade-in (no JS, no IntersectionObserver). Content is
 * always present and visible without JavaScript; the animation is a
 * progressive-enhancement nicety layered on top via `animation-fill-mode`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("animate-fade-up", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
