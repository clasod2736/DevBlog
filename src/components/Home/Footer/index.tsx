import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Links from './Links';

export default function Footer() {
  return (
    <section className=" xs:h-24 sm:h-20 flex flex-col w-full justify-end animate-fadeIn border-t-2 border-zinc-300 my-2 gap-1">
      <div className="flex flex-row justify-end text-2xl gap-2">
        <Links />
      </div>
      <div className="flex xs:flex-col xs:items-end sm:flex-row justify-end items-center text-md gap-1 text-md text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-row gap-1">
          <p>© 2023</p>
          <p className="font-semibold text-zinc-700 dark:text-zinc-300">
            JoonDev blog
          </p>
        </div>
        <div className="flex flex-row gap-1 mx-1">
          <p>Powered by </p>
          <p className="font-semibold text-zinc-700 dark:text-zinc-300">
            Next.js
          </p>
        </div>
      </div>
    </section>
  );
}
