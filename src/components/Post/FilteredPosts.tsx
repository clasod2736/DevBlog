import React from 'react';
import { Post } from '../../service/posts';
import PostList from './PostList';

type Props = { posts: Post[] };

export default function FilteredPosts({ posts }: Props) {
  return (
    <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-center h-full">
      {posts.map((post) => (
        <li
          key={post.category}
          className="mx-2 rounded-md overflow-hidden hover:scale-102 transition-all"
        >
          <PostList post={post} />
        </li>
      ))}
    </ul>
  );
}
