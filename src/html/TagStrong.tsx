import React, { Children } from 'react';

export default function S({ str }: { str: String }) {
  return (
    <b
      style={{
        backgroundColor: 'lightgray',
        color: 'black',
        padding: '0.3rem',
        borderRadius: '5px',
        marginInline: '0.1rem',
        fontFamily: 'monospace',
        fontWeight: 'normal',
        fontSize: '1rem',
      }}
    >
      {str}
    </b>
  );
}
