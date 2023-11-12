'use client';
import { CodeSnippet } from '@/app/lib/definitions';
import {
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CodeView from './CodeView';

const CodeDetailItem = ({ snippet }: { snippet: CodeSnippet | null }) => {
  const pathname = usePathname();
  return (
    <section className="px-8 grid auto-rows-max gap-4">
      <div className="flex justify-between">
        <p className="flex items-center">
          <ClipboardDocumentCheckIcon className="w-6 cursor-pointer mr-[15px] text-[#FE6C0B]" />
          <h2 className="text-xl">{snippet?.title}</h2>
        </p>
        <span className="flex items-center">
          <Link href={`${pathname}/edit`}>
            <PencilSquareIcon className="w-6 text-[#FE6C0B] cursor-pointer" />
          </Link>
          <TrashIcon className="w-6 ml-2 text-red-500 cursor-pointer" />
        </span>
      </div>
      <CodeView language={snippet?.language} codeString={snippet?.code} />
    </section>
  );
};

export default CodeDetailItem;
