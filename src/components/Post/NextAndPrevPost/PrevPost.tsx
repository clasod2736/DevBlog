import React from 'react';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

type Props = {
  prev: Post | null;
};

export default function PrevPost(prev: Props) {
  if (prev.prev === null) {
    return (
      <p className="text-xl font-semibold underline underline-offset-2 animate-pulse">
        This is the Newest Post.
      </p>
    );
  } else {
    return (
      <Link
        href={`/posts/${prev.prev?.title}`}
        className="flex flex-row justify-start items-center text-center w-auto h-5/6 p-4 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xl font-semibold rounded-md"
      >
        <p className="my-0">Previous Post:</p>
        <p className="my-0">[ {prev.prev?.title} ]</p>
      </Link>
    );
  }
}
