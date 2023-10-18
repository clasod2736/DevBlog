import React from 'react';
import { Post } from '../../service/posts';
import PostList from './PostList';

type Props = { posts: Post[] };

export default function CategoryPosts({ posts }: Props) {
  return (
    <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 items-center h-full">
      {posts.map((post) => (
        <li
          key={post.category}
          className="mx-2 rounded-md overflow-hidden hover:scale-105 transition-all"
        >
          <PostList post={post} />
        </li>
      ))}
    </ul>
  );
}
