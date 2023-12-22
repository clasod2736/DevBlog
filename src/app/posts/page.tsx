import React from 'react';
import FilterablePosts from '@/components/FilteredPosts/FilterablePosts';
import Header from '@/components/FilteredPosts/Header';

import { allPosts } from 'contentlayer/generated';
import { getCategory, getTotalPostNumb } from '@/service/category';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JoonDev Blog Posts',
  description: 'All of the posts of my Web dev journey',
};

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
