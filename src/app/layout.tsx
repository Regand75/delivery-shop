import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import "./globals.css";
import {Footer, Header} from "@/src/components";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Северяночка",
    description: "Доставка и покупка продуктов питания",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${rubik.variable} font-sans`}
        >
        <body className="min-h-screen flex flex-col">
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
