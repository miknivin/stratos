import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "ink",
  className,
}: {
  children: React.ReactNode;
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 w-fit rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "ink"
          ? "border-ink-900/10 bg-ink-900/[0.03] text-brand-700"
          : "border-white/15 bg-white/5 text-brand-300",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "ink",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "ink" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center  text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          tone === "ink" ? "text-ink-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            tone === "ink" ? "text-mist-500" : "text-white/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
