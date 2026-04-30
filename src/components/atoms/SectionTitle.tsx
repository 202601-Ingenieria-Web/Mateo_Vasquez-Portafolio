type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    // Encabezado compartido para mantener identidad visual en todas las secciones.
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-600 dark:text-accent-300">{eyebrow}</p>
      <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">{description}</p>
    </header>
  );
}