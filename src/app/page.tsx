import styles from '@/app/page.module.css';
import SideBarMenu from '@/app/components/Sidebar/SideBar';
import { inter400 } from './fonts/fonts';

export default async function Layout({ children }: any) {
  return (
    <main className={`${styles.page_wrapper} ${inter400.className}`}>
      {/* Sidebar */}
      <SideBarMenu />

      {/* Content */}
      <section className="w-3/4 p-4">{children}</section>
    </main>
  );
}

// create types for props when passed down
