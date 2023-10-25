import React from 'react';
import CategoryList from './CategoryList';
import { CategoryParams } from '../../service/category';

type CategoryProps = {
  categories: CategoryParams[];
  totalPostNumb: number;
  onClick: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
};

export default function Categories({
  categories,
  totalPostNumb,
  onClick,
  selected,
}: CategoryProps) {
  return (
    <section className="flex flex-row h-auto justify-start items-center overflow-x-auto overflow-y-hidden mb-2">
      <button
        className="flex flex-row items-center w-auto min-w-fit mx-3 "
        onClick={() => {
          onClick('All Posts');
        }}
      >
        <p className="text-3xl hover:underline underline-offset-4 decoration-2 italic">
          All Posts
        </p>
        <sup className="text-lg"> ({totalPostNumb})</sup>
      </button>
      <CategoryList
        categories={categories}
        onClick={onClick}
        selected={selected}
      />
    </section>
  );
}
