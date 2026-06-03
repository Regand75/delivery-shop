import Image from 'next/image';
import articlesDatabase from '@/data/articlesDatabase.json';
import IconArrowRight from 'public/icons-products/icon-arrow-right.svg';
import Link from 'next/link';

export const Articles = () => {
  const articles = articlesDatabase;

  return (
    <section>
      <div className="flex flex-col justify-center text-[#414141] xl:max-w-[1208px]">
        <div className="mb-4 flex flex-row justify-between md:mb-8 xl:mb-10">
          <h2 className="text-left text-2xl font-bold xl:text-4xl">Статьи</h2>
          <Link href="#" className="flex cursor-pointer flex-row items-center gap-x-2">
            <p className="text-center text-base text-[#606060] duration-300 hover:text-[#bfbfbf]">
              К статьям
            </p>
            <Image src={IconArrowRight} alt="К статьям" width={24} height={24} sizes="24px" />
          </Link>
        </div>

        {/* Список статей */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.id} className="h-75 md:h-105">
              <article className="flex h-full flex-col overflow-hidden rounded bg-white shadow-(--shadow-card) duration-300 hover:shadow-(--shadow-article)">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-y-2.5 p-2.5 leading-[1.5]">
                  <time className="text-[8px] text-[#8f8f8f]">
                    {new Date(article.createdAt).toLocaleDateString('ru-RU')}
                  </time>
                  <h3 className="text-base font-bold text-[#414141] xl:text-lg">{article.title}</h3>
                  <p className="line-clamp-3 text-xs text-[#414141] xl:text-base">{article.text}</p>
                  <button className="mt-auto h-10 w-37.5 cursor-pointer rounded bg-[#E5FFDE] text-base text-[#70C05B] duration-300 hover:bg-(--color-primary) hover:text-white hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active)">
                    Подробнее
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
