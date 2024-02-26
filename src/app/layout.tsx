import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import NavBar from '../components/Home/NavBar';
import Footer from '../components/Home/Footer';
import ThemeProvider from '../provider/ThemeProvider';
import NextTopLoader from 'nextjs-toploader';

//google font
const figTree = Source_Sans_3({ subsets: ['latin'] });

//Metadata
export const metadata: Metadata = {
  title: { default: 'JoonDev', template: '' },
  description: 'Passionate for simplifying complex tasks into lean solutions.',
  openGraph: {
    title: 'Joondev-blog',
    description:
      'Passionate for simplifying complex tasks into lean solutions.',
    images: '/images/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`dark:bg-zinc-900 ${figTree.className}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <meta property="og:title" content="Joondev-blog" />
        <meta property="og:url" content="joondev.blog" />
        <meta property="og:image" content="/images/favicon.png" />
        <meta property="og:url" content="https://joondev.blog" />
        <meta
          property="og:description"
          content="Passionate for simplifying complex tasks into lean solutions."
        />
      </head>
      <body className="flex flex-row w-full h-screen justify-center items-start dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 scroll-smooth">
        <section className="flex flex-col justify-start items-center h-auto w-full px-6 dark:bg-zinc-900">
          <main className="w-full max-w-6xl">
            <ThemeProvider>
              <NavBar />
              <section className="w-full">
                <NextTopLoader color="#E4A50B" />
                {children}
              </section>
              <Footer />
            </ThemeProvider>
          </main>
        </section>
      </body>
    </html>
  );
}
