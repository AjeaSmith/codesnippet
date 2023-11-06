'use client';
import { createFolder } from '@/app/lib/actions';
import styles from '@/app/page.module.css';
import Image from 'next/image';

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
        <Image src="/plus.png" alt="plus" width={24} height={24} />
        <span className="text-[#f4faff] ml-[5px]">New Folder</span>
      </button>
    </section>
  );
};

export default AddFolderButton;
