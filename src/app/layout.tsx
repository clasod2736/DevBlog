import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ThemeProvider from '../provider/ThemeProvider';
import NextTopLoader from 'nextjs-toploader';

//google font
const figTree = Source_Sans_3({ subsets: ['latin'] });
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
    <html className={figTree.className}>
      <body className="flex flex-row w-full h-full justify-center items-start dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 scroll-smooth">
        <main className="flex flex-col justify-start items-center h-auto w-full max-w-6xl px-6">
          <ThemeProvider>
            <NavBar />
            <section className="w-full">
              <NextTopLoader color="#E4A50B" />
              {children}
            </section>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
