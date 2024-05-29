import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers'
import localFont from 'next/font/local'


// const inter = Inter({ subsets: ["latin"] });
const neue = localFont({ src: './assets/fonts/NeueMachina/NeueMachina-Light.otf' })

export const metadata: Metadata = {
    title: "Ilnur Gumerov",
    description: "Blog, development, python, JavaScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const helmetContext = {};

    return (
        <html lang="en" suppressHydrationWarning>
            {/* <body className={`${neue.className} bg-gray-50 dark:bg-zinc-900 text-black dark:text-zinc-200`}> */}
            <body className={`${neue.className} bg-gray-100 dark:bg-zinc-900 text-black dark:text-zinc-200`}>
            {/* <body className='bg-gray-100 dark:bg-slate-900 text-black dark:text-white'> */}
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
