import Header from '@/components/Snippet/Header';
import React from 'react';
import { getAllSnippets, getAllTags } from '@/service/snippets';
import Snippet from '@/components/Snippet';

export default async function page() {
  const snippets = await getAllSnippets();

  return (
    <section>
      <Header />
      <Snippet snippets={snippets} />
    </section>
  );
}
