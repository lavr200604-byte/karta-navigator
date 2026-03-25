"use client";

import { FormEvent, useState } from "react";

export function SubscribeForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Форма работает как UI-заглушка: подключите реальную отправку позже.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label htmlFor="email" className="block text-sm font-medium text-ink">
        Подписаться на обновления
      </label>
      <p className="rounded-2xl border border-warning/30 bg-warning/10 px-4 py-3 text-xs leading-5 text-warning">
        UI-заглушка. Подключайте этот блок только после настройки реальной отправки и политики обработки данных.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          className="w-full rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm text-ink outline-none ring-0 placeholder:text-muted focus:border-brand"
        />
        <button
          type="submit"
          className="rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Подписаться
        </button>
      </div>
      <p className="text-xs leading-5 text-muted">
        UI-заглушка без реальной отправки. Здесь можно подключить email-сервис или CRM.
      </p>
      {message ? <p className="text-sm text-brand">{message}</p> : null}
    </form>
  );
}
