import React from 'react';
import { Post } from '../../service/posts';
import Link from 'next/link';

import { MdOutlineDateRange } from 'react-icons/md';

type Props = { post: Post };

export default function PostCard({
  post: { title, description, category, date },
}: Props) {
  return (
    <Link href={`/post/${category}/${title}`}>
      <article className="flex flex-col rounded-xl overflow-hidden">
        <div className="flex flex-col justify-evenly h-36 px-4 py-2 bg-stone-200">
          <time className="flex flex-row font-normal text-sm">
            <p className="flex flex-col justify-center mr-2 text-lg">
              <MdOutlineDateRange />
            </p>
            {date}
          </time>
          <h3 className="text-xl">{title}</h3>
          <p className="w-full truncate italic">{description}</p>
        </div>
      </article>
    </Link>
  );
}
