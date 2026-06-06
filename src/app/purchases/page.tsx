import { ProductCardProps } from '@/types/product';
import { ViewAllButton } from '@/components/common';
import { ProductCard } from '@/components/products';

const AllUserPurchases = async () => {
  let purchases: ProductCardProps[] = [];
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`);
    purchases = await res.json();
  } catch (err) {
    error = 'Ошибка получения всех купленных продуктов';
    console.error('Ошибка в компоненте AiiUserPurchases:', err);
  }

  if (error) {
    return <div className="text-red-500">Ошибка: {error}</div>;
  }

  return (
    <section>
      <div className="mt-20 flex flex-col justify-center px-[max(12px,calc((100%-1208px)/2))] xl:max-w-[1208px]">
        <div className="mb-4 flex flex-row justify-between text-[#414141] md:mb-8 xl:mb-10">
          <h2 className="text-left text-2xl font-bold xl:text-4xl">Покупали раньше</h2>
          <ViewAllButton btnText="На главную" href="/" />
        </div>
        <ul className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-10">
          {purchases.map((item) => (
            <li key={item.id}>
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllUserPurchases;
