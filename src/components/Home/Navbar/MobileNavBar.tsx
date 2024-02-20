import Link from 'next/link';
import React from 'react';

export default function MobileNavBar() {
  return (
    <section className="flex flex-col fixed right-5 bottom-1 justify-center items-center text-md animate-shortFadeIn h-full w-2/3 sm:hidden bg-zinc-900 gap-10 z-10">
      <Link
        href="/"
        className="flex items-center hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all "
      >
        Home
      </Link>
      <Link
        href="/about"
        className="flex items-center hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all "
      >
        About
      </Link>
      <Link
        href="/posts"
        className="flex items-center hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all"
      >
        Post
      </Link>
      <Link
        href="/snippet"
        className="flex items-center hover:bg-slate-200 px-2 hover:dark:bg-zinc-600 rounded-md transition-all"
      >
        Snippet
      </Link>
    </section>
  );
}
