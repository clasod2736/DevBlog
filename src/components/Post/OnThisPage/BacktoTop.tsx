'use client';

import React from 'react';
import { PiArrowULeftUpBold } from 'react-icons/pi';

export default function BacktoTop() {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={MoveToTop}
      className="inline-flex gap-1  hover:text-zinc-500"
    >
      <PiArrowULeftUpBold size={18} />
      Back to Top
    </button>
  );
}
