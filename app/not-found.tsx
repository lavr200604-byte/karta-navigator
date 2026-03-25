import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="section-space">
      <div className="shell">
        <div className="surface-panel p-8 text-center sm:p-12">
          <span className="eyebrow">404</span>
          <h1 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Страница не найдена</h1>
          <p className="mt-4 text-base leading-8 text-muted">
            Возможно, материал был перемещен или еще не добавлен в контентный хаб.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href="/">
              На главную
            </CTAButton>
            <CTAButton href="/debetovye-karty" variant="secondary">
              К разделу карт
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
