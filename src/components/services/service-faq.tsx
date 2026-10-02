import { ChevronDown } from "lucide-react";

type Faq = { question: string; answer: string };

export function ServiceFAQ({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-ink-900/8 bg-white open:border-brand-500/20"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-semibold text-ink-900 marker:content-none [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-mist-400 transition-transform duration-200 group-open:rotate-180 group-open:text-brand-600"
              aria-hidden
            />
          </summary>
          <p className="px-5 pb-5 text-base leading-relaxed text-mist-500">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
