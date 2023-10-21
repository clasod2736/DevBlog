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
          className="flex flex-row w-auto justify-between items-center p-1.5 rounded-md cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-500"
          // style={{
          //   backgroundColor:
          //     category.category === selected ? 'lightgray' : 'transparent',
          // }}
        >
          <p className=" text-slate-700 dark:text-slate-400">
            {category.category}
          </p>
          <sup className=" text-slate-700 dark:text-slate-400">
            ({category.count})
          </sup>
        </li>
      ))}
    </ul>
  );
}
