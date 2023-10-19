import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

//google font
const figTree = Figtree({ subsets: ['latin'] });

//Metadata for SEO
export const metadata: Metadata = {
  title: 'joon-dev-blog',
  description: 'daily writing from my tech journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={figTree.className}>
      <body className="flex flex-col h-auto w-full max-w-6xl px-6 justify-between overflow-y-auto">
        <NavBar />
        <main className="h-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
