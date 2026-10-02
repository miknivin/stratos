import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { CardIllustration } from "@/components/services/illustration";

const GRID_COLUMN_CLASSES = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** Picks a column count that avoids a single orphaned card on the last row. */
export function cardGridColumns(count: number): 2 | 3 | 4 {
  if (count <= 2) return 2;
  if (count % 3 === 0 || count % 3 === 2) return 3;
  if (count % 4 === 0 || count % 4 !== 1) return 4;
  return 3;
}

export function cardGridClassName(count: number): string {
  return `grid grid-cols-1 gap-6 ${GRID_COLUMN_CLASSES[cardGridColumns(count)]}`;
}

type IllustratedCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Omit for a self-contained card with nothing further to navigate to. */
  href?: string;
  linkLabel?: string;
  /** Anchor target for same-page deep links (e.g. from the header dropdown). */
  id?: string;
  /** Real designer artwork, once available — see illustration.tsx for the spec. */
  image?: { src: string; alt: string };
};

export function IllustratedCard({
  href,
  icon,
  title,
  description,
  linkLabel = "Explore solution",
  id,
  image,
}: IllustratedCardProps) {
  const cardClassName = `group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-sm transition-all duration-200${
    id ? " scroll-mt-24" : ""
  }`;
  const body = (
    <>
      <CardIllustration icon={icon} image={image} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
          {description}
        </p>
        {href ? (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        id={id}
        className={`${cardClassName} hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-lg hover:shadow-brand-700/10`}
      >
        {body}
      </Link>
    );
  }

  return (
    <div id={id} className={cardClassName}>
      {body}
    </div>
  );
}
