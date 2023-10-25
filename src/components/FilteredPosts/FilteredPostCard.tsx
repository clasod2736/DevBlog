import React from 'react';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

import { MdOutlineDateRange } from 'react-icons/md';
import { getReadingTime } from '@/util/getReadingTime';

type Props = { post: Post };

export default function FilteredPostCard({ post }: Props) {
  const parsedDate = format(parseISO(post.date), 'LLLL d, yyyy');
  const time = getReadingTime({ post: post });
  return (
    <Link
      href={`/posts/${post.title}`}
      className="flex flex-col rounded-xl animate-fadeIn"
    >
      <div className="flex flex-col justify-evenly h-36 px-4 py-2">
        <time className="flex flex-row font-normal text-sm">
          <p className="flex flex-col justify-center mr-2 text-lg">
            <MdOutlineDateRange />
          </p>
          {parsedDate}
        </time>
        <h3 className="text-2xl">{post.title}</h3>
        <div>
          <p className="w-full truncate italic">{post.category}</p>
          <p className="text-zinc-600 dark:text-zinc-400">{time}</p>
        </div>
      </div>
    </Link>
  );
}
