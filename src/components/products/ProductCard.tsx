import Image from 'next/image';
import { formatPrice } from '@/utils';
import { ProductCardProps } from '@/types';
import IconHeart from 'public/icons-header/icon-heart.svg';
import { StarRating } from '@/components/rating';
import Link from 'next/link';
import { CONFIG } from '@/config';

const cardDiscountPercent = CONFIG.CARD_DISCOUNT_PERCENT;

export const ProductCard = ({
  _id,
  img,
  description,
  basePrice,
  discountPercent = 0,
  rating,
  tags,
}: ProductCardProps) => {
  const calculateFinalPrice = (price: number, discount: number): number => {
    return discount > 0 ? price * (1 - discount / 100) : price;
  };

  const calculatePriceByCard = (price: number, discount: number): number => {
    return calculateFinalPrice(price, discount);
  };

  const isNewProduct = tags?.includes('new');

  const finalPrice = isNewProduct ? basePrice : calculateFinalPrice(basePrice, discountPercent);

  const priceByCard = isNewProduct
    ? basePrice
    : calculatePriceByCard(finalPrice, cardDiscountPercent);

  const ratingValue = rating?.rate || 5;

  return (
    <div className="relative flex h-87 w-40 flex-col justify-between overflow-hidden rounded bg-white p-0 align-top duration-300 hover:shadow-(--shadow-article) md:w-56 xl:w-68">
      <button className="absolute top-2 right-2 z-10 h-8 w-8 cursor-pointer rounded bg-[#f3f2f1] p-2 opacity-50 duration-300 hover:bg-[#fcd5ba]">
        <Image src={IconHeart} alt="В избранное" width={24} height={24} sizes="24px" />
      </button>
      <Link href={`/product/${_id}`}>
        <div className="relative aspect-square h-40 w-40 md:w-56 xl:w-68">
          <Image
            src={img}
            alt="Акция"
            fill
            className="object-contain"
            priority={false}
            sizes="(max-width: 768px) 160px, (max-width: 1280px) 224px, 272px"
          />
          {discountPercent > 0 && (
            <div className="absolute bottom-2.5 left-2.5 rounded bg-[#ff6633] px-2 py-1 text-white">
              -{discountPercent}%
            </div>
          )}
        </div>

        <div className="flex h-47 flex-col p-2">
          <div className="flex h-11 flex-row items-start justify-between">
            <div className="flex flex-col gap-x-1">
              <div className="flex flex-row gap-x-1 text-sm font-bold text-[#414141] md:text-lg">
                <span>{formatPrice(priceByCard)}</span>
                <span>₽</span>
              </div>
              {discountPercent > 0 && (
                <p className="text-[8px] text-[#bfbfbf] md:text-xs">С картой</p>
              )}
            </div>
            {finalPrice !== basePrice && cardDiscountPercent > 0 && (
              <div className="flex flex-col gap-x-1">
                <div className="flex flex-row gap-x-1 text-xs text-[#606060] md:text-base">
                  <span>{formatPrice(finalPrice)}</span>
                  <span>₽</span>
                </div>
                <p className="text-right text-[8px] text-[#bfbfbf] md:text-xs">Обычная</p>
              </div>
            )}
          </div>
          <div className="line-clamp-3 h-13.5 text-xs leading-normal text-[#414141] md:line-clamp-2 md:text-base">
            {description}
          </div>
          {ratingValue > 0 && <StarRating rating={ratingValue} />}
        </div>
      </Link>
      <button className="absolute right-2 bottom-2 left-2 h-10 cursor-pointer items-center justify-center rounded border border-(--color-primary) text-(--color-primary) transition-all duration-300 select-none hover:border-transparent hover:bg-[#ff6633] hover:text-white active:shadow-(--shadow-button-active)">
        В корзину
      </button>
    </div>
  );
};
