import { fetchArticles } from '@/utils';
import { ArticleSection } from '@/components/articles/ArticlesSection';
import { CONFIG } from '@/config';
import { ErrorComponent } from '@/components/common';

export const Articles = async () => {
  let items;

  try {
    ({ items } = await fetchArticles({ articlesLimit: CONFIG.ITEMS_PER_PAGE_MAIN_ARTICLES }));
  } catch (error) {
    return (
      <ErrorComponent
        error={error instanceof Error ? error : new Error(String(error))}
        userMessage="Не удалось загрузить статьи"
      />
    );
  }

  return (
    <ArticleSection
      title="Статьи"
      viewAllButton={{ text: 'Все статьи', href: 'articles' }}
      articles={items}
    />
  );
};
