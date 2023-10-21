import React from 'react';
import FilterablePosts from '@/components/Post/FilterablePosts';
import { getAllPost } from '@/service/posts';
import { getCategory, getTotalPostNumb } from '@/service/category';

export default async function page() {
  const posts = await getAllPost();
  const categories = await getCategory();
  const totalPostNumb = await getTotalPostNumb();

  return (
    <section>
      <FilterablePosts
        posts={posts}
        categories={categories}
        totalPostNumb={totalPostNumb}
      />
    </section>
  );
}
