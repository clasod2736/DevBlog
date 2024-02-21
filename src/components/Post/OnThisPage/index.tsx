import React from 'react';
import CopyLink from './CopyLink';
import BacktoTop from './BacktoTop';

type Headings = {
  level: string;
  text: string;
  slug: string;
};

type Props = {
  headings: Headings[];
};

export default function OnThisPage(props: Props) {
  const headings = props.headings;

  const handleHeadings = () => {
    return headings.map((heading) => {
      return (
        <li key={heading.slug} className=" list-none my-4 hover:text-zinc-800">
          <a
            className="no-underline font-normal dark:hover:text-zinc-400 hover:text-zinc-500 data-[level=two]:ml-2 data-[level=three]:ml-4 hover:underline hover:decoration-zinc-400 underline-offset-2"
            data-level={heading.level}
            href={`#${heading.slug}`}
          >
            {heading.text}
          </a>
        </li>
      );
    });
  };

  return (
    <section className="md:sticky top-40 mt-24 min-w-[240px] h-1/6 font-light">
      <p className="text-lg my-4 text-zinc-500 dark:text-zinc-400">
        On This Page
      </p>
      <div className="text-sm border-b-[1px] border-b-zinc-500">
        {handleHeadings()}
      </div>
      <div className="flex flex-col items-end mt-5 text-sm gap-2">
        <CopyLink />
        <BacktoTop />
      </div>
    </section>
  );
}
