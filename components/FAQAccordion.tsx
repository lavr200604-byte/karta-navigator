import { FAQItem } from "@/lib/types";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="surface-card group p-5">
          <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-ink">
            {item.question}
            <span className="float-right text-brand transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
