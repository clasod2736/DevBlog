import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Side() {
  return (
    <section className="flex flex-col w-1/5 mt-10">
      <Image src={'/images/about.png'} alt="logo" width={500} height={1} />
      <div className="mt-6 gap-8 pl-4">
        <ul className="text-md text-slate-600 dark:text-slate-400 flex flex-col justify-center gap-4">
          <li className="flex flex-row items-center gap-2">
            <MdEmail size={25} />
            <a
              className="hover:underline underline-offset-2"
              href="mailto:claosd2736@gmail.com"
            >
              Email address
            </a>
          </li>
          <li className="flex flex-row items-center gap-2">
            <FaLinkedin size={25} />
            <a
              className="hover:underline underline-offset-2"
              href="https://www.linkedin.com/in/joon-park-772a8820b/"
            >
              Linkedin Profile
            </a>
          </li>
          <li className="flex flex-row items-center gap-2">
            <FaGithub size={25} />
            <a
              className="hover:underline underline-offset-2"
              href="https://github.com/clasod2736"
            >
              Github Proflie
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
