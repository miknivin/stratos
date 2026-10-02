import { Reveal } from "@/components/ui/reveal";
import {
  IllustratedCard,
  cardGridClassName,
} from "@/components/services/illustrated-card";
import type { ScopeItem } from "@/lib/services-data";

/**
 * Each card is the full, final content for its scope item (there is nothing
 * further to navigate to), so it renders without a "learn more" link — it
 * only needs its id as a same-page anchor target for deep links from the
 * header's Services dropdown (e.g. /services/[slug]#[scope-id]).
 */
export function ScopeCardGrid({ items }: { items: ScopeItem[] }) {
  return (
    <div className={cardGridClassName(items.length)}>
      {items.map((item, index) => (
        <Reveal key={item.id} delay={(index % 3) * 80}>
          <IllustratedCard
            id={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </Reveal>
      ))}
    </div>
  );
}
