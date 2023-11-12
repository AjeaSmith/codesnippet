import { fetchFolders } from '@/app/lib/actions';
import FolderItem from './FolderItem';

const FolderList = async () => {
  const folders = await fetchFolders();

  return (
    <>
      {folders.map((folder) => (
        <FolderItem folder={folder} key={folder.id} />
      ))}
    </>
  );
};

export default FolderList;
