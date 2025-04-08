'use client';
import { usePathname } from 'next/navigation';
import NavBar from './nav-bar';
import { ReactNode } from 'react';

interface Layout {
  children: ReactNode;
}

export default function HomePageLayout({ children }: Layout) {
  const pathname = usePathname();
  const HomePage = pathname === "/";

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div >
        {children}
        {!HomePage && <NavBar />}
      </div>
    </main>
  );
}
