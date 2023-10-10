import styles from '@/app/page.module.css';
import SideBarMenu from '@/components/Sidebar/SideBar';
import { inter400 } from './fonts/fonts';
const folders = [
  {
    id: 1,
    name: 'Favorites',
    snippets: [
      { id: 101, name: 'Snippet 1' },
      { id: 102, name: 'Snippet 2' },
    ],
  },
  {
    id: 2,
    name: 'All Snippets',
    snippets: [{ id: 201, name: 'Snippet 3' }],
  },
  {
    id: 3,
    name: 'Recommended',
    snippets: [{ id: 202, name: 'Snippet 4' }],
  },
  // Add more folders and snippets as needed
];

export default async function Layout({ children }: any) {
  return (
    <main className={`${styles.page_wrapper} ${inter400.className}`}>
      {/* Sidebar */}
      <SideBarMenu folders={folders} />

      {/* Content */}
      <section className="w-3/4 p-4">{children}</section>
    </main>

  );
}

// create types for props when passed down
