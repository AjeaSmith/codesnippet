import Image from 'next/image';
import AddFolderButton from './AddFolderButton';
import FolderList from './FolderList';
import styles from './page.module.css';

export default function SideBarMenu() {
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
      <nav className={styles.folder_list}>
        <h5>Folders</h5>

        <FolderList />
      </nav>

      {/* ADD FOLDER */}
      <section className={styles.new_folder_btn}>
        <AddFolderButton />
      </section>
    </aside>
  );
}
