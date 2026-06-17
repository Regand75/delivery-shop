import Image from 'next/image';
import IconMenu from 'public/icons-header/icon-menu.svg';
import Link from 'next/link';

export const ButtonSearch = () => {
  return (
    <Link
      href="/catalog"
      className="hidden w-10 cursor-pointer gap-4 rounded bg-(--color-primary) p-2 duration-300 hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active) md:flex lg:w-35"
    >
      <Image src={IconMenu} alt="menu" width={24} height={24} className="hidden md:block" />
      <span className="hidden text-base text-white lg:block">Каталог</span>
    </Link>
  );
};
