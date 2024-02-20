'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Darkmode from '@/components/Home/Navbar/Darkmode';
import MobileNavBar from './Navbar/MobileNavBar';

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const closeToggle = (data: boolean) => {
    setToggle(data);
  };

  useEffect(() => {
    if (window.screenX >= 640) {
      setToggle(false);
    }
    setToggle(false);
  }, []);

  return (
    <header className="flex flex-row justify-between items-center lg:w-full xs:w-full h-32 min-h-[8rem] text-4xl text-stone-600 dark:text-stone-200 mt-6">
      <section className="sm:hidden flex justify-center items-center">
        <Image
          src="/images/favicon.png"
          alt="logo"
          width={50}
          height={50}
          className="hover:transform hover:scale-110 ease-in-out transition-all"
          onClick={() => setToggle(!toggle)}
        />
      </section>
      <section className={`${toggle ? 'sm:flex' : 'hidden'} sm:hidden`}>
        <MobileNavBar closeToggle={closeToggle} />
      </section>
      <nav className="sm:flex flex-row justify-between items-base text-center w-auto h-1/3 gap-6 text-xl xs:hidden">
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
            onClick={() => setToggle(!toggle)}
          />
        </Link>
        <Link
          href="/about"
          className="flex items-center h-full hover:bg-slate-200 hover:dark:bg-zinc-600 px-2 rounded-md transition-all "
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
