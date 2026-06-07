import { fetchPurchases } from '@/utils';
import { ProductsSection } from '@/components/products';

export const Purchases = async () => {
  let purchases;

  try {
    purchases = await fetchPurchases();
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить Ваши покупки</div>;
  }

  return (
    <ProductsSection
      title="Покупали раньше"
      viewAllButton={{ text: 'Все покупки', href: 'purchases' }}
      products={purchases}
      compact
    />
  );
};
