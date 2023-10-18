import React from 'react';
import Link from 'next/link';
import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FTPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="flex flex-col justify-between h-auto mt-6 font-bold py-4">
      <header className="text-4xl h-16">Featured Posts</header>
      <section className="flex flex-row justify-between items-center h-full">
        <PostsGrid posts={posts} />
      </section>
      <Link href={'/post'} className="flex flex-col justify-center h-14">
        <p className="text-lg font-normal tracking-wide cursor-pointer text-slate-400 hover:text-slate-600 transition-all">
          Read all posts →
        </p>
      </Link>
    </section>
  );
}
