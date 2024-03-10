'use client';

import React, { useEffect, useState } from 'react';
import NextAndPrevPost from './NextAndPrevPost';
import { type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { getIndexOfPost } from '@/util/getIndexOfPost';
import { getAllPosts } from '@/service/posts';
import OnThisPage from './OnThisPage';

export default function PostRenderer(post: Post) {
  const [selectedPosts, setSelectedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      setSelectedPosts(posts);
    };
    fetchPosts();
  }, []);

  const MdxContent = useMDXComponent(post.body.code);

  const index = getIndexOfPost({ posts: selectedPosts, post: post });

  return (
    <article className="w-full">
      <section className="flex xs:flex-col lg:flex-row-reverse justify-start w-full">
        <div className="lg:flex lg:flex-row xs:hidden lg:w-1/2 min-w-32 pl-12 transition-all">
          <OnThisPage headings={post.headings} />
        </div>
        <div className="flex flex-col md:max-w-4xl xs:max-w-4xl">
          <MdxContent />
        </div>
      </section>
      <div>
        <NextAndPrevPost next={index.next} prev={index.prev} />
      </div>
    </article>
  );
}
