import { ButtonSearch } from '@/src/components/header';
import { InputBlock } from '@/src/components/header';

export const SearchBlock = () => {
  return (
    <div className="flex flex-grow flex-row gap-4">
      <ButtonSearch />
      <InputBlock />
    </div>
  );
};
