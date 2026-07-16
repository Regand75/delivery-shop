import { fetchProductsByTag } from '@/utils';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';
import { ErrorComponent } from '@/components/common';

export const Actions = async () => {
  let items;

  try {
    ({ items } = await fetchProductsByTag('actions', {
      randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    }));
  } catch (error) {
    return (
      <ErrorComponent
        error={error instanceof Error ? error : new Error(String(error))}
        userMessage="Не удалось загрузить акции"
      />
    );
  }

  return (
    <ProductsSection
      title="Акции"
      viewAllButton={{ text: 'Все акции', href: 'actions' }}
      products={items}
    />
  );
};
