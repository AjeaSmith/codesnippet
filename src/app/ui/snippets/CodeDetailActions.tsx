'use client';

import { CodeSnippet } from '@/app/lib/definitions';
import {
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import DeleteSnippetModal from './DeleteSnippetModal';
import FavoriteSnippet from './FavoriteSnippet';

const CodeDetailActions = ({ snippet }: { snippet: CodeSnippet }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <span className="flex items-center">
        <ClipboardDocumentCheckIcon className="w-6 cursor-pointer mr-[15px] text-[#FE6C0B]" />
        <h2 className="text-xl">{snippet?.title}</h2>
      </span>
      <span className="flex items-center">
        <FavoriteSnippet isFavorite={snippet.isFavorite} id={snippet.id} />

        <Link href={`${pathname}/edit`}>
          <PencilSquareIcon className="w-6 mx-2 text-[#FE6C0B] cursor-pointer" />
        </Link>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <TrashIcon className="w-6 text-red-500 cursor-pointer" />
        </button>
      </span>
      {isOpen && <DeleteSnippetModal snippet={snippet} setIsOpen={setIsOpen} />}
    </>
  );
};

export default CodeDetailActions;
