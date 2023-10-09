import SideBarMenu from '@/components/Sidebar/SideBar';
import styles from '@/app/page.module.css'
import { inter400 } from './fonts/fonts';

export default function Home() {
  return (
    <main className={`${styles.page_wrapper} ${inter400.className}`}>
      <SideBarMenu />
      hello world
    </main>
  );
}
