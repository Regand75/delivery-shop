'use client';

import { useEffect, useState } from 'react';
import { CatalogProps } from '@/types';
import { fetchCatalog } from '@/utils';
import { GridCategoryBlock } from '@/components/catalog';
import { ErrorComponent, Loading } from '@/components/common';

export const CatalogPage = () => {
  const [categories, setCategories] = useState<CatalogProps[]>([]);
  const [initialCategories, setInitialCategories] = useState<CatalogProps[]>([]);
  const [error, setError] = useState<{ error: Error; userMessage: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [draggedCategory, setDraggedCategory] = useState<CatalogProps | null>(null);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(null);
  const isAdmin = true;

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const sortedData = await fetchCatalog();
        setCategories(sortedData);
        setInitialCategories(sortedData);
      } catch (error) {
        setError({
          error: error instanceof Error ? error : new Error('Неизвестная ошибка'),
          userMessage: 'Не удалось загрузить каталог категорий',
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  const updateOrderInDB = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/catalog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          categories.map((category, index) => ({
            ...category,
            order: index + 1,
          })),
        ),
      });

      if (!response.ok) throw new Error('Ошибка при обновлении порядка');

      const result = await response.json();

      if (result.success) {
        setInitialCategories(categories);
      }
    } catch (error) {
      setError({
        error: error instanceof Error ? error : new Error('Неизвестная ошибка'),
        userMessage: 'Не удалось изменить порядок категорий',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleEditing = async () => {
    if (isEditing) {
      await updateOrderInDB();
    }
    setIsEditing(!isEditing);
  };

  const handleDragStart = (category: CatalogProps) => {
    if (isEditing) {
      setDraggedCategory(category);
    }
  };

  const handleDragOver = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault();
    if (draggedCategory && draggedCategory._id !== categoryId) {
      setHoveredCategoryId(categoryId);
    }
  };

  const handleDragLeave = () => {
    setHoveredCategoryId(null);
  };

  const handleDrop = (e: React.DragEvent, targetCategoryId: string) => {
    e.preventDefault();

    if (!isEditing || !draggedCategory) return;

    setCategories((prevCategories) => {
      const draggedIndex = prevCategories.findIndex((c) => c._id === draggedCategory._id);

      const targetIndex = prevCategories.findIndex((c) => c._id === targetCategoryId);

      if (draggedIndex === -1 || targetIndex === -1) return prevCategories;

      const newCategories = [...prevCategories];

      const draggedItem = newCategories[draggedIndex];
      const targetItem = newCategories[targetIndex];

      const targetSizes = {
        mobileColSpan: targetItem.mobileColSpan,
        tabletColSpan: targetItem.tabletColSpan,
        colSpan: targetItem.colSpan,
      };

      const draggedSizes = {
        mobileColSpan: draggedItem.mobileColSpan,
        tabletColSpan: draggedItem.tabletColSpan,
        colSpan: draggedItem.colSpan,
      };

      newCategories[targetIndex] = {
        ...draggedItem,
        ...targetSizes,
      };

      newCategories[draggedIndex] = {
        ...targetItem,
        ...draggedSizes,
      };

      return newCategories;
    });

    setDraggedCategory(null);
    setHoveredCategoryId(null);
  };

  const resetLayout = () => {
    setCategories(initialCategories);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent error={error.error} userMessage={error.userMessage} />;
  }

  if (!categories.length) {
    return <div className="py-8 text-center text-gray-500">Категорий каталога не найдено</div>;
  }

  return (
    <section className="mx-auto mb-20 px-[max(12px,calc((100%-1208px)/2))]">
      {isAdmin && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={handleToggleEditing}
            className="w-2/3 cursor-pointer items-center justify-center rounded border border-(--color-primary) p-2 text-sm text-(--color-primary) transition-all duration-300 select-none hover:border-transparent hover:bg-[#ff6633] hover:text-white active:shadow-(--shadow-button-active) md:h-10 md:text-base"
          >
            {isEditing ? 'Закончить редактирование' : 'Изменить расположение'}
          </button>
          {isEditing && (
            <button
              onClick={resetLayout}
              className="ml-3 cursor-pointer items-center justify-center rounded border-none bg-[#f3f2f1] p-2 text-xs transition-colors duration-300 hover:shadow-(--shadow-button-secondary) active:shadow-(--shadow-button-active)"
            >
              Сбросить
            </button>
          )}
        </div>
      )}
      <h1 className="mb:text-5xl mb-4 flex flex-row text-4xl font-bold text-[#414141] md:mb-8 xl:mb-10 xl:text-[64px]">
        Каталог
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.mobileColSpan} ${category.tabletColSpan} ${category.colSpan} h-full min-h-50 overflow-hidden rounded bg-gray-100 ${isEditing ? 'border-3 border-dashed border-gray-400' : ''} ${hoveredCategoryId === category._id ? 'border-3 border-red-800' : ''}`}
            onDragOver={(e) => handleDragOver(e, category._id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, category._id)}
          >
            <div
              className={`h-full w-full ${draggedCategory?._id === category._id ? 'opacity-50' : ' '}`}
              draggable={isEditing}
              onDragStart={() => handleDragStart(category)}
            >
              <GridCategoryBlock id={category.id} title={category.title} img={category.img} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
