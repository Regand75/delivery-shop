interface LoaderProps {
  text?: string;
  className?: string;
}

export const Loader = ({ text = '', className = '' }: LoaderProps) => (
  <div className={`flex min-h-20 flex-col items-center justify-center gap-3 ${className}`}>
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
    {text && <p className="text-(--color-primary)">Загрузка {text}...</p>}
  </div>
);
