import type { Metadata } from 'next';
import { ReactElement, ReactNode } from 'react';
import styles from '@/app/page.module.css';
import { inter400 } from './_fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Code Snippet',
  description: 'All your code snippets in one place!',
};

export default function RootLayout({
  children,
  sidebar,
}: {
  children: ReactElement;
  sidebar: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${styles.page_wrapper} ${inter400.className}`}>
          {sidebar}

          <main>
            <section>{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
