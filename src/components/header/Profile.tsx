import Image from 'next/image';

export const Profile = () => {
  return (
    <div className="ml-6 flex flex-1 items-center justify-end gap-2.5 p-2">
      <Image
        src="/images/graphics/avatar.png"
        alt="Ваш профиль"
        width={40}
        height={40}
        className="min-h-10 min-w-10"
      />
      <p className="hidden cursor-pointer p-2.5 xl:block">Алексей</p>
      <button className="hidden cursor-pointer p-2 xl:block">
        <Image
          src="/icons-header/icon-arrow.svg"
          alt="Меню профиля"
          width={24}
          height={24}
          sizes="24px"
        />
      </button>
    </div>
  );
};
