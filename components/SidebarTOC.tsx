import { cn, createSectionId } from "@/lib/utils";

type SidebarTOCProps = {
  title?: string;
  items: string[];
  className?: string;
};

export function SidebarTOC({ title = "Навигация по статье", items, className }: SidebarTOCProps) {
  return (
    <section className={cn("surface-card p-5", className)}>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item}>
            <a href={`#${createSectionId(item)}`} className="block rounded-2xl px-3 py-2 hover:bg-white/5 hover:text-brand">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
