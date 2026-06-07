import { ProductCardProps } from '@/types/product';
import { shuffleArray } from '@/utils/shuffleArray';

export const fetchProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${category}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error(`Серверная ошибка получения продуктов ${category}`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error('API returned invalid data:', data);
      return [];
    }

    const products: ProductCardProps[] = data;

    const availableProducts = products.filter((product) => (product.quantity ?? 0) > 0);

    return shuffleArray(availableProducts ?? []);
  } catch (err) {
    console.error(`Ошибка в компоненте: ${category}`, err);
    throw err;
  }
};
