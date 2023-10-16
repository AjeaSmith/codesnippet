import styles from '@/app/page.module.css';
import SideBarMenu from '@/app/_components/Sidebar/SideBar';
import { inter400 } from './_fonts/fonts';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.page_wrapper} ${inter400.className}`}>
      {/* Sidebar */}
      <SideBarMenu />

      {/* Content */}
      <main>
        <section>{children}</section>
      </main>
    </div>
  );
}

// create types for props when passed down
