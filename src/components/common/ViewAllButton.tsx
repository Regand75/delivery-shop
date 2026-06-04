import Image from 'next/image';
import IconArrowRight from 'public/icons-products/icon-arrow-right.svg';
import Link from 'next/link';

export const ViewAllButton = ({ btnText, href }: { btnText: string; href: string }) => {
  return (
    <Link href={href} className="flex cursor-pointer flex-row items-center gap-x-2">
      <p className="text-center text-base text-[#606060] duration-300 hover:text-[#bfbfbf]">
        {btnText}
      </p>
      <Image src={IconArrowRight} alt={btnText} width={24} height={24} sizes="24px" />
    </Link>
  );
};
