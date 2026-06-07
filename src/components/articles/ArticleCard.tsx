import { Article } from '@/types/articles';
import Image from 'next/image';

export const ArticleCard = ({ img, title, createdAt, text }: Article) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded bg-white shadow-(--shadow-card) duration-300 hover:shadow-(--shadow-article)">
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-2.5 p-2.5 leading-[1.5]">
        <time className="text-[8px] text-[#8f8f8f]">
          {new Date(createdAt).toLocaleDateString('ru-RU')}
        </time>
        <h3 className="text-base font-bold text-[#414141] xl:text-lg">{title}</h3>
        <p className="line-clamp-3 text-xs text-[#414141] xl:text-base">{text}</p>
        <button className="mt-auto h-10 w-37.5 cursor-pointer rounded bg-[#E5FFDE] text-base text-[#70C05B] duration-300 hover:bg-(--color-primary) hover:text-white hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active)">
          Подробнее
        </button>
      </div>
    </article>
  );
};
