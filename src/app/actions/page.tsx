import type { Metadata } from 'next';
import { fetchProductsByCategory } from '@/utils';
import { ProductsSection } from '@/components/products';

export const metadata: Metadata = {
  title: 'Акции магазина "Северяночка"',
  description: 'Акционные товары магазина "Северяночка"',
};

const AllActions = async () => {
  let products;

  try {
    products = await fetchProductsByCategory('actions');
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>;
  }

  return (
    <ProductsSection
      title="Все акции"
      viewAllButton={{ text: 'На главную', href: '/' }}
      products={products}
    />
  );
};

export default AllActions;
