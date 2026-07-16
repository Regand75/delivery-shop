import { fetchPurchases } from '@/utils';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';
import { ErrorComponent } from '@/components/common';

export const Purchases = async () => {
  let items;

  try {
    ({ items } = await fetchPurchases({
      userPurchasesLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    }));
  } catch (error) {
    return (
      <ErrorComponent
        error={error instanceof Error ? error : new Error(String(error))}
        userMessage="Не удалось загрузить Ваши покупки"
      />
    );
  }

  return (
    <ProductsSection
      title="Покупали раньше"
      viewAllButton={{ text: 'Все покупки', href: 'purchases' }}
      products={items}
    />
  );
};
