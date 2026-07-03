import { fetchArticles } from '@/utils';
import { ArticleSection } from '@/components/articles/ArticlesSection';
import { CONFIG } from '@/config';

export const Articles = async () => {
  let items;

  try {
    ({ items } = await fetchArticles({ articlesLimit: CONFIG.ITEMS_PER_PAGE_MAIN_ARTICLES }));
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить статьи</div>;
  }

  return (
    <ArticleSection
      title="Статьи"
      viewAllButton={{ text: 'Все статьи', href: 'articles' }}
      articles={items}
    />
  );
};
