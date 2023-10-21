import { getFolders } from '@/utils/folders/actions';
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
    <nav className={`max-h-[490px] overflow-y-auto`}>
      <h5 className="opacity-[0.5] mb-[30px] mx-[35px]">Folders</h5>

      <ul className="overflow-y-scroll scroll-smooth p-0 list-none">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.id} />
        ))}
      </ul>
    </nav>
  );
};

export default FolderList;
