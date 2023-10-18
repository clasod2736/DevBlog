import Categories from '@/components/Category/Categories';
import Header from '@/components/Post/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Header />
        <Categories />
      </div>
      {children}
    </section>
  );
}
