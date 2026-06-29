import { Slider } from '@/components/slider';
import { Actions, NewProducts, Purchases } from '@/components/products';
import { SpecialOffers } from '@/components/promotions';
import { Maps } from '@/components/maps';
import { Articles } from '@/components/articles/Articles';
import { Suspense } from 'react';
import { Loader } from '@/components/common';

export default function Home() {
  return (
    <main className="mx-auto mb-20 w-full">
      <Suspense fallback={<Loader text="слайдера" />}>
        <Slider />
      </Suspense>
      <div className="flex flex-col gap-y-20 px-[max(12px,calc((100%-1208px)/2))] md:mb-25 xl:mb-30">
        {[
          { component: <Actions />, text: 'акций' },
          { component: <NewProducts />, text: 'новинок' },
          { component: <Purchases />, text: 'Ваших покупок' },
          { component: <SpecialOffers />, text: 'специальных предложений' },
          { component: <Maps />, text: 'карт' },
          { component: <Articles />, text: 'статей' },
        ].map((item, index) => (
          <Suspense key={index} fallback={<Loader text={item.text} />}>
            {item.component}
          </Suspense>
        ))}
      </div>
    </main>
  );
}
