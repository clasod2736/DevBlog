import React from 'react';
import About from '../components/Hero';
import FTPosts from '../components/FeaturedPosts/FTPosts';

export default function Home() {
  return (
    <section className="h-full flex flex-col justify-start">
      <About />
      <FTPosts />
    </section>
  );
}
