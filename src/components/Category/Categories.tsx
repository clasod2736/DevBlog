import React from 'react';
import CategoryList from './CategoryList';

type CategoryProps = { categories: string[]; totalPostNumb: number };

export default function Categories({
  categories,
  totalPostNumb,
}: CategoryProps) {
  return (
    <section className="flex flex-row h-auto justify-start items-center overflow-x-auto">
      <button className="flex flex-row w-1/6 min-w-fit ml-3 ">
        <p className="text-3xl hover:underline underline-offset-4 decoration-2 italic">
          All Posts
        </p>
        <sup className="text-lg">({totalPostNumb})</sup>
      </button>
      <CategoryList categories={categories} />
    </section>
  );
}
