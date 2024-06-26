import React from 'react';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

type Props = {
  next: Post | null;
};

export default function NextPost(next: Props) {
  if (next.next === null) {
    return (
      <p className="text-xl font-semibold underline underline-offset-2 animate-pulse my-0">
        This is the Oldest Post.
      </p>
    );
  } else {
    return (
      <Link
        href={`/posts/${next.next?.title}`}
        className="xs:dark:bg-zinc-800 xs:bg-zinc-200 flex flex-wrap justify-end items-center text-center w-auto h-5/6  no-underline hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl font-semibold rounded-md p-2 gap-1 my-2"
      >
        <p className="m-1">Next Post: </p>
        <p className="m-1"> [ {next.next?.title} ]</p>
      </Link>
    );
  }
}
