import { getFolders } from '@/utils/folders/actions';
import Folder from '../components/Folder';
import styles from './page.module.css';

async function getData() {
  try {
    const folders = await getFolders();
    return folders;
  } catch (error) {
    throw error;
  }
}
const FolderList = async () => {
  const folders = await getData();

  return (
    <nav className={styles.folder_list}>
      <h5>Folders</h5>

      <ul>
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.id} />
        ))}
      </ul>
    </nav>
  );
};

export default FolderList;
