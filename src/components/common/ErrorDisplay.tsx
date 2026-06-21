interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
  return (
    <div className="m-4 flex flex-col items-center justify-center rounded bg-red-100 p-6 text-red-800">
      <p className="mb-2 font-bold">Упс! Что-то пошло не так.</p>
      <p className="mb-4 text-sm opacity-90">Ошибка: {message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="cursor-pointer rounded bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600"
        >
          Попробовать снова
        </button>
      )}
    </div>
  );
}
