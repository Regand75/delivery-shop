import type { Metadata } from 'next';
import { GenericProductsListPage } from '@/components/products';
import { fetchProductsByCategory } from '@/utils';

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
    <GenericProductsListPage
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
