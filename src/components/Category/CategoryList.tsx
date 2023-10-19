import React from 'react';
// import { getCategoryCount } from '@/service/category';

type CategoryProps = { categories: string[] };

export default function CategoryList(categories: CategoryProps) {
  return (
    <ul className="flex flex-row justify-start items-center w-auto gap-5 text-xl">
      {categories.categories.map((category) => (
        <button
          //   onClick={() => {}}
          key={category}
          className="flex flex-row w-auto justify-between items-center p-1.5 rounded-md hover:bg-slate-200 active:bg-slate-400"
        >
          <p className=" text-stone-500">{category}</p>
          <sup className=" text-stone-500"></sup>
        </button>
      ))}
    </ul>
  );
}
