import React from 'react';
import Link from 'next/link';
import { getAllPosts, getCategory } from '@/service/category';
import CategoryList from './CategoryList';

export default async function Categories() {
  const categories = await getCategory();

  return (
    <section className="grid h-auto justify-start items-center">
      <Link href={'/post'} className="flex flex-row">
        <p className="text-3xl hover:underline underline-offset-4 decoration-2 italic mr-6 ">
          All Posts
        </p>
        <sup className="text-lg">({getAllPosts()})</sup>
      </Link>
      <CategoryList categories={categories} />
    </section>
  );
}
