import React from 'react';
import { CategoryParams } from '@/service/category';

type CategoryProps = {
  categories: CategoryParams[];
  onClick: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
};

export default function CategoryList({
  categories,
  onClick,
  selected,
}: CategoryProps) {
  return (
    <ul className="flex flex-row justify-start items-center w-auto gap-5 text-xl">
      {categories.map((category, index) => (
        <li
          onClick={() => onClick(category.category)}
          key={index}
          className={`flex flex-row w-auto justify-between items-center p-1.5 rounded-md cursor-pointer hover:bg-zinc-200 hover:dark:bg-zinc-600 ${
            selected === category.category
              ? 'bg-zinc-300 dark:bg-zinc-700'
              : 'transparent'
          }`}
        >
          <p className=" text-zinc-500 dark:text-zinc-400">
            {category.category}
          </p>
          <sup className=" text-zinc-500 dark:text-zinc-400">
            ({category.count})
          </sup>
        </li>
      ))}
    </ul>
  );
}
