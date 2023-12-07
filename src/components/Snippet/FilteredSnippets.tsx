import React, { useContext } from 'react';
import { Snippet } from '@/service/snippets';
import { getFilteredSnippets } from '@/service/snippets';
import SnippetGrid from './SnippetGrid';
import { SnippetContext } from '@/provider/context/SnippetContextProvider';

type Props = {
  snippets: Snippet[];
};

export default function FilteredSnippets({ snippets }: Props) {
  const { searchVal } = useContext(SnippetContext);
  const filteredSnippets = getFilteredSnippets(snippets, searchVal);

  return (
    <section className="mt-4">
      <header className="flex flex-row gap-2 border-b-[1px] border-zinc-300 py-2">
        <h2 className="text-3xl font-semibold transition-all">
          {searchVal.length >= 1 ? 'Searched Snippets' : 'Total Snippets'}
        </h2>
        <p>{searchVal.length >= 1 ? null : `(${snippets.length})`}</p>
      </header>
      <SnippetGrid filteredSnippets={filteredSnippets} snippets={snippets} />
    </section>
  );
}
