import React from 'react';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { getAllPosts } from '@/service/posts';

type Props = {
  prev: Post | null;
};

export default function PrevPost(prev: Props) {
  if (prev.prev === null) {
    return (
      <p className="text-xl font-semibold underline underline-offset-2 animate-pulse my-0">
        This is the Newest Post.
      </p>
    );
  } else {
    return (
      <Link
        href={`/posts/${prev.prev?.title}`}
        className="xs:dark:bg-zinc-800 xs:bg-zinc-200 flex flex-wrap justify-start items-center text-center w-auto h-5/6 no-underline hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl font-semibold rounded-md p-2 gap-1 my-2"
      >
        <p className="m-1">Previous Post:</p>
        <p className="m-1">[ {prev.prev?.title} ]</p>
      </Link>
    );
  }
}
