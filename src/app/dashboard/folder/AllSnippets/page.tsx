import { fetchSnippets } from '@/app/lib/actions';
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
  const codeSnippets = await fetchSnippets();
  const query = searchParams?.query || '';

  return (
    <div>
      hi
      <Search />
      <Suspense fallback={<SnippetListSkeleton />}>
        <AllSnippetsList query={query} snippets={codeSnippets} />
      </Suspense>
    </div>
  );
};

export default AllSnippetsPage;
