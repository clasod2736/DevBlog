import React from 'react';
import { Snippet } from '@/service/snippets';
import SnippetItems from './SnippetItems';

type Props = {
  snippets: Snippet[];
  filteredSnippets: Snippet[] | null;
};

export default function SnippetGrid({ snippets, filteredSnippets }: Props) {
  return (
    <section className="py-4">
      <SnippetItems snippets={snippets} filteredSnippets={filteredSnippets} />
    </section>
  );
}
