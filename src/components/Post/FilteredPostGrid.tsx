import React from 'react';
import { Post } from '../../service/posts';
import FilteredPostCard from './FilteredPostCard';

type Props = { posts: Post[] };

export default function FilteredPostGrid({ posts }: Props) {
  return (
    <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-center h-full my-8">
      {posts.map((post) => (
        <li
          key={post.date}
          className="mx-2 rounded-md overflow-hidden hover:scale-101 border-2 transition-all shadow-md hover:shadow-xl hover:bg-stone-100"
        >
          <FilteredPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
