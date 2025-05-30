'use client';

import { ReactNode } from 'react';
import Sidebar from '../Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-50">
      <Sidebar />
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
