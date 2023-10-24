import React from 'react';
import PostRenderer from '@/components/util/PostRenderer';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function page({ params: { slug } }: Props) {
  const posts = allPosts;
  const decodedSlug = decodeURIComponent(slug);

  const compiledPosts = posts.map((post, idx) => (
    <PostRenderer key={idx} {...post} />
  ));
  const filteredPosts = compiledPosts.filter((post) => {
    return post.props._raw.flattenedPath === decodedSlug;
  });

  return (
    <article className="h-auto mt-8">
      {filteredPosts.length > 0
        ? filteredPosts.map((post, idx) => post)
        : notFound()}
    </article>
  );
}
