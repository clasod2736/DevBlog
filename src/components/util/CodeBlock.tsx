// 'use client';
// import React, { useEffect, useRef } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { CodeProps } from './MarkdownViewer';

// export function CodeBlock({ language, code }: CodeProps) {
//   const codeRef = useRef(null);

//   useEffect(() => {
//     if (codeRef.current) {
//       codeRef.current.style.backgroundColor = 'lightgray';
//     }
//   }, []);

//   return (
//     <SyntaxHighlighter
//       style={tomorrow}
//       language={language}
//       PreTag="div"
//       ref={codeRef}
//     >
//       {code}
//     </SyntaxHighlighter>
//   );
// }
