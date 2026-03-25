import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/ArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { offers } from "@/data/offers";
import { absoluteUrl } from "@/lib/utils";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createMetadata
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/${article.slug}`,
    type: "article"
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const comparisonOffers = article.comparisonOfferIds
    .map((offerId) => offers.find((offer) => offer.id === offerId))
    .filter((offer): offer is (typeof offers)[number] => Boolean(offer));

  const relatedArticles = getRelatedArticles(article.relatedSlugs);
  const breadcrumbs =
    article.slug === "debetovye-karty"
      ? [
          { name: "Главная", item: absoluteUrl("/") },
          { name: article.title, item: absoluteUrl(`/${article.slug}`) }
        ]
      : [
          { name: "Главная", item: absoluteUrl("/") },
          { name: "Дебетовые карты", item: absoluteUrl("/debetovye-karty") },
          { name: article.title, item: absoluteUrl(`/${article.slug}`) }
        ];

  return (
    <>
      <JsonLd data={createFaqSchema(article.faqs)} />
      <JsonLd data={createBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={createArticleSchema(article)} />
      <ArticleLayout article={article} offers={comparisonOffers} relatedArticles={relatedArticles} />
    </>
  );
}
