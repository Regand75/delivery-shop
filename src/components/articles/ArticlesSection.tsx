import { ArticlesSectionProps } from '@/types/articlesSection';
import { ViewAllButton } from '@/components/common';
import { ArticleCard } from '@/components/articles';

export const ArticleSection = ({
  title,
  viewAllButton,
  articles,
  compact = false,
}: ArticlesSectionProps) => {
  return (
    <section>
      <div
        className={`flex flex-col text-[#414141] ${
          !compact ? 'mt-20 px-[max(12px,calc((100%-1208px)/2))]' : ''
        }`}
      >
        <div className="mb-4 flex flex-row justify-between md:mb-8 xl:mb-10">
          <h2 className="text-left text-2xl font-bold xl:text-4xl">{title}</h2>
          <ViewAllButton btnText={viewAllButton.text} href={viewAllButton.href} />
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {articles.map((article, index) => (
            <li
              key={article._id}
              className={`h-75 md:h-105 ${
                compact
                  ? `${index >= 4 ? 'hidden' : ''} ${index >= 3 ? 'md:hidden xl:block' : ''} ${index >= 4 ? 'xl:hidden' : ''}`
                  : ''
              }`}
            >
              <ArticleCard {...article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
