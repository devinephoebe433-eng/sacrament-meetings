import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css";

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: { default: 'Sunday Order · Maple Grove Ward', template: '%s · Sunday Order' },
  description: 'A clear, printable sacrament meeting planner for Maple Grove Ward.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} bg-paper text-ink antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
