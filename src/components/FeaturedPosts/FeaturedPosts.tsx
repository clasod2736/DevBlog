import React from 'react';
import Link from 'next/link';
import PostsGrid from './FeaturedPostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FTPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="flex flex-col justify-between h-auto mt-6 font-bold py-4">
      <header className="text-4xl h-16  animate-fadeIn">Featured Posts</header>
      <section className="flex flex-row justify-between items-center h-full animate-slideToUpSlow">
        <PostsGrid posts={posts} />
      </section>
      <Link href={'/posts'} className="flex flex-col justify-center h-14">
        <p className="text-xl font-normal tracking-wide cursor-pointer text-stone-500 hover:text-stone-700 transition-all animate-[fadeIn_0.8s_ease-in-out]">
          Read all posts →
        </p>
      </Link>
    </section>
  );
}
