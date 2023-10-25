import React from 'react';
import { type Post } from 'contentlayer/generated';
import PostCard from './FeaturedPostCard';

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid md:grid-cols-4 sm:grid-cols-2 items-center h-full">
      {posts.map((post, index) => (
        <li
          key={post.title}
          className="mx-2 rounded-md overflow-hidden hover:scale-102 transition-all"
        >
          <PostCard post={post} key={index} />
        </li>
      ))}
    </ul>
  );
}
