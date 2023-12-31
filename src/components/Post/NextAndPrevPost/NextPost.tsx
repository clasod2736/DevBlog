import React from 'react';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

type Props = {
  next: Post | null;
};

export default function NextPost(next: Props) {
  if (next.next === null) {
    return (
      <p className="text-xl font-semibold underline underline-offset-2 animate-pulse">
        This is the Oldest Post.
      </p>
    );
  } else {
    return (
      <Link
        href={`/posts/${next.next?.title}`}
        className="flex flex-row justify-end items-center text-center w-auto h-5/6 p-4 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xl font-semibold rounded-md"
      >
        <p className="my-0">Next Post: </p>
        <p className="my-0"> [ {next.next?.title} ]</p>
      </Link>
    );
  }
}
