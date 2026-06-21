import { CatalogProps } from '@/types';

export const fetchCatalog = async (): Promise<CatalogProps[]> => {
  const response = await fetch('/api/catalog');

  if (!response.ok) {
    throw new Error(`Ошибка ответа сервера ${response.status}`);
  }

  const data: CatalogProps[] = await response.json();

  return data.sort((a, b) => a.order - b.order);
};
