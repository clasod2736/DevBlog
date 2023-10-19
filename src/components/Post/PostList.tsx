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
    <Link
      href={`/post/${category}/${title}`}
      className="flex flex-col rounded-xl overflow-hidden bg-stone-200 hover:shadow-sm "
    >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className={styles.filteredPostImg}
      />
      <div className="flex flex-col justify-evenly h-36 px-4 py-2">
        <time className="flex flex-row font-normal text-sm">
          <p className="flex flex-col justify-center mr-2 text-lg">
            <MdOutlineDateRange />
          </p>
          {date}
        </time>
        <h3 className="text-2xl">{title}</h3>
        <p className="w-full truncate italic">{description}</p>
      </div>
    </Link>
  );
}
