import styles from '@/app/page.module.css';
import Image from 'next/image';
import { ReactNode } from 'react';
import AddFolderButton from './_components/AddFolderButton';
import FolderList from './_components/FolderList';
import { inter400 } from './_fonts/fonts';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`flex ${inter400.className}`}>
      <aside className="w-[357px] h-screen bg-[#1e1f21] relative">
        <section
          className={`${styles.user} flex flex-col justify-center items-center p-4 border-b-2 border-[#1b1b1b] mb-4`}
        >
          <Image
            priority
            src="/user.png"
            width={100}
            height={100}
            alt="Picture of author"
          />
          <h3>John Doe</h3>
        </section>

        {/* FOLDERS */}
        <FolderList />
        <section className={`${styles.btn_container} w-full bottom-0 absolute border-t-1 border-t-black`}>
          <AddFolderButton />
        </section>
      </aside>
      <main>{children}</main>
    </div>
  );
}

// create types for props when passed down
