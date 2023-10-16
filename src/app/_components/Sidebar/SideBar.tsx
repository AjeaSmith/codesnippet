import Image from 'next/image';
import AddFolderButton from '../AddFolderButton';
import FolderList from '../FolderList';
import styles from './SideBar.module.css';

export default async function SideBarMenu() {
  return (
    <aside className={styles.aside}>
      {/* USER */}
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

      {/* FOLDERS */}
      <section className={styles.folder_list}>
        <h5>Folders</h5>
        <FolderList />
      </section>

      {/* ADD FOLDER */}
      <section className={styles.new_folder_btn}>
        <AddFolderButton />
      </section>
    </aside>
  );
}
