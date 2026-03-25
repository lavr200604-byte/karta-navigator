type DisclaimerProps = {
  className?: string;
};

export function Disclaimer({ className }: DisclaimerProps) {
  return (
    <div
      className={`rounded-3xl border border-brand/15 bg-brand/10 p-5 text-sm leading-6 text-muted ${className ?? ""}`}
    >
      Сайт носит информационный характер, не является финансовой организацией и не оказывает банковские услуги.
      Перед оформлением карты уточняйте актуальные условия, ограничения и тарифы на стороне выбранной витрины
      или поставщика продукта.
    </div>
  );
}
