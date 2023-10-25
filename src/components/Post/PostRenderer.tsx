import React from 'react';
import Link from 'next/link';
import { type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function PostRenderer(post: Post) {
  const MdxContent = useMDXComponent(post.body.code);

  return (
    <article>
      <MdxContent />
    </article>
  );
}
