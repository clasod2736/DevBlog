'use client';

import React, { useEffect, useState } from 'react';
import NextAndPrevPost from './NextAndPrevPost';
import { type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { getIndexOfPost } from '@/util/getIndexOfPost';
import { getAllPosts } from '@/service/posts';
import OnThisPage from './OnThisPage';
import PostFooter from './PostFooter';

import styles from '../../styles/PostRenderer.module.css';

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
        <div className={`md:max-w-[864px] xs:max-w-4xl ${styles.mdxContainer}`}>
          <MdxContent />
        </div>
      </section>
      <PostFooter
        title={post.title}
        description={post.description}
        date={post.date}
      />
      <NextAndPrevPost next={index.next} prev={index.prev} />
    </article>
  );
}
