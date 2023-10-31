'use client';

import React, { useState } from 'react';
import { type Post } from 'contentlayer/generated';
import FilteredPostGrid from './FilteredPostGrid';
import Categories from './Category/Categories';
import { CategoryParams } from '../../service/category';

type Props = {
  posts: Post[];
  categories: CategoryParams[];
  totalPostNumb: number;
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({
  posts,
  categories,
  totalPostNumb,
}: Props) {
  const [selected, setSelected] = useState<string>(ALL_POSTS);

  const filterd =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="mt-4 w-auto">
      <Categories
        categories={categories}
        totalPostNumb={totalPostNumb}
        onClick={setSelected}
        selected={selected}
      />
      <FilteredPostGrid posts={filterd} />
    </section>
  );
}
