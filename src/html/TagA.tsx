import React from 'react';

type Props = {
  str: string;
  link: string;
};

export default function TagA({ str, link }: Props) {
  return (
    <a href={link} style={{ color: 'darkgoldenrod' }}>
      {`"${str}"`}
    </a>
  );
}
