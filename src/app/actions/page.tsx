import type { Metadata } from 'next';
import { fetchProductsByTag } from '@/utils';
import { GenericListPage, Loader } from '@/components/common';
import { Suspense } from 'react';

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
    <Suspense fallback={<Loader />}>
      <GenericListPage
        searchParams={searchParams}
        props={{
          fetchData: ({ pagination: { startIdx, perPage } }) =>
            fetchProductsByTag('actions', { pagination: { startIdx, perPage } }),
          pageTitle: 'Все акции',
          basePath: '/actions',
        }}
      />
    </Suspense>
  );
};

export default AllActions;
