import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="">{children}</section>;
}
