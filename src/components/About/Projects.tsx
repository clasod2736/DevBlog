import React from 'react';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-4 ">
      <h3 className="text-3xl font-semibold">Projects.</h3>
      <article className="gird grid-cols-2 grid-flow-col mt-2 py-4 border-t-[1px] border-zinc-500">
        <div>
          <h4 className="text-2xl font-bold text-yellow-900 dark:text-yellow-700">
            For Homey Barista ☕
          </h4>
          <ul className="text-lg mt-2">
            <li className=" ">
              - Mock coffee brewing full-stack web-app, personalize brewing
              recipe for each user.
            </li>
            <li>- Nice and smooth animation and design for user experience</li>
            <li>- React / SCSS / Node.js & Express / MongoDB / and more</li>
          </ul>
          <div className=" mt-3 flex flex-row font-bold text-xl gap-10">
            <Link
              className=" animate-pulse hover:animate-none hover:translate-x-2 transition-all"
              href="https://github.com/clasod2736/FHB-front"
            >
              Code ▸
            </Link>
            <Link
              href={'https://main--voluble-kashata-776f36.netlify.app'}
              className=" animate-pulse animation-delay-75 hover:animate-none hover:translate-x-2 transition-all"
            >
              Explore ▸
            </Link>
          </div>
        </div>
      </article>
      <article className="flex flex-col mt-2 py-4 border-zinc-500">
        <div>
          <h4 className="text-2xl font-bold text-cyan-700 dark:text-cyan-600">
            JoonDev Blog 📝
          </h4>
          <ul className="text-lg mt-2">
            <li>- My own Dev Blog powered by Next.js.</li>
            <li>- Firmly understanding Concepts of SSR.</li>
            <li>- Unit test with jest and react-testing-library.</li>
            <li>- Next.js / Typescript / Tailwind.css / MDX / Jest</li>
          </ul>
          <div className=" mt-3 flex flex-row font-bold text-xl gap-10">
            <Link
              className=" animate-pulse hover:animate-none hover:translate-x-2 transition-all"
              href="https://github.com/clasod2736/DevBlog"
            >
              Code ▸
            </Link>
            <Link
              href={'https://joondev.blog'}
              className=" animate-pulse animation-delay-75 hover:animate-none hover:translate-x-2 transition-all"
            >
              Explore ▸
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
