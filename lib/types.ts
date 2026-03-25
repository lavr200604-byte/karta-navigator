import { SmartLandLinkKey } from "@/lib/cta-links";

export type FAQItem = {
  question: string;
  answer: string;
};

export type Offer = {
  id: string;
  name: string;
  shortDescription: string;
  benefits: string[];
  serviceCost: string;
  cashback: string;
  bonuses: string;
  balanceInterest: string;
  bestFor: string;
  articleSlug: string;
  ctaKey: SmartLandLinkKey;
  ctaLabel?: string;
  detailsLabel?: string;
  featured?: boolean;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  excerpt: string;
  lead: string;
  sections: ArticleSection[];
  comparisonMethod: string[];
  firstLook: string[];
  criteria: string[];
  suitedFor: string[];
  notSuitedFor: string[];
  commonMistakes: string[];
  beforeShowcase: string[];
  advertisingNote: string;
  comparisonIntro: string;
  faqs: FAQItem[];
  relatedSlugs: string[];
  comparisonOfferIds: string[];
  ctaLabel: string;
  ctaKey: SmartLandLinkKey;
  updatedAt?: string;
};
