import React, { useState, useEffect } from 'react';
import { RxCopy } from 'react-icons/rx';
import { copyURL } from '@/util/copyCurrentLink';

export default function CopyLink() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => {};
  }, [isCopied]);

  return (
    <button
      onClick={async () => {
        await copyURL();
        setIsCopied(true);
      }}
      className="inline-flex items-center hover:text-zinc-500"
    >
      <RxCopy className={`text-lg mr-1 ${isCopied ? 'hidden' : 'flex'}`} />
      {isCopied ? 'Copied!' : 'Copy this Link'}
    </button>
  );
}
