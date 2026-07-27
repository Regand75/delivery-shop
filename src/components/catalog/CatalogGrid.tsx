import { CatalogGridProps } from '@/types';
import { GridCategoryBlock } from '@/components/catalog';

export const CatalogGrid = ({
  categories,
  isEditing,
  draggedCategory,
  hoveredCategoryId,
  onDragStartAction,
  onDragOverAction,
  onDragLeaveAction,
  onDropAction,
}: CatalogGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-8">
      {categories.map((category, index) => (
        <div
          key={category._id}
          className={`${category.mobileColSpan} ${category.tabletColSpan} ${
            category.colSpan
          } h-full min-h-50 overflow-hidden rounded bg-gray-100 ${isEditing ? 'border-4 border-dashed border-gray-400' : ''} ${
            hoveredCategoryId === category._id ? 'border-3 border-red-800' : ''
          } `}
          onDragOver={(e) => onDragOverAction(e, category._id)}
          onDragLeave={onDragLeaveAction}
          onDrop={(e) => onDropAction(e, category._id)}
        >
          <div
            className={`h-full w-full ${
              draggedCategory?._id === category._id ? 'opacity-50' : ' '
            }`}
            draggable={isEditing}
            onDragStart={() => onDragStartAction(category)}
          >
            <GridCategoryBlock
              slug={category.slug}
              title={category.title}
              img={category.img}
              priority={index < 4}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
