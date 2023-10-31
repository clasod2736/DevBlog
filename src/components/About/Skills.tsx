import React from 'react';

export default function Skills() {
  return (
    <section className="py-4 mt-4">
      <h3 className="text-3xl font-semibold">Skills.</h3>
      <div className="mt-2 py-2 border-t-[1px] border-zinc-500">
        <ul className="flex flex-row text-xl font-semibold justify-start w-auto h-full gap-6 italic ">
          <li>React</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>PostCSS</li>
          <li>Tailwind</li>
          <p className=" text-[1rem] text-end">and more...</p>
        </ul>
      </div>
    </section>
  );
}
