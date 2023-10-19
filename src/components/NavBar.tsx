import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  return (
    <header className="flex flex-row justify-between items-center w-full h-32 text-4xl text-stone-600 mt-6">
      <nav className="flex flex-row justify-between items-base text-center w-2/6 h-1/3 text-xl">
        <Link href="/" className="flex flex-col justify-center h-full px-1">
          <Image
            src="/pg.png"
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
      <button className="flex justify-center items-center transition ease-in-out hover:bg-slate-200 rounded-md w-8 h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-yellow-400 drop-shadow-base"
        >
          <path
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </header>
  );
}
