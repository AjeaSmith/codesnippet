'use client';
import { createFolder } from '@/lib/folders/actions';
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
    <button onClick={handleSubmit}>
      <Image src="/plus.png" alt="plus" width={24} height={24} />
      <span>New Folder</span>
    </button>
  );
};

export default AddFolderButton;
