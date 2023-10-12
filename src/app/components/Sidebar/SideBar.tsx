import { getFolders } from '@/app/lib/folders/actions';
import Image from 'next/image';
import Link from 'next/link';
import AddFolderButton from '../AddFolderButton';
import styles from './SideBar.module.css';

export default async function SideBarMenu() {
  const folders = await getFolders();
  return (
    <aside className={styles.aside}>
      {/* USER */}
      <section className={styles.user_section}>
        <Image
          src="/user.png"
          width={100}
          height={100}
          alt="Picture of author"
        />
        <h3>John Doe</h3>
      </section>

      {/* FOLDERS */}
      <section className={styles.folder_list}>
        <h5>Folders</h5>
        <ul>
          {folders.map((folder) => {
            return (
              <Link href={`/folder/${folder.name}`} key={folder.id}>
                <div>
                  <Image
                    src={`/${folder.icon}.png`}
                    width={24}
                    height={24}
                    alt={folder.icon}
                  />
                  <li>{folder.name}</li>
                </div>
              </Link>
            );
          })}
        </ul>
      </section>

      {/* CTA New Folder */}
      <section className={styles.new_folder_btn}>
        {/* POP up modal */}
        <AddFolderButton />
      </section>
    </aside>
  );
}
