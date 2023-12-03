'use client';

import React, { useState, useContext } from 'react';
import { Snippet } from '@/service/snippets';
// import Tag from './Tag';
import SearchBar from './SearchBar';
import FilteredSnippets from './FilteredSnippets';

type Props = {
  snippets: Snippet[];
};

export default function Snippet({ snippets }: Props) {
  return (
    <section>
      {/* <Tag tags={tags} /> */}
      <SearchBar />
      <FilteredSnippets snippets={snippets} />
    </section>
  );
}
