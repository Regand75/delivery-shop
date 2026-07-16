import { fetchProductsByTag } from '@/utils';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';
import { ErrorComponent } from '@/components/common';

export const NewProducts = async () => {
  let items;

  try {
    ({ items } = await fetchProductsByTag('new', {
      randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    }));
  } catch (error) {
    return (
      <ErrorComponent
        error={error instanceof Error ? error : new Error(String(error))}
        userMessage="Не удалось загрузить новинки"
      />
    );
  }

  return (
    <ProductsSection
      title="Новинки"
      viewAllButton={{ text: 'Все новинки', href: 'new' }}
      products={items}
    />
  );
};
