import React from 'react';
import MarkdownViewer from '@/components/util/MarkdownViewer';
import { getPostData, getPostTitles } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <article className="h-auto mt-8">
      <MarkdownViewer content={post.content} />
    </article>
  );
}

export async function generateStaticParams() {
  const postTitle = await getPostTitles();

  return postTitle.map((post) => ({
    slug: post,
  }));
}
