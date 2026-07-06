import { fetchProductsByTag } from '@/utils';
import { ProductsSection } from '@/components/products';
import { CONFIG } from '@/config';

export const NewProducts = async () => {
  let items;

  try {
    ({ items } = await fetchProductsByTag('new', {
      randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
    }));
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить новинки</div>;
  }

  return (
    <ProductsSection
      title="Новинки"
      viewAllButton={{ text: 'Все новинки', href: 'new' }}
      products={items}
    />
  );
};
