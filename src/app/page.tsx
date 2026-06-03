import { Slider } from '@/components/slider';
import { Actions, NewProducts, Purchases } from '@/components/products';
import { SpecialOffers } from '@/components/promotions';
import { Maps } from '@/components/maps';
import { Articles } from '@/components/articles/Articles';

export default function Home() {
  return (
    <main className="mx-auto mb-20 w-full">
      <Slider />
      <div className="flex flex-col gap-y-20 px-[max(12px,calc((100%-1208px)/2))] md:mb-25 xl:mb-30">
        <Actions />
        <NewProducts />
        <Purchases />
        <SpecialOffers />
        <Maps />
        <Articles />
      </div>
    </main>
  );
}
