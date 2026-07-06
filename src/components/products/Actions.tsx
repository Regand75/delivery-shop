import { fetchProductsByTag } from '@/utils';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';

export const Actions = async () => {
  let items;

  try {
    ({ items } = await fetchProductsByTag('actions', {
      randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    }));
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>;
  }

  return (
    <ProductsSection
      title="Акции"
      viewAllButton={{ text: 'Все акции', href: 'actions' }}
      products={items}
    />
  );
};
