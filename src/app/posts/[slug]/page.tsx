import React from 'react';
import PostRenderer from '@/components/util/PostRenderer';
import { getPostData, getPostTitles } from '@/service/posts';
import { allPosts } from 'contentlayer/generated';

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  const posts = allPosts;

  // console.log(posts);

  const generatedPosts = posts.map((post, idx) => (
    <PostRenderer key={idx} {...post} />
  ));

  return <article className="h-auto mt-8">{generatedPosts[1]}</article>;
}

export async function generateStaticParams() {
  const postTitle = await getPostTitles();

  return postTitle.map((post) => ({
    slug: post,
  }));
}
