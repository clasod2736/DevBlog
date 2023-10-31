import React from 'react';
import Header from '@/components/About/Header';
import Skills from '@/components/About/Skills';
import Side from '@/components/About/Side';
import Projects from '@/components/About/Projects';

export default function page() {
  return (
    <>
      <section className="flex flex-row">
        <Side />
        <div className="flex flex-col justify-start mt-10 gap-4 ml-8">
          <Header />
          <Skills />
          <Projects />
        </div>
      </section>
    </>
  );
}
