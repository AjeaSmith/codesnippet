import { fetchCodeSnippetById } from '@/app/lib/actions';
import Search from '@/app/ui/search/Search';
import { SnippetListSkeleton } from '@/app/ui/skeletons';
import CodeDetailItem from '@/app/ui/snippets/CodeDetailItem';
import { Suspense } from 'react';

const CodePage = async ({ params }: { params: { id: string } }) => {
  const snippet = await fetchCodeSnippetById(params.id);
  // show not found if code snippet cant be found
  return (
    <>
      <Search />
      <Suspense fallback={<SnippetListSkeleton />}>
        <CodeDetailItem snippet={snippet} />
      </Suspense>
    </>
  );
};

export default CodePage;
