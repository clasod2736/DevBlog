import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Links() {
  return (
    <>
      <a href="mailto:clasod2736@gmail.com">
        <MdEmail className="cursor-pointer hover:scale-110 transition-all" />
      </a>
      <a href="https://github.com/clasod2736">
        <FaGithub className="cursor-pointer hover:scale-110 transition-all" />
      </a>
      <a href="https://www.linkedin.com/in/joon-park-772a8820b">
        <FaLinkedin className="cursor-pointer hover:scale-110 transition-all" />
      </a>
    </>
  );
}
