import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { inter400 } from './_fonts/fonts';
import AddFolderButton from './components/AddFolderButton';
import FolderList from './components/FolderList';

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.page_wrapper} ${inter400.className}`}>
      <aside className={styles.aside}>
        <section className={styles.user_section}>
          <Image
            priority
            src="/user.png"
            width={100}
            height={100}
            alt="Picture of author"
          />
          <h3>John Doe</h3>
        </section>
        <Link href="/create">Create page</Link>

        {/* FOLDERS */}
        <FolderList />

        <section className={styles.new_folder_btn}>
          <AddFolderButton />
        </section>
      </aside>
      <main>{children}</main>
    </div>
  );
}

// create types for props when passed down
