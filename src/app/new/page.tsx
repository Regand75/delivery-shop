import type { Metadata } from 'next';
import { fetchProductsByTag } from '@/utils';
import { GenericListPage } from '@/components/common';

export const metadata: Metadata = {
  title: 'Новинки магазина "Северяночка"',
  description: 'Новые товары магазина "Северяночка"',
};

const AllNew = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: ({ pagination: { startIdx, perPage } }) =>
          fetchProductsByTag('new', { pagination: { startIdx, perPage } }),
        pageTitle: 'Все новинки',
        basePath: '/new',
        errorMessage: 'Ошибка: не удалось загрузить новинки',
      }}
    />
  );
};

export default AllNew;
