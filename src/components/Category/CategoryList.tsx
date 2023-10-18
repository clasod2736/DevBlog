import React from 'react';
import Link from 'next/link';

type CategoryProps = { categories: string[] };

export default function CategoryList(categories: CategoryProps) {
  return (
    <ul className="flex flex-row justify-start items-center w-4/5 gap-6 text-xl">
      {categories.categories.map((category) => (
        <Link
          href={`/post/${category}`}
          key={category}
          className="flex flex-row w-auto justify-between items-center p-1.5 rounded-md hover:bg-slate-200"
        >
          <p className=" text-stone-500">{category}</p>
          <sup className=" text-stone-500">(0)</sup>
        </Link>
      ))}
    </ul>
  );
}
