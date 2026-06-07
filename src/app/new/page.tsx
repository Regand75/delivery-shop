import type { Metadata } from 'next';
import { fetchProductsByCategory } from '@/utils';
import { ProductsSection } from '@/components/products';

export const metadata: Metadata = {
  title: 'Новинки магазина "Северяночка"',
  description: 'Новые товары магазина "Северяночка"',
};

const AllNew = async () => {
  let products;

  try {
    products = await fetchProductsByCategory('new');
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить акции</div>;
  }

  return (
    <ProductsSection
      title="Все новинки"
      viewAllButton={{ text: 'На главную', href: '/' }}
      products={products}
    />
  );
};

export default AllNew;
