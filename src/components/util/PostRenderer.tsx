'use client';

import React from 'react';
import { format, parseISO } from 'date-fns';
import { type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function PostRenderer(post: Post) {
  const MdxContent = useMDXComponent(post.body.code);
  // console.log(post.body.code);

  return (
    // <div className="mb-8 prose dark:prose-dark">
    //   <h2 className="mb-1 text-xl">
    //     <Link
    //       href={post.url}
    //       className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
    //     >
    //       {post.title}
    //     </Link>
    //   </h2>
    //   <time dateTime={post.date} className="mb-2 block">
    //     {format(parseISO(post.date), 'LLLL d, yyyy')}
    //   </time>
    //   <div
    //     className="[&>*]:mb-3 [&>*:last-child]:mb-0"
    //     dangerouslySetInnerHTML={{ __html: post.body.code }}
    //   />
    // </div>
    <div className="prose prose-lg dark:prose-dark animate-fadeIn">
      <MdxContent></MdxContent>
    </div>
  );
}
