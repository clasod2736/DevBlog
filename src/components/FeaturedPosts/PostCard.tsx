import React from 'react';
import { Post } from '../../service/posts';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../CSS/PostCard.module.css';

import { MdOutlineDateRange } from 'react-icons/md';

type Props = { post: Post };

export default function PostCard({
  post: { title, description, category, image, date },
}: Props) {
  return (
    <Link href={`/post/${title}`}>
      <article className="flex flex-col rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={250}
          className={styles.featuredPostImg}
        />
        <div className="flex flex-col justify-evenly h-36 p-4 bg-stone-200 dark:bg-stone-700">
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
