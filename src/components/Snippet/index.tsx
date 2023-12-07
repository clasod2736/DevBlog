'use client';

import React from 'react';
import { Snippet } from '@/service/snippets';
import SearchBar from './SearchBar';
import FilteredSnippets from './FilteredSnippets';

type Props = {
  snippets: Snippet[];
};

export default function Snippet({ snippets }: Props) {
  return (
    <section>
      <SearchBar />
      <FilteredSnippets snippets={snippets} />
    </section>
  );
}
