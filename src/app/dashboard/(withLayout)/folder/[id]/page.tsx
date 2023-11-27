import { fetchSnippetsByFolder } from '@/app/lib/actions';
import Search from '@/app/ui/search/Search';
import { SnippetListSkeleton } from '@/app/ui/skeletons';
import FolderSnippetsList from '@/app/ui/snippets/FolderSnippetsList';
import NoSnippetsView from '@/app/ui/snippets/NoSnippetsView';
import { Suspense } from 'react';

const FolderPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const snippets = await fetchSnippetsByFolder(params.id);

  if (!snippets.length) {
    return <NoSnippetsView />;
  }

  return (
    <>
      <Search />
      <Suspense fallback={<SnippetListSkeleton />}>
        <FolderSnippetsList data={snippets} query={query} />
      </Suspense>
    </>
  );
};

export default FolderPage;
