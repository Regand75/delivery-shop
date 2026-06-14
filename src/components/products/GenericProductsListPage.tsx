import { ProductListPageProps } from '@/types/genericListPageProps';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';
import { PaginationWrapper } from '@/components/common';

export const GenericProductsListPage = async ({
  searchParams,
  props,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
  props: ProductListPageProps;
}) => {
  const params = await searchParams;
  const page = params?.page || 1;
  const itemsPerPage = params?.itemsPerPage || CONFIG.ITEMS_PER_PAGE;
  const currentPage = Number(page);
  const perPage = Number(itemsPerPage);
  const startIdx = (currentPage - 1) * perPage;
  let paginatedProducts;
  let products;

  try {
    products = await props.fetchData();
    paginatedProducts = products.slice(startIdx, startIdx + perPage);
  } catch {
    return <div className="text-red-500">{props.errorMessage}</div>;
  }

  return (
    <>
      <ProductsSection
        title={props.pageTitle}
        viewAllButton={{ text: 'На главную', href: '/' }}
        products={paginatedProducts}
      />
      {products.length > perPage && (
        <PaginationWrapper
          totalItems={products.length}
          currentPage={currentPage}
          basePath={props.basePath}
        />
      )}
    </>
  );
};
