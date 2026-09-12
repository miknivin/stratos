import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-gradient-brand text-white shadow-lg shadow-brand-700/25 hover:shadow-xl hover:shadow-brand-700/30 hover:-translate-y-0.5",
  outline:
    "border border-white/25 text-white hover:border-white/50 hover:bg-white/5",
  "outline-ink":
    "border border-ink-900/15 text-ink-900 hover:border-ink-900/40 hover:bg-ink-900/[0.03]",
  ghost: "text-ink-900 hover:bg-ink-900/5",
} as const;

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-7 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const rest = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
