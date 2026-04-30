type ProgressBarProps = {
  label: string;
  value: number;
};

// Barra reutilizable para mostrar porcentajes de idiomas o habilidades.

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-200">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-300" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}