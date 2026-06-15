import { ProductCardProps } from '@/types/product';
import { ArticleCardProps } from '@/types/articlesListPageProps';

type ContentItem = ProductCardProps | ArticleCardProps;

export interface GenericListPageProps {
  fetchData: () => Promise<ContentItem[]>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
  contentType?: 'articles';
}
