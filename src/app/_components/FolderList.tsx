import { getFolders } from '../../../utils/folders/actions';
import Folder from './Folder';

const FolderList = async () => {
  const folders = await getFolders();

  return (
    <ul>
      {folders.map((folder) => {
        return <Folder folder={folder} key={folder.id} />;
      })}
    </ul>
  );
};

export default FolderList;

// '#FE6C0B
