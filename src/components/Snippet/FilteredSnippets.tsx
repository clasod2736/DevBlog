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
    <section>
      <header className="flex flex-row gap-2">
        <h2 className="text-3xl font-semibold">Total Snippets</h2>
        <p>({snippets.length})</p>
      </header>
      <SnippetGrid filteredSnippets={filteredSnippets} snippets={snippets} />
    </section>
  );
}
