import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services-data";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-lg hover:shadow-brand-700/10"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>

      <h3 className="mt-5 text-lg font-semibold text-ink-900">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
        {service.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
