import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { Button } from '@/components/atoms/Button';
import type { Locale, ProjectData } from '@/types/portfolio';

type ProjectCardProps = {
  item: ProjectData;
  locale: Locale;
  onOpen: (item: ProjectData) => void;
};

// Tarjeta de proyecto con imagen, stack y acciones principales.

export function ProjectCard({ item, locale, onOpen }: ProjectCardProps) {
  return (
    <article className="w-full min-w-0 snap-start overflow-hidden rounded-lg border border-slate-200 bg-[var(--surface)] dark:border-slate-700 dark:bg-[var(--surface-soft)]">
      {/* Imagen de portada que ancla visualmente cada proyecto. */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title[locale]}
          fill
          sizes="(max-width: 768px) 92vw, 36rem"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title[locale]}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description[locale]}</p>
          </div>
          {/* Resumen corto para leer el stack sin abrir el proyecto. */}
          <div className="rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {item.stack.slice(0, 2).join(' • ')}
          </div>
        </div>

        {/* Chips de tecnología para escaneo rápido. */}
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span key={tech} className="rounded-md border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="button" onClick={() => onOpen(item)}>
            {locale === 'es' ? 'Saber más' : 'Learn more'}
          </Button>
          {item.github ? (
            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              GitHub
            </a>
          ) : null}
          {item.demo ? (
            <a
              href={item.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}