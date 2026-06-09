import { ProductCardProps } from '@/types/product';
import { ArticleCardProps } from '@/types/articlesListPageProps';

export interface GenericListPageProps<T> {
  fetchData: () => Promise<T[]>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
  contentType?: 'articles';
}

export type ProductListPageProps = GenericListPageProps<ProductCardProps>;
export type ArticleListPageProps = GenericListPageProps<ArticleCardProps>;
