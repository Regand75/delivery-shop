'use client';

import { useEffect, useState } from 'react';
import { CatalogProps } from '@/types';
import GridCategoryBlock from '@/components/catalog/GridCategoryBlock';

export const CatalogPage = () => {
  const [categories, getCategories] = useState<CatalogProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/catalog');
        if (!response.ok) {
          throw new Error(`Ошибка ответа сервера ${response.status}`);
        }
        const data: CatalogProps[] = await response.json();
        getCategories(data.sort((a, b) => a.order - b.order));
      } catch (error) {
        console.log('Не удалось получить категории', error);
        setError('Не удалось получить категории');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading) {
    return <div className="py-8 text-center">Загрузка каталога...</div>;
  }

  if (error) {
    return <div className="py-8 text-center text-red-500">{error}</div>;
  }

  if (!categories.length) {
    return <div className="py-8 text-center text-gray-500">Категорий каталога не найдено</div>;
  }

  return (
    <section className="mx-auto mb-20 px-[max(12px,calc((100%-1208px)/2))]">
      <h1 className="mb:text-5xl mb-4 flex flex-row text-4xl font-bold text-[#414141] md:mb-8 xl:mb-10 xl:text-[64px]">
        Каталог
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.mobileColSpan} ${category.tabletColSpan} ${category.colSpan} h-full min-h-50 overflow-hidden rounded bg-gray-100`}
          >
            <div className="h-full w-full">
              <GridCategoryBlock id={category.id} title={category.title} img={category.img} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
