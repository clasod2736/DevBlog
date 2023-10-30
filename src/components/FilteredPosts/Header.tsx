import React from 'react';

export default function Header() {
  return (
    <section className="flex flex-col justify-start items-start mb-10 border-slate-500">
      <header className="font-bold text-6xl">Post</header>
      <article className="text-xl font-semibold my-4 dark:text-zinc-200">
        <p className="mb-2">
          It is a space for recording technical articles and memories that
        </p>
        <p>explored while learning or developing in my Tech journey 🤓</p>
      </article>
    </section>
  );
}
