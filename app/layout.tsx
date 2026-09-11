import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harsh Kumar — Full Stack Developer',
  description: 'Full Stack Developer specializing in C#, .NET, React, Python and Azure.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}