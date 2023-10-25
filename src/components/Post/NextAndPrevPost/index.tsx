import React from 'react';
import { Post } from 'contentlayer/generated';
import NextPost from './NextPost';
import PrevPost from './PrevPost';

type Props = {
  next: Post | null;
  prev: Post | null;
};

export default function NextAndPrevPost({ next, prev }: Props) {
  return (
    <section className="flex flex-row justify-between items-center w-full h-24">
      <PrevPost prev={prev} />
      <NextPost next={next} />
    </section>
  );
}
