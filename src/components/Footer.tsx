import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <section className="flex flex-col w-full h-20 justify-end animate-fadeIn border-t-2 border-zinc-300 mt-8 gap-1">
      <div className="flex flex-row justify-end text-2xl gap-3">
        <a href="mailto:clasod2736@gmail.com">
          <MdEmail className="cursor-pointer hover:scale-110 transition-all" />
        </a>
        <a href="https://github.com/clasod2736">
          <FaGithub className="cursor-pointer hover:scale-110 transition-all" />
        </a>
        <a href="www.linkedin.com/in/joon-park-772a8820b">
          <FaLinkedin className="cursor-pointer hover:scale-110 transition-all" />
        </a>
      </div>
      <div className="flex flex-row justify-end items-center text-md gap-1 text-md text-zinc-500 dark:text-zinc-400">
        <p>© 2023</p>
        <p className="font-semibold text-zinc-700 dark:text-zinc-300">
          JoonDev blog
        </p>
        <p>Powered by </p>
        <p className="font-semibold text-zinc-700 dark:text-zinc-300">
          Next.js
        </p>
      </div>
    </section>
  );
}
