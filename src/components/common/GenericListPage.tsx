import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';
import { PaginationWrapper } from '@/components/common/index';
import { ArticleSection } from '@/components/articles';
import { ArticleCardProps, ProductCardProps, GenericListPageProps } from '@/types';

export const GenericListPage = async ({
  searchParams,
  props,
}: {
  searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
  props: GenericListPageProps;
}) => {
  const params = await searchParams;
  const page = params?.page || 1;
  const itemsPerPage = params?.itemsPerPage || CONFIG.ITEMS_PER_PAGE;
  const currentPage = Number(page);
  const perPage = Number(itemsPerPage);
  const startIdx = (currentPage - 1) * perPage;
  let paginatedItems;
  let items;

  try {
    items = await props.fetchData();
    paginatedItems = items.slice(startIdx, startIdx + perPage);
  } catch {
    return <div className="text-red-500">{props.errorMessage}</div>;
  }

  return (
    <>
      {!props.contentType ? (
        <ProductsSection title={props.pageTitle} products={paginatedItems as ProductCardProps[]} />
      ) : (
        <ArticleSection title={props.pageTitle} articles={paginatedItems as ArticleCardProps[]} />
      )}

      {items.length > perPage && (
        <PaginationWrapper
          totalItems={items.length}
          currentPage={currentPage}
          basePath={props.basePath}
          contentType={props.contentType}
        />
      )}
    </>
  );
};
