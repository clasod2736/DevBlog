import React from 'react';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import { MdOutlineDateRange } from 'react-icons/md';

type Props = { post: Post };

export default function FilteredPostCard({
  post: { title, category, date },
}: Props) {
  const parsedDate = format(parseISO(date), 'LLLL d, yyyy');

  return (
    <Link
      href={`/posts/${title}`}
      className="flex flex-col rounded-xl animate-fadeIn"
    >
      <div className="flex flex-col justify-evenly h-36 px-4 py-2">
        <time className="flex flex-row font-normal text-sm">
          <p className="flex flex-col justify-center mr-2 text-lg">
            <MdOutlineDateRange />
          </p>
          {parsedDate}
        </time>
        <h3 className="text-2xl">{title}</h3>
        <p className="w-full truncate italic">{category}</p>
      </div>
    </Link>
  );
}
