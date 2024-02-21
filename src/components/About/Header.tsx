import React from 'react';

export default function Header() {
  return (
    <article className="flex flex-col w-auto justify-start text-xl md:p-0">
      <h3 className="text-3xl mb-2 font-semibold">Hi! Im Joon.</h3>
      <div className="text-zinc-500 dark:text-zinc-300">
        <p>
          I&apos;m a self-taught web developer living in Melbourne, Australia.
          So nice to meet you!
        </p>
        <p>
          I&apos;m currently in the process of transitioning my career from{' '}
          <strong className="text-yellow-500 mx-1 font-semibold">chef</strong>{' '}
          to
          <strong className="text-blue-400 font-semibold mx-2">
            web developer.
          </strong>
        </p>
        <p>
          I enjoy acquiring new skills, exploring tech events and meeting
          <strong className="text-amber-600 dark:text-amber-700 font-semibold mx-2">
            tech enthuasists
          </strong>
          like myself!
        </p>
        <p>
          I&apos;m now deeply immersed in learning{' '}
          <strong className="text-cyan-700 dark:text-cyan-600 mx-1">
            front-end
          </strong>{' '}
          web-development skills, more details about me below.
        </p>
      </div>
    </article>
  );
}
