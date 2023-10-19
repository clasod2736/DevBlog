'use client';

import React, { useState } from 'react';
import { Post } from '@/service/posts';
import FilteredPosts from './FilteredPosts';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);

  const filterd =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="mt-10">
      <FilteredPosts posts={filterd} />
    </section>
  );
}
