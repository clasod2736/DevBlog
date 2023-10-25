import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <section className="flex flex-col w-full h-16 justify-end animate-fadeIn border-t border-zinc-300 mt-8">
      <div className="flex flex-row justify-end text-2xl">
        <a href="mailto:clasod2736@gmail.com">
          <MdEmail className="cursor-pointer mx-1 hover:scale-110 transition-all" />
        </a>
        <a href="https://github.com/clasod2736">
          <FaGithub className="cursor-pointer mx-1 hover:scale-110 transition-all" />
        </a>
        <a href="www.linkedin.com/in/joon-park-772a8820b">
          <FaLinkedin className="cursor-pointer mx-1 hover:scale-110 transition-all" />
        </a>
      </div>
      <p className="flex flex-row justify-end text-md">
        © 2023 JoonDev blog Powered by Next.js
      </p>
    </section>
  );
}
