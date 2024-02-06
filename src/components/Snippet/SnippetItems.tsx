import React from 'react';
import { Snippet } from '@/service/snippets';
import Link from 'next/link';

type Props = {
  snippets: Snippet[];
  filteredSnippets: Snippet[] | null;
};

export default function SnippetItems({ snippets, filteredSnippets }: Props) {
  const renderingSnippetItems = () => {
    let arr;

    if (filteredSnippets === null) {
      arr = snippets;
    } else arr = filteredSnippets;

    return (
      arr?.map((item) => (
        <ul
          key={item.date}
          className="flex flex-col justify-center items-start w-1/2 h-auto"
        >
          <Link href={`./${item.title}`}>
            <li
              className={`flex flex-row justify-start items-center rounded-md gap-3 text-2xl px-3 py-1 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all animate-slideToLeft`}
            >
              <p className="text-lg">{item.date.slice(0, 10)}</p>
              <p>{item.title}</p>
              <p className="font-semibold text-lg rounded-lg bg-zinc-400 dark:bg-zinc-700 px-2">
                {item.tag}
              </p>
            </li>
          </Link>
        </ul>
      )) || null
    );
  };

  return <section>{renderingSnippetItems()}</section>;
}
