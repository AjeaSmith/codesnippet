import { getFolders } from '@/app/lib/actions';
import Folder from './Folder';

async function fetchFolders() {
  try {
    const folders = await getFolders();
    return folders;
  } catch (error) {
    throw error;
  }
}

const FolderList = async () => {
  const folders = await fetchFolders();

  return (
    <>
      {folders.map((folder) => (
        <Folder folder={folder} key={folder.id} />
      ))}
    </>
  );
};

export default FolderList;
