'use client';

import React, { createContext, useState } from 'react';
import { Snippet } from '@/service/snippets';

type State = {
  searchVal: string;
  setSearchVal: (value: string) => void;
  snippetArr: Snippet[];
  setSnippetArr: (value: Snippet[]) => void;
};

export const SnippetContext = createContext<State>({
  searchVal: '',
  setSearchVal: (value: string) => {},
  snippetArr: [],
  setSnippetArr: (value: Snippet[]) => {},
});

export default function SnippetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchVal, setSearchVal] = useState<string>('');
  const [snippetArr, setSnippetArr] = useState<Snippet[]>([]);

  return (
    <SnippetContext.Provider
      value={{
        searchVal,
        setSearchVal,
        snippetArr,
        setSnippetArr,
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
}
