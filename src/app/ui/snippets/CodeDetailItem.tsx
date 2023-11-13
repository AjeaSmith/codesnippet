import { fetchSnippetById } from '@/app/lib/actions';
import {
  ClipboardDocumentCheckIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { headers } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CodeView from './CodeView';
import FavoriteSnippet from './FavoriteSnippet';

const CodeDetailItem = async ({ id }: { id: string }) => {
  const snippet = await fetchSnippetById(id);
  const heads = headers();
  const pathname = heads.get('next-url');

  if (!snippet) {
    notFound();
  }

  return (
    <section className="px-8 grid auto-rows-max gap-4">
      <div className="flex justify-between">
        <span className="flex items-center">
          <ClipboardDocumentCheckIcon className="w-6 cursor-pointer mr-[15px] text-[#FE6C0B]" />
          <h2 className="text-xl">{snippet?.title}</h2>
        </span>
        <span className="flex items-center">
          <FavoriteSnippet isFavorite={snippet.isFavorite} id={snippet.id} />

          <Link href={`/${pathname}/edit`}>
            <PencilSquareIcon className="w-6 mx-2 text-[#FE6C0B] cursor-pointer" />
          </Link>
          <TrashIcon className="w-6 text-red-500 cursor-pointer" />
        </span>
      </div>
      <CodeView language={snippet?.language} codeString={snippet?.code} />
    </section>
  );
};

export default CodeDetailItem;
