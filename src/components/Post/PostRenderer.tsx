import React from 'react';
import NextAndPrevPost from './NextAndPrevPost';
import { allPosts, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { getIndexOfPost } from '@/util/getIndexOfPost';

export default function PostRenderer(post: Post) {
  const MdxContent = useMDXComponent(post.body.code);

  const index = getIndexOfPost({ posts: allPosts, post: post });

  return (
    <article className="w-full">
      <section className="max-w-3xl">
        <MdxContent />
      </section>
      <NextAndPrevPost next={index.next} prev={index.prev} />
    </article>
  );
}
