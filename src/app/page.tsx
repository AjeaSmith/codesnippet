import SideBarMenu from '@/components/Sidebar/SideBar';
import { inter400 } from './fonts/fonts';

export default function Home() {
  return (
    <main className={inter400.className}>
      <SideBarMenu />
      hello world
    </main>
  );
}
