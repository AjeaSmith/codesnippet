import Search from '@/app/ui/search/Search';
import { SnippetListSkeleton } from '@/app/ui/skeletons';
import AllSnippetsList from '@/app/ui/snippets/AllSnippetsList';
import { Suspense } from 'react';

const AllSnippetsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || '';

  return (
    <div>
      <Search />
      <Suspense fallback={<SnippetListSkeleton />}>
        <AllSnippetsList query={query} />
      </Suspense>
    </div>
  );
};

export default AllSnippetsPage;
