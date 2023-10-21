'use client';
import { ThemeProvider } from 'next-themes';

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
