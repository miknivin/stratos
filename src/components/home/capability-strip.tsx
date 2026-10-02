import Link from "next/link";
import { Container } from "@/components/ui/container";
import { serviceCategories } from "@/lib/services-data";

export function CapabilityStrip() {
  return (
    <section className="border-b border-ink-900/8 bg-white py-10">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {serviceCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/services/${category.slug}`}
                className="group flex items-center gap-2 text-sm font-medium text-ink-900/70 transition-colors hover:text-brand-700"
              >
                <category.icon className="h-4 w-4 text-brand-600 transition-transform duration-200 group-hover:scale-110" />
                {category.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
