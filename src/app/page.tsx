import styles from '@/app/page.module.css';
import SideBarMenu from '@/components/Sidebar/SideBar';
import { inter400 } from './fonts/fonts';

export default async function Layout({ children }: any) {
  return (
    <main className={`${styles.page_wrapper} ${inter400.className}`}>
      {/* Sidebar */}
      <SideBarMenu />

      {/* Content */}
      <section>{children}</section>
    </main>
  );
}

// create types for props when passed down
