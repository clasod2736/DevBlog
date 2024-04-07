import React from 'react';
import { format, parseISO } from 'date-fns';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

type PostFooter = {
  title: string;
  description: string;
  date: string;
};

export default function PostFooter({ title, description, date }: PostFooter) {
  const parsedDate = format(parseISO(date), 'LLLL dd, yyyy');

  return (
    <section className=" my-16 px-6 py-8 rounded-md dark:bg-zinc-800 bg-zinc-200">
      <h3 className="my-1 text-3xl">{title}</h3>
      <span className="flex flex-row gap-4 my-1">
        <p
          className="text-base my-1
        "
        >
          {parsedDate}
        </p>
        /<p className="my-0">Joon Park</p>
      </span>
      <h6 className="my-1 text-xl">&quot;{description}&quot;</h6>
      <ul className=" flex-wrap text-base text-slate-600 dark:text-slate-400 flex flex-row justify-start gap-4 pl-0 mt-3 mb-0">
        <li className="flex flex-row items-center gap-2">
          <MdEmail size={20} />
          <a
            className="hover:underline underline-offset-2 no-underline"
            href="mailto:claosd2736@gmail.com"
          >
            Email address
          </a>
        </li>
        <li className="flex flex-row items-center gap-2">
          <FaLinkedin size={20} />
          <a
            className="hover:underline underline-offset-2  no-underline"
            href="https://www.linkedin.com/in/joon-park-772a8820b/"
          >
            Linkedin Profile
          </a>
        </li>
        <li className="flex flex-row items-center gap-2">
          <FaGithub size={20} />
          <a
            className="hover:underline underline-offset-2  no-underline"
            href="https://github.com/clasod2736"
          >
            Github Proflie
          </a>
        </li>
      </ul>
    </section>
  );
}
