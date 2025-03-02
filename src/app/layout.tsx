import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header/Header';
import './globals.css';

const poppins = Poppins({
  weight: '400', // 通常のウェイトを指定
  display: 'swap', // フォントの読み込みが完了するまでフォールバックフォントを表示
  fallback: ['sans-serif'], // フォールバックとしてシステムの sans-serif を指定
});

export const metadata: Metadata = {
  title: "kamiya's Portfolio",
  description:
    'Kamiyaが作成したポートフォリオサイトです。自身の経歴やスキル、制作物をまとめています。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${poppins.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
