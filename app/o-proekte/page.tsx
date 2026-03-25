import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { Disclaimer } from "@/components/Disclaimer";
import { siteConfig } from "@/data/site";
import { getSmartLandUrl } from "@/lib/cta-links";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "О проекте",
  description: "Информация о контентном проекте, посвященном выбору дебетовых карт и мягкой навигации по предложениям.",
  path: "/o-proekte"
});

export default function AboutPage() {
  return (
    <div className="section-space">
      <div className="shell space-y-8">
        <div className="surface-panel p-6 sm:p-8">
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О проекте" }]} />
          <h1 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">О проекте</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Этот сайт задуман как полезный контентный мини-хаб по теме дебетовых карт. Его задача не продавать одну
            конкретную карту, а помогать пользователю спокойно разобраться в критериях выбора, сравнить сценарии и
            только потом перейти к внешней витрине с предложениями.
          </p>
          <div className="mt-6">
            <CTAButton href={getSmartLandUrl("comparison")}>Перейти к SmartLand-витрине</CTAButton>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="surface-card p-6">
            <h2 className="text-3xl font-semibold text-ink">Как мы подаем информацию</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Материалы построены вокруг информационных и полукоммерческих запросов: кэшбэк, бесплатное обслуживание,
              лучшая карта под конкретный сценарий, сравнение условий. Контент написан в нейтральном тоне и не обещает
              гарантированную выгоду, стопроцентное одобрение или иные агрессивные маркетинговые тезисы.
            </p>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-3xl font-semibold text-ink">Как работает монетизация</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              На сайте предусмотрены кнопки для перехода на внешнюю SmartLand-витрину. Это мягкий формат монетизации:
              пользователь сначала читает полезный материал, а затем сам принимает решение, нужен ли ему дальнейший
              подбор предложений.
            </p>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-3xl font-semibold text-ink">Как мы сравниваем предложения</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Мы начинаем не с ярких акций, а с логики использования: обслуживание, комиссии, повседневный сервис,
              приложение, бонусы и цифровой опыт. Поэтому статьи построены как редакционный фильтр перед переходом к
              витрине.
            </p>
          </section>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-3xl font-semibold text-ink">Последнее обновление</h2>
          <p className="mt-4 text-sm leading-7 text-muted">{siteConfig.updateNote}</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Текущая дата пересмотра материалов: <span className="font-semibold text-ink">{siteConfig.updatedAt}</span>.
          </p>
        </div>

        <Disclaimer />
      </div>
    </div>
  );
}
