import React from 'react';
import PostRenderer from '@/components/Post/PostRenderer';
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
    <section className="h-auto w-full max-w-full mt-8 prose prose-stone prose-lg dark:prose-dark animate-fadeIn scroll-smooth">
      {filteredPosts.length > 0
        ? filteredPosts.map((post) => post)
        : notFound()}
    </section>
  );
}
