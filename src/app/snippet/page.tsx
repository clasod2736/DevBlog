import Header from '@/components/Snippet/Header';
import React from 'react';
import { getAllSnippets } from '@/service/snippets';
import Snippet from '@/components/Snippet';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JoonDev Blog Posts',
  description: 'All of the posts of my Web dev journey',
};

export default async function page() {
  const snippets = await getAllSnippets();

  return (
    <section>
      <Header />
      <Snippet snippets={snippets} />
    </section>
  );
}
