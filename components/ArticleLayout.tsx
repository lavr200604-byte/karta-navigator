import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { OfferComparisonBlock } from "@/components/OfferComparisonBlock";
import { RelatedArticles } from "@/components/RelatedArticles";
import { SidebarTOC } from "@/components/SidebarTOC";
import { UpdateBadge } from "@/components/UpdateBadge";
import { siteConfig } from "@/data/site";
import { Article, Offer } from "@/lib/types";
import { createSectionId } from "@/lib/utils";
import { getSmartLandUrl } from "@/lib/cta-links";

type ArticleLayoutProps = {
  article: Article;
  offers: Offer[];
  relatedArticles: Article[];
};

export function ArticleLayout({ article, offers, relatedArticles }: ArticleLayoutProps) {
  const breadcrumbItems =
    article.slug === "debetovye-karty"
      ? [{ label: "Главная", href: "/" }, { label: article.title }]
      : [
          { label: "Главная", href: "/" },
          { label: "Дебетовые карты", href: "/debetovye-karty" },
          { label: article.title }
        ];

  const tocItems = [
    ...article.sections.map((section) => section.title),
    "Как мы сравниваем карты",
    "На что смотреть в первую очередь",
    "Кому подойдет",
    "Кому может не подойти",
    "Какие ошибки совершают при выборе",
    "Что важно проверить перед переходом на витрину",
    "Почему не стоит ориентироваться только на рекламу",
    "Частые вопросы"
  ];

  return (
    <div className="section-space">
      <div className="shell">
        <div className="surface-panel p-6 sm:p-8 lg:p-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_340px]">
            <div>
              <span className="eyebrow">SEO-материал</span>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl xl:text-[3.6rem] xl:leading-[1.05]">
                {article.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">{article.intro}</p>
              <div className="mt-6">
                <UpdateBadge date={article.updatedAt ?? siteConfig.updatedAt} />
              </div>
            </div>

            <aside className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-ink">Что внутри статьи</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>Практический разбор конкретного запроса без агрессивных обещаний.</li>
                <li>Сравнение сценариев, ошибок и критериев отбора.</li>
                <li>Мягкий переход к SmartLand только после чтения и самооценки условий.</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <CTAButton href={getSmartLandUrl(article.ctaKey)} fullWidth>
                  {article.ctaLabel}
                </CTAButton>
                <CTAButton href="/sravnenie-debetovyh-kart" variant="secondary" fullWidth>
                  Открыть сравнение
                </CTAButton>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">
                Сначала материал помогает понять логику выбора, а уже затем переводит к витрине с конкретными
                предложениями.
              </p>
            </aside>
          </div>
        </div>

        <div className="grid gap-8 pt-10 xl:grid-cols-[minmax(0,1.42fr)_340px]">
          <article className="space-y-10">
            <section className="surface-card p-6 sm:p-8">
              <p className="rounded-3xl border border-brand/15 bg-brand/10 p-5 text-base leading-8 text-ink/90">
                {article.lead}
              </p>
              <div className="article-prose mt-7">
                {article.sections.map((section) => (
                  <section key={section.title} id={createSectionId(section.title)}>
                    <h2 className="text-3xl font-semibold text-ink">{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>
            </section>

            <section id={createSectionId("Как мы сравниваем карты")} className="grid gap-6 xl:grid-cols-2">
              <div className="surface-card p-6">
                <span className="eyebrow">Как мы сравниваем карты</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Редакционный подход к сравнению</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/90">
                  {article.comparisonMethod.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card p-6" id={createSectionId("На что смотреть в первую очередь")}>
                <span className="eyebrow">На что смотреть в первую очередь</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Быстрый фильтр перед витриной</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/90">
                  {article.firstLook.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <OfferComparisonBlock
              title="Таблица сравнения"
              description={article.comparisonIntro}
              offers={offers}
              ctaHref={getSmartLandUrl(article.ctaKey)}
              ctaLabel={article.ctaLabel}
            />

            <section className="grid gap-6 xl:grid-cols-2">
              <div className="surface-card p-6" id={createSectionId("Кому подойдет")}>
                <span className="eyebrow">Кому подойдет</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Типичные сценарии использования</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/90">
                  {article.suitedFor.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card p-6" id={createSectionId("Кому может не подойти")}>
                <span className="eyebrow">Кому может не подойти</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Когда стоит смотреть другой сценарий</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/90">
                  {article.notSuitedFor.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warning" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <div className="surface-card p-6">
                <span className="eyebrow">Критерии выбора</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Что проверить в тарифе</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/90">
                  {article.criteria.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card p-6" id={createSectionId("Какие ошибки совершают при выборе")}>
                <span className="eyebrow">Ошибки при выборе</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Что чаще всего упускают пользователи</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/90">
                  {article.commonMistakes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warning" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="surface-card p-6" id={createSectionId("Что важно проверить перед переходом на витрину")}>
              <span className="eyebrow">Перед переходом на витрину</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink">Что важно проверить заранее</h2>
              <ul className="mt-5 grid gap-4 text-sm leading-7 text-ink/90 sm:grid-cols-2">
                {article.beforeShowcase.map((item) => (
                  <li key={item} className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="surface-card border-brand/15 bg-brand/10 p-6"
              id={createSectionId("Почему не стоит ориентироваться только на рекламу")}
            >
              <span className="eyebrow">Почему не стоит ориентироваться только на рекламу</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink">Рекламный максимум редко совпадает с обычной жизнью</h2>
              <p className="mt-4 text-sm leading-7 text-ink/90 sm:text-base">{article.advertisingNote}</p>
            </section>

            <section className="space-y-5" id={createSectionId("Частые вопросы")}>
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Частые вопросы</h2>
              </div>
              <FAQAccordion items={article.faqs} />
            </section>

            <CTASection
              title="Перейти к SmartLand только после чтения и фильтрации"
              description="Когда критерии уже понятны, SmartLand становится удобным следующим шагом: можно сверить подходящие варианты и не тратить время на явно нерелевантные предложения."
              primaryHref={getSmartLandUrl(article.ctaKey)}
              primaryLabel={article.ctaLabel}
              secondaryHref={getSmartLandUrl("comparison")}
              secondaryLabel="Посмотреть витрину"
            />

            <section className="space-y-5">
              <div>
                <span className="eyebrow">Внутренняя перелинковка</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">Почитать дальше</h2>
              </div>
              <RelatedArticles articles={relatedArticles} />
            </section>
          </article>

          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <div className="surface-card p-5">
              <h2 className="text-lg font-semibold text-ink">Кратко о материале</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Эта страница помогает собрать критерии и не переходить к витрине раньше времени, когда еще не понятны
                приоритеты выбора.
              </p>
              <div className="mt-4">
                <UpdateBadge date={article.updatedAt ?? siteConfig.updatedAt} />
              </div>
            </div>

            <SidebarTOC items={tocItems} />

            <div className="surface-card p-5">
              <h2 className="text-lg font-semibold text-ink">Следующий шаг</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Переходите к сравнению только после того, как определили удобный для себя сценарий.
              </p>
              <div className="mt-4 space-y-3">
                <CTAButton href={getSmartLandUrl(article.ctaKey)} fullWidth>
                  {article.ctaLabel}
                </CTAButton>
                <CTAButton href={getSmartLandUrl("comparison")} variant="secondary" fullWidth>
                  Перейти к предложениям
                </CTAButton>
              </div>
            </div>

            <div className="surface-card p-5">
              <h2 className="text-lg font-semibold text-ink">Материалы по теме</h2>
              <div className="mt-4 space-y-2">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 text-sm text-muted hover:border-brand/30 hover:text-ink"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Disclaimer />
          </aside>
        </div>
      </div>
    </div>
  );
}
