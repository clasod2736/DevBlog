import Link from 'next/link';
import React from 'react';

type Props = {
  closeToggle: (data: boolean) => void;
};

export default function MobileNavBar({ closeToggle }: Props) {
  return (
    <section className="flex flex-col fixed right-5 bottom-1 justify-center items-center text-md animate-shortFadeIn h-full w-2/3 min-w-[230px] sm:hidden dark:bg-zinc-900 bg-zinc-100 gap-10 z-10 border-x-4 border-x-zinc-500">
      <Link
        href="/"
        className="flex items-center hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all animate-slideToLeft"
        onClick={() => closeToggle(false)}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="flex items-center hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all animate-slideToLeft"
        onClick={() => closeToggle(false)}
      >
        About
      </Link>
      <Link
        href="/posts"
        className="flex items-center hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all animate-slideToLeft"
        onClick={() => closeToggle(false)}
      >
        Post
      </Link>
      <Link
        href="/snippet"
        className="flex items-center hover:bg-slate-200 px-2 hover:dark:bg-zinc-600 rounded-md transition-all animate-slideToLeft"
        onClick={() => closeToggle(false)}
      >
        Snippet
      </Link>
      <button
        className="w-18 p-3 animate-slideToLeft text-md text-zinc-500 border-t-2 border-t-zinc-600"
        onClick={() => closeToggle(false)}
      >
        Close
      </button>
    </section>
  );
}
