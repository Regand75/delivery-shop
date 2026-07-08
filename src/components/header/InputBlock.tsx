'use client';

import Image from 'next/image';
import IconSearch from 'public/icons-header/icon-search.svg';
import IconBurger from 'public/icons-header/icon-burger-menu.svg';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SearchProduct } from '@/types';
import { TRANSLATIONS } from '@/utils';
import { HighlightText } from '@/components/common';
import { useRouter } from 'next/navigation';

export const InputBlock = ({
  onFocusChangeAction,
}: {
  onFocusChangeAction: (focused: boolean) => void;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [groupedProducts, setGroupedProducts] = useState<
    { category: string; products: SearchProduct[] }[]
  >([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSearchData = async () => {
      if (query.length > 1) {
        try {
          setIsLoading(true);
          const response = await fetch(`/api/search?query=${query}`); // Проверьте наличие слэша перед api
          const data = await response.json();
          setGroupedProducts(data);
        } catch (error) {
          console.error('Не найден продукт или категория', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setGroupedProducts([]);
      }
    };
    const debounceTimer = setTimeout(fetchSearchData, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleInputFocus = () => {
    setIsOpen(true);
    onFocusChangeAction(true);
  };

  const resetSearch = () => {
    setIsOpen(false);
    setQuery('');
  };

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      resetSearch();
    }
  };

  const handleInputBlur = () => {
    onFocusChangeAction(false);
  };

  return (
    <div className="relative min-w-[261px] flex-grow" ref={searchRef}>
      <div className="relative rounded border-1 border-(--color-primary) leading-[150%] shadow-(--shadow-button-default)">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            name="search"
            value={query} // В уроке забыл добавить
            placeholder="Найти товар"
            className="h-10 w-full p-2 text-base text-[#8f8f8f] outline-none"
            onFocus={handleInputFocus}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={handleInputBlur}
          />
          <button type="submit" className="absolute top-2 right-2 h-6 w-6 cursor-pointer">
            <Image src={IconSearch} alt="Поиск" width={24} height={24} />
          </button>
        </form>
      </div>
      {isOpen && (
        <div className="absolute right-0 left-0 z-100 -mt-0.5 max-h-[300px] overflow-y-auto rounded-b border-1 border-t-0 border-(--color-primary) bg-white break-words shadow-inherit">
          {isLoading ? (
            <div className="p-4 text-center">Поиск...</div>
          ) : groupedProducts.length > 0 ? (
            <div className="flex flex-col gap-2 p-2">
              {groupedProducts.map((group) => (
                <div key={group.category} className="flex flex-col gap-2">
                  <Link
                    href={`/category/${encodeURIComponent(group.category)}`}
                    className="flex cursor-pointer items-start gap-x-4 rounded p-1 hover:bg-gray-100"
                    onClick={resetSearch}
                  >
                    <div>
                      <HighlightText
                        text={TRANSLATIONS[group.category] || group.category}
                        highlight={query}
                      />
                    </div>
                    <Image
                      src={IconBurger}
                      alt={TRANSLATIONS[group.category] || group.category}
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                  </Link>
                  <ul className="flex flex-col gap-2">
                    {group.products.map((product) => (
                      <li key={product.id} className="p-1 hover:bg-gray-100">
                        <Link
                          href={`/product/${product.id}`}
                          className="cursor-pointer"
                          onClick={resetSearch}
                        >
                          <HighlightText text={product.title} highlight={query} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : query.length > 1 ? (
            <div className="px-4 py-2 text-[#8f8f8f]">Ничего не найдено</div>
          ) : (
            <div className="p-4 text-[#8f8f8f]">Введите 2 и более символов для поиска</div>
          )}
        </div>
      )}
    </div>
  );
};
