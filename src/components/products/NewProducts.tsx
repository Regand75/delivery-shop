import { fetchProductsByCategory } from '@/utils';
import { ProductsSection } from '@/components/products';

export const NewProducts = async () => {
  let products;

  try {
    products = await fetchProductsByCategory('new');
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>;
  }

  return (
    <ProductsSection
      title="Новинки"
      viewAllButton={{ text: 'Все новинки', href: 'new' }}
      products={products}
      compact
    />
  );
};
