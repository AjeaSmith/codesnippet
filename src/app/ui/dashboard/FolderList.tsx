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


// Are you sure you want to delete this folder?

// All notes and any subfolders will be deleted.