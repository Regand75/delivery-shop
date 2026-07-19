import type { Metadata } from 'next';
import { fetchArticles } from '@/utils';
import { GenericListPage, Loader } from '@/components/common';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Статьи на сайте магазина "Северяночка"',
  description: 'Читайте статьи на сайте магазина "Северяночка"',
};

const AllArticles = ({
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
            fetchArticles({ pagination: { startIdx, perPage } }),
          pageTitle: 'Все статьи',
          basePath: '/articles',
          errorMessage: 'Ошибка: не удалось загрузить статьи',
          contentType: 'articles',
        }}
      />
    </Suspense>
  );
};

export default AllArticles;
