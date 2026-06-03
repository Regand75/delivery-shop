'use client';

import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';
import { useState } from 'react';
import { locations } from '@/data/locations';

export const Maps = () => {
  const [currentLocation, setCurrentLocation] = useState('archangelsk');
  const currentLocationData = locations[currentLocation];

  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '26104864-454f-425b-b1eb-71d9121f1b49',
        load: 'package.full',
      }}
    >
      <section>
        <div className="flex flex-col justify-center text-[#414141] xl:max-w-[1208px]">
          <h2 className="mb-4 text-left text-2xl font-bold md:mb-8 xl:mb-10 xl:text-4xl">
            Наши магазины
          </h2>
          <div className="mb-5 flex flex-wrap gap-x-2 gap-y-3">
            {Object.keys(locations).map((key) => {
              const isActive = currentLocation === key;
              return (
                <button
                  key={key}
                  onClick={() => setCurrentLocation(key)}
                  className={`cursor-pointer items-center justify-center rounded border-none p-2 text-xs transition-colors duration-300 active:shadow-(--shadow-button-active) ${
                    isActive
                      ? 'hover: bg-(--color-primary) text-white shadow-(--shadow-button-default)'
                      : 'bg-[#f3f2f1] hover:shadow-(--shadow-button-secondary)'
                  }`}
                >
                  {locations[key].name}
                </button>
              );
            })}
          </div>
          <Map
            options={{ suppressMapOpenBlock: true }}
            defaultState={{ center: currentLocationData.center, zoom: 12 }}
            state={{ center: currentLocationData.center, zoom: 12 }}
            width="100%"
            height="354px"
            // className="copyrights-pane h-[354px] w-full"
          >
            {locations[currentLocation].shops.map((shop) => (
              <Placemark
                key={shop.id}
                geometry={shop.coordinates}
                properties={{
                  hintContent: shop.name,
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/icons-map/icon-location.svg',
                  iconImageSize: [32, 32],
                  iconOffset: [-16, -16],
                }}
              />
            ))}
          </Map>
        </div>
      </section>
    </YMaps>
  );
};
