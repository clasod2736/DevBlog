import React from 'react';
import FilterablePosts from '@/components/Post/FilterablePosts';
import { getAllPost } from '@/service/posts';
import { getCategory } from '@/service/category';

export default async function page() {
  const posts = await getAllPost();
  const categories = await getCategory();

  return (
    <>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
}
