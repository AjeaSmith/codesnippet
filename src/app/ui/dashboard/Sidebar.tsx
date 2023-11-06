import { UserButton } from '@clerk/nextjs';
import AddFolderButton from './AddFolderButton';
import FolderList from './FolderList';
import NavLinks from './NavLinks';
import UserProfile from './User';

const Sidebar = () => {
  return (
    <aside className="h-screen bg-[#1e1f21] relative">
      <UserProfile>
        <UserButton />
      </UserProfile>

      <nav className={`max-h-[490px] overflow-y-auto`}>
        <h5 className="opacity-[0.5] mb-[20px] mx-[35px]">Folders</h5>

        <ul className="overflow-y-scroll scroll-smooth p-0 list-none">
          <NavLinks />
          <FolderList />
        </ul>
      </nav>

      <AddFolderButton />
    </aside>
  );
};

export default Sidebar;
