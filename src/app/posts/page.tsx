import React from 'react';
import FilterablePosts from '@/components/FilteredPosts/FilterablePosts';
import Header from '@/components/FilteredPosts/Header';

import { allPosts } from 'contentlayer/generated';
import { getAllPosts } from '@/service/posts';
import { getCategory, getTotalPostNumb } from '@/service/category';

export default async function page() {
  const posts = allPosts.filter((item) => item.articleType === 'post');
  const categories = await getCategory();
  const totalPostNumb = await getTotalPostNumb();

  return (
    <section className="h-5/6 w-full">
      <Header />
      <FilterablePosts
        posts={posts}
        categories={categories}
        totalPostNumb={totalPostNumb}
      />
    </section>
  );
}
