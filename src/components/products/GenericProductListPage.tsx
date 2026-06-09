import { ProductListPageProps } from '@/types/genericListPageProps';
import { ProductsSection } from '@/components/products';

export const GenericProductListPage = async ({
  searchParams,
  props,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
  props: ProductListPageProps;
}) => {
  const products = await props.fetchData();

  return (
    <>
      <ProductsSection
        title={props.pageTitle}
        viewAllButton={{ text: 'На главную', href: '/migrations' }}
        products={products}
      />
    </>
  );
};
