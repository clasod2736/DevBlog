import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Darkmode from '@/components/Home/Navbar/Darkmode';

export default function NavBar() {
  return (
    <header className="flex flex-row justify-between items-center lg:w-full xs:w-full h-32 min-h-[8rem] text-4xl text-stone-600 dark:text-stone-200 mt-6">
      <nav className="flex flex-row justify-between items-base text-center w-auto h-1/3 gap-6 text-xl">
        <Link
          href="/"
          className="flex flex-col justify-center h-full xs:hidden sm:flex "
        >
          <Image
            src="/images/favicon.png"
            alt="logo"
            width={50}
            height={50}
            className="hover:transform hover:scale-110 ease-in-out transition-all"
          />
        </Link>
        <Link
          href="/about"
          className="flex items-center h-full hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all"
        >
          About
        </Link>
        <Link
          href="/posts"
          className="flex items-center h-full hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all"
        >
          Post
        </Link>
        <Link
          href="/snippet"
          className="flex items-center h-full hover:bg-slate-200 px-2 hover:dark:bg-zinc-600 rounded-md transition-all"
        >
          Snippet
        </Link>
      </nav>
      <Darkmode />
    </header>
  );
}
