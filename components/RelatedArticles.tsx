import Link from "next/link";

import { Article } from "@/lib/types";

type RelatedArticlesProps = {
  articles: Article[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/${article.slug}`}
          className="surface-card block p-6 transition-colors hover:border-brand/60 hover:bg-white/[0.02]"
        >
          <span className="eyebrow">Статья</span>
          <h3 className="mt-4 text-2xl font-semibold text-ink">{article.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{article.excerpt}</p>
          <span className="mt-5 inline-flex text-sm font-semibold text-brand">Открыть материал</span>
        </Link>
      ))}
    </div>
  );
}
