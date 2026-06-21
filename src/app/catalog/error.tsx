'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { ErrorDisplay } from '@/components/common';

export default function CatalogError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };

  return <ErrorDisplay message={error.message} onRetry={handleRetry} />;
}
