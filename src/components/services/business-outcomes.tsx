import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

export function BusinessOutcomes({
  outcomes,
  className,
}: {
  outcomes: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {outcomes.map((outcome, index) => (
        <Reveal key={outcome} delay={(index % 3) * 80}>
          <div className="flex h-full items-start gap-3.5 rounded-2xl border border-ink-900/8 bg-lavender-100/40 p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
              <CheckCircle2 className="h-4.5 w-4.5" strokeWidth={2} />
            </span>
            <p className="pt-1.5 font-medium text-ink-900">{outcome}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
