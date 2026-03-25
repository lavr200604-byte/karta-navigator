import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { Article, FAQItem } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

export function createMetadata({ title, description, path, type = "website" }: MetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "ru_RU",
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.defaultOgImage]
    }
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organization.name,
    url: siteConfig.siteUrl,
    email: siteConfig.organization.email,
    logo: absoluteUrl(siteConfig.organization.logoPath)
  };
}

export function createFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

export function createArticleSchema(article: Article) {
  const articlePath = `/${article.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.metaDescription,
    dateModified: article.updatedAt ?? siteConfig.updatedAt,
    datePublished: article.updatedAt ?? siteConfig.updatedAt,
    inLanguage: "ru-RU",
    mainEntityOfPage: absoluteUrl(articlePath),
    author: {
      "@type": "Organization",
      name: siteConfig.organization.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.organization.logoPath)
      }
    }
  };
}
