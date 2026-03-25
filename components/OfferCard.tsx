import { CTAButton } from "@/components/CTAButton";
import { Offer } from "@/lib/types";
import { resolveOfferUrl } from "@/lib/utils";

type OfferCardProps = {
  offer: Offer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article id={offer.id} className="surface-card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Сценарий выбора</span>
          <h3 className="mt-4 text-2xl font-semibold text-ink">{offer.name}</h3>
        </div>
        <span className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          {offer.bestFor}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{offer.shortDescription}</p>

      <dl className="mt-6 grid gap-3 rounded-3xl border border-white/5 bg-canvas/80 p-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted">Обслуживание</dt>
          <dd className="mt-1 text-sm font-medium text-ink">{offer.serviceCost}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted">Кэшбэк</dt>
          <dd className="mt-1 text-sm font-medium text-ink">{offer.cashback}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted">Бонусы</dt>
          <dd className="mt-1 text-sm font-medium text-ink">{offer.bonuses}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted">На остаток</dt>
          <dd className="mt-1 text-sm font-medium text-ink">{offer.balanceInterest}</dd>
        </div>
      </dl>

      <ul className="mt-6 space-y-2 text-sm leading-6 text-ink/85">
        {offer.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 pt-2">
        <CTAButton href={resolveOfferUrl(offer.ctaKey)} fullWidth>
          {offer.ctaLabel ?? "Подобрать"}
        </CTAButton>
        <CTAButton href={`/${offer.articleSlug}`} variant="secondary" fullWidth>
          {offer.detailsLabel ?? "Подробнее"}
        </CTAButton>
      </div>
    </article>
  );
}
