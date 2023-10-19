'use client';

import React, { useState } from 'react';
import { Post } from '@/service/posts';
import FilteredPosts from './FilteredPosts';
import Categories from '../Category/Categories';

type Props = {
  posts: Post[];
  categories: string[];
  totalPostNumb: number;
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({
  posts,
  categories,
  totalPostNumb,
}: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);

  const filterd =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="mt-6">
      <Categories categories={categories} totalPostNumb={totalPostNumb} />
      <FilteredPosts posts={filterd} />
    </section>
  );
}
