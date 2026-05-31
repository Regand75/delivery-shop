import { ButtonSearch, InputBlock } from '@/components/header';

export const SearchBlock = () => {
  return (
    <div className="flex flex-grow flex-row gap-4">
      <ButtonSearch />
      <InputBlock />
    </div>
  );
};
