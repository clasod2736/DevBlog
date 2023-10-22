import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ThemeProvider from './ThemeProvider';

//google font
const figTree = Figtree({ subsets: ['latin'] });
//Metadata for SEO
export const metadata: Metadata = {
  title: 'joon-dev-blog',
  description: 'daily writing from my tech journey',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-row w-full justify-center items-start overflow-y-auto dark:bg-zinc-900">
        <main className="flex flex-col justify-start items-center h-full w-full max-w-6xl">
          <ThemeProvider>
            <NavBar />
            <section className="w-full">{children}</section>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
