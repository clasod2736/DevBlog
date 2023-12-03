import React from 'react';
import About from '../components/Home/Hero';
import FeaturedPosts from '../components/Home/FeaturedPosts/FeaturedPosts';

export default async function Home() {
  return (
    <section className="h-full w-full flex flex-col justify-start">
      <About />
      <FeaturedPosts />
    </section>
  );
}
