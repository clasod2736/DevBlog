import React from 'react';

export default function Header() {
  return (
    <section className="flex flex-col justify-start items-start mb-8 border-slate-500">
      <header className="font-bold text-6xl">Post</header>
      <article className="text-xl font-semibold my-4 dark:text-zinc-200">
        <p className="mb-2">
          The space for recording technical articles and personal insight that
        </p>
        <p>discovered while learning and developing in my Tech journey 🤓</p>
      </article>
    </section>
  );
}
