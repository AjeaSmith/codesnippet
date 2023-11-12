'use client';
import { Folder } from '@/app/lib/definitions';
import { FolderIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import DeleteFolderModal from './DeleteFolderModal';

const Folder = ({ folder }: { folder: Folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Link
      key={folder.id}
      href={`/dashboard/folder/${folder.id}`}
      className={clsx(
        'flex h-[48px] px-[2rem] grow items-center gap-2 text-sm font-medium hover:bg-[#131415] md:flex-none md:justify-start mb-2',
        {
          'bg-[#fe6c0b]': pathname === `/dashboard/folder/${folder.id}`,
          'hover:bg-[#fe6c0b]': pathname === `/dashboard/folder/${folder.id}`,
        }
      )}
    >
      <div className="flex">
        <div className="flex items-center">
          <FolderIcon
            className={clsx('w-6 mr-2', {
              'text-[#F4FAFF]': pathname === `/dashboard/folder/${folder.id}`,
              'text-[#FE6C0B]': pathname !== `/dashboard/folder/${folder.id}`,
            })}
          />
          <p className="block">{folder.name}</p>
        </div>
        <div className="flex absolute right-[20px]">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#b91c1c"
                d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
              />
            </svg>
          </button>
          {isOpen && (
            <DeleteFolderModal folder={folder} setIsOpen={setIsOpen} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default Folder;
