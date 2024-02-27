import React, { useState } from 'react';

type Props = {
  tags: string[];
};

export default function Tag({ tags }: Props) {
  const [seleted, setSeleted] = useState('all');
  return (
    <section className="mt-6">
      <ul className="flex flex-wrap w-auto text-lg gap-3">
        <li
          className={`flex flex-row rounded-lg cursor-pointer ${
            seleted === 'all'
              ? 'dark:bg-zinc-500 bg-zinc-400 transition-all font-bold'
              : null
          } bg-zinc-300 dark:bg-zinc-700 px-2 hover:bg-zinc-400 dark:hover:bg-zinc-500 tracking-wide text-center transition-all`}
          onClick={() => setSeleted('all')}
        >
          All
        </li>
        {tags.map((tag, index) => {
          return (
            <li
              className={`rounded-lg cursor-pointer ${
                seleted === tag
                  ? 'dark:bg-zinc-500 bg-zinc-300 transition-all font-bold'
                  : null
              } bg-zinc-300 dark:bg-zinc-700 px-2 hover:bg-zinc-400 dark:hover:bg-zinc-500 tracking-wide text-center transition-all`}
              key={index}
              onClick={() => setSeleted(tag)}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
