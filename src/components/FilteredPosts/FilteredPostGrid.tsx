import React from 'react';
import { type Post } from 'contentlayer/generated';
import FilteredPostCard from './FilteredPostCard';

type Props = { posts: Post[] };

export default function FilteredPostGrid({ posts }: Props) {
  return (
    <ul className="w-full grid md:grid-cols-2 xs:grid-cols-1 gap-4 justify-start items-start my-8 min-h-[300px]">
      {posts.map((post) => (
        <li
          key={post.date}
          className="w-full mx-2 rounded-md overflow-hidden hover:scale-101 border-2 border-zinc-300 transition-all shadow-lg hover:shadow-xl hover:dark:shadow-zinc-600 hover:bg-gray-100 hover:dark:bg-zinc-700 animate-fadeIn"
        >
          <FilteredPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
