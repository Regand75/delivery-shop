import type { Metadata } from 'next';
import { fetchArticles } from '@/utils';
import { ArticleSection } from '@/components/articles';

export const metadata: Metadata = {
  title: 'Статьи на сайте магазина "Северяночка"',
  description: 'Читайте статьи на сайте магазина "Северяночка"',
};

const AllArticles = async () => {
  let articles;

  try {
    articles = await fetchArticles();
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить статьи</div>;
  }

  return (
    <ArticleSection
      title="Все статьи"
      viewAllButton={{ text: 'На главную', href: '/' }}
      articles={articles}
    />
  );
};

export default AllArticles;
