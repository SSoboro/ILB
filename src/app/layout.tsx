import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const notoSansKr = Noto_Sans_KR({
    preload: false,
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body className={notoSansKr.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
