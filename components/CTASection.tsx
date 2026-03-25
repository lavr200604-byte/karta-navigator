import { CTAButton } from "@/components/CTAButton";
import { Disclaimer } from "@/components/Disclaimer";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CTASectionProps) {
  return (
    <section className="surface-panel overflow-hidden p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div>
          <span className="eyebrow">Мягкий переход к витрине</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>
        </div>
        <div className="surface-card p-5">
          <div className="flex flex-col gap-3">
            <CTAButton href={primaryHref} fullWidth>
              {primaryLabel}
            </CTAButton>
            {secondaryHref && secondaryLabel ? (
              <CTAButton href={secondaryHref} variant="secondary" fullWidth>
                {secondaryLabel}
              </CTAButton>
            ) : null}
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            Внешние ссылки централизованы через SmartLand-конфиг, поэтому их можно заменить в одном месте без ручного
            поиска по компонентам.
          </p>
        </div>
      </div>
      <Disclaimer className="mt-6" />
    </section>
  );
}
