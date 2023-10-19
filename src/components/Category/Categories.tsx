import React from 'react';
import Link from 'next/link';
import { getAllPosts, getCategory } from '@/service/category';
import CategoryList from './CategoryList';

export default async function Categories() {
  const categories = await getCategory();

  return (
    <section className="flex flex-row h-auto justify-start items-center overflow-x-auto">
      <Link href={'/post'} className="flex flex-row w-1/6 min-w-fit ml-3 ">
        <p className="text-3xl hover:underline underline-offset-4 decoration-2 italic">
          All Posts
        </p>
        <sup className="text-lg">({getAllPosts()})</sup>
      </Link>
      <CategoryList categories={categories} />
    </section>
  );
}
