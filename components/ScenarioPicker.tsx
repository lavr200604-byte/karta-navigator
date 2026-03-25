"use client";

import { useState } from "react";

import { CTAButton } from "@/components/CTAButton";
import { Offer } from "@/lib/types";
import { getSmartLandUrl } from "@/lib/cta-links";

type ScenarioPickerProps = {
  offers: Offer[];
};

export function ScenarioPicker({ offers }: ScenarioPickerProps) {
  const [activeId, setActiveId] = useState(offers[0]?.id ?? "");
  const activeOffer = offers.find((offer) => offer.id === activeId) ?? offers[0];

  if (!activeOffer) {
    return null;
  }

  return (
    <section className="surface-panel p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <span className="eyebrow">Мини-сценарий выбора</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">С чего начать подбор</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Выберите сценарий, который больше всего похож на ваш запрос. Блок не отправляет данные и нужен только как
            спокойная навигация по материалам и внешней SmartLand-витрине.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {offers.map((offer) => (
              <button
                key={offer.id}
                type="button"
                onClick={() => setActiveId(offer.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  offer.id === activeOffer.id
                    ? "border-brand bg-brand/15 text-brand"
                    : "border-border bg-white/5 text-muted hover:border-brand/60 hover:text-ink"
                }`}
              >
                {offer.name}
              </button>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {activeOffer.bestFor}
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Текущий сценарий</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-ink">{activeOffer.name}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{activeOffer.shortDescription}</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/90">
            {activeOffer.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={getSmartLandUrl(activeOffer.ctaKey)} size="lg">
              {activeOffer.ctaLabel ?? "Подобрать карту"}
            </CTAButton>
            <CTAButton href={`/${activeOffer.articleSlug}`} variant="secondary" size="lg">
              {activeOffer.detailsLabel ?? "Подробнее"}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
