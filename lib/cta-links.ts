export const SMARTLAND_MAIN_URL = "https://mytop24.com/3Juf";
export const SMARTLAND_COMPARISON_URL = "https://mytop24.com/3Juf";
export const SMARTLAND_PICKER_URL = "https://mytop24.com/3Juf";
export const SMARTLAND_CASHBACK_URL = "https://mytop24.com/3Juf";
export const SMARTLAND_NO_FEE_URL = "https://mytop24.com/3Juf";
export const SMARTLAND_STUDENT_URL = "https://mytop24.com/3Juf";

export const externalLinkRel = "nofollow sponsored noopener noreferrer";

export const smartLandLinkKeys = [
  "main",
  "comparison",
  "picker",
  "cashback",
  "noFee",
  "student"
] as const;

export type SmartLandLinkKey = (typeof smartLandLinkKeys)[number];

function resolveLink(envValue: string | undefined, fallback?: string) {
  const value = envValue?.trim();

  if (value) {
    return value;
  }

  if (fallback?.trim()) {
    return fallback.trim();
  }

  return "#";
}

export const smartLandLinks = {
  main: resolveLink(process.env.NEXT_PUBLIC_SMARTLAND_MAIN_URL, SMARTLAND_MAIN_URL),
  comparison: resolveLink(process.env.NEXT_PUBLIC_SMARTLAND_COMPARISON_URL, SMARTLAND_COMPARISON_URL),
  picker: resolveLink(process.env.NEXT_PUBLIC_SMARTLAND_PICKER_URL, SMARTLAND_PICKER_URL),
  cashback: resolveLink(process.env.NEXT_PUBLIC_SMARTLAND_CASHBACK_URL, SMARTLAND_CASHBACK_URL),
  noFee: resolveLink(process.env.NEXT_PUBLIC_SMARTLAND_NO_FEE_URL, SMARTLAND_NO_FEE_URL),
  student: resolveLink(process.env.NEXT_PUBLIC_SMARTLAND_STUDENT_URL, SMARTLAND_STUDENT_URL)
} satisfies Record<SmartLandLinkKey, string>;

export function getSmartLandUrl(key: SmartLandLinkKey) {
  return smartLandLinks[key] ?? "#";
}

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}
