import Categories from '../../components/Category/Categories';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Categories />
      </div>
      {children}
    </section>
  );
}
