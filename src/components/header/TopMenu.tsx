import Image from 'next/image';

export const TopMenu = () => {
  return (
    <ul className="flex flex-row items-end gap-x-6">
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5 md:hidden">
        <Image
          src="/icons-header/icon-menu-mob.svg"
          alt="Меню"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Каталог</span>
      </li>
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5">
        <Image
          src="/icons-header/icon-heart.svg"
          alt="Избранное"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Избранное</span>
      </li>
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5">
        <Image
          src="/icons-header/icon-box.svg"
          alt="Заказы"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Заказы</span>
      </li>
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5">
        <Image
          src="/icons-header/icon-cart.svg"
          alt="Корзина"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Корзина</span>
      </li>
    </ul>
  );
};
