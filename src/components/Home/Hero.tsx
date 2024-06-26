import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="h-auto flex flex-col justify-around items-start mt-4">
      <header className="text-5xl font-bold mb-4">Joon Park</header>
      <section className="text-xl font-medium animate-slideToUp">
        <p className="underline underline-offset-2 text-stone-500 dark:text-zinc-400 font-bold italic">
          Self-Taught Web developer.
        </p>
        <div className="flex flex-col justify-evenly gap-1 my-3">
          <p>Passionate for simplifying complex tasks with lean solutions.</p>
          <p>React.js / Typescript / Next.js / Node.js / AWS / Jest</p>
        </div>
      </section>
      <Link
        href={'/about'}
        className="text-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-all ease-in-out font-medium animate-slideToRight"
      >
        More About Me →
      </Link>
    </section>
  );
}
