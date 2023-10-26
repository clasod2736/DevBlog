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
        className="flex flex-col justify-center text-center w-1/5 h-5/6 no-underline hover:bg-zinc-400 dark:hover:bg-zinc-800 text-xl font-semibold rounded-md"
      >
        <p className="my-0">Previous Post</p>
        <p className="my-0">[ {prev.prev?.title} ]</p>
      </Link>
    );
  }
}
