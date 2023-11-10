import { fetchFolders } from '@/app/lib/actions';
import Folder from './Folder';

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
