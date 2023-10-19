import React from 'react';

export default function Header() {
  return (
    <section className="flex flex-col justify-start items-start mt-6 mb-4 border-b-2 border-slate-500">
      <header className="font-bold text-6xl">Post</header>
      <article className="text-xl text-slate-700 font-normal my-3">
        <p>It is a space for recording technical articles and memories</p>
        <p>explored while learning or developing in my Tech journey.</p>
      </article>
    </section>
  );
}
