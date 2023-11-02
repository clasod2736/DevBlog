import React from 'react';
import About from '../components/Home/Hero';
import FeaturedPosts from '../components/Home/FeaturedPosts/FeaturedPosts';
import { getAllPosts } from '@/service/posts';

export default async function Home() {
  const articles = await getAllPosts();

  console.log(articles);
  return (
    <section className="h-full w-full flex flex-col justify-start">
      <About />
      <FeaturedPosts />
    </section>
  );
}
