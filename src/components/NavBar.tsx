import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  return (
    <header className="flex flex-row justify-between items-center w-full h-32 text-4xl text-stone-600 mt-6">
      <nav className="flex flex-row justify-between items-base text-center w-2/6 h-1/3 text-xl">
        <Link href="/" className="flex flex-col justify-center h-full px-1">
          <Image
            src="/images/pg.png"
            alt="logo"
            width={40}
            height={40}
            className="hover:transform hover:scale-110 ease-in-out transition-all"
          />
        </Link>
        <Link
          href="/about"
          className="flex items-center h-full hover:bg-slate-200 px-2 rounded-md"
        >
          About
        </Link>
        <Link
          href="/post"
          className="flex items-center h-full hover:bg-slate-200 px-2  rounded-md"
        >
          Post
        </Link>
        <Link
          href="/snippet"
          className="flex items-center h-full hover:bg-slate-200 px-2 rounded-md"
        >
          Snippet
        </Link>
      </nav>
      <button className="flex justify-center items-center transition ease-in-out hover:bg-gray-300 rounded-md w-10 h-10">
        <Image
          src={'/svg/dark.svg'}
          alt="darkToggle"
          width={30}
          height={30}
          className="text-slate-100 drop-shadow-base"
        />
      </button>
    </header>
  );
}
