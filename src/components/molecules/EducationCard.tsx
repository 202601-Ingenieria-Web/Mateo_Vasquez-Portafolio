import type { EducationCardData, Locale } from '@/types/portfolio';

type EducationCardProps = {
  item: EducationCardData;
  locale: Locale;
};

// Tarjeta modular para secciones de educacion, sea cual sea el nivel.

export function EducationCard({ item, locale }: EducationCardProps) {
  return (
    <article className="grid gap-6 border-b border-slate-200 py-6 last:border-b-0 dark:border-slate-700 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-10">
      {/* Bloque principal con institución y rango de fechas. */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.institution}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="font-medium">{locale === 'es' ? 'Estudiante' : 'Student'}</span>
          <span className="rounded-sm bg-accent-400 px-3 py-1 text-xs font-semibold text-slate-900">
            {item.dates}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.degree[locale]}</h4>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description[locale]}</p>
      </div>
    </article>
  );
}