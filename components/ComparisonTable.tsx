import { CTAButton } from "@/components/CTAButton";
import { Offer } from "@/lib/types";
import { resolveOfferUrl } from "@/lib/utils";

type ComparisonTableProps = {
  offers: Offer[];
};

export function ComparisonTable({ offers }: ComparisonTableProps) {
  return (
    <div className="space-y-4">
      <div className="surface-card hidden overflow-hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <caption className="border-b border-border bg-canvas/80 px-6 py-4 text-left text-sm text-muted">
              Сравните базовые параметры предложений и переходите к витрине только по тем вариантам, которые
              действительно совпадают с вашим сценарием.
            </caption>
            <thead className="bg-white/5 text-xs uppercase tracking-[0.18em] text-muted">
              <tr>
                <th className="px-6 py-4">Сценарий</th>
                <th className="px-6 py-4">Обслуживание</th>
                <th className="px-6 py-4">Кэшбэк</th>
                <th className="px-6 py-4">Бонусы</th>
                <th className="px-6 py-4">На остаток</th>
                <th className="px-6 py-4">Переход</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, index) => (
                <tr key={offer.id} className={index % 2 === 0 ? "bg-transparent" : "bg-white/[0.03]"}>
                  <td className="px-6 py-5 align-top">
                    <div className="font-semibold text-ink">{offer.name}</div>
                    <div className="mt-1 max-w-xs text-sm leading-6 text-muted">{offer.bestFor}</div>
                  </td>
                  <td className="px-6 py-5 align-top text-ink">{offer.serviceCost}</td>
                  <td className="px-6 py-5 align-top text-ink">{offer.cashback}</td>
                  <td className="px-6 py-5 align-top text-ink">{offer.bonuses}</td>
                  <td className="px-6 py-5 align-top text-ink">{offer.balanceInterest}</td>
                  <td className="px-6 py-5 align-top">
                    <CTAButton href={resolveOfferUrl(offer.ctaKey)} variant="secondary" size="sm">
                      Выбрать по условиям
                    </CTAButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:hidden">
        {offers.map((offer) => (
          <article key={offer.id} className="surface-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink">{offer.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{offer.bestFor}</p>
              </div>
              <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                Сравнение
              </span>
            </div>
            <dl className="mt-4 grid gap-3 rounded-3xl border border-white/5 bg-canvas/80 p-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Обслуживание</dt>
                <dd className="mt-1 text-sm text-ink">{offer.serviceCost}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Кэшбэк</dt>
                <dd className="mt-1 text-sm text-ink">{offer.cashback}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Бонусы</dt>
                <dd className="mt-1 text-sm text-ink">{offer.bonuses}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">На остаток</dt>
                <dd className="mt-1 text-sm text-ink">{offer.balanceInterest}</dd>
              </div>
            </dl>
            <CTAButton href={resolveOfferUrl(offer.ctaKey)} variant="secondary" fullWidth className="mt-4">
              Открыть сравнение
            </CTAButton>
          </article>
        ))}
      </div>
    </div>
  );
}
