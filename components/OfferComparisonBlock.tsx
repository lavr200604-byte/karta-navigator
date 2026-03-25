import { CTAButton } from "@/components/CTAButton";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Offer } from "@/lib/types";

type OfferComparisonBlockProps = {
  title: string;
  description: string;
  offers: Offer[];
  ctaHref: string;
  ctaLabel: string;
};

export function OfferComparisonBlock({ title, description, offers, ctaHref, ctaLabel }: OfferComparisonBlockProps) {
  return (
    <section className="space-y-5">
      <div className="surface-panel p-6 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <span className="eyebrow">Сравнение условий</span>
            <h2 className="mt-4 text-3xl font-semibold text-ink">{title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">{description}</p>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-lg font-semibold text-ink">Как читать таблицу</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Сначала посмотрите на обслуживание и комиссии, а уже потом на бонусы.</li>
              <li>Сверяйте кэшбэк только с теми категориями, где у вас действительно есть регулярные траты.</li>
              <li>Используйте таблицу как фильтр, а не как замену финальной проверке условий на витрине.</li>
            </ul>
            <CTAButton href={ctaHref} variant="secondary" fullWidth className="mt-5">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      </div>
      <ComparisonTable offers={offers} />
    </section>
  );
}
