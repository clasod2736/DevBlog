'use client';

import React, { useContext } from 'react';
import { SnippetContext } from '@/provider/context/SnippetContextProvider';

export default function SearchBar() {
  const { setSearchVal } = useContext(SnippetContext);

  return (
    <section className="flex flex-col justify-center md:w-10/12 max-w-[1000px] w-full h-20 ">
      <input
        type="text"
        placeholder="Search Snippets"
        className="w-full h-1/2 outline-zinc-400 dark:outline-zinc-300 px-2 rounded-md transition-all dark:border-zinc-500 border-zinc-300 border-2"
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
    </section>
  );
}
