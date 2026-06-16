import { ArticleCardProps, ProductCardProps } from '@/types';

type ContentItem = ProductCardProps | ArticleCardProps;

export interface GenericListPageProps {
  fetchData: () => Promise<ContentItem[]>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
  contentType?: 'articles';
}
