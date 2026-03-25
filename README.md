# Карта Навигатор

Существующий сайт на `Next.js 14 + TypeScript + Tailwind CSS`, доработанный как SEO-контентный хаб по теме выбора дебетовых карт. Проект сохраняет темную тему, редакционный тон и мягкую монетизацию через внешнюю SmartLand-витрину.

Сейчас все внешние CTA временно ведут на:

- [https://mytop24.com/3Juf](https://mytop24.com/3Juf)

## Как запустить проект

Из PowerShell:

```powershell
cd C:\Users\lavr\Desktop\projecthuy
Copy-Item .env.example .env.local -Force
$env:PATH='C:\Program Files\nodejs;' + $env:PATH
& 'C:\Program Files\nodejs\npm.cmd' install
& 'C:\Program Files\nodejs\npm.cmd' run dev
```

Из `cmd.exe`:

```cmd
cd C:\Users\lavr\Desktop\projecthuy
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

## Production-проверка

```powershell
$env:PATH='C:\Program Files\nodejs;' + $env:PATH
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run start
```

Примечание: в некоторых ограниченных окружениях `next build` может падать на `spawn EPERM`, потому что Next поднимает worker-процессы. Для локальной кодовой проверки можно использовать:

```powershell
$env:PATH='C:\Program Files\nodejs;' + $env:PATH
& 'C:\Program Files\nodejs\node.exe' .\node_modules\typescript\bin\tsc --noEmit
& 'C:\Program Files\nodejs\node.exe' .\node_modules\eslint\bin\eslint.js app components data lib --ext .ts,.tsx
```

## Где лежат тексты и данные

- Конфиг сайта, trust-блоки, фичефлаги: [data/site.ts](C:/Users/lavr/Desktop/projecthuy/data/site.ts)
- Все SEO-статьи и содержательные блоки статей: [data/articles.ts](C:/Users/lavr/Desktop/projecthuy/data/articles.ts)
- Карточки сценариев и офферов: [data/offers.ts](C:/Users/lavr/Desktop/projecthuy/data/offers.ts)
- Типы данных: [lib/types.ts](C:/Users/lavr/Desktop/projecthuy/lib/types.ts)

## Где менять CTA-ссылки и SmartLand URL

Все внешние CTA централизованы в:

- [lib/cta-links.ts](C:/Users/lavr/Desktop/projecthuy/lib/cta-links.ts)

В этом файле лежат:

- `SMARTLAND_MAIN_URL`
- `SMARTLAND_COMPARISON_URL`
- `SMARTLAND_PICKER_URL`
- `SMARTLAND_CASHBACK_URL`
- `SMARTLAND_NO_FEE_URL`
- `SMARTLAND_STUDENT_URL`

Сейчас они все указывают на одну и ту же ссылку:

- `https://mytop24.com/3Juf`

Когда появятся отдельные витрины, меняйте именно этот файл или переменные окружения ниже.

## Как использовать env

Шаблон переменных окружения: [.env.example](C:/Users/lavr/Desktop/projecthuy/.env.example)

Поддерживаются:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_DOMAIN`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SMARTLAND_MAIN_URL`
- `NEXT_PUBLIC_SMARTLAND_COMPARISON_URL`
- `NEXT_PUBLIC_SMARTLAND_PICKER_URL`
- `NEXT_PUBLIC_SMARTLAND_CASHBACK_URL`
- `NEXT_PUBLIC_SMARTLAND_NO_FEE_URL`
- `NEXT_PUBLIC_SMARTLAND_STUDENT_URL`
- `NEXT_PUBLIC_ENABLE_SUBSCRIBE_WIDGET`
- `NEXT_PUBLIC_YANDEX_METRIKA_ID`
- `NEXT_PUBLIC_GTM_ID`

Логика работы ссылок такая:

1. Если задан `NEXT_PUBLIC_SMARTLAND_*` — используется он.
2. Если env не задан — берется локальное значение из [lib/cta-links.ts](C:/Users/lavr/Desktop/projecthuy/lib/cta-links.ts).
3. Если и там пусто — ссылка падает в `"#"`.

## Где менять карточки сценариев на главной

- Данные карточек: [data/offers.ts](C:/Users/lavr/Desktop/projecthuy/data/offers.ts)
- Рендер сетки сценариев: [components/ScenarioCards.tsx](C:/Users/lavr/Desktop/projecthuy/components/ScenarioCards.tsx)
- Карточка сценария: [components/OfferCard.tsx](C:/Users/lavr/Desktop/projecthuy/components/OfferCard.tsx)
- Мини-квиз/переключатель сценариев: [components/ScenarioPicker.tsx](C:/Users/lavr/Desktop/projecthuy/components/ScenarioPicker.tsx)

У каждого сценария в `offers` есть:

- `articleSlug` — внутренняя статья для кнопки “Подробнее”
- `ctaKey` — ключ внешней SmartLand-ссылки
- `ctaLabel` — текст внешнего CTA

## Где отключить или включить блок подписки

По умолчанию рабочая подписка скрыта.

Настройка:

- [data/site.ts](C:/Users/lavr/Desktop/projecthuy/data/site.ts)

Флаг:

- `features.showSubscribeWidget`

Либо через env:

- `NEXT_PUBLIC_ENABLE_SUBSCRIBE_WIDGET=true`

Сам компонент заглушки:

- [components/SubscribeForm.tsx](C:/Users/lavr/Desktop/projecthuy/components/SubscribeForm.tsx)

## Где настраивается sidebar статей

- Основной шаблон статьи: [components/ArticleLayout.tsx](C:/Users/lavr/Desktop/projecthuy/components/ArticleLayout.tsx)
- Оглавление sidebar: [components/SidebarTOC.tsx](C:/Users/lavr/Desktop/projecthuy/components/SidebarTOC.tsx)
- Блок сравнения: [components/OfferComparisonBlock.tsx](C:/Users/lavr/Desktop/projecthuy/components/OfferComparisonBlock.tsx)

В sidebar сейчас находятся:

- update badge
- навигация по статье
- sticky CTA на SmartLand
- related materials
- disclaimer

## Какие файлы отвечают за SEO

- Общие metadata/layout: [app/layout.tsx](C:/Users/lavr/Desktop/projecthuy/app/layout.tsx)
- Главная страница: [app/page.tsx](C:/Users/lavr/Desktop/projecthuy/app/page.tsx)
- Динамический шаблон SEO-статей: [app/[slug]/page.tsx](C:/Users/lavr/Desktop/projecthuy/app/[slug]/page.tsx)
- SEO-хелперы и schema.org: [lib/seo.ts](C:/Users/lavr/Desktop/projecthuy/lib/seo.ts)
- Sitemap: [app/sitemap.ts](C:/Users/lavr/Desktop/projecthuy/app/sitemap.ts)
- Robots: [app/robots.ts](C:/Users/lavr/Desktop/projecthuy/app/robots.ts)

Используемые schema:

- `Organization`
- `FAQPage`
- `BreadcrumbList`
- `Article`

## Какие компоненты отвечают за CTA

- Универсальная CTA-кнопка: [components/CTAButton.tsx](C:/Users/lavr/Desktop/projecthuy/components/CTAButton.tsx)
- CTA-секция: [components/CTASection.tsx](C:/Users/lavr/Desktop/projecthuy/components/CTASection.tsx)
- Таблица сравнения: [components/ComparisonTable.tsx](C:/Users/lavr/Desktop/projecthuy/components/ComparisonTable.tsx)

`CTAButton` сам умеет:

- различать internal/external ссылки
- автоматически ставить `target="_blank"` для внешних CTA
- автоматически ставить `rel="nofollow sponsored noopener noreferrer"`

## Что еще полезно знать

- Внутренние статьи связаны через `relatedSlugs` в [data/articles.ts](C:/Users/lavr/Desktop/projecthuy/data/articles.ts)
- Дата обновления материалов задается в [data/site.ts](C:/Users/lavr/Desktop/projecthuy/data/site.ts)
- OG-изображение и SVG-заглушки лежат в [public](C:/Users/lavr/Desktop/projecthuy/public)
- Темная тема и токены цветов задаются в [tailwind.config.ts](C:/Users/lavr/Desktop/projecthuy/tailwind.config.ts), [app/globals.css](C:/Users/lavr/Desktop/projecthuy/app/globals.css), [styles/theme.css](C:/Users/lavr/Desktop/projecthuy/styles/theme.css)
