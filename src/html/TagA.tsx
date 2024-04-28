import React from 'react';

type Props = {
  str: string;
  link: string;
};

export default function TagA({ str, link }: Props) {
  return (
    <a
      href={link}
      style={{
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
        fontSize: '1.2rem',
        marginInline: '0.5rem',
        fontWeight: '500',
        textDecoration: 'none',
        borderBottom: '2px solid goldenrod',
        transition: '0.1s',
        color: 'lightgray',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'dimgrey';
      }}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'lightgray')}
    >
      {`⚭ ${str}`}
    </a>
  );
}
