'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Darkmode() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setDarkMode(!darkMode);
      }}
      className="flex justify-center items-center transition ease-in-out hover:bg-gray-500 rounded-md w-10 h-10 p-1"
    >
      <Image
        src={darkMode ? '/svg/light.svg' : '/svg/dark.svg'}
        alt="darkToggle"
        width={30}
        height={30}
        className="text-slate-100 drop-shadow-base min-w-fit"
      />
    </button>
  );
}
