import IconSearch from '@root/public/icons-header/icon-search.svg';
import Image from 'next/image';
import { SearchInputProps } from '@/types';

export const SearchInput = ({
  query,
  setQuery,
  handleSearch,
  handleInputFocus,
  handleInputBlur,
}: SearchInputProps) => {
  return (
    <div className="relative rounded border border-(--color-primary) leading-[150%] shadow-(--shadow-button-default)">
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
  );
};
