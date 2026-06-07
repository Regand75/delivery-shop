import { Article } from '@/types/articles';

export const fetchArticles = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Серверная ошибка получения статей`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error('API returned invalid data:', data);
      return [];
    }

    const articles: Article[] = data;

    return articles;
  } catch (err) {
    console.error('Ошибка при получении статей:', err);
    throw err;
  }
};
