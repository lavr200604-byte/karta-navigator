import { Offer } from "@/lib/types";

import { OfferCard } from "@/components/OfferCard";

type ScenarioCardsProps = {
  offers: Offer[];
};

export function ScenarioCards({ offers }: ScenarioCardsProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
