import React from 'react';
import About from '../components/Hero';
import FTPosts from '../components/FeaturedPosts/FeaturedPosts';

export default function Home() {
  return (
    <section className="h-full w-full flex flex-col justify-start">
      <About />
      <FTPosts />
    </section>
  );
}
