'use client';
import { createFolder } from '@/app/lib/actions';
import styles from '@/app/page.module.css';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const AddFolderButton = () => {
  async function handleSubmit() {
    let folderName: string | null = prompt('Please enter folder name:');

    if (folderName !== null) {
      await createFolder(folderName);
    }
    return;
  }

  return (
    <section
      className={`${styles.btn_container} w-full bottom-0 absolute border-t-1 border-t-black`}
    >
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center cursor-pointer h-[80px] border-none w-full p-4"
      >
        <PlusCircleIcon className="w-6 h-6 text-[#FE6C0B]" />
        <span className="text-[#f4faff] ml-[5px]">New Folder</span>
      </button>
    </section>
  );
};

export default AddFolderButton;
