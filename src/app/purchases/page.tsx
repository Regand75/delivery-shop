import { fetchPurchases } from '@/utils';
import { ProductsSection } from '@/components/products';

const AllPurchases = async () => {
  let purchases;
  try {
    purchases = await fetchPurchases();
  } catch {
    return <div className="text-red-500">Ошибка: не удалось загрузить покупки</div>;
  }

  return (
    <ProductsSection
      title="Все покупки"
      viewAllButton={{ text: 'На главную', href: '/' }}
      products={purchases}
    />
  );
};

export default AllPurchases;
