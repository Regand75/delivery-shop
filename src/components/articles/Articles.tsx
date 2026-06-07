import { fetchArticles } from '@/utils';
import { ArticleSection } from '@/components/articles/ArticlesSection';

export const Articles = async () => {
  let articles;

  try {
    articles = await fetchArticles();
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить статьи</div>;
  }

  return (
    <ArticleSection
      title="Статьи"
      viewAllButton={{ text: 'Все статьи', href: 'articles' }}
      articles={articles}
      compact
    />
  );
};
