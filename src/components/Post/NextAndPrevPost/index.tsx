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
    <section className="md:flex md:flex-row xs:flex-col justify-between items-center w-full">
      <PrevPost prev={prev} />
      <NextPost next={next} />
    </section>
  );
}
