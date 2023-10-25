import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ThemeProvider from '../provider/ThemeProvider';

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
    <html suppressHydrationWarning className={figTree.className}>
      <body className="flex flex-row w-full justify-center items-start overflow-y-auto dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300">
        <main className="flex flex-col justify-start items-center h-auto w-full max-w-6xl px-6">
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
