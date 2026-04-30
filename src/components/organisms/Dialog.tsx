import { X } from 'lucide-react';
import type { PropsWithChildren } from 'react';

import { Button } from '@/components/atoms/Button';

type DialogProps = PropsWithChildren<{
  open: boolean;
  title: string;
  onClose: () => void;
}>;

export function Dialog({ open, title, children, onClose }: DialogProps) {
  if (!open) {
    return null;
  }

  return (
    // Contenedor modal reutilizable para perfil y detalles de proyectos.
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl rounded-xl border border-slate-200 bg-[var(--surface)] p-6 dark:border-slate-700 dark:bg-[var(--surface-soft)]"
        onClick={(event) => event.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-600 dark:text-accent-300">Dialog</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          </div>
          <Button type="button" variant="ghost" onClick={onClose} className="px-3 py-3">
            <X className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}