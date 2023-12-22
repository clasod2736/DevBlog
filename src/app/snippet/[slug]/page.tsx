import React from 'react';
import SnippetRenderer from '@/components/Snippet/SnippetRenderer';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostData } from '@/service/posts';

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
async function postData() {
  const data = await getPostData();
  console.log(data);
}
postData();
// export async function generateMetadata({
//   params: { slug },
// }: Props) {
//   const postData = await getPostData()
//   const matchedPostData = () => postData.filter((post) => post.title === slug)

//   return {
//     title: matchedPostData.title,
//     description: matchedPostData.description,
//   };
// }

export default async function page({ params: { slug } }: Props) {
  const posts = allPosts;
  const decodedSlug = decodeURIComponent(slug);

  const compiledPosts = posts.map((post, idx) => (
    <SnippetRenderer key={idx} {...post} />
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
