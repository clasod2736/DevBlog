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
      <p className="text-xl font-semibold underline underline-offset-2 animate-pulse">
        This is the Newest Post.
      </p>
    );
  } else {
    return (
      <Link
        href={`/posts/${prev.prev?.title}`}
        className="xs:bg-zinc-700 sm:bg-transparent flex flex-wrap justify-start items-center text-center w-auto h-5/6 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xl font-semibold rounded-md p-2 mb-2"
      >
        <p>Previous Post:</p>
        <p>[ {prev.prev?.title} ]</p>
      </Link>
    );
  }
}
