import { formatDate } from "@/lib/utils";

type UpdateBadgeProps = {
  date: string;
};

export function UpdateBadge({ date }: UpdateBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm text-muted">
      <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
      <span>Обновлено {formatDate(date)}</span>
    </div>
  );
}
