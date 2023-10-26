import React from 'react';
import { getReadingTime } from '@/util/getReadingTime';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../CSS/PostCard.module.css';
import { format, parseISO } from 'date-fns';

import { MdOutlineDateRange } from 'react-icons/md';

type Props = { post: Post };

export default async function PostCard({ post }: Props) {
  const parsedDate = format(parseISO(post.date), 'LLLL d, yyyy');
  const time = getReadingTime({
    post: post,
  });

  return (
    <Link href={`/posts/${post.title}`}>
      <article className="flex flex-col w-full rounded-xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={250}
          className={styles.featuredPostImg}
        />
        <div className="flex flex-col justify-evenly h-36 p-4 bg-stone-200 dark:bg-stone-700">
          <time className="flex flex-row font-normal text-sm">
            <p className="flex flex-col justify-center mr-2 text-lg">
              <MdOutlineDateRange />
            </p>
            {parsedDate}
          </time>
          <h3 className="text-xl">{post.title}</h3>
          <div>
            <p className="w-full truncate italic">{post.category}</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-right">
              {time}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
