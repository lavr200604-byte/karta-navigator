import Link from "next/link";

import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";
import { getSmartLandUrl } from "@/lib/cta-links";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-canvas/85 backdrop-blur">
      <div className="shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand shadow-[0_18px_40px_-28px_rgba(38,194,173,0.9)]">
              <span className="relative block h-5 w-7 rounded-md bg-slate-950/90">
                <span className="absolute left-1.5 top-1.5 h-1 w-4 rounded-full bg-brand" />
                <span className="absolute left-1.5 top-3.5 h-1 w-3 rounded-full bg-brand/35" />
              </span>
            </span>
            <div>
              <span className="block text-lg font-semibold text-ink">{siteConfig.name}</span>
              <span className="block text-xs uppercase tracking-[0.18em] text-muted">Контентный хаб</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-muted hover:text-brand">
                {item.label}
              </Link>
            ))}
          </nav>

          <CTAButton href={getSmartLandUrl("comparison")} className="rounded-full" size="sm">
            Сравнить предложения
          </CTAButton>
        </div>

        <nav className="mt-4 flex gap-4 overflow-x-auto pb-1 text-sm md:hidden">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-border bg-white/5 px-3 py-2 text-muted hover:border-brand hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
