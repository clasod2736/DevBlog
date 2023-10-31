import React from 'react';
import { Source_Sans_3 } from 'next/font/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="">{children}</section>;
}
