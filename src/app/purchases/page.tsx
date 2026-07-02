import { GenericListPage } from '@/components/common';
import { fetchPurchases } from '@/utils';

const AllPurchases = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <GenericListPage
      searchParams={searchParams}
      props={{
        fetchData: ({ pagination: { startIdx, perPage } }) =>
          fetchPurchases({ pagination: { startIdx, perPage } }),
        pageTitle: 'Все покупки',
        basePath: '/purchases',
        errorMessage: 'Ошибка: не удалось загрузить покупки',
      }}
    />
  );
};

export default AllPurchases;
