import { siteConfig } from "@/data/site";
import { getSmartLandUrl } from "@/lib/cta-links";
import { SmartLandLinkKey } from "@/lib/cta-links";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(dateString));
}

export function absoluteUrl(path = "") {
  if (!path) {
    return siteConfig.siteUrl;
  }

  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function resolveOfferUrl(ctaKey: SmartLandLinkKey) {
  return getSmartLandUrl(ctaKey);
}

export function createSectionId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-zа-я0-9\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}
