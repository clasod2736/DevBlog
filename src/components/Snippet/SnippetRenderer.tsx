'use client';

import React from 'react';
import { allPosts, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { getIndexOfPost } from '@/util/getIndexOfPost';
import OnThisPage from '../Post/OnThisPage';

export default function PostRenderer(post: Post) {
  const MdxContent = useMDXComponent(post.body.code);

  const index = getIndexOfPost({ posts: allPosts, post: post });

  return (
    <article className="w-auto">
      <section className="flex xs:flex-col lg:flex-row-reverse justify-start">
        <div className="lg:flex lg:flex-row xs:hidden lg:w-1/2 min-w-32 pl-12 transition-all">
          <OnThisPage headings={post.headings} />
        </div>
        <div className="flex flex-col md:max-w-3xl xs:max-w-4xl">
          <MdxContent />
        </div>
      </section>
    </article>
  );
}
