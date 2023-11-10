import Search from '@/app/ui/search/Search';
import { SnippetListSkeleton } from '@/app/ui/skeletons';
import SnippetList from '@/app/ui/snippets/SnippetList';
import { Suspense } from 'react';

const AllSnippets = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  // const heads = headers();
  // const pathname = heads.get('next-url');
  const query = searchParams?.query || '';

  return (
    <div>
      <Search />
      <Suspense fallback={<SnippetListSkeleton />}>
        <SnippetList query={query} />
      </Suspense>
    </div>
  );
};

export default AllSnippets;
