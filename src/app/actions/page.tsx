import type { Metadata } from 'next';
import { GenericProductListPage } from '@/components/products';
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
    <GenericProductListPage
      searchParams={searchParams}
      props={{
        fetchData: () => fetchProductsByCategory('actions'),
        pageTitle: 'Все акции',
        basePath: '/action',
        errorMessage: 'Ошибка: не удалось загрузить акции',
      }}
    />
  );
  // let products;

  // try {
  //   products = await fetchProductsByCategory('actions');
  // } catch {
  //   return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>;
  // }
  //
  // return (
  //   <ProductsSection
  //     title="Все акции"
  //     viewAllButton={{ text: 'На главную', href: '/' }}
  //     products={products}
  //   />
  // );
};

export default AllActions;
