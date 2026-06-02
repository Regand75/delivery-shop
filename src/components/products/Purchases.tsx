import Image from 'next/image';
import IconArrowRight from 'public/icons-products/icon-arrow-right.svg';
import database from '@/data/database.json';
import { ProductCard } from '@/components/products';

export const Purchases = () => {
  const userPurchases = database.users[0].purchases
    .map((purchase) => {
      const product = database.products.find((product) => product.id === purchase.id);
      if (!product) return undefined;
      const { discountPercent, ...rest } = product;
      void discountPercent;
      return rest;
    })
    .filter((item) => item !== undefined);

  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px]">
        <div className="mb-4 flex flex-row justify-between text-[#414141] md:mb-8 xl:mb-10">
          <h2 className="text-left text-2xl font-bold xl:text-4xl">Покупали раньше</h2>
          <button className="flex cursor-pointer flex-row items-center gap-x-2">
            <p className="text-center text-base text-[#606060] duration-300 hover:text-[#bfbfbf]">
              Все покупки
            </p>
            <Image src={IconArrowRight} alt="К покупкам" width={24} height={24} sizes="24px" />
          </button>
        </div>
        <ul className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-10">
          {userPurchases.map((item, index) => (
            <li
              key={item.id}
              className={` ${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden xl:block' : ''} ${index >= 4 ? 'xl:hidden' : ''} `}
            >
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
