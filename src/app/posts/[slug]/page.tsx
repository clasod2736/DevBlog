import React from 'react';
import PostRenderer from '@/components/Post/PostRenderer';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.title,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const postData = await getPostData(decodeURIComponent(slug));
  // console.log(postData);
  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: `${postData.title}`,
      description: `${postData.description}`,
      images: '/images/favicon.ico',
    },
  };
}

export default async function page({ params: { slug } }: Props) {
  const posts = allPosts;
  const decodedSlug = decodeURIComponent(slug);

  const compiledPosts = posts.map((post) => (
    <PostRenderer key={post._id} {...post} />
  ));
  const filteredPosts = compiledPosts.filter((post) => {
    return post.props.title === decodedSlug;
  });

  return (
    <section className="h-auto w-full max-w-full mt-8 prose prose-stone prose-base prose-p:my-4 prose-blockquote:my-4 prose-blockquote:text-xl prose-h1:text-6xl prose-h2:text-5xl prose-li:text-xl prose-li:font-bold prose-li:my-2 prose-ul:my-2 prose-h3:text-4xl prose-h4:text-3xl prose-h5:text-2xl dark:prose-dark animate-fadeIn scroll-smooth">
      {filteredPosts.length > 0
        ? filteredPosts.map((post) => post)
        : notFound()}
    </section>
  );
}
