import Image from "next/image";
import Link from "next/link";

import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ScenarioCards } from "@/components/ScenarioCards";
import { ScenarioPicker } from "@/components/ScenarioPicker";
import { UpdateBadge } from "@/components/UpdateBadge";
import { articles } from "@/data/articles";
import { offers } from "@/data/offers";
import { siteConfig } from "@/data/site";
import { getSmartLandUrl } from "@/lib/cta-links";
import { createFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Подберите дебетовую карту под свои задачи",
  description:
    "Темный контентный хаб по выбору дебетовых карт: сценарии, редакционные статьи, FAQ и мягкий переход к SmartLand для сравнения предложений.",
  path: "/"
});

const featuredOffers = offers.filter((offer) => offer.featured).slice(0, 4);
const featuredArticles = articles.filter((article) => article.slug !== "debetovye-karty").slice(0, 4);

export default function HomePage() {
  return (
    <>
      <JsonLd data={createFaqSchema(siteConfig.homeFaqs)} />

      <div className="section-space">
        <div className="shell space-y-10">
          <section className="surface-panel overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
              <div>
                <span className="eyebrow">Контентный хаб по дебетовым картам</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl xl:text-6xl">
                  Подберите дебетовую карту под свой сценарий, а не под рекламный лозунг
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  «Карта Навигатор» помогает спокойно определить логику выбора: где важен кэшбэк, когда лучше
                  бесплатное обслуживание, кому нужен студенческий формат, а когда достаточно простой карты на каждый
                  день. SmartLand нужен как следующий шаг для сравнения конкретных предложений, а не как замена
                  содержательной статьи.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <CTAButton href={getSmartLandUrl("comparison")} size="lg">
                    Сравнить предложения
                  </CTAButton>
                  <CTAButton href={getSmartLandUrl("picker")} variant="secondary" size="lg">
                    Подобрать карту
                  </CTAButton>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <UpdateBadge date={siteConfig.updatedAt} />
                  <Link href="/debetovye-karty" className="text-sm font-semibold text-brand hover:text-brand-dark">
                    Сначала понять логику выбора
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <div className="surface-card p-5 sm:p-6">
                  <Image
                    src="/hero-illustration.svg"
                    alt="Иллюстрация выбора дебетовой карты"
                    width={640}
                    height={520}
                    className="h-auto w-full rounded-[1.6rem]"
                    priority
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="surface-card p-5">
                    <h2 className="text-xl font-semibold text-ink">Как работает сайт</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Сначала вы читаете статью и выбираете подходящий сценарий. Потом уже идете на внешнюю витрину для
                      сравнения актуальных условий.
                    </p>
                  </div>
                  <div className="surface-card p-5">
                    <h2 className="text-xl font-semibold text-ink">Почему это удобно</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Так проще не потеряться в маркетинговых обещаниях и не кликать по предложениям, которые изначально
                      не подходят под ваш бюджет и привычки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ScenarioPicker offers={featuredOffers} />

          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Сценарии выбора</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">На что похожи сценарии выбора</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Эти карточки не обещают универсального лидера. Они помогают быстро понять, с какой логики сравнения
                  лучше начать именно в вашем случае.
                </p>
              </div>
              <Link
                href="/sravnenie-debetovyh-kart"
                className="hidden text-sm font-semibold text-brand hover:text-brand-dark sm:inline-flex"
              >
                Перейти к сравнению
              </Link>
            </div>
            <ScenarioCards offers={featuredOffers} />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="surface-panel p-6 sm:p-8">
              <span className="eyebrow">Спокойная логика выбора</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">С чего начинать сравнение</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {siteConfig.howToChooseSteps.map((step, index) => (
                  <article key={step.title} className="rounded-3xl border border-border bg-white/[0.03] p-5">
                    <span className="text-sm font-semibold text-brand">Шаг {index + 1}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="surface-panel p-6 sm:p-8">
              <span className="eyebrow">Как мы сравниваем предложения</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink">Редакционный подход</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
                {siteConfig.comparisonPrinciples.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <div className="mb-6">
              <span className="eyebrow">Доверительный слой</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Почему сайт выглядит как справочный проект</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {siteConfig.trustBlocks.map((block) => (
                <article key={block.title} className="surface-card p-6">
                  <h3 className="text-2xl font-semibold text-ink">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{block.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <span className="eyebrow">Что чаще всего ищут</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Какие параметры волнуют пользователей</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {siteConfig.benefits.map((benefit) => (
                <article key={benefit.title} className="surface-card p-6">
                  <h3 className="text-2xl font-semibold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{benefit.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <span className="eyebrow">Статьи под SEO-запросы</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Материалы, которые ведут к осознанному выбору</h2>
            </div>
            <RelatedArticles articles={featuredArticles} />
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-5">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Частые вопросы</h2>
              </div>
              <FAQAccordion items={siteConfig.homeFaqs} />
            </div>

            <div className="space-y-6">
              <div className="surface-card p-6">
                <h2 className="text-2xl font-semibold text-ink">Последнее обновление</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{siteConfig.updateNote}</p>
                <div className="mt-5">
                  <UpdateBadge date={siteConfig.updatedAt} />
                </div>
              </div>
              <Disclaimer />
            </div>
          </section>

          <CTASection
            title="Перейти к предложениям, когда критерии уже понятны"
            description="Используйте статьи и сценарии как фильтр. Если вы уже понимаете, что важнее именно вам, переходите к SmartLand-витрине и сравнивайте актуальные варианты без лишнего шума."
            primaryHref={getSmartLandUrl("comparison")}
            primaryLabel="Посмотреть витрину"
            secondaryHref={getSmartLandUrl("picker")}
            secondaryLabel="Выбрать по условиям"
          />
        </div>
      </div>
    </>
  );
}
