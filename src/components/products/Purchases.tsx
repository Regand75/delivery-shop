import { fetchPurchases } from '@/utils';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';

export const Purchases = async () => {
  let items;

  try {
    ({ items } = await fetchPurchases({
      userPurchasesLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    }));
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить Ваши покупки</div>;
  }

  return (
    <ProductsSection
      title="Покупали раньше"
      viewAllButton={{ text: 'Все покупки', href: 'purchases' }}
      products={items}
    />
  );
};
