import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/components/header';
import { Footer } from '@/src/components/footer';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Северяночка',
  description: 'Доставка и покупка продуктов питания',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} font-sans`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
