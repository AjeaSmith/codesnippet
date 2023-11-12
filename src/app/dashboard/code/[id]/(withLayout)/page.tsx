import Search from '@/app/ui/search/Search';
import { CodeDetailItemSkeleton } from '@/app/ui/skeletons';
import CodeDetailItem from '@/app/ui/snippets/CodeDetailItem';
import { Suspense } from 'react';

const CodePage = async ({ params }: { params: { id: string } }) => {
  // show not found if code snippet cant be found
  return (
    <>
      <Search />
      <Suspense fallback={<CodeDetailItemSkeleton />}>
        <CodeDetailItem id={params.id} />
      </Suspense>
    </>
  );
};

export default CodePage;
