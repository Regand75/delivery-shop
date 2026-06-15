import type { Metadata } from 'next';
import { fetchProductsByCategory } from '@/utils';
import { GenericListPage } from '@/components/common';

export const metadata: Metadata = {
  title: 'Акции магазина "Северяночка"',
  description: 'Акционные товары магазина "Северяночка"',
};

const AllActions = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: () => fetchProductsByCategory('actions'),
        pageTitle: 'Все акции',
        basePath: '/actions',
        errorMessage: 'Ошибка: не удалось загрузить акции',
      }}
    />
  );
};

export default AllActions;
