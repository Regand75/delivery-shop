import { GenericListPage, Loader } from '@/components/common';
import { fetchPurchases } from '@/utils';
import { Suspense } from 'react';

const AllPurchases = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
  return (
    <Suspense fallback={<Loader />}>
      <GenericListPage
        searchParams={searchParams}
        props={{
          fetchData: ({ pagination: { startIdx, perPage } }) =>
            fetchPurchases({ pagination: { startIdx, perPage } }),
          pageTitle: 'Все покупки',
          basePath: '/purchases',
        }}
      />
    </Suspense>
  );
};

export default AllPurchases;
