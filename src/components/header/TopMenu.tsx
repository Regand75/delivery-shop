import Image from 'next/image';
import IconMenuMob from 'public/icons-header/icon-menu-mob.svg';
import IconHeart from 'public/icons-header/icon-heart.svg';
import IconBox from 'public/icons-header/icon-box.svg';
import IconCart from 'public/icons-header/icon-cart.svg';

export const TopMenu = () => {
  return (
    <ul className="flex flex-row items-end gap-x-6">
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5 md:hidden">
        <Image
          src={IconMenuMob}
          alt="Меню"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Каталог</span>
      </li>
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5">
        <Image
          src={IconHeart}
          alt="Избранное"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Избранное</span>
      </li>
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5">
        <Image
          src={IconBox}
          alt="Заказы"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
        <span>Заказы</span>
      </li>
      <li className="flex w-11 cursor-pointer flex-col items-center gap-2.5">
        <Image
          src={IconCart}
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
