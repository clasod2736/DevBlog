import Header from '@/components/Post/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-5/6 w-full">
      <Header />
      {children}
    </section>
  );
}
