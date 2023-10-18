import React from 'react';
import { Post } from '../../service/posts';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 items-center h-full">
      {posts.map((post) => (
        <li
          key={post.category}
          className="mx-2 rounded-md overflow-hidden hover:scale-105 transition-all"
        >
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
