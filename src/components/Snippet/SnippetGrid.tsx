import React from 'react';
import { Snippet } from '@/service/snippets';

type Props = {
  snippets: Snippet[];
  filteredSnippets: Snippet[] | null;
};

export default function SnippetGrid({ snippets, filteredSnippets }: Props) {
  const allSnippets = () => {
    return (
      <ul>
        {snippets.map((snippet) => {
          return <li key={snippet.date}>{snippet.title}</li>;
        })}
      </ul>
    );
  };

  const filteredSnippeArr = filteredSnippets;
  console.log(filteredSnippeArr);

  const handleFilteredSnippets = () => {
    return (
      <ul>
        {filteredSnippets?.map((snippet) => {
          return <li key={snippet.date}>{snippet.title}</li>;
        })}
      </ul>
    );
  };
  return <section>{filteredSnippets !== null ? null : allSnippets()}</section>;
}
