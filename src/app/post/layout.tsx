import Categories from '@/components/Category/Categories';
import Header from '@/components/Post/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-5/6">
      <Header />
      <Categories />
      {children}
    </section>
  );
}
