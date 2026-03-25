import Link from "next/link";

import { SubscribeForm } from "@/components/SubscribeForm";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas/90">
      <div className="shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">О проекте</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink">{siteConfig.name}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{siteConfig.projectNote}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/o-proekte" className="hover:text-brand">
              О проекте
            </Link>
            <Link href="/politika-konfidentsialnosti" className="hover:text-brand">
              Политика конфиденциальности
            </Link>
            <Link href="/otkaz-otvetstvennosti" className="hover:text-brand">
              Отказ от ответственности
            </Link>
          </div>
        </div>

        {siteConfig.features.showSubscribeWidget ? (
          <div className="surface-card p-6">
            <SubscribeForm />
          </div>
        ) : (
          <div className="surface-card p-6">
            <h2 className="text-2xl font-semibold text-ink">Как пользоваться сайтом</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <li>Сначала выберите сценарий и прочитайте статью, близкую к вашей задаче.</li>
              <li>Потом сравните условия в таблице и проверьте, где есть реальные плюсы именно для вашего бюджета.</li>
              <li>Только после этого переходите на внешнюю SmartLand-витрину для финальной проверки предложений.</li>
            </ul>
            <p className="mt-4 text-xs leading-6 text-muted">
              Блок подписки отключен по умолчанию, пока не подключена реальная отправка формы.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
