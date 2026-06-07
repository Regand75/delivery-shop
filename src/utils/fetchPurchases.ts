import { ProductCardProps } from '@/types/product';

export const fetchPurchases = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/purchases`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Серверная ошибка получения покупок`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error('API returned invalid data:', data);
      return [];
    }

    const purchases: ProductCardProps[] = data;

    return purchases;
  } catch (err) {
    console.error('Ошибка получения покупок:', err);
    throw err;
  }
};
