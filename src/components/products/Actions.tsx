import { fetchProductsByCategory } from '@/utils';
import { ProductsSection } from '@/components/products';

export const Actions = async () => {
  let products;

  try {
    products = await fetchProductsByCategory('actions');
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>;
  }

  return (
    <ProductsSection
      title="Акции"
      viewAllButton={{ text: 'Все акции', href: 'actions' }}
      products={products}
      compact
    />
  );
};
