'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mb-14 w-full bg-[#f9f4e2] bg-[url('/images/graphics/pattern-footer.png')] px-[max(12px,calc((100%-1208px)/2))] md:mb-0">
      <div className="grid-container items-center gap-6 px-7 py-10 text-[#414141] md:gap-x-10">
        {/* Логотип со ссылкой на главную */}
        <div className="logo">
          <Link href="/" className="relative block h-16 w-23 md:h-11 md:w-16">
            <Image
              src="/icons-footer/logo-footer.png"
              alt="Логотип"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>
        </div>

        {/* Социальные сети с кликабельными иконками */}
        <div className="social flex flex-row justify-between gap-x-5 gap-y-3 md:flex-col xl:flex-row">
          <div className="flex items-start gap-x-5">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons-footer/VK.svg"
                alt="VKontakte"
                width={24}
                height={24}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a href="https://ok.ru" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons-footer/OK.svg"
                alt="Odnoklassniki"
                width={24}
                height={24}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
          <div className="flex items-start gap-x-5">
            <a href="https://wa.me/78007773333" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons-footer/wa.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a href="https://t.me/regandess" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons-footer/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Телефон с кликом */}
        <div className="phone">
          <a
            href="tel:+78007773333"
            className="flex items-center gap-x-2 transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/icons-footer/phone.svg"
              alt="Позвонить по телефону"
              width={20}
              height={20}
              className="transition-opacity duration-300 hover:opacity-80"
            />
            <p className="text-base duration-300 hover:text-black">8 800 777 33 33</p>
          </a>
        </div>

        {/* Навигация с кликабельными пунктами */}
        <nav className="nav">
          <ul className="flex flex-wrap gap-4 gap-x-8 text-xs md:gap-x-10 xl:gap-y-2">
            <li className="cursor-pointer hover:text-black">
              <Link href="#">О компании</Link>
            </li>
            <li className="cursor-pointer hover:text-black">
              <Link href="#">Контакты</Link>
            </li>
            <li className="cursor-pointer hover:text-black">
              <Link href="#">Вакансии</Link>
            </li>
            <li className="cursor-pointer hover:text-black">
              <Link href="#">Статьи</Link>
            </li>
            <li className="cursor-pointer hover:text-black">
              Политика обработки персональных данных
            </li>
          </ul>
        </nav>

        {/* Дизайнер (без изменений) */}
        <div className="design">
          <a href="https://zasovskiy.ru/" target="_blank">
            <Image src="/icons-footer/design.png" alt="Дизайнер" width={152} height={18} />
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Базовые стили для мобильных (mobile-first) */
        .grid-container {
          display: grid;
          grid-template-areas:
            'logo social'
            'logo phone'
            'nav nav'
            'design design';
          grid-template-columns: 1fr 1fr;
        }

        .logo {
          grid-area: logo;
        }
        .social {
          grid-area: social;
          justify-self: end;
        }
        .phone {
          grid-area: phone;
          justify-self: end;
        }
        .nav {
          grid-area: nav;
        }
        .design {
          grid-area: design;
        }

        /* Средние экраны (768px и больше) */
        @media (min-width: 768px) {
          .grid-container {
            grid-template-areas:
              'logo nav social phone'
              'logo nav social design';
            grid-template-columns: auto 1fr auto auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
