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
  const SignIn = pathname === '/sign-in';
  const SignUp = pathname === '/sign-up'



  return (
      <div >
        {children}
        {!HomePage && !SignIn && !SignUp && <NavBar />}
      </div>
  );
}
