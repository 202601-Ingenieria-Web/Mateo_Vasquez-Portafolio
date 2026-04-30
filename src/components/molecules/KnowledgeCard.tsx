import type { KnowledgeCardData, Locale } from '@/types/portfolio';

type KnowledgeCardProps = {
  item: KnowledgeCardData;
  locale: Locale;
};

// Tarjeta modular para mostrar un área de conocimiento.

export function KnowledgeCard({ item, locale }: KnowledgeCardProps) {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      {/* Icono central para identificar la categoría de forma rápida. */}
      <div className="flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent-400 text-accent-500 dark:border-accent-300 dark:text-accent-300">
          <Icon className="h-10 w-10" strokeWidth={1.7} />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title[locale]}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description[locale]}</p>
    </article>
  );
}