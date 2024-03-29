import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'Code Snippet - All your code snippets in one place!',
  description: 'All your code snippets in one place!',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Toaster position="top-center" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
