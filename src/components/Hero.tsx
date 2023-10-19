import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="h-auto flex flex-col justify-around items-start mt-4">
      <header className="text-6xl font-bold mb-2">Joon</header>
      <section className="text-xl font-medium">
        <p className="mb-1 underline text-stone-500">
          Self-Taught Web developer.
        </p>
        <p className="mt-3 mb-2">
          Passionate for simplifying complex tasks into lean solutions.
        </p>
        <p className="mb-2">React.js / Typescript / Next.js / Node.js / Jest</p>
      </section>
      <Link
        href={'/about'}
        className="text-xl text-stone-400 hover:text-stone-700 transition-all ease-in-out font-medium"
      >
        More About Me →
      </Link>
    </section>
  );
}
