import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mark Harris Portfolio',
  description: 'Developer & Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[80px_1fr_40px] items-center justify-items-center min-h-screen max-h-screen font-[family-name:var(--font-geist-sans)]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
