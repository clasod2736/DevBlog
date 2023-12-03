import React from 'react';
import SnippetContextProvider from '@/provider/context/SnippetContextProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnippetContextProvider>
      <section>{children}</section>
    </SnippetContextProvider>
  );
}
