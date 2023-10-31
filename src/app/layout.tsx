import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import './globals.css';
import Sidebar from './ui/dashboard/Sidebar';

export const metadata: Metadata = {
  title: 'Code Snippet',
  description: 'All your code snippets in one place!',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
